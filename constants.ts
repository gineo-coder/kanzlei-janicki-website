import React from 'https://esm.sh/react@^19.1.1';
import type { Lawyer, NewsArticle } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Kanzlei', path: '/#kanzlei' },
  { name: 'Rechtsgebiete', path: '/rechtsgebiete' },
  { 
    name: 'Anwälte', 
    path: '/rechtsanwaelte',
    sublinks: [
      { name: 'Dr. Jörg Janicki', path: '/rechtsanwaelte/dr-joerg-janicki' },
      { name: 'Jonas Jung', path: '/rechtsanwaelte/jonas-jung' },
    ]
  },
  { name: 'Aktuelles', path: '/#aktuelles' },
];

export const SERVICES = [
  {
    slug: 'kuendigungsschutz',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" })),
    title: 'Kündigung & Kündigungsschutz',
    description: 'Wir prüfen die Rechtmäßigkeit Ihrer Kündigung und vertreten Sie im Kündigungsschutzprozess.',
    detailedDescription: 'Eine Kündigung des Arbeitsverhältnisses ist ein einschneidendes Ereignis. Wir beraten Sie umfassend über Ihre Rechte, prüfen die Wirksamkeit der Kündigung (ordentlich, außerordentlich, fristlos) und vertreten Sie im Kündigungsschutzprozess vor dem Arbeitsgericht. Unser Ziel ist der Erhalt Ihres Arbeitsplatzes oder die Aushandlung einer fairen Abfindung.'
  },
  {
    slug: 'aufhebungsvertrag',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" })),
    title: 'Aufhebungsvertrag & Abfindung',
    description: 'Wir verhandeln für Sie optimale Bedingungen bei der Beendigung Ihres Arbeitsverhältnisses.',
    detailedDescription: 'Ein Aufhebungsvertrag kann eine sinnvolle Alternative zur Kündigung sein, birgt aber auch Risiken (z.B. Sperrzeit beim Arbeitslosengeld). Wir prüfen den Ihnen vorgelegten Vertrag, beraten Sie zu den Konsequenzen und verhandeln für Sie eine angemessene Abfindung, ein faires Zeugnis und weitere wichtige Regelungen.'
  },
  {
    slug: 'arbeitsvertrag',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })),
    title: 'Arbeitsvertragsgestaltung',
    description: 'Wir gestalten und prüfen Arbeitsverträge, um rechtliche Fallstricke von vornherein zu vermeiden.',
    detailedDescription: 'Der Arbeitsvertrag ist die Grundlage jedes Arbeitsverhältnisses. Wir gestalten rechtssichere Arbeitsverträge für Arbeitgeber und prüfen Vertragsentwürfe für Arbeitnehmer und Führungskräfte. Dabei achten wir auf alle wichtigen Klauseln, von der Tätigkeitsbeschreibung über die Vergütung bis hin zu Befristungen, Wettbewerbsverboten und Regelungen zum Urlaubsanspruch.'
  },
  {
    slug: 'abmahnung',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" })),
    title: 'Abmahnung',
    description: 'Erhaltene Abmahnung? Wir prüfen die Vorwürfe und helfen Ihnen, richtig zu reagieren.',
    detailedDescription: 'Eine Abmahnung ist oft die Vorstufe zu einer verhaltensbedingten Kündigung. Es ist daher entscheidend, richtig darauf zu reagieren. Wir prüfen die formelle und inhaltliche Wirksamkeit der Abmahnung, beraten Sie zu den Handlungsoptionen (Gegendarstellung, Klage auf Entfernung aus der Personalakte) und entwickeln mit Ihnen die passende Strategie.'
  },
  {
    slug: 'zeugnis',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" })),
    title: 'Arbeitszeugnis',
    description: 'Wir analysieren Ihr Arbeitszeugnis auf versteckte Codes und setzen Ihre Ansprüche durch.',
    detailedDescription: 'Ein gutes Arbeitszeugnis ist für Ihr berufliches Fortkommen von entscheidender Bedeutung. Wir überprüfen Ihr Zeugnis auf Vollständigkeit, inhaltliche Richtigkeit und die Einhaltung der Grundsätze von Wahrheit und Wohlwollen. Bei Bedarf formulieren wir für Sie einen Korrekturvorschlag oder setzen Ihren Anspruch auf Zeugnisberichtigung gerichtlich durch.'
  },
  {
    slug: 'betriebsrat',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" })),
    title: 'Betriebsverfassungsrecht',
    description: 'Wir beraten Betriebsräte und Arbeitgeber in allen kollektivrechtlichen Fragestellungen.',
    detailedDescription: 'Das Betriebsverfassungsrecht regelt die Zusammenarbeit zwischen Arbeitgeber und Betriebsrat. Wir beraten und schulen Betriebsräte bei der Wahrnehmung ihrer Mitbestimmungsrechte und vertreten Arbeitgeber bei Verhandlungen über Betriebsvereinbarungen, im Einigungsstellenverfahren sowie bei allen sonstigen kollektivrechtlichen Auseinandersetzungen.'
  }
];


export const TEAM_MEMBERS: Lawyer[] = [
  {
    name: 'Dr. Jörg Janicki',
    title: 'Rechtsanwalt',
    imageUrl: 'https://www.janicki-arbeitsrecht.de/files/kanzlei/fachanwalt-dr-janicki.jpg',
    specialization: 'Fachanwalt für Arbeitsrecht',
    slug: 'dr-joerg-janicki',
    description: `Dr. Jörg Janicki, geboren 1968 in München, studierte nach dem Abitur und Grundwehrdienst Rechtswissenschaften an der Ludwig-Maximilians-Universität München. Im Anschluss an das erste juristische Staatsexamen absolvierte er das Referendariat im Oberlandesgerichtsbezirk München. Das zweite juristische Staatsexamen legte er 1996 ab. Herr Dr. Janicki ist seit 1997 als Rechtsanwalt zugelassen.
    <br/><br/>
    Seit Beginn seiner anwaltlichen Tätigkeit ist Herr Dr. Janicki ausschließlich auf dem Gebiet des Arbeitsrechts tätig. Aufgrund seiner nachgewiesenen besonderen theoretischen Kenntnisse und praktischen Erfahrungen wurde ihm von der Rechtsanwaltskammer München gestattet, die Bezeichnung „Fachanwalt für Arbeitsrecht“ zu führen.
    <br/><br/>
    Herr Dr. Janicki promovierte bei Prof. Dr. Volker Rieble, dem Direktor des Zentrums für Arbeitsbeziehungen und Arbeitsrecht (ZAAR) an der Ludwig-Maximilians-Universität München, zu einem betriebsverfassungsrechtlichen Thema. Er ist Mitglied der Arbeitsgemeinschaft Arbeitsrecht im Deutschen Anwaltverein sowie im Münchener Anwaltverein.
    <br/><br/>
    Herr Dr. Janicki vertritt und berät sowohl Arbeitgeber als auch Arbeitnehmer, was ihm einen besonderen Einblick in die jeweiligen Denk- und Herangehensweisen der Gegenseite verschafft und damit maßgeblich zur Entwicklung der optimalen Strategie für seinen Mandanten beiträgt.`
  },
  {
    name: 'Jonas Jung',
    title: 'Rechtsanwalt',
    imageUrl: 'https://www.janicki-arbeitsrecht.de/files/kanzlei/janicki-arbeitsrecht-4.jpg',
    specialization: 'Schwerpunkt Arbeitsrecht',
    slug: 'jonas-jung',
    description: 'Jonas Jung ist seit 2020 als Rechtsanwalt zugelassen und verstärkt seitdem das Team der Kanzlei. Sein Studium der Rechtswissenschaften absolvierte er an der Universität Augsburg mit einem klaren Fokus auf das Arbeitsrecht, welches er im Referendariat weiter vertiefte. Herr Jung berät mit großem Engagement und juristischer Präzision sowohl Arbeitnehmer als auch Arbeitgeber in allen individual- und kollektivrechtlichen Fragestellungen. Seine Mandanten schätzen seine Fähigkeit, komplexe Sachverhalte schnell zu erfassen und verständliche, praxisnahe Lösungen zu entwickeln. Er legt besonderen Wert auf eine transparente und vertrauensvolle Kommunikation, um gemeinsam mit seinen Mandanten die bestmöglichen Ergebnisse zu erzielen.'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: 'BAG-Urteil: Arbeitszeiterfassung ist Pflicht',
    excerpt: 'Das Bundesarbeitsgericht hat entschieden, dass Arbeitgeber gesetzlich zur systematischen Erfassung der Arbeitszeit verpflichtet sind. Was bedeutet das für Sie?',
    date: '15. OKTOBER 2023',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04421a2592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Neues zum Hinweisgeberschutzgesetz',
    excerpt: 'Das neue Gesetz stärkt die Rechte von Whistleblowern. Unternehmen müssen interne Meldestellen einrichten. Wir erklären die wichtigsten Änderungen.',
    date: '28. SEPTEMBER 2023',
    imageUrl: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Homeoffice: Was gilt bei der Kostentragung?',
    excerpt: 'Wer trägt die Kosten für Strom, Internet und Büromaterial im Homeoffice? Aktuelle Rechtsprechung und Tipps für Arbeitnehmer und Arbeitgeber.',
    date: '05. SEPTEMBER 2023',
    imageUrl: 'https://images.unsplash.com/photo-1589994243538-348259544341?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
