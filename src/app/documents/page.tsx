'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Olympic Truce Resolutions by Games
interface TruceResolution {
  games: string;
  year: number;
  season: 'Summer' | 'Winter';
  symbol: string;
  url: string;
  coSponsors?: number;
  notes?: string;
}

const TRUCE_RESOLUTIONS: TruceResolution[] = [
  {
    games: 'Milano-Cortina 2026',
    year: 2026,
    season: 'Winter',
    symbol: 'A/80/L.10',
    url: 'https://digitallibrary.un.org/record/4092685',
    coSponsors: 165,
    notes: 'Current resolution. Adopted by consensus Nov 19, 2025.',
  },
  {
    games: 'Paris 2024',
    year: 2024,
    season: 'Summer',
    symbol: 'A/RES/78/10',
    url: 'https://docs.un.org/en/A/RES/78/10',
    coSponsors: 77,
    notes: 'Adopted 118-0-2.',
  },
  {
    games: 'Beijing 2022',
    year: 2022,
    season: 'Winter',
    symbol: 'A/RES/76/13',
    url: 'https://docs.un.org/en/A/RES/76/13',
    coSponsors: 173,
    notes: 'Truce violated by Russia invasion of Ukraine.',
  },
  {
    games: 'Tokyo 2020',
    year: 2020,
    season: 'Summer',
    symbol: 'A/RES/74/16',
    url: 'https://docs.un.org/en/A/RES/74/16',
    coSponsors: 186,
    notes: 'Games postponed to 2021 due to COVID-19.',
  },
  {
    games: 'PyeongChang 2018',
    year: 2018,
    season: 'Winter',
    symbol: 'A/RES/72/6',
    url: 'https://docs.un.org/en/A/RES/72/6',
    coSponsors: 157,
    notes: 'Unified Korean team competed.',
  },
  {
    games: 'Rio 2016',
    year: 2016,
    season: 'Summer',
    symbol: 'A/RES/70/4',
    url: 'https://docs.un.org/en/A/RES/70/4',
    coSponsors: 180,
  },
  {
    games: 'Sochi 2014',
    year: 2014,
    season: 'Winter',
    symbol: 'A/RES/68/9',
    url: 'https://digitallibrary.un.org/record/762171',
    coSponsors: 121,
    notes: 'Crimea annexed between Olympics and Paralympics.',
  },
  {
    games: 'London 2012',
    year: 2012,
    season: 'Summer',
    symbol: 'A/RES/66/5',
    url: 'https://digitallibrary.un.org/record/714684',
    coSponsors: 193,
    notes: '100% co-sponsorship - all UN member states.',
  },
  {
    games: 'Vancouver 2010',
    year: 2010,
    season: 'Winter',
    symbol: 'A/RES/64/4',
    url: 'https://digitallibrary.un.org/record/668467',
    coSponsors: 154,
  },
  {
    games: 'Beijing 2008',
    year: 2008,
    season: 'Summer',
    symbol: 'A/RES/62/4',
    url: 'https://digitallibrary.un.org/record/610688',
    coSponsors: 183,
    notes: 'Russo-Georgian War during Truce window.',
  },
  {
    games: 'Torino 2006',
    year: 2006,
    season: 'Winter',
    symbol: 'A/RES/60/8',
    url: 'https://docs.un.org/en/A/RES/60/8',
    coSponsors: 190,
    notes: 'First to include Paralympics in Truce.',
  },
  {
    games: 'Athens 2004',
    year: 2004,
    season: 'Summer',
    symbol: 'A/RES/58/6',
    url: 'https://digitallibrary.un.org/record/506061',
    coSponsors: 190,
    notes: 'Return to birthplace of Olympics.',
  },
  {
    games: 'Salt Lake City 2002',
    year: 2002,
    season: 'Winter',
    symbol: 'A/RES/56/75',
    url: 'https://digitallibrary.un.org/record/454908',
    coSponsors: 172,
    notes: 'Post-9/11 Games.',
  },
  {
    games: 'Sydney 2000',
    year: 2000,
    season: 'Summer',
    symbol: 'A/RES/54/34',
    url: 'https://digitallibrary.un.org/record/393015',
    coSponsors: 179,
    notes: 'Korean teams marched together.',
  },
  {
    games: 'Nagano 1998',
    year: 1998,
    season: 'Winter',
    symbol: 'A/RES/52/21',
    url: 'https://digitallibrary.un.org/record/245135',
    coSponsors: 177,
    notes: 'Influenced Iraq mediation.',
  },
  {
    games: 'Atlanta 1996',
    year: 1996,
    season: 'Summer',
    symbol: 'A/RES/50/13',
    url: 'https://digitallibrary.un.org/record/202802',
    coSponsors: 161,
  },
  {
    games: 'Lillehammer 1994',
    year: 1994,
    season: 'Winter',
    symbol: 'A/RES/48/11',
    url: 'https://docs.un.org/en/A/RES/48/11',
    coSponsors: 116,
    notes: 'First Games with formal Olympic Truce.',
  },
];

// Foundational Documents
interface FoundationalDoc {
  symbol: string;
  title: string;
  year: number;
  category: 'foundation' | 'sport' | 'development' | 'peace';
  description: string;
  url: string;
}

const FOUNDATIONAL_DOCUMENTS: FoundationalDoc[] = [
  {
    symbol: 'A/RES/48/11',
    title: 'Building a Peaceful and Better World Through Sport and the Olympic Ideal',
    year: 1993,
    category: 'foundation',
    description: 'The original UN resolution establishing the modern Olympic Truce.',
    url: 'https://docs.un.org/en/A/RES/48/11',
  },
  {
    symbol: 'A/RES/55/2',
    title: 'United Nations Millennium Declaration',
    year: 2000,
    category: 'development',
    description: 'Includes commitment to Olympic Truce observance among global goals.',
    url: 'https://docs.un.org/en/A/RES/55/2',
  },
  {
    symbol: 'A/RES/58/5',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2003,
    category: 'sport',
    description: 'Proclaimed 2005 as International Year of Sport and Physical Education.',
    url: 'https://docs.un.org/en/A/RES/58/5',
  },
  {
    symbol: 'A/RES/59/10',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2004,
    category: 'sport',
    description: 'Follow-up resolution strengthening sport for development framework.',
    url: 'https://docs.un.org/en/A/RES/59/10',
  },
  {
    symbol: 'A/RES/60/1',
    title: '2005 World Summit Outcome',
    year: 2005,
    category: 'development',
    description: 'Reaffirmed commitment to Olympic Truce and sport for development.',
    url: 'https://docs.un.org/en/A/RES/60/1',
  },
  {
    symbol: 'A/RES/65/1',
    title: 'Keeping the Promise: United to Achieve the Millennium Development Goals',
    year: 2010,
    category: 'development',
    description: 'MDG summit outcome referencing sport as development enabler.',
    url: 'https://docs.un.org/en/A/RES/65/1',
  },
  {
    symbol: 'A/RES/67/296',
    title: 'International Day of Sport for Development and Peace',
    year: 2013,
    category: 'sport',
    description: 'Proclaimed April 6 as annual day celebrating sport for peace.',
    url: 'https://docs.un.org/en/A/RES/67/296',
  },
  {
    symbol: 'A/RES/70/1',
    title: 'Transforming Our World: 2030 Agenda for Sustainable Development',
    year: 2015,
    category: 'development',
    description: 'SDGs framework recognizing sport as enabler of sustainable development.',
    url: 'https://docs.un.org/en/A/RES/70/1',
  },
  {
    symbol: 'A/RES/S-27/2',
    title: 'A World Fit for Children',
    year: 2002,
    category: 'peace',
    description: 'Special session on children, referenced in Truce resolutions.',
    url: 'https://docs.un.org/en/A/RES/S-27/2',
  },
  {
    symbol: 'A/RES/62/271',
    title: 'Sport for Peace and Development: Building a Peaceful World',
    year: 2008,
    category: 'sport',
    description: 'Sport for peace resolution during Beijing 2008 Olympics.',
    url: 'https://docs.un.org/en/A/RES/62/271',
  },
  {
    symbol: 'A/RES/63/135',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2008,
    category: 'sport',
    description: 'Comprehensive sport for development resolution.',
    url: 'https://docs.un.org/en/A/RES/63/135',
  },
  {
    symbol: 'A/RES/65/4',
    title: 'Olympic Truce (Vancouver 2010)',
    year: 2009,
    category: 'peace',
    description: 'Supporting text for Vancouver 2010 Winter Olympics Truce.',
    url: 'https://docs.un.org/en/A/RES/65/4',
  },
  {
    symbol: 'A/RES/67/17',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2012,
    category: 'sport',
    description: 'Biennial resolution during London 2012 Olympic year.',
    url: 'https://docs.un.org/en/A/RES/67/17',
  },
  {
    symbol: 'A/RES/69/6',
    title: 'Olympic Truce (Sochi 2014)',
    year: 2014,
    category: 'peace',
    description: 'Supporting the Sochi 2014 Winter Olympics Truce.',
    url: 'https://docs.un.org/en/A/RES/69/6',
  },
  {
    symbol: 'A/RES/71/160',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2016,
    category: 'sport',
    description: 'Biennial resolution on sport for development and peace.',
    url: 'https://docs.un.org/en/A/RES/71/160',
  },
  {
    symbol: 'A/RES/73/24',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2018,
    category: 'sport',
    description: 'Updated framework linking sport to SDGs implementation.',
    url: 'https://docs.un.org/en/A/RES/73/24',
  },
  {
    symbol: 'A/RES/75/18',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2020,
    category: 'sport',
    description: 'COVID-era resolution on sport\'s role in recovery.',
    url: 'https://docs.un.org/en/A/RES/75/18',
  },
  {
    symbol: 'A/RES/77/27',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2022,
    category: 'sport',
    description: 'Most recent biennial sport for development resolution.',
    url: 'https://docs.un.org/en/A/RES/77/27',
  },
];

// IOC Historical Documents
interface IOCDocument {
  title: string;
  year: number;
  type: 'appeal' | 'message' | 'resolution' | 'report';
  description: string;
  url: string;
}

const IOC_DOCUMENTS: IOCDocument[] = [
  {
    title: '1992 IOC Appeal for Olympic Truce',
    year: 1992,
    type: 'appeal',
    description: 'The original IOC appeal that launched the modern Olympic Truce movement for Barcelona 1992.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-1992-Appeal-199.pdf',
  },
  {
    title: '1993 UN Resolution (Original)',
    year: 1993,
    type: 'resolution',
    description: 'First UN General Assembly resolution on Olympic Truce observance.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-1993-Resolution-200.pdf',
  },
  {
    title: 'UN Secretary-General Message (Beijing 2008)',
    year: 2008,
    type: 'message',
    description: 'Ban Ki-moon\'s message on the Olympic Truce for the Beijing Games.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-2008-Message-1432.pdf',
  },
  {
    title: 'UN Solemn Appeal (Tokyo 2020)',
    year: 2021,
    type: 'appeal',
    description: 'Official UN Solemn Appeal for the Tokyo 2020 Olympic Games.',
    url: 'https://stillmed.olympics.com/media/Documents/News/2021/07/Solemn-appeal-by-United-Nations-En.pdf',
  },
];

// Beijing 2022 specific documents
const BEIJING_2022_DOCS = [
  {
    title: 'Beijing 2022 Resolution',
    symbol: 'A/RES/76/13',
    url: 'https://docs.un.org/en/A/RES/76/13',
  },
  {
    title: 'Beijing 2022 Draft Resolution',
    symbol: 'A/76/L.13',
    url: 'https://docs.un.org/en/A/76/L.13',
  },
  {
    title: 'Beijing 2022 Co-Sponsors List',
    symbol: 'A/76/L.13/Add.1',
    url: 'https://docs.un.org/en/A/76/L.13/Add.1',
  },
];

// Secretary-General Reports
const SG_REPORTS = [
  {
    title: 'Sport for Development and Peace Report 2024',
    symbol: 'A/79/289',
    url: 'https://documents.un.org/doc/undoc/gen/n24/232/53/pdf/n2423253.pdf',
    alternateUrl: 'https://documents.un.org/doc/undoc/gen/n24/174/10/pdf/n2417410.pdf',
    description: 'UN Secretary-General report on sport as driver of sustainable development and peace.',
    keyFindings: [
      '1 in 3 adults don\'t meet physical activity recommendations',
      '4 in 5 adolescents inactive globally',
      '21% of female athletes experienced childhood sexual abuse',
      'Global gender pay gap: 20%',
      '$10 billion global investment for sustainable sport infrastructure by 2030',
      '€500 million from French Development Agency',
      '$650 million increase in IOC Olympic Solidarity (2025-2028)',
    ],
    focusAreas: ['Social inclusion through sport', 'Physical activity and education', 'Gender equality', 'Peacebuilding and crime prevention', 'Sustainable development'],
  },
];

// Ancient Primary Sources
interface AncientSource {
  author: string;
  title: string;
  date: string;
  description: string;
  passages: string[];
  url: string;
}

const ANCIENT_SOURCES: AncientSource[] = [
  {
    author: 'Pausanias',
    title: 'Description of Greece',
    date: '2nd century AD',
    description: 'Greek traveler\'s account of Olympia, including the origins of the ekecheiria and the bronze Discus of Iphitos. Notes the discus inscription "is not written in a straight line, but the letters run in a circle round the quoit" - archaic style suggesting 8th c. BC origin.',
    passages: ['Book 5.4 (Origin myth)', 'Book 5.10 (Statue of Ekecheiria)', 'Book 5.20.1 (Bronze discus circular inscription)'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Paus.+5.4',
  },
  {
    author: 'Thucydides',
    title: 'History of the Peloponnesian War',
    date: '5th century BC',
    description: 'Primary source on the 420 BC Spartan violation - the most famously documented truce breach. Documents the legal battle, the "Host State Rule," and the 2,000 minae fine.',
    passages: ['Book 5.49-5.50 (Sparta banned, Lichas flogged)'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Thuc.+5.49',
  },
  {
    author: 'Xenophon',
    title: 'Hellenica',
    date: '4th century BC',
    description: 'Vivid eyewitness-style account of the 364 BC battle in the Altis - archers firing from temple roofs while athletes watched, thinking it was a performance before realizing actual warfare had erupted in the sanctuary.',
    passages: ['Book 7.4 (Battle in the sanctuary)'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Xen.+Hell.+7.4',
  },
  {
    author: 'Phlegon of Tralles',
    title: 'Olympiad Lists (Fragments)',
    date: '2nd century AD',
    description: 'Greek freedman of Hadrian who compiled Olympic victor lists and historical chronologies. His fragments support the Delphic mandate to "restore unanimity" through the Games.',
    passages: ['Fragments on Olympic chronology'],
    url: 'https://www.theoi.com/Text/Pausanias5B.html',
  },
  {
    author: 'Isocrates',
    title: 'Panegyricus',
    date: '380 BC',
    description: 'Athenian orator\'s speech praising Olympic gatherings and pan-Hellenic unity under the truce.',
    passages: ['Sections 43-44 (Benefits of Olympic gatherings)'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Isoc.+4.43',
  },
  {
    author: 'Lysias',
    title: 'Olympic Oration',
    date: '388 BC',
    description: 'Speech delivered at Olympia urging Greek unity - an echo of the truce\'s spirit.',
    passages: ['Full oration'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Lys.+33',
  },
  {
    author: 'Plutarch',
    title: 'Life of Lycurgus',
    date: '1st-2nd century AD',
    description: 'References Lycurgus\'s connection to Iphitos and the establishment of the Olympic Truce.',
    passages: ['Section 1.1'],
    url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Lycurgus*.html',
  },
  {
    author: 'Aristophanes',
    title: 'Lysistrata',
    date: '411 BC',
    description: 'Comic play where the female protagonist attempts to convince Athenians and Spartans to end their war by pointing to the Olympic Truce as evidence that even bitter enemies could find peaceful common ground - indicating the Truce had become proverbial in 5th-century Greek thought.',
    passages: ['References to Olympic gatherings and peace'],
    url: 'http://www.perseus.tufts.edu/hopper/text?doc=Aristoph.+Lys.',
  },
];

// Academic/Scholarly Sources
interface ScholarlySource {
  author: string;
  title: string;
  publication: string;
  year: number;
  description: string;
  url?: string;
}

const SCHOLARLY_SOURCES: ScholarlySource[] = [
  {
    author: 'Georgiadis, K. (Ed.)',
    title: 'Ekecheiria: Olympic Truce – Sport as a Platform for Peace',
    publication: 'IOC/International Olympic Academy',
    year: 2009,
    description: 'Definitive academic collection on the Olympic Truce from ancient to modern times.',
    url: 'https://ioa.org.gr/en/publications/',
  },
  {
    author: 'Müller, Norbert',
    title: 'Pierre de Coubertin: Olympism - Selected Writings',
    publication: 'IOC',
    year: 2000,
    description: 'Preeminent scholar on Coubertin\'s writings and the early philosophy of Olympism. Key for understanding why Coubertin omitted the Truce in 1894.',
    url: 'https://www.coubertin.org/wp-content/uploads/2018/04/Pierre-de-Coubertin-and-the-Future.pdf',
  },
  {
    author: 'Clastres, Patrick',
    title: 'Olympic Neutrality and Sports Diplomacy',
    publication: 'Sciences Po',
    year: 2018,
    description: 'Historian focused on Olympic neutrality, IOC diplomacy, and the political dimensions of the Games.',
  },
  {
    author: 'Christesen, Paul',
    title: 'Olympic Victor Lists and Ancient Greek History (Ch. 7)',
    publication: 'Cambridge University Press',
    year: 2007,
    description: 'Scholarly analysis of Aristotle\'s view on the truce\'s foundation and Lycurgus\'s role.',
    url: 'https://www.cambridge.org/core/books/olympic-victor-lists-and-ancient-greek-history/',
  },
  {
    author: 'Guisado Litterio, T.M.',
    title: 'The Olympic Truce: Tradition or International Law?',
    publication: 'EJIL:Talk!',
    year: 2022,
    description: 'Legal analysis of the Olympic Truce\'s status in international law - soft law vs. binding.',
    url: 'https://www.ejiltalk.org/the-olympic-truce-tradition-or-international-law/',
  },
  {
    author: 'Chernykh & Grear',
    title: 'Opinio Juris and Customary International Law',
    publication: 'ResearchGate',
    year: 2015,
    description: 'Argument that consistent repetition of Truce resolutions (by consensus of 193 nations every 2 years) may be creating customary international law via opinio juris.',
    url: 'https://www.researchgate.net/publication/275458912_The_Function_of_Opinio_Juris_in_Customary_International_Law',
  },
  {
    author: 'Abrams, Harvey',
    title: 'The Olympic Truce - Myth and Reality',
    publication: 'Sport Library',
    year: 2008,
    description: 'Olympic historian\'s examination of the gap between Truce ideals and actual enforcement.',
    url: 'https://sportlibrary.org/article/the-olympic-truce-myth-and-reality/',
  },
  {
    author: 'Gardiner, E. Norman',
    title: 'Greek Athletic Sports and Festivals',
    publication: 'Macmillan (Project Gutenberg)',
    year: 1910,
    description: 'Classic scholarly work on ancient Greek athletics, including detailed analysis of the ekecheiria.',
    url: 'https://www.gutenberg.org/files/59952/59952-h/59952-h.htm',
  },
  {
    author: 'Young, David C.',
    title: 'A Brief History of the Olympic Games',
    publication: 'Blackwell',
    year: 2004,
    description: 'Accessible history including sections on the sacred truce with Pausanias citations.',
  },
  {
    author: 'Miller, Stephen G.',
    title: 'Ancient Greek Athletics',
    publication: 'Yale University Press',
    year: 2004,
    description: 'Archaeological perspective on Olympia, the festival, and the truce heralds.',
    url: 'https://yalebooks.yale.edu/book/9780300100835/ancient-greek-athletics/',
  },
  {
    author: 'van Berchem, Mathieu',
    title: 'The Olympic Truce: Noble Myth, Harsh Reality',
    publication: 'SwissInfo',
    year: 2024,
    description: 'Critical historical perspective on the modern truce as an "invented tradition."',
    url: 'https://www.swissinfo.ch/eng/sport/the-olympic-truce-noble-myth-harsh-reality/',
  },
  {
    author: 'Finnigan, Muriel',
    title: 'Olympic Singularity: The Rise of a New Breed of Actor in International Peace and Security',
    publication: 'PhD thesis, University of Glasgow',
    year: 2017,
    description: 'Proposes that Olympic Truce resolutions could be codified into binding treaty law, conceptualizing "Olympic Singularity" - unique characteristics allowing the IOC to function as a quasi-sovereign actor.',
    url: 'https://theses.gla.ac.uk/8389/',
  },
  {
    author: 'Di Marco, A.',
    title: 'Integrating the Olympic Truce into International Law',
    publication: 'International Sports Law Journal',
    year: 2025,
    description: 'Argues urgent reform is required to ensure the Olympic Truce\'s effective integration into international law, addressing the current legal vacuum and inconsistent enforcement.',
    url: 'https://d-nb.info/1368567606/34',
  },
  {
    author: 'Boykoff, Jules',
    title: 'Athlete Activism and the Olympics',
    publication: 'Pacific University / Peace Review',
    year: 2012,
    description: 'Critiques Olympic Truce effectiveness and selective enforcement, arguing IOC enforcement reflects geopolitical alignment with Western powers rather than principled international law application.',
  },
  {
    author: 'Zirin, Dave',
    title: 'The Sochi Paralympics, Ukraine and the Olympic Truce',
    publication: 'The Nation',
    year: 2014,
    description: 'Sports editor\'s analysis of the double standards in IOC enforcement - Russia\'s Crimea annexation vs. US military operations during Olympic periods.',
    url: 'https://www.thenation.com/article/archive/sochi-paralympics-ukraine-and-olympic-truce/',
  },
  {
    author: 'Kobierecki, Michał',
    title: 'Sports Diplomacy Surrounding the IOC\'s Response to the 2022 Russian Invasion of Ukraine',
    publication: 'Sport, Politics and Society',
    year: 2025,
    description: 'Analysis of the first formal IOC sanctions based on Olympic Truce violation and the evolution from symbolic gesture to enforcement mechanism.',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/09523367.2025.2518322',
  },
  {
    author: 'Chang, Victor',
    title: 'Olympic Rings of Peace? The Olympic Movement, Conflict and Peace Building',
    publication: 'Sport in Society',
    year: 2012,
    description: 'Open-access peer-reviewed article analyzing the Truce\'s effectiveness in conflict zones and its role in facilitating diplomatic "windows of opportunity."',
    url: 'https://vuir.vu.edu.au/24927/1/Sport-in-Society-2012-intro-Olympics.pdf',
  },
  {
    author: 'Roy, J.',
    title: 'Thucydides 5.49.1-50.4: The Quarrel between Elis and Sparta in 420 B.C.',
    publication: 'Klio',
    year: 1998,
    description: 'Detailed scholarly analysis of the 420 BC Spartan violation - the most extensively documented case of ancient truce enforcement.',
  },
  {
    author: 'Hornblower, Simon',
    title: 'Thucydides, Xenophon, and Lichas: Were the Spartans Excluded from the Olympic Games from 420 to 400 B.C.?',
    publication: 'Phoenix',
    year: 2000,
    description: 'Analysis of the duration and scope of Sparta\'s ban from the Olympics, questioning whether it lasted 20 years or only the 420 BC Games.',
  },
  {
    author: 'Pandey, Vincent',
    title: 'The Olympic Truce: Symbolic Gesture or Effective Tool',
    publication: 'University of Denver (International Studies)',
    year: 2023,
    description: 'Case study analysis across Yugoslav Wars, India-Pakistan, Cyprus, and Russia - concludes the Truce "has not been effectively used to prevent or end conflict."',
  },
  {
    author: 'Clastres, Patrick',
    title: 'The Olympic Truce: A Historical Perspective',
    publication: 'University of Lausanne / IOC',
    year: 2018,
    description: 'Historian notes the ancient truce "was more of a safe passage than a ceasefire" - calls the modern revival an "invented tradition" that started with the Games\' late 19th century revival.',
  },
  {
    author: 'Head, Thomas & Landes, R. (Eds.)',
    title: 'The Peace of God: Social Violence and Religious Response in France around the Year 1000',
    publication: 'Cornell University Press',
    year: 1992,
    description: 'Scholarly analysis of medieval Peace of God and Truce of God movements - instructive parallels to the ancient ekecheiria\'s reliance on religious sanction.',
    url: 'https://www.cornellpress.cornell.edu/book/9780801481093/the-peace-of-god/',
  },
  {
    author: 'Marchand, Suzanne L.',
    title: 'Down from Olympus: Archaeology and Philhellenism in Germany, 1750-1970',
    publication: 'Princeton University Press',
    year: 1996,
    description: 'How German excavations at Olympia (1875-1881) transformed the Games from literary concept to tangible place - context for the modern Olympic revival.',
    url: 'https://press.princeton.edu/books/paperback/9780691114781/down-from-olympus',
  },
];

const getCategoryConfig = (category: FoundationalDoc['category']) => {
  switch (category) {
    case 'foundation':
      return { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-300', label: 'Foundation' };
    case 'sport':
      return { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-300', label: 'Sport' };
    case 'development':
      return { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-300', label: 'Development' };
    case 'peace':
      return { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-300', label: 'Peace' };
  }
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/truce-foundation-logo.jpg" alt="Truce Foundation" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-semibold text-white">Truce Foundation</span>
          </Link>
          <Link href="/history" className="text-slate-400 hover:text-white transition-colors text-sm">
            Back to History
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <span>📚</span>
              <span>Official UN & IOC Sources</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">UN Documents Archive</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Complete collection of UN resolutions, IOC appeals, and foundational documents related to the Olympic Truce.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Featured: 2024 SG Report */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📄</span>
              <div className="flex-1">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">{SG_REPORTS[0].symbol}</span>
                <h2 className="text-xl font-bold text-white mt-2">{SG_REPORTS[0].title}</h2>
                <p className="text-slate-300 text-sm mt-1">{SG_REPORTS[0].description}</p>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {SG_REPORTS[0].focusAreas.map((area) => (
                    <span key={area} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">{area}</span>
                  ))}
                </div>

                {/* Key Findings */}
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <h4 className="text-xs font-semibold text-slate-400 mb-2">Key Findings</h4>
                  <div className="grid md:grid-cols-2 gap-2 text-xs text-slate-300">
                    {SG_REPORTS[0].keyFindings.slice(0, 6).map((finding, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <a
                    href={SG_REPORTS[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    View Full Report (PDF)
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {SG_REPORTS[0].alternateUrl && (
                    <a
                      href={SG_REPORTS[0].alternateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Alternate PDF
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Olympic Truce Resolutions by Games */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏅</span>
            Olympic Truce Resolutions by Games
          </h2>
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Games</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Symbol</th>
                    <th className="text-center py-3 px-4 text-slate-400 font-medium">Co-Sponsors</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Notes</th>
                    <th className="text-center py-3 px-4 text-slate-400 font-medium">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {TRUCE_RESOLUTIONS.map((res, index) => (
                    <tr key={res.symbol} className={`border-t border-slate-800/50 ${index === 0 ? 'bg-blue-500/10' : ''}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-1.5 py-0.5 rounded ${res.season === 'Summer' ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'}`}>
                            {res.season === 'Summer' ? '☀️' : '❄️'}
                          </span>
                          <span className={index === 0 ? 'text-blue-300 font-medium' : 'text-white'}>{res.games}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-400">{res.symbol}</td>
                      <td className="py-3 px-4 text-center">
                        {res.coSponsors && (
                          <span className={`font-bold ${res.coSponsors === 193 ? 'text-green-400' : 'text-white'}`}>
                            {res.coSponsors}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-400">{res.notes || '-'}</td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* IOC Historical Documents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            IOC Historical Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {IOC_DOCUMENTS.map((doc) => (
              <div key={doc.title} className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300 capitalize">{doc.type}</span>
                  <span className="text-xs text-slate-500">{doc.year}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                >
                  View Document (PDF)
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Beijing 2022 Documents (Example of detailed Game docs) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🇨🇳</span>
            Beijing 2022 Document Set
          </h2>
          <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30">
            <p className="text-sm text-slate-300 mb-4">
              Complete documentation for Beijing 2022 Winter Olympics - notably the Truce window during which Russia invaded Ukraine.
            </p>
            <div className="flex flex-wrap gap-3">
              {BEIJING_2022_DOCS.map((doc) => (
                <a
                  key={doc.symbol}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-sm transition-colors"
                >
                  <span className="font-mono text-xs text-slate-400">{doc.symbol}</span>
                  <span className="text-white">{doc.title}</span>
                  <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ancient Primary Sources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            Ancient Primary Sources
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Classical Greek and Roman texts documenting the original ekecheiria (Olympic Truce). All texts available via Perseus Digital Library.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {ANCIENT_SOURCES.map((source) => (
              <div key={source.author} className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">{source.date}</span>
                </div>
                <h3 className="font-semibold text-white">{source.author}</h3>
                <p className="text-sm text-amber-200 italic mb-2">{source.title}</p>
                <p className="text-xs text-slate-400 mb-3">{source.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {source.passages.map((passage) => (
                    <span key={passage} className="px-2 py-0.5 text-xs bg-slate-800/50 text-slate-300 rounded">{passage}</span>
                  ))}
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                >
                  Read on Perseus
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Academic/Scholarly Sources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Academic & Scholarly Sources
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Modern academic works analyzing the Olympic Truce from historical, legal, and political perspectives.
          </p>
          <div className="grid gap-3">
            {SCHOLARLY_SOURCES.map((source) => (
              <div key={source.title} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-500">{source.year}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">{source.publication}</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm">{source.title}</h3>
                    <p className="text-xs text-slate-500">{source.author}</p>
                    <p className="text-xs text-slate-400 mt-1">{source.description}</p>
                  </div>
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Legal Framework Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>⚖️</span>
              Legal Status: Soft Law → Lex Olympica
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                The Olympic Truce as embodied in UN resolutions is <strong className="text-amber-300">not legally binding</strong> under international law.
                UN General Assembly resolutions are "recommendations" - they create no obligations the way a treaty or Security Council Chapter VII resolution would.
                The resolutions use language like "urges," "calls upon," and "requests" rather than "decides" or "demands."
              </p>
              <p>
                As international law scholar <strong>Bruno Simma</strong> notes, GA resolutions "cannot by themselves create legal obligations."
                However, some scholars (Chernykh, Grear) argue the consistent repetition every two years - usually by consensus of all 193 nations -
                may be creating <strong className="text-green-300">Customary International Law</strong> via <em>opinio juris</em> (belief the practice is required by law).
              </p>
              <div className="p-4 mt-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h4 className="font-semibold text-blue-300 mb-2">2022 Paradigm Shift: Lex Olympica Integration</h4>
                <p>
                  The <strong className="text-white">2022 Ukraine invasion</strong> marked a turning point. The IOC Executive Board explicitly cited breach of the Olympic Truce
                  as the <strong className="text-blue-200">legal basis</strong> for recommending the ban of Russian and Belarusian athletes.
                  This was the first time the Truce was weaponized as a <strong className="text-blue-200">sanctioning mechanism</strong> ("hard law")
                  rather than just a peace appeal ("soft law").
                </p>
                <p className="mt-2 text-slate-400 text-xs">
                  By using the Truce violation to justify 2022 sanctions, the IOC effectively incorporated the UN resolution into its own
                  disciplinary code - the <strong className="text-white">Lex Olympica</strong> (internal law of the Olympic Movement).
                  This bridges the gap between diplomatic soft law and enforceable sports sanctions, reclaiming some of the punitive teeth
                  the Truce lost when the <em>Hellanodikai</em> last flogged a Spartan violator in Olympia.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Foundational Documents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📜</span>
            Foundational UN Resolutions
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Key UN documents referenced in Olympic Truce resolutions, establishing the legal and normative framework.
          </p>
          <div className="grid gap-3">
            {FOUNDATIONAL_DOCUMENTS.map((doc) => {
              const config = getCategoryConfig(doc.category);
              return (
                <div
                  key={doc.symbol}
                  className={`p-4 rounded-xl ${config.bg} border ${config.border}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-slate-400">{doc.symbol}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${config.bg} ${config.text}`}>{config.label}</span>
                        <span className="text-xs text-slate-500">{doc.year}</span>
                      </div>
                      <h3 className="font-semibold text-white text-sm">{doc.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{doc.description}</p>
                    </div>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* External Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            External Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.olympics.com/ioc/olympic-truce/resolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🏅</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">IOC Olympic Truce</h3>
              <p className="text-sm text-slate-400 mt-1">Official IOC page with resolutions, appeals, and history</p>
            </a>
            <a
              href="https://social.desa.un.org/issues/sport-for-development-and-peace/general-assembly"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🇺🇳</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">UN DESA Sport</h3>
              <p className="text-sm text-slate-400 mt-1">Sport for Development and Peace resources</p>
            </a>
            <a
              href="https://olympictruce.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🕊️</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">IOTC</h3>
              <p className="text-sm text-slate-400 mt-1">International Olympic Truce Centre</p>
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4">
            All documents link to official UN and IOC sources.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/history" className="text-blue-400 hover:text-blue-300 text-sm">
              View History Timeline
            </Link>
            <Link href="/briefing-sheet" className="text-blue-400 hover:text-blue-300 text-sm">
              Donor Briefing Sheet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
