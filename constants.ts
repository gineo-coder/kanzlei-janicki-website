import React from 'https://esm.sh/react@^19.1.1';
import type { Lawyer, NewsArticle } from './types';

export const NAV_LINKS = [
  { name: 'Kanzlei', path: '/#kanzlei' },
  { name: 'Rechtsanwälte', path: '/rechtsanwaelte' },
  { name: 'Rechtsgebiete', path: '/rechtsgebiete' },
  { name: 'Aktuelles', path: '/#aktuelles' },
];

// Fix: Converted JSX syntax to React.createElement calls to be valid in a .ts file.
export const SERVICES = [
    {
        slug: "kuendigungsschutz",
        title: "Kündigungsschutz",
        description: "Wir prüfen die Rechtmäßigkeit von Kündigungen und vertreten Sie im Kündigungsschutzprozess.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }))
    },
    {
        slug: "aufhebungsvertrag",
        title: "Aufhebungsvertrag",
        description: "Wir verhandeln für Sie optimale Konditionen bei Aufhebungsverträgen und Abfindungszahlungen.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z" }))
    },
    {
        slug: "arbeitsvertrag",
        title: "Arbeitsvertrag",
        description: "Gestaltung und Prüfung von Arbeitsverträgen, um rechtliche Fallstricke von vornherein zu vermeiden.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }))
    },
    {
        slug: "abmahnung",
        title: "Abmahnung",
        description: "Wir beraten Sie über die richtigen Schritte nach Erhalt oder bei der Aussprache einer Abmahnung.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }))
    },
    {
        slug: "zeugnis",
        title: "Zeugnis",
        description: "Anspruch auf Erteilung und Korrektur eines fairen und rechtlich einwandfreien Arbeitszeugnisses.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }))
    },
    {
        slug: "betriebsrat",
        title: "Betriebsrat",
        description: "Beratung und Vertretung in allen betriebsverfassungsrechtlichen Angelegenheiten.",
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }))
    },
];

export const TEAM_MEMBERS: Lawyer[] = [
  {
    name: 'Dr. Jörg Janicki',
    title: 'Rechtsanwalt',
    specialization: 'Fachanwalt für Arbeitsrecht',
    imageUrl: 'https://www.janicki-arbeitsrecht.de/files/kanzlei/fachanwalt-dr-janicki.jpg',
    slug: 'dr-joerg-janicki',
    description: "Dr. Jörg Janicki ist Gründer und Namensgeber der Kanzlei. Mit über 20 Jahren Erfahrung als Fachanwalt für Arbeitsrecht vertritt er mit Leidenschaft und strategischem Geschick die Interessen seiner Mandanten. Sein Schwerpunkt liegt in der Beratung von Unternehmen und Führungskräften bei komplexen Restrukturierungen und Verhandlungen mit Betriebsräten."
  },
  {
    name: 'Jonas Jung',
    title: 'Rechtsanwalt',
    specialization: 'Schwerpunkt Arbeitsrecht',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop',
    slug: 'jonas-jung',
    description: "Jonas Jung ist ein engagierter Rechtsanwalt mit einem klaren Fokus auf das individuelle Arbeitsrecht. Er berät insbesondere Arbeitnehmer in allen Fragen rund um Kündigung, Abfindung und Arbeitszeugnis. Seine empathische und zielstrebige Herangehensweise wird von Mandanten besonders geschätzt."
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: 'Fristlose Kündigung wegen rassistischer Äußerungen auch ohne vorherige Abmahnung rechtmäßig',
    excerpt: 'Das Landesarbeitsgericht (LAG) Baden-Württemberg hat entschieden, dass rassistische Äußerungen eine fristlose Kündigung rechtfertigen...',
    date: '22. August 2024',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4b2488?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Fristlose Kündigung nach privater Nutzung des Firmenlaptops für einen anderen Arbeitgeber',
    excerpt: 'Das LAG Mecklenburg-Vorpommern hat eine fristlose Kündigung bestätigt, nachdem ein Arbeitnehmer seinen Firmenlaptop exzessiv für eine andere Nebentätigkeit nutzte...',
    date: '05. August 2024',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3073a0322527?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Anspruch auf Inflationsausgleichsprämie auch bei gekündigtem Arbeitsverhältnis',
    excerpt: 'Das Arbeitsgericht Stuttgart entschied, dass eine freiwillige Inflationsprämie nicht an ein ungekündigtes Arbeitsverhältnis gekoppelt werden darf, wenn sie auch der Betriebstreue dient.',
    date: '17. Juli 2024',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
  }
];