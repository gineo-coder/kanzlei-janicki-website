import type { Lawyer, NewsArticle } from './types';

export const NAV_LINKS = [
  { name: 'Kanzlei', path: '/#kanzlei' },
  { name: 'Rechtsanwälte', path: '/rechtsanwaelte' },
  { name: 'Rechtsgebiete', path: '/rechtsgebiete' },
  { name: 'Aktuelles', path: '/#aktuelles' },
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