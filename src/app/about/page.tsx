'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── Data Constants ───────────────────────────────────────────────────────────

const ACTIVITIES = [
  {
    icon: '🏅',
    title: 'Awards & Recognition',
    description:
      'At each Olympic Games, the Foundation honors "truce bearers" — statesmen, athletes, and citizens advancing the Olympic Truce — with a specially commissioned bronze discus and an original poem by Poet Laureate Colin Goedecke.',
  },
  {
    icon: '🎭',
    title: 'Cultural Contributions',
    description:
      'Commissioning poetry, spoken word, and visual media for Olympic and international sporting events. Works include "It\'s a Truceful Movement" (Milan-Cortina 2026), "Being Truceful" (Paris 2024), "Peace~ability" (PyeongChang 2018), and "Ultramarine" (35th America\'s Cup, 2017).',
  },
  {
    icon: '🌐',
    title: 'Truce Infrastructure',
    description:
      'Building tools that make the Olympic Truce visible and measurable: the Truce Portal (launched February 2026) and the Truce Compliance Index — the first of its kind — monitoring ceasefire compliance and impact worldwide.',
  },
  {
    icon: '✋',
    title: 'My Truce Oath',
    description:
      'A personal commitment initiative for spectators and citizens at sporting events. Participants pledge to use the inspiration of the Games to resolve conflicts in their own lives — mirroring the athletes\' official oaths and extending the Truce from nations to individuals.',
  },
  {
    icon: '🗿',
    title: 'Monuments & Landmarks',
    description:
      'Commissioning monumental bronze sculptures by Rosa Serra, Official Sculptor of the IOC, installed at the IOC Headquarters in Lausanne and the US Olympic Training Center in Colorado Springs.',
  },
];

const CULTURAL_WORKS = [
  { title: "It's a Truceful Movement", event: 'Milan-Cortina 2026', type: 'Video / Cultural Olympiad' },
  { title: 'Being Truceful', event: 'Paris 2024', type: 'Poetry & Spoken Word' },
  { title: 'Peace~ability', event: 'PyeongChang 2018', type: 'Poetry & Spoken Word' },
  { title: 'Ultramarine', event: '35th America\'s Cup 2017', type: 'Poetry Commission' },
];

const IMPACT_MOMENTS = [
  {
    year: '1994',
    event: 'Lillehammer',
    description:
      'Despite ongoing wars, the former Federal Republic of Yugoslavia participated. The IOC demonstrated solidarity by visiting Sarajevo, which had hosted the 1984 Winter Olympics.',
  },
  {
    year: '1998',
    event: 'Nagano',
    description:
      'UN Secretary-General Kofi Annan intervened diplomatically during Persian Gulf tensions with Iraq, publicly calling upon all nations to observe the Olympic Truce.',
  },
  {
    year: '2000',
    event: 'Sydney',
    description:
      'South and North Korean delegations walked into the stadium together under one flag — the first Olympic event where the divided nations marched side by side.',
  },
  {
    year: '2004',
    event: 'Athens',
    description:
      'The UN supported the IOC\'s 16-day ceasefire initiative. North and South Korea again processed together at the Opening Ceremonies, reinforcing peaceful cooperation.',
  },
  {
    year: '2006',
    event: 'Turin',
    description:
      'Athletes and officials signed truce walls across three Olympic Villages, publicly endorsing the Truce commitment.',
  },
  {
    year: '2010',
    event: 'Vancouver',
    description:
      'Community peace-building delivered sports equipment to 20 Aboriginal communities, hosted youth dialogues with Canada\'s Governor General, and created art installations promoting personal peacemaking.',
  },
  {
    year: '2012',
    event: 'London',
    description:
      'Lord Michael Bates walked over 3,000 miles from Olympia to London, securing government pledges. UK schools engaged 200 students in Model UN debates on Olympic Truce themes.',
  },
  {
    year: '2018',
    event: 'PyeongChang',
    description:
      'The Truce facilitated dialogue between North and South Korea during heightened tensions, enabling North Korea\'s participation despite a technical state of war between the two nations.',
  },
];

const BOARD_MEMBERS = [
  {
    name: 'Hugh Dugan',
    role: 'Founder & President',
    bio: '', // Founder gets a dedicated section
    featured: true,
  },
  {
    name: 'Bill Belk',
    role: 'Board Member',
    bio: 'Engaged with the Foundation from its outset. His father, Irwin Belk, was a founding member of the US Olympic Committee. The Belk family has donated over 29 major sports facilities to American campuses, including training buildings at the US Olympic Training Center.',
  },
  {
    name: 'Georgia Dunn Belk',
    role: 'Board Member',
    bio: 'An entrepreneur bringing business expertise and sporting heritage from the Caribbean region to the Foundation\'s board.',
  },
  {
    name: 'Ute Dugan, MD, PhD',
    role: 'Board Member',
    bio: 'A physician and professor from Europe who serves as a thought leader in pharmaceuticals, having developed innovations in immuno-oncology and therapies for non-communicable diseases at a Fortune 500 company.',
  },
  {
    name: 'Suzanne Rich Folsom',
    role: 'Board Member & Legal Counsel',
    bio: 'Served as a senior-level woman at the World Bank after managing programs for two White House First Families. Currently provides legal counsel to a Fortune 500 industrial production company.',
  },
  {
    name: 'Colin Goedecke',
    role: 'Board Member & Poet Laureate',
    bio: 'Poet Laureate of the Truce Foundation since 2017 and consulting creative director. Founded The Poetisphere and "The Daily Spark" Substack. Hosts cultural inquiry programming and has created commissioned works for every Games since his appointment.',
  },
];

const ADVISORS = [
  { name: 'Curtis Carter, Ph.D.', title: 'Past President, International Society of Aesthetics; Professor of Aesthetics, Marquette University' },
  { name: 'Lisa Delpy Neirotti', title: 'Associate Professor of Sport Management, George Washington University' },
  { name: 'Victoria Dugan', title: 'Youth Outreach Coordinator; Varsity basketball captain, The Lawrenceville School; crew, University of Wisconsin' },
  { name: 'Evelyn Dugan', title: 'Ballerina (New York, San Francisco, Philadelphia); artist-in-residence, The Watermill Center, New York' },
  { name: 'Dr. Costantinos Filis', title: 'Director, International Olympic Truce Centre, Athens' },
  { name: 'Jon Fish', title: 'US Olympic Athlete in Rowing (1988 Seoul); Professor of Media Studies, NYU' },
  { name: 'Curt Hamakawa', title: 'Professor of Sports Management, Western New England University; former Director of International Programs, USOC' },
  { name: 'Elizabeth A. Hanley', title: 'Professor Emerita of Kinesiology, Penn State University' },
  { name: 'Laurel Iversen OLY', title: '1980 US Olympic Volleyball Team' },
  { name: 'Richard Jordan', title: 'United Nations NGO expert and Olympic Volunteer' },
  { name: 'Anfisa Kasyanova OLY', title: 'Modern Pentathlete, Belarussian Olympic Team' },
  { name: 'Richard Koo', title: 'President, International Olympic Academy Participants\' Association; sports media executive' },
  { name: 'Glenn Levin', title: 'President, XBorders LLC; Attorney at Law' },
  { name: 'Tegla Loroupe OLY', title: 'Olympic marathon champion; head of Olympic Refugee Team (Rio 2016); peace advocate' },
  { name: 'Massimiliano Montanari', title: 'Executive Director, Save the Dream Foundation; former Head, UN Center on Public-Private Security Policies' },
  { name: 'Larry Norton, MD', title: 'Deputy Physician-in-Chief for Breast Cancer Programs, Memorial Sloan Kettering Cancer Center' },
  { name: 'Dora Pallis', title: 'Assistant Director, International Olympic Truce Centre, Athens' },
  { name: 'Konstantinos V. Antonopoulos', title: 'MA Olympic Studies; Curator, Hellenic Ministry of Culture and Sport — Museum and Site of Olympia' },
  { name: 'Heather Reid', title: 'Professor of Sport Philosophy, Morningside College' },
  { name: 'Rosa Serra', title: 'Official Sculptor of the International Olympic Committee' },
  { name: 'Jonas Serrano', title: 'President, Phyt NYC, Phyt Cares, and Phyt Puerto Rico' },
  { name: 'Patrick Singleton OLY', title: 'Luge & Skeleton athlete; President, Bermuda Olympians Association; Treasurer, World Olympians\' Association' },
  { name: 'Thomas Sithole', title: 'Sport journalist; former Zimbabwe Olympic Committee President; former IOC International Cooperation Director' },
  { name: 'Ulysses Smith', title: 'President & CEO, Telos Governance Advisers LLC' },
  { name: 'Peter Tichansky', title: 'President and CEO, Business Council for International Understanding' },
  { name: 'Max Horwitz', title: 'Vice President, Business Council for International Understanding' },
  { name: 'Brad Thatcher', title: 'President and CEO, Thatcher+Co strategic media relations' },
  { name: 'Edward & Marilyn Wallis', title: 'US Olympic Committee benefactors and Games attendees' },
];

const HONOREE_GROUPS = [
  {
    id: 'milano-cortina-2026',
    event: 'Milano-Cortina 2026',
    subtitle: 'Winter Olympics',
    honorees: [
      { name: 'Isabelle Picco', title: "Monaco's Ambassador & Permanent Representative to the UN", country: 'Monaco' },
      { name: 'The People & Republic of Italy', title: 'Host Nation', country: 'Italy' },
    ],
  },
  {
    id: 'paris-2024',
    event: 'Paris 2024',
    subtitle: 'Summer Olympics',
    honorees: [
      { name: 'Tegla Loroupe', title: 'Humanitarian & Olympic Marathon Champion', country: 'Kenya' },
      { name: 'Thomas Bach', title: 'Olympian & IOC President', country: 'Germany' },
    ],
  },
  {
    id: 'pyeongchang-2018',
    event: 'PyeongChang 2018',
    subtitle: 'Winter Olympics',
    honorees: [
      { name: 'Choi Moon-soon', title: 'Governor of Gangwon Province', country: 'Republic of Korea' },
      { name: 'Miroslav Lajcak', title: 'President, UN General Assembly', country: 'Slovakia' },
      { name: 'Lee Hee-beom', title: 'President, PyeongChang Organizing Committee', country: 'Republic of Korea' },
    ],
  },
  {
    id: 'americas-cup-2017',
    event: "35th America's Cup 2017",
    subtitle: 'Bermuda',
    honorees: [
      { name: 'Golden Gate Yacht Club / Oracle Team USA', title: 'Competing Team', country: 'USA' },
      { name: 'Royal New Zealand Yacht Squadron / Emirates Team NZ', title: 'Competing Team', country: 'New Zealand' },
      { name: 'Royal Swedish Yacht Club / Artemis Racing', title: 'Competing Team', country: 'Sweden' },
      { name: 'Kansai Yacht Club / SoftBank Team Japan', title: 'Competing Team', country: 'Japan' },
      { name: 'Royal Yacht Squadron Racing / Land Rover BAR', title: 'Competing Team', country: 'United Kingdom' },
      { name: 'Yacht Club de France / Groupama Team France', title: 'Competing Team', country: 'France' },
      { name: "America's Cup Bermuda, Ltd.", title: 'Event Organization', country: 'Bermuda' },
      { name: 'The People of Bermuda', title: 'Host Community', country: 'Bermuda' },
      { name: 'Conquer Cancer Foundation', title: 'Charitable Partner', country: 'USA' },
      { name: "America's Cup Race Management", title: 'Event Organization', country: 'Bermuda' },
      { name: "America's Cup Event Authority", title: 'Event Organization', country: 'Bermuda' },
    ],
  },
  {
    id: 'rio-2016',
    event: 'Rio 2016',
    subtitle: 'Summer Olympics',
    honorees: [
      { name: 'Anita DeFrantz', title: 'IOC Executive Board Member', country: 'USA' },
      { name: 'Wilfried Lemke', title: 'UN Special Advisor on Sport for Development & Peace', country: 'Germany' },
      { name: 'Andrew Parsons', title: 'President, Brazilian Paralympics Committee', country: 'Brazil' },
      { name: 'Admiral James G. Stavridis (ret.)', title: 'Supreme Allied Commander-Europe, NATO', country: 'USA' },
      { name: 'Carlos Henrique Schroder', title: 'General Director, Globo Television Network', country: 'Brazil' },
    ],
  },
  {
    id: 'london-2012',
    event: 'London 2012',
    subtitle: 'Summer Olympics',
    honorees: [
      { name: 'Lord Michael Bates', title: 'House of Lords; walked 3,000+ miles from Olympia to London', country: 'United Kingdom' },
      { name: 'Mario Pescante', title: 'IOC Ambassador & Permanent Observer to UN General Assembly', country: 'Italy' },
    ],
  },
  {
    id: 'beijing-2008',
    event: 'Beijing 2008',
    subtitle: 'Summer Olympics',
    honorees: [
      { name: 'Cai Mingzhao', title: 'Vice Minister, State Council Information Office', country: 'China' },
      { name: 'Juan Antonio Samaranch', title: 'IOC President Emeritus', country: 'Spain' },
      { name: 'Richard C. Levin', title: 'President, Yale University', country: 'USA' },
      { name: 'Irwin Belk', title: 'US Olympic philanthropist & Olympic Order recipient', country: 'USA' },
    ],
  },
  {
    id: 'small-states-2007',
    event: 'Small States of Europe Games 2007',
    subtitle: 'Monaco',
    honorees: [
      { name: 'H.S.H. Prince Albert II', title: 'Sovereign Prince of Monaco', country: 'Monaco' },
    ],
  },
  {
    id: 'carifta-2007',
    event: 'CARIFTA Games 2007',
    subtitle: 'Turks & Caicos',
    honorees: [
      { name: 'The People of Turks & Caicos', title: 'Accepted by Minister of Youth & Sport Dr. Lillian Boyce', country: 'Turks & Caicos' },
    ],
  },
  {
    id: 'turin-2006',
    event: 'Turin 2006',
    subtitle: 'Winter Olympics',
    honorees: [
      { name: 'The People of Italy', title: 'Accepted by Foreign Minister Gianfranco Fini', country: 'Italy' },
      { name: 'Olusegun Obasanjo', title: 'President of Nigeria', country: 'Nigeria' },
      { name: 'Ellen Johnson-Sirleaf', title: 'President of Liberia', country: 'Liberia' },
      { name: 'Peter Ueberroth', title: 'Head, 1984 Los Angeles Games; leader, US Olympic Committee', country: 'USA' },
    ],
  },
  {
    id: 'athens-2004',
    event: 'Athens 2004',
    subtitle: 'Summer Olympics',
    honorees: [
      { name: 'Constantine Karamanlis', title: 'Prime Minister of Greece', country: 'Greece' },
      { name: 'George Papandreou', title: 'Former Prime Minister & Foreign Minister of Greece', country: 'Greece' },
      { name: 'Mitt Romney', title: 'President, 2002 Salt Lake City Winter Games', country: 'USA' },
    ],
  },
];

const MONUMENTS = [
  {
    name: 'The Olympic Truce',
    artist: 'Rosa Serra (Spain)',
    role: 'Official Sculptor of the International Olympic Committee',
    year: '2001',
    material: 'Bronze & marble',
    location: 'IOC Headquarters Sculpture Gardens, Lausanne, Switzerland',
    dedication:
      'Dedicated at the United Nations Headquarters in New York, May 2001, hosted by Secretary-General Kofi Annan. IOC President Juan Antonio Samaranch, Greek PM George Papandreou, former U.S. Secretary of State Henry Kissinger, and philanthropist Irwin Belk attended. Later relocated to the IOC\'s permanent collection in Lausanne.',
  },
  {
    name: 'Olympic Truce — USA',
    artist: 'Rosa Serra (Spain)',
    role: 'Official Sculptor of the International Olympic Committee',
    year: '2006',
    material: 'Bronze & marble',
    location: 'US Olympic & Paralympic Training Center, Colorado Springs',
    dedication:
      'Gifted on Olympic Day, June 23, 2006. Positioned centrally on the Training Center campus as a focal point for the Olympic Movement, photographed with visiting international athletes from around the world.',
  },
];

const PUBLICATIONS = [
  {
    title: 'Can the Olympics Help Us Understand Each Other?',
    author: 'Hugh Dugan',
    publication: 'Newsmax',
    date: 'July 30, 2024',
    description:
      'Writing from Paris about the 2024 Olympics, Dugan introduces "Geolympics" — tracking the Olympic Truce\'s real-time effects on international relations.',
    url: 'https://www.newsmax.com/hughdugan/olympics-trucy-humanity/2024/07/30/id/1174522/',
  },
  {
    title: 'May Olympic Truce Day Align our Troubled World Through Sport',
    author: 'Hugh Dugan',
    publication: 'Newsmax',
    date: 'February 29, 2024',
    description:
      'A proposal to establish February 29 (leap day) as "Olympic Truce Day" to promote global peace through athletics.',
    url: 'https://www.newsmax.com/hughdugan/games-olympians-truce/2024/02/29/id/1155380/',
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AboutPage() {
  const [showAllAdvisors, setShowAllAdvisors] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState<string>('milano-cortina-2026');

  const visibleAdvisors = showAllAdvisors ? ADVISORS : ADVISORS.slice(0, 8);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About the Truce Foundation
            </h1>
            <p className="text-xl text-gray-500 italic">
              It Begins Inside You — Between Each Other
            </p>
            <p className="text-sm text-gray-500">
              501(c)(3) Non-Profit &middot; Founded 1993
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              In 776 B.C., warring Greek city-states agreed to lay down their weapons so athletes and spectators could travel safely to Olympia. This sacred truce — the <em>ekecheiria</em> — lasted for over a thousand years. In 1993, American diplomat Hugh Dugan revived it, introducing the first modern Olympic Truce resolution at the United Nations General Assembly, co-sponsored by 121 nations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Truce Foundation of the US is a 501(c)(3) non-profit that carries this tradition forward. We promote the spirit of the ancient Olympic Truce within the hearts and minds of citizens through sporting events and cultural initiatives, recognizing those advancing truce principles globally. We are the only national-level truce initiative of our kind in the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, the Olympic Truce has been affirmed before every Games since 1993. The 2026 Milano-Cortina resolution was co-sponsored by 166 UN member states — a testament to the enduring power of sport to create peaceful contact between communities in conflict.
            </p>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: '2,800+', label: 'Years of Tradition' },
              { value: '30+', label: 'Years Modern Revival' },
              { value: '166', label: 'UN Co-Sponsors' },
              { value: '28', label: 'Advisors Worldwide' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50/50 border border-gray-200/30">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hugh Dugan, Founder ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Hugh T. Dugan</h2>
            <p className="text-sm text-blue-700 font-medium mb-5">Founder & President</p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hugh Dugan initiated the revival of the ancient Olympic Truce for the modern era in 1993 through the United Nations and International Olympic Committee. The International Olympic Committee has honored him multiple times for his contributions to the Olympic Movement.
              </p>
              <p>
                Between 1989 and 2015, Dugan served as U.S. Delegate to the United Nations, advising 11 U.S. Ambassadors. His government service included acting Special Presidential Envoy for Hostage Affairs in Washington, D.C., and Senior Director on the National Security Council at the White House.
              </p>
              <p>
                An educator as well as a diplomat, Dugan has taught as a professor of diplomacy and senior fellow at Seton Hall University, regularly providing international affairs commentary for major media outlets. His civic service includes leadership roles as chair of the Vanderbilt YMCA in New York, vice chair of SOS Children&apos;s Villages-USA, board member of the Academic Council on the UN System, and senior advisor to Hostage Aid Worldwide.
              </p>
              <p className="text-sm text-gray-600">
                Dugan graduated with honors from Georgetown University&apos;s School of Foreign Service, Fletcher School of Law and Diplomacy, and Wharton School of Business. He grew up in Wisconsin and skated at the US Olympic Ice Rink in Milwaukee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h2>
            <p className="text-gray-600">Programs advancing the Olympic Truce mission</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-2xl mb-3">{activity.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Truce Oath ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/30 text-center"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">My Truce Oath</h2>
            <p className="text-sm text-emerald-700 font-medium mb-6">Make a truce with yourself</p>
            <blockquote className="text-lg sm:text-xl text-gray-800 italic leading-relaxed max-w-2xl mx-auto mb-6">
              &ldquo;I promise to use the inspiration of these days to make a truce with conflicts in my life that constrain me from pursuing my goals and ideals.&rdquo;
            </blockquote>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              The Foundation invites every spectator and citizen to take this personal pledge — moving from passive observer to active participant in the Olympic ideals, extending the Truce from nations to individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cultural Works ── */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cultural Works</h2>
            <p className="text-gray-600">Poetry and media commissioned for each Games by Poet Laureate Colin Goedecke</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CULTURAL_WORKS.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gray-50/50 border border-gray-200/30"
              >
                <p className="font-semibold text-gray-900">&ldquo;{work.title}&rdquo;</p>
                <p className="text-sm text-blue-600">{work.event}</p>
                <p className="text-xs text-gray-500 mt-1">{work.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Has It Made a Difference? ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Has It Made a Difference?</h2>
            <p className="text-gray-600">Key moments where the Olympic Truce shaped events</p>
          </motion.div>

          <div className="space-y-3">
            {IMPACT_MOMENTS.map((moment, index) => (
              <motion.div
                key={moment.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200/30"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-lg font-bold text-blue-600">{moment.year}</div>
                  <div className="text-xs text-gray-500">{moment.event}</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{moment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board of Directors ── */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Board of Directors</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BOARD_MEMBERS.filter((m) => !m.featured).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-gray-50/50 border border-gray-200/30"
              >
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisors ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Advisors</h2>
            <p className="text-gray-600">28 experts guiding the Foundation worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visibleAdvisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="p-3 rounded-lg bg-white border border-gray-200/30"
              >
                <p className="font-medium text-gray-900 text-sm">{advisor.name}</p>
                <p className="text-xs text-gray-600">{advisor.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllAdvisors(!showAllAdvisors)}
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAllAdvisors ? 'Show Fewer' : 'Show All 28 Advisors'}
            </button>
          </div>
        </div>
      </section>

      {/* ── Honorees ── */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Olympic Truce Award Honorees</h2>
            <p className="text-gray-600">Truce bearers recognized across Olympic and sporting events</p>
          </motion.div>

          <div className="space-y-2">
            {HONOREE_GROUPS.map((group) => {
              const isExpanded = expandedEvent === group.id;
              return (
                <div key={group.id} className="rounded-xl border border-gray-200/50 overflow-hidden bg-white">
                  <button
                    onClick={() => setExpandedEvent(isExpanded ? '' : group.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-gray-900">{group.event}</span>
                      <span className="text-sm text-gray-500 ml-2">{group.subtitle}</span>
                      <span className="text-xs text-gray-400 ml-2">({group.honorees.length})</span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        {group.honorees.map((honoree) => (
                          <div key={honoree.name} className="p-3 rounded-lg bg-gray-50/50">
                            <p className="font-medium text-gray-900 text-sm">{honoree.name}</p>
                            <p className="text-xs text-gray-600">{honoree.title}</p>
                            <p className="text-xs text-gray-500">{honoree.country}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why a Discus? ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/10 border border-amber-500/30"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why a Discus?</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                In ancient Olympia, the terms of the sacred truce — the <em>ekecheiria</em> — were inscribed on a bronze discus and displayed in the Temple of Hera for all athletes and pilgrims entering the Games to see. It was both a legal instrument and a visible symbol of safe passage.
              </p>
              <p>
                The discus symbolized the upward flight of earthly ambitions — a path where all could freely and safely travel to witness the Games. Athletes passed this symbol as they entered the field to compete.
              </p>
              <p>
                Following this tradition, each Truce Foundation honoree receives a commissioned bronze discus and an original poem by Poet Laureate Colin Goedecke — connecting the modern award directly to the ancient practice of recognizing those who uphold peace.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Monuments ── */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Monuments</h2>
            <p className="text-gray-600">Permanent bronze installations by Rosa Serra, Official Sculptor of the IOC</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MONUMENTS.map((monument, index) => (
              <motion.div
                key={monument.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-gray-50/50 border border-purple-500/30"
              >
                <h3 className="font-bold text-gray-900 mb-1">&ldquo;{monument.name}&rdquo;</h3>
                <p className="text-sm text-purple-700 font-medium mb-1">{monument.artist} &middot; {monument.year}</p>
                <p className="text-sm text-gray-600 mb-1">{monument.material}</p>
                <p className="text-sm text-gray-600 mb-3">{monument.location}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{monument.dedication}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foundation Flyer Download ── */}
      <section className="py-8 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.a
            href="/documents/truce-foundation-flyer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 hover:border-blue-400/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center text-3xl">
                📄
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                  Truce Foundation Flyer
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Download our official flyer with the Olympic Truce Award, honorees, and foundation information
                </p>
              </div>
              <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ── Publications by Hugh Dugan ── */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Publications</h2>
            <p className="text-gray-600">Writings by Hugh Dugan on the Olympic Truce</p>
          </motion.div>

          <div className="space-y-4">
            {PUBLICATIONS.map((pub, index) => (
              <motion.a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block p-5 rounded-xl bg-gray-50/50 border border-gray-200/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📰
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500">{pub.publication} &bull; {pub.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600">{pub.description}</p>
                  </div>
                  <div className="text-gray-500 group-hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border border-gray-200/50"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1 text-gray-600">
                <p className="font-medium text-gray-900">Princeton Office</p>
                <p className="text-sm">321 Nassau Street</p>
                <p className="text-sm">Princeton, NJ 08540 USA</p>
              </div>
              <div className="space-y-1 text-gray-600">
                <p className="font-medium text-gray-900">Hamptons Office</p>
                <p className="text-sm">451 Seven Ponds Towd Road</p>
                <p className="text-sm">Water Mill, NY 11976 USA</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
              <a href="tel:+16094543000" className="text-blue-600 hover:text-blue-500">+1 (609) 454-3000</a>
              <a href="tel:+12123806975" className="text-blue-600 hover:text-blue-500">+1 (212) 380-6975</a>
              <a href="mailto:Contact@TruceFoundation.world" className="text-blue-600 hover:text-blue-500">Contact@TruceFoundation.world</a>
              <a href="https://twitter.com/OlympicTruce" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">@OlympicTruce</a>
              <a href="https://www.TruceFoundation.world" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">www.TruceFoundation.world</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Collaborating Organizations ── */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Collaborating Organizations</h2>
            <p className="text-gray-600">Partners advancing the Olympic Truce mission</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <a href="https://www.bfrv.it" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/logos/partners/house-of-sport-volunteers.jpeg" alt="The House of Sport Volunteers" className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2" />
            </a>
            <a href="https://www.bciu.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/logos/partners/bciu.jpeg" alt="BCIU - Business Council for International Understanding" className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2" />
            </a>
            <a href="https://www.savethedream.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/logos/partners/save-the-dream.jpeg" alt="Save the Dream" className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2" />
            </a>
            <a href="https://www.thatcherandco.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/logos/partners/thatcher-co.jpeg" alt="Thatcher+Co." className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Explore More ── */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/history"
              className="p-4 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Olympic Truce History
              </h3>
              <p className="text-sm text-gray-600 mt-1">From ancient Greece to today</p>
            </Link>
            <Link
              href="/co-sponsors"
              className="p-4 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                166 Co-Sponsors
              </h3>
              <p className="text-sm text-gray-600 mt-1">Milano-Cortina 2026 resolution</p>
            </Link>
            <Link
              href="/portal"
              className="p-4 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Truce Portal
              </h3>
              <p className="text-sm text-gray-600 mt-1">All resources and tools</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
