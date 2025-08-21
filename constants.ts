import type { Lawyer, NewsArticle } from './types';

export const NAV_LINKS = [
  { name: 'Kanzlei', key: 'kanzlei' },
  { name: 'Rechtsanwälte', key: 'rechtsanwaelte' },
  { name: 'Arbeitsrecht', key: 'arbeitsrecht' },
  { name: 'Aktuelles', key: 'aktuelles' },
];

export const TEAM_MEMBERS: Lawyer[] = [
  {
    name: 'Dr. Jörg Janicki',
    title: 'Rechtsanwalt',
    specialization: 'Fachanwalt für Arbeitsrecht',
    imageUrl: 'https://www.janicki-arbeitsrecht.de/files/kanzlei/fachanwalt-dr-janicki.jpg',
  },
  {
    name: 'Jonas Jung',
    title: 'Rechtsanwalt',
    specialization: 'Schwerpunkt Arbeitsrecht',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop',
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