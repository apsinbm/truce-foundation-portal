'use client';

import { motion } from 'framer-motion';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import Header from '@/components/Header';

// Coverage items with descriptions
interface CoverageItem {
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'official' | 'media' | 'analysis';
  description: string;
}

interface CoverageSection {
  title: string;
  dateRange: string;
  items: CoverageItem[];
}

const COVERAGE_SECTIONS: CoverageSection[] = [
  // === PHASE 3 ===
  {
    title: 'Middle Eastern Military Escalation Breaches the Olympic Truce',
    dateRange: 'February 27 \u2013 March 7, 2026',
    items: [
      {
        source: 'Fox News',
        title: "Iran's flag removed from Paralympics opening ceremony after sole athlete withdraws over travel safety concerns",
        date: '2026-03-07',
        url: 'https://www.foxnews.com/sports/iran-flag-removed-paralympics-opening-ceremony-sole-athlete-withdraws-travel-safety-concerns',
        type: 'media',
        description: "Iranian Paralympian Aboulfazl Khatibi Mianaei withdrew from the 2026 Winter Games due to safety concerns during the U.S.-Israeli military campaign against Iran, resulting in Iran's flag being removed from the opening ceremony's Athletes Parade.",
      },
      {
        source: 'The Independent',
        title: 'Chaos at Dubai airport after flights suspended following drone attack',
        date: '2026-03-07',
        url: 'https://www.independent.co.uk/news/world/middle-east/dubai-airport-departures-iran-war-drones-b2933899.html',
        type: 'media',
        description: 'An Iranian drone struck near the terminals of Dubai International Airport, the world\'s busiest international travel hub, forcing evacuations and flight suspensions. The attack on a key global transit corridor directly undermined the Olympic Truce\'s guarantee of safe passage, stranding Paralympic delegations from Asia and Africa who rely on Gulf hub airports to reach Milano Cortina.',
      },
      {
        source: 'The Guardian',
        title: 'Russian flag met largely by silence at opening ceremony of Winter Paralympics',
        date: '2026-03-06',
        url: 'https://www.theguardian.com/sport/2026/mar/06/russian-flag-met-largely-by-silence-at-opening-ceremony-of-winter-paralympics',
        type: 'media',
        description: "The Russian flag's return to the Paralympic stage after 12 years was met with near silence at the opening ceremony in the Arena di Verona, as seven nations boycotted the event in protest over the IPC's decision to reinstate Russia and Belarus.",
      },
      {
        source: 'BBC Sport',
        title: 'Russia and Belarus athletes parade behind national flags in opening ceremony',
        date: '2026-03-06',
        url: 'https://www.bbc.com/sport/articles/c98gkg3kr1jo',
        type: 'media',
        description: 'Athletes from Russia and Belarus marched behind their national flags at the Milano Cortina Paralympic opening ceremony for the first time since Sochi 2014, as teams from seven nations including Ukraine boycotted the event in protest.',
      },
      {
        source: 'IPC',
        title: 'Milano Cortina 2026 Paralympic Winter Games open with stunning ceremony',
        date: '2026-03-06',
        url: 'https://www.paralympic.org/news/milano-cortina-2026-opening-ceremony',
        type: 'official',
        description: 'The Milano Cortina 2026 Paralympic Opening Ceremony took place at the ancient Arena di Verona, featuring 611 Para athletes from 55 delegations competing across six sports in a spectacle blending Italian cultural heritage with contemporary inclusive performances.',
      },
      {
        source: 'Kyiv Independent',
        title: 'Russia back at Paralympics under national flag, its war veterans eye 2028 games',
        date: '2026-03-06',
        url: 'https://kyivindependent.com/russia-returns-to-paralympics-its-war-veterans-are-eyeing-to-take-part/',
        type: 'analysis',
        description: "Investigation reveals at least 70 veterans of Russia's war in Ukraine have been recruited into national Paralympic teams, with IPC president Andrew Parsons stating injured soldiers would be allowed to compete at future Games regardless of their combat history.",
      },
      {
        source: 'BBC Sport',
        title: 'Injured Russian soldiers would be allowed at future Games, says IPC president',
        date: '2026-03-06',
        url: 'https://www.bbc.com/sport/articles/c2048r2rdyvo',
        type: 'analysis',
        description: "IPC president Andrew Parsons told BBC Sport that Russian soldiers injured in the war with Ukraine will be allowed to compete at future Paralympic Games, stating 'It doesn\u2019t matter to us what they have done in the past in the combat field.'",
      },
      {
        source: 'CNN',
        title: 'Nearly 14,000 canceled flights: Middle East travel chaos in 5 charts',
        date: '2026-03-06',
        url: 'https://edition.cnn.com/travel/middle-east-flights-travel-conflict-vis',
        type: 'analysis',
        description: 'Data visualization showing the scale of aviation disruption across 10 Middle Eastern countries since Operation Epic Fury. Dubai International dropped 85% of scheduled flights; Doha lost 94%. Paralympic delegations from Asia and Africa relying on Gulf hub airports faced severe delays reaching Milano Cortina.',
      },
      {
        source: 'Inside The Games',
        title: 'Russian Paralympians accredited amid rising diplomatic tension',
        date: '2026-03-06',
        url: 'https://www.insidethegames.biz/articles/russian-team-granted-entry-amid-rising-diplomatic-tension',
        type: 'media',
        description: 'Russian athletes including three-time Paralympic champion Aleksey Bugayev received IPC bipartite invitations as the boycott coalition expanded to 14 nations and the EU. Ukraine emphasized 650 athletes and coaches killed since 2022. Italy clarified it will not block visas despite opposing the IPC decision.',
      },
      {
        source: 'Inside The Games',
        title: 'Politicised Paralympics turn to sporting arena',
        date: '2026-03-06',
        url: 'https://www.insidethegames.biz/articles/politicised-paralympics-turn-to-sporting-arena',
        type: 'analysis',
        description: 'After days of diplomatic boycotts, visa disputes, and geopolitical controversy surrounding Russian participation and Middle East escalation, the Milano Cortina 2026 Paralympics shifted focus to athletic competition as events got underway.',
      },
      {
        source: 'The Guardian',
        title: 'Seven countries to boycott Paralympics ceremony over flag-flying Russians',
        date: '2026-03-05',
        url: 'https://www.theguardian.com/sport/2026/mar/05/seven-countries-to-boycott-paralympics-ceremony-over-flag-flying-russians',
        type: 'media',
        description: 'Seven nations and the UK government boycotted the Paralympic Opening Ceremony in protest of the IPC decision to allow Russian and Belarusian athletes to compete under their national flags, escalating diplomatic tensions around the Games.',
      },
      {
        source: 'Georgia Today',
        title: '11 countries and EU to boycott Opening Ceremony of 2026 Paralympics over Russia, Belarus participation',
        date: '2026-03-05',
        url: 'https://georgiatoday.ge/11-countries-and-eu-to-boycott-opening-ceremony-of-2026-paralympics-over-russia-belarus-participation/',
        type: 'media',
        description: 'The growing list of nations boycotting the Opening Ceremony expanded to 11 countries plus the EU, signaling widespread disapproval of the inclusion of Russian and Belarusian national symbols during the ongoing war in Ukraine.',
      },
      {
        source: 'Tasnim News Agency',
        title: 'Iran Olympic Committee demands punishment of US, Israeli regime for slaughter of athletes',
        date: '2026-03-05',
        url: 'https://www.tasnimnews.ir/en/news/2026/03/05/3532224/iran-olympic-committee-demands-punishment-of-us-israeli-regime-for-slaughter-of-athletes',
        type: 'media',
        description: 'The Iranian National Olympic Committee sent a formal letter to the IOC alleging that recent strikes constitute a direct violation of the Olympic Charter and Truce principles, demanding punishment of the United States and Israel.',
      },
      {
        source: 'Deseret News',
        title: 'With Paralympics approaching, what does Olympic Truce mean?',
        date: '2026-03-05',
        url: 'https://www.deseret.com/opinion/2026/03/05/with-paralympics-approaching-what-does-olympic-truce-mean/',
        type: 'analysis',
        description: 'Opinion analysis reflecting on the historic purpose of the Olympic Truce and questioning its relevance as modern wars continue unabated during major sporting events like the approaching Paralympics.',
      },
      {
        source: 'SAN',
        title: 'The US and Israel broke the Olympic Truce \u2014 their Paralympians will still compete',
        date: '2026-03-05',
        url: 'https://san.com/cc/the-us-and-israel-broke-the-olympic-truce-their-paralympians-will-still-compete/',
        type: 'analysis',
        description: 'Argues that ongoing military operations by the United States and Israel during the Paralympic period demonstrate the Olympic Truce remains largely symbolic and unenforceable, despite the UN resolution backed by 166 co-sponsors.',
      },
      {
        source: 'Times of Malta',
        title: 'IOC calls for support for Paralympians from war-affected nations',
        date: '2026-03-04',
        url: 'https://sport.timesofmalta.com/2026/03/04/ioc-calls-for-support-for-paralympians-from-war-affected-nations/',
        type: 'media',
        description: 'The IOC appealed to countries to assist Paralympic athletes from war-affected regions traveling to the Games, underscoring the humanitarian purpose behind the Olympic Truce and the logistical challenges created by ongoing conflicts.',
      },
      {
        source: 'PlanetSki',
        title: 'IOC reiterates support for Olympic Truce',
        date: '2026-03-04',
        url: 'https://planetski.eu/2026/03/04/ioc-reiterates-support-for-olympic-truce/',
        type: 'media',
        description: 'The IOC reaffirmed its support for the Olympic Truce as the Paralympics opened while military operations involving Iran continued, illustrating the tension between the Games\u2019 peace ideals and geopolitical reality.',
      },
      {
        source: 'SportsIn',
        title: 'The IOC\u2019s idyllic Olympic Truce ahead of the Milano Cortina 2026 Winter Paralympic Games',
        date: '2026-03-04',
        url: 'https://sportsin.biz/the-iocs-idyllic-olympic-truce-ahead-of-the-milano-cortina-2026-winter-paralympic-games/',
        type: 'analysis',
        description: 'Analyzes the IOC\u2019s invocation of the Olympic Truce, characterizing it as a symbolic gesture with limited practical efficacy in the current global climate of escalating military conflicts.',
      },
      {
        source: 'Francs Jeux',
        title: 'Amid tensions in the Middle East, the IOC calls for respect for the Olympic Truce',
        date: '2026-03-04',
        url: 'https://www.francsjeux.com/en/short/Amid-tensions-in-the-Middle-East--the-IOC-calls-for-respect-for-the-Olympic-truce-for-the-Winter-Paralympic-Games/',
        type: 'media',
        description: 'Reports on the IPC\u2019s efforts to ensure safe passage for 50 national delegations whose travel was disrupted by airspace closures across the Middle East during the escalating conflict.',
      },
      {
        source: 'Deseret News',
        title: 'What the IOC says about the war in Iran and the Olympic Truce',
        date: '2026-03-03',
        url: 'https://www.deseret.com/utah/2026/03/03/what-the-ioc-says-about-the-war-in-iran-and-the-olympic-truce/',
        type: 'media',
        description: 'Reports that the IOC urged nations to respect the Olympic Truce as the 2026 Winter Paralympics approached, while acknowledging it has no authority to enforce the truce amid the new conflict involving Iran.',
      },
      {
        source: 'Olympics.com',
        title: 'IOC statement on athletes\u2019 safe passage',
        date: '2026-03-03',
        url: 'https://www.olympics.com/ioc/news/ioc-statement-on-athletes-safe-passage',
        type: 'official',
        description: 'The IOC reaffirmed its commitment to the \u201cneutrality principle,\u201d stating that the primary goal of the UN Olympic Truce Resolution is to guarantee the safe travel and peaceful competition of all qualified athletes, regardless of their government\u2019s actions.',
      },
      {
        source: 'Olympics.com',
        title: 'IOC reaffirms sport must unite the world in peaceful competition',
        date: '2026-03-03',
        url: 'https://www.olympics.com/ioc/news/ioc-reaffirms-sport-must-unite-the-world-in-peaceful-competition',
        type: 'official',
        description: 'The IOC issued a follow-up statement reaffirming that sport must serve as a unifying force for peaceful competition, reinforcing its call for all parties to respect the Olympic Truce during the Milano Cortina 2026 Paralympic Games.',
      },
      {
        source: 'Inside The Games',
        title: 'IOC silent on Olympic Truce amid Middle East escalation',
        date: '2026-03-03',
        url: 'https://www.insidethegames.biz/articles/ioc-silent-olympic-truce-middle-east-escalation',
        type: 'analysis',
        description: 'The IOC faces diplomatic scrutiny for failing to formally condemn the Middle East military strikes during the Truce period. Media outlets contrast this silence with the IOC\u2019s swift condemnation of Russia when it breached the truce by invading Ukraine during the 2022 Beijing Games.',
      },
      {
        source: 'Inside The Games',
        title: 'IOC finally delivers statement over Middle East tensions',
        date: '2026-03-03',
        url: 'https://www.insidethegames.biz/articles/ioc-finally-delivers-statement-over-middle-east-tensions',
        type: 'media',
        description: 'After facing criticism for its initial silence, the IOC finally issued a formal statement addressing Middle East tensions during the Olympic Truce period, marking a shift from its earlier reluctance to directly condemn the military escalation.',
      },
      {
        source: 'Irish Sun',
        title: 'Moscow calls out IOC hypocrisy over refusal to sanction US and Israel',
        date: '2026-03-04',
        url: 'https://www.irishsun.com/news/278901528/moscow-calls-out-ioc-hypocrisy-over-refusal-to-sanction-us-and-israel',
        type: 'analysis',
        description: 'The Kremlin demanded the IOC explain its "double standards" after the committee refused to penalize the U.S. and Israel over their military campaign against Iran while maintaining years-long restrictions on Russian athletes. Kremlin spokesman Dmitry Peskov contrasted the IOC\u2019s current neutral stance with its swift condemnation of Russia in 2022 as an "extremely grave violation of the Olympic Truce."',
      },
      {
        source: 'Inside The Games',
        title: 'Ukraine calls for solidarity as Paralympic boycott grows to 11 nations',
        date: '2026-03-04',
        url: 'https://www.insidethegames.biz/articles/mfa-ukraine-calls-for-olidarity-as-paralympic-boycott-grows',
        type: 'media',
        description: 'Ukraine\u2019s Foreign Affairs Ministry rallied 11 nations\u2014including Germany, Canada, and Poland\u2014to boycott the Paralympic Opening Ceremony in protest of IPC allowing Russian and Belarusian national symbols. Ukraine\u2019s Paralympic Committee president wrote to Italian PM Meloni arguing Russia is using the Games to legitimize its occupation of Ukrainian territories, citing Russian Paralympic branches established in Crimea and Sevastopol.',
      },
      {
        source: 'Inside The Games',
        title: 'Italy\u2019s sport chiefs condemn Iran strikes',
        date: '2026-03-03',
        url: 'https://www.insidethegames.biz/articles/italys-olympic-chiefs-condemn-iran-strikes',
        type: 'media',
        description: 'CONI President Luciano Buonfiglio expressed deep frustration over the breach of the Olympic Truce. Speaking ahead of the Paralympic Opening Ceremony in Verona, Italian sporting officials lamented the recurring global disrespect for the UN-sanctioned peace period.',
      },
      {
        source: 'Sport & Politics',
        title: '\u201cConflict in the Middle East,\u201d \u201cthe situation\u201d: the shameful Olympic silence',
        date: '2026-03-02',
        url: 'https://www.sportandpolitics.de/conflict-in-the-middle-east-the-situation-shameful-olympic-silence/',
        type: 'analysis',
        description: 'Critical sports journalism piece examining the lack of public condemnation from international sporting bodies regarding the breach of the Olympic Truce, highlighting the disparity in response depending on the geopolitical power of the nations involved.',
      },
      {
        source: 'NPR',
        title: 'Mideast clashes breach Olympic truce as athletes gather for Winter Paralympic Games',
        date: '2026-03-01',
        url: 'https://newsfeed.wtjx.org/2026-03-01/mideast-clashes-breach-olympic-truce-as-athletes-gather-for-winter-paralympic-games',
        type: 'media',
        description: 'Airstrikes involving Israel, the United States, and Iran shattered the Olympic Truce ahead of the Winter Paralympic Games. The conflict disrupted international air traffic, stranding families of para-athletes attempting to travel through Middle East transit hubs.',
      },
      {
        source: 'Devdiscourse',
        title: 'Global Sporting Events Thrown Into Chaos Amid Middle East Tensions',
        date: '2026-03-02',
        url: 'https://www.devdiscourse.com/article/sports-games/3824896-global-sporting-events-thrown-into-chaos-amid-middle-east-tensions',
        type: 'media',
        description: 'Coverage of how Middle East military operations disrupted global sporting events, including the 2026 Winter Paralympics and tennis tournaments in the Gulf.',
      },
      {
        source: 'AP (via The Morning Call)',
        title: 'Tennis stars in Dubai and Paralympians face travel issues as Middle East war continues',
        date: '2026-03-02',
        url: 'https://www.mcall.com/2026/03/02/iran-war-sports-travel-issues/',
        type: 'media',
        description: 'Airspace closures across Iran, Iraq, Kuwait, Israel, Bahrain, and Qatar forced the shutdown of Dubai International Airport, stranding athletes. Paralympic contingents faced delays reaching Italy.',
      },
    ],
  },
  // === PHASE 2 ===
  {
    title: 'Preparations and Global Appeals as the Truce Period Begins',
    dateRange: 'February 1 \u2013 February 26, 2026',
    items: [
      {
        source: 'IOC Newsroom',
        title: 'IOC President Kirsty Coventry joins athletes to sign Milano Cortina 2026 Olympic Truce Mural',
        date: '2026-02-06',
        url: 'https://newsroom.olympics.com/record/3166',
        type: 'official',
        description: 'Coventry signed the Olympic Truce Mural in the Milan Olympic Village alongside athletes including IOC Athletes\u2019 Commission Chair Emma Terho ahead of the Opening Ceremony.',
      },
      {
        source: '3BL Media / IOC',
        title: 'United Nations Calls for Global Observance of Olympic Truce To Ensure Safe Passage for Athletes',
        date: '2026-02-09',
        url: 'https://www.3blmedia.com/news/united-nations-calls-global-observance-olympic-truce-ensure-safe-passage-athletes-and',
        type: 'official',
        description: 'Days before the Opening Ceremony, the UN General Assembly issued a solemn global appeal, urging all Member States to uphold the truce and specifically requesting safe passage for all athletes to Italy.',
      },
      {
        source: 'Vatican News',
        title: 'Pope appeals for Olympic truce ahead of 2026 Winter Games',
        date: '2026-02-06',
        url: 'https://www.vaticannews.va/en/pope/news/2026-02/pope-leo-xiv-angelus-appeal-winter-olympic-truce.html',
        type: 'official',
        description: 'Pope Leo XIV issued a letter on Opening Ceremony day urging nations to respect the Olympic Truce, calling it \u201ca symbol and promise of a reconciled world.\u201d',
      },
      {
        source: 'Formiche',
        title: 'La Tregua olimpica ha bisogno di sostenitori. L\u2019appello di Hugh Dugan',
        date: '2026-02-06',
        url: 'https://formiche.net/2026/02/la-tregua-olimpica-ha-bisogno-di-sostenitori-lappello-di-hugh-dugan/',
        type: 'analysis',
        description: 'Hugh Dugan appeals for active supporters of the Olympic Truce, arguing that the tradition requires committed backing amid contemporary civil wars and highlighting the new Truce Compliance Index as an accountability mechanism.',
      },
      {
        source: 'Olympics.com',
        title: 'The Olympic Truce Wall, a symbol of peace and participation',
        date: '2026-02-02',
        url: 'https://www.olympics.com/en/milano-cortina-2026/news/the-olympic-truce-wall-a-symbol-of-peace-and-participation',
        type: 'official',
        description: 'The Milano Cortina 2026 organizing committee unveiled the Olympic Truce Wall in the Olympic Villages. Continuing a tradition from the 2004 Athens Games, athletes are invited to sign the mural as a personal commitment to peace.',
      },
      {
        source: 'The Washington Post',
        title: 'Olympic ceasefire calls lay bare the scale of global conflict',
        date: '2026-02-02',
        url: 'https://www.washingtonpost.com/world/2026/02/02/olympics-ceasefire-winter-games-italy-ukraine-gaza-sudan/',
        type: 'analysis',
        description: 'Analysis of how the Olympic ceasefire tradition exposes the scale of ongoing global conflicts, including Ukraine, Gaza, and Sudan, as the Winter Games approach.',
      },
      {
        source: 'X / @andrii_sybiha',
        title: 'Ukraine FM Reports Massive Russian Drone & Missile Attack on Three Cities',
        date: '2026-02-12',
        url: 'https://x.com/andrii_sybiha/status/2021811503121260589',
        type: 'media',
        description: 'Ukraine\u2019s Foreign Minister documents ongoing Russian attacks during the Olympic Truce period, including drone and missile strikes on multiple cities.',
      },
      {
        source: 'CIVICUS Lens',
        title: 'Olympic Truce: \u2018A call for states to exercise restraint and facilitate humanitarian access\u2019',
        date: '2026-02-17',
        url: 'https://lens.civicus.org/interview/olympic-truce-a-call-for-states-to-exercise-restraint-and-facilitate-humanitarian-access/',
        type: 'analysis',
        description: 'In-depth interview where Dugan discusses the modern revival of the Olympic Truce and the launch of the Truce Compliance Index, explaining how the Truce Foundation is working to transform the symbolic truce into an accountability mechanism.',
      },
      {
        source: 'Fox News',
        title: 'Italy cheers faith and flag in Milan after Paris\u2019 \u2018woke\u2019 Olympic spectacle sparked culture clash, experts say',
        date: '2026-02-17',
        url: 'https://www.foxnews.com/world/italy-cheers-faith-flag-milan-after-paris-woke-olympic-spectacle-sparked-culture-clash-experts-say',
        type: 'media',
        description: 'Dugan provides commentary comparing the opening ceremonies of Paris 2024 and Milano-Cortina 2026, arguing that Milan\u2019s ceremony centered its message on heritage, human connection, and the Olympic Truce.',
      },
      {
        source: 'Principality of Monaco',
        title: 'Monaco Honored at The Truce Foundation Awards Ceremony during Milano-Cortina 2026',
        date: '2026-02-13',
        url: 'https://mission-onu-ny.gouv.mc/actualites/monaco-honored-at-the-truce-foundation-awards-ceremony-during-milano-cortina-2026',
        type: 'official',
        description: 'Coverage of the Truce Foundation Awards Ceremony in Milan, where Dugan presented the President\u2019s Award to Monaco\u2019s Permanent Representative to the UN and introduced the Truce Compliance Index to international dignitaries.',
      },
      {
        source: 'Deseret News',
        title: 'The Olympic Truce reminds humanity that harmony is possible',
        date: '2026-02-11',
        url: 'https://www.deseret.com/opinion/2026/02/11/olympic-truce-humanity-harmony-armonia/',
        type: 'analysis',
        description: 'Hugh Dugan argues that while the Olympics cannot resolve global conflicts, the ceremonial Olympic Truce interrupts cynicism and demonstrates humanity\u2019s capacity for cooperation by bringing rival nations together in shared purpose.',
      },
      {
        source: 'The Royal Gazette',
        title: 'Apierion team-up aims to stop corruption at Winter Olympics',
        date: '2026-02-11',
        url: 'https://www.royalgazette.com/international-business/business/article/20260211/apierion-team-up-aims-to-stop-corruption-at-winter-olympics/',
        type: 'media',
        description: 'Details the collaboration between the Truce Foundation and Apierion, with Dugan explaining how the Truce Compliance Index leverages \u201cDigital Medical Twin\u201d technology for anti-doping compliance monitoring.',
      },
      {
        source: 'Il Riformista',
        title: 'La Tregua Olimpica \u00e8 un obbligo morale. Il reset globale che ci d\u00e0 ancora una possibilit\u00e0',
        date: '2026-02-10',
        url: 'https://www.ilriformista.it/la-tregua-olimpica-e-un-obbligo-morale-il-reset-globale-che-ci-da-ancora-una-possibilita-499358/',
        type: 'analysis',
        description: 'Hugh Dugan writes in Italian media that the Olympic Truce represents a moral obligation \u2014 a global reset demonstrating that peaceful coexistence remains achievable, as exemplified by the Milano-Cortina 2026 Opening Ceremony.',
      },
    ],
  },
  // === PHASE 1 ===
  {
    title: 'The UN General Assembly Adopts the Olympic Truce Resolution',
    dateRange: 'October 2025 \u2013 January 31, 2026',
    items: [
      {
        source: 'Euronews',
        title: 'UN calls for 52-day pause in global wars ahead of Milan Cortina Winter Olympics',
        date: '2026-01-30',
        url: 'https://www.euronews.com/2026/01/30/un-calls-for-52-day-pause-in-global-wars-ahead-of-milan-cortina-winter-olympics',
        type: 'media',
        description: 'Coverage of the start of the 52-day Olympic Truce window, covering the Feb 6\u201322 Winter Games and Mar 6\u201315 Paralympics plus a week on either side.',
      },
      {
        source: 'UN News',
        title: 'Olympic Truce: \u2018Humanity can find common ground through sport\u2019',
        date: '2025-11-19',
        url: 'https://news.un.org/en/story/2025/11/1166405',
        type: 'official',
        description: 'The 80th Session of the UNGA officially adopted the Olympic Truce resolution. President Annalena Baerbock urged the 165 co-sponsoring Member States to honor the tradition, highlighting sport as a rare space where people can meet as equals.',
      },
      {
        source: 'UN Press',
        title: 'General Assembly Adopts Olympic Truce Resolution, Citing Sport\u2019s Unifying Power',
        date: '2025-11-19',
        url: 'https://press.un.org/en/2025/ga12732.doc.htm',
        type: 'official',
        description: 'Official UN meetings coverage of the consensus adoption of resolution A/80/L.10, calling on Member States to observe the Olympic Truce from January 30 through March 22, 2026.',
      },
      {
        source: 'Olympics.com',
        title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
        date: '2025-11-19',
        url: 'https://www.olympics.com/ioc/news/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations',
        type: 'official',
        description: 'IOC coverage of the resolution adoption. IOC President Kirsty Coventry and Milano Cortina 2026 OC President Giovanni Malag\u00f2 addressed the General Assembly.',
      },
      {
        source: 'Italian Ministry of Foreign Affairs',
        title: 'UN General Assembly adopts Italy\u2019s Resolution on the Olympic Truce',
        date: '2025-11-19',
        url: 'https://www.esteri.it/en/sala_stampa/archivionotizie/comunicati/2025/11/la-risoluzione-italiana-sulla-tregua-olimpica-per-milano-cortina-2026-adottata-dallassemblea-generale-dellonu/',
        type: 'official',
        description: 'Italian government\u2019s official announcement of the resolution they steered in coordination with the IOC and the Milano Cortina Foundation.',
      },
      {
        source: 'ANOC',
        title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
        date: '2025-11-19',
        url: 'https://www.anocolympic.org/olympic-movement/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations/',
        type: 'official',
        description: 'Association of National Olympic Committees\u2019 coverage of the UNGA resolution calling for a truce period from January 30 through March 22, 2026.',
      },
    ],
  },
];

// Key talking points for journalists
const KEY_TALKING_POINTS = [
  {
    stat: '6+',
    label: 'Active Violators',
    context: 'Russia, Israel, USA, Iran, Sudan, Myanmar violating during Truce window',
  },
  {
    stat: '22',
    label: 'Countries Affected',
    context: 'Conflict incidents tracked across 22 nations during the Truce period',
  },
  {
    stat: '166',
    label: 'UN Co-Sponsors',
    context: 'Out of 193 member states co-sponsored the Truce resolution',
  },
  {
    stat: '52 days',
    label: 'Truce Window',
    context: 'January 30 - March 22, 2026 (per UN Resolution A/80/L.10)',
  },
];

// B-roll and visual assets
const VISUAL_ASSETS = [
  {
    name: 'Middle East Flight Chaos in 5 Charts',
    description: 'CNN interactive data visualization — 14,000 canceled flights across 10 countries',
    icon: '📊',
    url: 'https://edition.cnn.com/travel/middle-east-flights-travel-conflict-vis',
  },
  {
    name: 'UN General Assembly Adoption',
    description: 'Video footage from November 19, 2025 resolution adoption',
    icon: '🎬',
    url: 'https://media.un.org/unifeed/en/asset/d350/d3504531',
  },
  {
    name: 'Resolution Document A/80/L.10',
    description: 'Official UN document (PDF)',
    icon: '📄',
    url: '/downloads/A_80_L.10-EN.pdf',
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resources for journalists covering the Olympic Truce and its unprecedented violations during Milano Cortina 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Situation Brief */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-red-50 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-red-900 mb-3">Situation Brief: March 6, 2026</h2>
            <div className="space-y-3 text-sm text-red-900/80">
              <p>
                The Milano Cortina 2026 Olympic Truce (Jan 30 - Mar 22) has been shattered by the most severe violations in modern Olympic history. On February 28, the United States and Israel launched coordinated strikes on Iranian nuclear and military facilities, including a targeted operation that killed Supreme Leader Ayatollah Khamenei. Iran responded with the largest missile barrage in its history, striking 11 countries: Israel, Saudi Arabia, UAE, Bahrain, Kuwait, Qatar (Al Udeid/CENTCOM), Iraq (Erbil/Al-Asad), Jordan, Oman, Cyprus (RAF Akrotiri), and Azerbaijan.
              </p>
              <p>
                The conflict has devastated global aviation: nearly 14,000 flights have been canceled across 10 Middle Eastern countries. Dubai International — a hub connecting 291 destinations — dropped 85% of scheduled flights; Doha lost 94%. Paralympic delegations from Asia and Africa relying on Gulf airports faced severe delays reaching Milano Cortina, directly violating the ekecheiria&apos;s guarantee of safe passage to the Games.
              </p>
              <p>
                This escalation occurred against a backdrop of ongoing violations: Russia continued its large-scale invasion of Ukraine with daily missile and drone attacks throughout the Truce period. The Lebanon-Israel ceasefire collapsed with 80,000 displaced. The DRC ceasefire collapsed as M23 captured Uvira. The wars in Sudan, Afghanistan-Pakistan (56 dead, 163,000 displaced), Myanmar, and Ecuador all intensified.
              </p>
              <p>
                The Truce Index is tracking incidents across 22 countries, with Palestine, Iran, Russia, Sudan, Israel, and Ukraine recording the highest number of critical incidents. This represents the worst period of Olympic Truce violations since the modern tradition was revived in 1993.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Talking Points */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Facts: Milano-Cortina 2026 Truce Crisis</h2>
            <p className="text-gray-600 mb-6">Quick reference for reporting on the Olympic Truce violations</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_TALKING_POINTS.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-center"
                >
                  <span className="text-2xl font-bold text-gray-900 block">{point.stat}</span>
                  <span className="text-sm text-blue-500 font-medium">{point.label}</span>
                  <p className="text-xs text-gray-500 mt-2">{point.context}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage by Phase */}
      {COVERAGE_SECTIONS.map((section, sectionIndex) => (
        <section key={section.title} className={`py-12 px-4 ${sectionIndex % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <p className="text-sm font-medium text-blue-600 mb-1">{section.dateRange}</p>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/50 transition-colors group shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-semibold text-blue-600">{item.source}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            item.type === 'official'
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : item.type === 'analysis'
                              ? 'bg-purple-100 text-purple-800 border border-purple-300'
                              : 'bg-gray-100 text-gray-700 border border-gray-300'
                          }`}>
                            {item.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {(() => { const [y, m, d] = item.date.split('-'); return new Date(+y, +m - 1, +d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); })()}
                          </span>
                        </div>
                        <h3 className="text-gray-900 group-hover:text-blue-500 transition-colors text-sm font-medium mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Visual Assets / B-Roll */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visual Assets</h2>
            <p className="text-gray-600 mb-6">Video footage and documents for your coverage</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VISUAL_ASSETS.map((asset) => (
                <a
                  key={asset.name}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-gray-100/50 border border-gray-200/50 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{asset.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-400 transition-colors">
                        {asset.name}
                      </h3>
                      <p className="text-sm text-gray-600">{asset.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore the Index</h2>
            <p className="text-gray-600 mb-6">
              See real-time compliance data on our interactive map
            </p>
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
            >
              View Live Index
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
