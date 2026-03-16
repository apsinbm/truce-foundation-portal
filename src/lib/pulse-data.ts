// Truce Pulse - Weekly expert analysis of current events
// mapped against Olympic Truce principles

export type FocusArea =
  | 'Diplomatic Engagement'
  | 'Humanitarian Access'
  | 'De-escalation'
  | 'Regional Stability'
  | 'Safe Passage'
  | 'Participation';

export interface PulseBulletPoint {
  headline: string; // Bold label (e.g., "Iran–U.S. Indirect Talks (Oman)")
  text: string;     // Detail text
}

export interface PulseSection {
  id: string;
  title: string;
  icon: string;
  color: 'blue' | 'amber' | 'green' | 'purple';
  bullets: PulseBulletPoint[];
}

export interface PulseEntry {
  id: string;
  periodStart: string;
  periodEnd: string;
  periodLabel: string;
  focusAreas: FocusArea[];
  sections: PulseSection[];
  overallAlignment: {
    level: 'strong' | 'moderate' | 'weak' | 'critical';
    summary: string;
  };
  keyConstraints: string[];
  publishedAt: string;
}

export const PULSE_ENTRIES: PulseEntry[] = [
  {
    id: 'pulse-2026-03-14-15-safe-passage-healthcare-escalation',
    periodStart: '2026-03-14',
    periodEnd: '2026-03-15',
    periodLabel: '14\u201315 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Civilian Transit Infrastructure Under Direct Attack',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Baghdad International Airport Struck by Missile',
            text: 'A missile strike on Baghdad International Airport injured four people, demonstrating the vulnerability of critical civilian infrastructure during periods of escalation. Kataib Hezbollah\u2019s claim that its rockets also struck Camp Victory, alongside a preceding attack on the U.S. Embassy, illustrates a pattern of hostilities encroaching on areas essential for civilian movement and humanitarian operations.',
          },
          {
            headline: 'Strait of Hormuz Reopening Efforts Highlight Supply Route Fragility',
            text: 'Calls for multinational naval deployments to reopen the Strait of Hormuz highlight the fragility of global supply routes and the potential for disruptions that affect civilian populations far beyond the region. The deployment of additional U.S. naval and air assets to expand military options against Iran signals a widening operational footprint at a moment when de-escalation is urgently needed to preserve humanitarian space.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Healthcare Workers and Facilities Targeted in Lebanon',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Primary Healthcare Center Strike Kills 12 Medical Staff',
            text: 'In Lebanon, a strike on the Bourj Qalaouiyeh primary healthcare center killed 12 doctors, paramedics, and nurses. At least 31 health professionals have been killed since March 2. Attacks on medical personnel and facilities directly undermine humanitarian access and impede the delivery of life-saving services\u2014acute violations of the protections the Olympic Truce seeks to reinforce.',
          },
          {
            headline: 'Israeli Ground Operations Expand Amid Hezbollah Missile Barrages',
            text: 'The expansion of Israeli ground operations into southern Lebanon, combined with Hezbollah\u2019s launch of more than 200 missiles, reflects a rapidly deteriorating security landscape that constrains humanitarian actors\u2019 ability to reach affected populations.',
          },
        ],
      },
      {
        id: 'escalation',
        title: 'Civilian Toll Mounts Across Gaza, West Bank, and Afghanistan',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Killings Include Children and Pregnant Woman',
            text: 'In Gaza, the killing of civilians\u2014including two boys, a pregnant woman, and eight police officers\u2014further illustrates the disproportionate humanitarian impact of ongoing hostilities. The Truce\u2019s call for the calming of global tensions is particularly relevant in densely populated areas where the risks to civilians are magnified.',
          },
          {
            headline: 'West Bank Family of Four Fatally Shot',
            text: 'In the West Bank, Israeli soldiers fatally shot a family of four after reportedly sensing danger, highlighting the volatility of civilian movement in contested spaces. The Olympic Truce framework emphasizes predictable, secure conditions for families and individuals to travel without fear of sudden escalation.',
          },
          {
            headline: 'Pakistani Airstrikes Kill 75 Civilians in Afghanistan',
            text: 'Pakistani airstrikes in Afghanistan killed at least 75 civilians and displaced 115,000 people, with strikes on residential areas, civilian infrastructure, and over 20 healthcare facilities. These actions represent clear obstacles to the Truce\u2019s humanitarian objectives and demonstrate the global scope of challenges to humanitarian access.',
          },
        ],
      },
      {
        id: 'global-systemic',
        title: 'Cyber Domain Extends Conflict\u2019s Humanitarian Impact',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Cyberattack Disrupts U.S. Medical Equipment Company',
            text: 'A likely Iranian cyberattack on a U.S. medical-equipment company forced tens of thousands of employees offline, illustrating how modern conflict can disrupt health systems and impede humanitarian readiness. This expands the Truce\u2019s relevance into the digital domain, where attacks on health-related infrastructure carry consequences for patient care and emergency response.',
          },
          {
            headline: 'French Proposal Offers Rare Diplomatic Opening',
            text: 'Across these developments, diplomatic openings remain limited, though the French proposal for Lebanon\u2013Israel talks offers a rare alignment with the Truce\u2019s encouragement of dialogue. The widening gap between current conflict dynamics and the Olympic Truce\u2019s aspirations for safe passage, humanitarian access, and the calming of hostilities underscores the framework\u2019s continued necessity.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Events across March 14\u201315 reflect a global security environment marked by heightened military activity, constrained humanitarian access, and diminishing diplomatic space. A missile strike on Baghdad International Airport, the killing of 12 healthcare workers at a Lebanese primary care center, civilian deaths in Gaza and the West Bank, Pakistani airstrikes killing 75 civilians in Afghanistan, and a cyberattack disrupting a U.S. medical-equipment company collectively illustrate the widening gap between current conflict dynamics and the Olympic Truce\u2019s aspirations. The French proposal for Lebanon\u2013Israel talks offers a rare diplomatic alignment, but the overall trajectory continues to diverge sharply from the Truce\u2019s call for safe passage, protection of civilians, and the calming of hostilities.',
    },
    keyConstraints: [
      'Missile strike on Baghdad International Airport injured four, demonstrating the vulnerability of critical civilian transit infrastructure during escalation.',
      'Strike on Bourj Qalaouiyeh healthcare center killed 12 medical staff; at least 31 health professionals killed in Lebanon since March 2.',
      'Civilians killed in Gaza including children and a pregnant woman; a family of four fatally shot in the West Bank.',
      'Pakistani airstrikes in Afghanistan killed at least 75 civilians, displaced 115,000, and struck over 20 healthcare facilities.',
      'Likely Iranian cyberattack on U.S. medical-equipment company forced tens of thousands offline, extending conflict\u2019s impact into the digital domain.',
    ],
    publishedAt: '2026-03-16',
  },
  {
    id: 'pulse-2026-03-12-safe-passage-humanitarian-escalation-global',
    periodStart: '2026-03-12',
    periodEnd: '2026-03-12',
    periodLabel: '12 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Naval Mines and Strait Threats Endanger Civilian Maritime Routes',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Strait of Hormuz Blocked by Naval Mines',
            text: 'The reported laying of naval mines and threats to block the Strait of Hormuz represent a significant risk to civilian maritime traffic and commercial shipping routes essential for global energy supplies and humanitarian trade. These conditions illustrate a clear divergence from the Truce\u2019s call to safeguard routes used for peaceful movement and essential civilian needs.',
          },
          {
            headline: 'Civilian Supply Chains Disrupted',
            text: 'Disruptions to shipping, rising insurance premiums, and stranded cargo underscore how restrictions on transit extend beyond military considerations to affect civilian populations worldwide, including access to fuel, food, and medicine. Safe passage, a central principle of the Olympic Truce, is directly implicated by these developments.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Airstrikes on Populated Areas Constrain Humanitarian Space',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Strikes Near Civilian and Academic Infrastructure',
            text: 'Airstrikes and missile attacks on populated areas in Iran, Israel, and Lebanon have damaged residential compounds and struck in the vicinity of academic institutions. Evacuation warnings issued to civilians highlight environments in which humanitarian actors face constrained access and elevated risk.',
          },
          {
            headline: 'Bombed Girls\u2019 School Raises Civilian Protection Concerns',
            text: 'Reporting on a bombed girls\u2019 school raises concerns directly related to the protection of civilian infrastructure, which is foundational to maintaining humanitarian space during conflict. The cumulative effects point to conditions in which the Truce\u2019s emphasis on protecting civilians and enabling assistance is under acute strain.',
          },
        ],
      },
      {
        id: 'escalation',
        title: 'Widening Conflict Scope Counters Calls for Restraint',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Cross-Border Military Operations Expand',
            text: 'The expansion of military operations across borders, combined with rhetoric signaling prolonged confrontation and retaliation, reflects dynamics counter to the Truce\u2019s objective of encouraging restraint during symbolic periods dedicated to peace.',
          },
          {
            headline: 'Energy Volatility, Arms Transfers, and Diplomatic Tensions',
            text: 'Spillover effects\u2014including energy market volatility, arms transfers in other regions, and heightened diplomatic tensions\u2014demonstrate how localized conflicts amplify global instability, reinforcing the Truce\u2019s relevance as a mechanism for collective de-escalation.',
          },
        ],
      },
      {
        id: 'global-systemic',
        title: 'Systemic Consequences Underscore Truce Rationale',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Economic Shocks Ripple Beyond Conflict Zones',
            text: 'Sustained hostilities are producing economic shocks and political pressures affecting countries far removed from the immediate theaters of conflict. These ripple effects align with the Olympic Truce\u2019s underlying rationale: that temporary pauses, restraint, and dialogue can reduce civilian harm and prevent cascading crises that undermine international cooperation.',
          },
          {
            headline: 'Truce Principles Remain a Critical Reference Point',
            text: 'Today\u2019s events continue to illustrate not only areas where Olympic Truce principles are challenged, but also why those principles remain a critical reference point for international actors seeking to protect civilians, preserve humanitarian access, and reduce the risks of wider confrontation during periods of global attention and symbolic unity.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Today\u2019s events present multiple points of intersection with the Olympic Truce\u2019s call for restraint, protection of civilians, and the facilitation of safe passage and humanitarian access. Naval mines threatening the Strait of Hormuz endanger civilian maritime routes essential for global trade. Airstrikes on populated areas in Iran, Israel, and Lebanon\u2014including strikes near academic institutions and a bombed girls\u2019 school\u2014constrain humanitarian space. The widening geographic and political scope of the conflict, with cross-border military operations and rhetoric of prolonged confrontation, runs counter to the Truce\u2019s objective of calming hostilities. Systemic consequences, including economic shocks and diplomatic tensions far from the conflict zone, reinforce the Truce\u2019s continued relevance as a framework for de-escalation and civilian protection.',
    },
    keyConstraints: [
      'Naval mines laid and threats to block the Strait of Hormuz, disrupting civilian maritime traffic and global energy and humanitarian trade routes.',
      'Airstrikes and missile attacks on populated areas in Iran, Israel, and Lebanon, including damage to residential compounds, academic institutions, and a girls\u2019 school.',
      'Cross-border military expansion and rhetoric of prolonged confrontation counter the Truce\u2019s calls for restraint during periods dedicated to peace.',
      'Systemic spillover effects\u2014energy market volatility, arms transfers, and diplomatic tensions\u2014demonstrate how localized conflicts cascade into global instability.',
    ],
    publishedAt: '2026-03-13',
  },
  {
    id: 'pulse-2026-03-11-displacement-maritime-civilian-protection',
    periodStart: '2026-03-11',
    periodEnd: '2026-03-11',
    periodLabel: '11 March 2026',
    focusAreas: ['Humanitarian Access', 'Safe Passage', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'displacement',
        title: 'Mass Displacement Strains Humanitarian Corridors',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Millions Flee Iranian Urban Centers',
            text: 'Large-scale displacement within Iran, with millions fleeing urban centers toward rural and northern areas, highlights an urgent need for safe passage and unimpeded humanitarian access. Population movements of this magnitude place significant strain on local capacities and create heightened vulnerability for civilians, particularly where active hostilities persist or where infrastructure has been damaged.',
          },
          {
            headline: 'Humanitarian Agencies Require Predictable Security Conditions',
            text: 'The Olympic Truce\u2019s emphasis on ensuring corridors for civilian movement and relief operations is directly implicated by such displacement, as humanitarian agencies require predictable security conditions to deliver assistance and protection.',
          },
        ],
      },
      {
        id: 'maritime-strikes',
        title: 'Maritime Attacks Expand Conflict Beyond Land Zones',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Commercial Vessels Attacked in Strait of Hormuz',
            text: 'Maritime incidents in the Strait of Hormuz and adjacent waters further illustrate the Truce\u2019s relevance beyond land-based combat zones. Attacks on commercial vessels, resulting in loss of life and disruption to global energy flows, demonstrate how armed confrontations can rapidly expand their humanitarian and economic impact.',
          },
          {
            headline: 'Restraint in Strategic Corridors Could Prevent Cascading Effects',
            text: 'The Olympic Truce\u2019s call for the calming of hostilities is particularly salient in such strategic corridors, where restraint could reduce risks to civilian mariners and prevent cascading effects on global supply chains that indirectly affect civilian populations far beyond the immediate conflict area.',
          },
        ],
      },
      {
        id: 'civilian-protection',
        title: 'Urban Strikes and Cyber Operations Threaten Civilian Protection',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Strikes on Residential Areas and Civilian Infrastructure',
            text: 'Air and missile strikes impacting densely populated urban areas, including strikes on residential neighborhoods and civilian infrastructure, raise acute concerns aligned with the Truce\u2019s humanitarian principles. Civilian casualties, damage to housing, and attacks affecting schools and medical facilities undermine the protected status of such sites under international humanitarian law.',
          },
          {
            headline: 'Cyberattack on Medical Device Manufacturer',
            text: 'Cyber operations affecting a major medical device manufacturer intersect with the Truce\u2019s humanitarian dimension. Even where cyber incidents are not accompanied by physical destruction, disruptions to medical supply chains or health-related systems carry potential consequences for patient care and emergency response. The Truce\u2019s broader appeal for restraint in all forms of conflict is relevant in mitigating indirect harms that disproportionately affect civilians and essential services.',
          },
        ],
      },
      {
        id: 'global-spillover',
        title: 'Global Spillover Compounds Humanitarian Risk',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'West Bank Violence and Reduced Defensive Systems for Ukraine',
            text: 'Spillover effects across other regions\u2014including violence in the West Bank, reduced availability of defensive systems for Ukraine, and lethal strikes affecting aid workers and civilians in Africa\u2014demonstrate how concurrent conflicts compound humanitarian risk globally.',
          },
          {
            headline: 'Truce as Practical Humanitarian Mechanism',
            text: 'The Olympic Truce\u2019s call for a pause in hostilities serves not only symbolic unity but also practical humanitarian benefit, offering space for diplomacy, assistance delivery, and the prevention of further escalation across interconnected crises.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Today\u2019s developments demonstrate the widening humanitarian impact of ongoing hostilities across multiple domains\u2014from the mass displacement of millions within Iran, to maritime attacks threatening global energy corridors, to airstrikes on civilian infrastructure and cyberattacks on medical supply chains. The spillover into the West Bank, Ukraine, and Africa underscores how interconnected crises compound humanitarian risk far beyond any single theater. The Olympic Truce\u2019s principles of safe passage, civilian protection, and restraint remain urgently relevant, yet the gap between these norms and conditions on the ground continues to widen.',
    },
    keyConstraints: [
      'Millions displaced within Iran from urban centers toward rural and northern areas, placing acute strain on humanitarian corridors and local capacities.',
      'Maritime attacks on commercial vessels in the Strait of Hormuz resulting in loss of life and disruption to global energy flows, expanding the conflict\u2019s humanitarian impact beyond land-based zones.',
      'Air and missile strikes on densely populated urban areas, including residential neighborhoods, schools, and medical facilities, undermining the protected status of civilian sites.',
      'Cyber operations affecting a major medical device manufacturer carry potential consequences for patient care and emergency response, extending conflict\u2019s reach into health-related systems.',
      'Spillover effects\u2014including West Bank violence, reduced defensive systems for Ukraine, and lethal strikes on aid workers in Africa\u2014demonstrate how concurrent conflicts compound global humanitarian risk.',
    ],
    publishedAt: '2026-03-12',
  },
  {
    id: 'pulse-2026-03-10-maritime-insecurity-humanitarian-strain',
    periodStart: '2026-03-10',
    periodEnd: '2026-03-10',
    periodLabel: '10 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'maritime-insecurity',
        title: 'Maritime Insecurity Threatens Safe Passage',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Strait of Hormuz Attacks Intensify',
            text: 'Maritime insecurity in the Strait of Hormuz has intensified, with three vessels struck by unknown projectiles and a total of 14 ships hit since the start of the conflict. Such attacks undermine the principle of safe passage, particularly in a waterway essential for global commerce and humanitarian logistics.',
          },
          {
            headline: 'U.S. Destroys Iranian Mine-Laying Vessels',
            text: 'The U.S. destruction of 16 Iranian mine-laying naval vessels further underscores the volatility of this corridor and the heightened risk to civilian shipping. Confusion over whether the U.S. Navy escorted an oil tanker\u2014later retracted as incorrectly captioned\u2014illustrates the fragility of communication channels during crises, complicating efforts to ensure safe maritime passage.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Humanitarian Access Blocked by Refusal to Pause Hostilities',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Israeli Airstrikes Kill at Least 95 in Lebanon',
            text: 'In Lebanon, the humanitarian situation is deteriorating rapidly. Israeli airstrikes killed at least 95 people, and negotiations remain stalled as Israel has rejected Lebanon\u2019s demand for a complete end to airstrikes before negotiations can take place. The refusal to pause hostilities, even temporarily, directly contradicts the Truce\u2019s call for de-escalation to enable dialogue and relief operations.',
          },
          {
            headline: 'France Triples Humanitarian Aid to Lebanon',
            text: 'France\u2019s decision to send 60 tons of humanitarian aid to Lebanon, tripling the volume dispatched so far, demonstrates the scale of need and the urgency of ensuring unimpeded humanitarian access. The expanding relief effort highlights the gap between humanitarian demand and the access constraints imposed by ongoing military operations.',
          },
        ],
      },
      {
        id: 'escalation',
        title: 'Widening Hostilities and Absence of Restraint',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: '17 U.S. Sites Struck, 140 Service Members Wounded',
            text: 'U.S. officials report that at least 17 damaged U.S. sites and other installations have been struck, and 140 U.S. service members have been wounded in 10 days of attacks. These patterns of repeated strikes highlight the absence of restraint and the widening scope of conflict\u2014conditions that run counter to the Truce\u2019s objective of calming global hostilities during periods of heightened international tension.',
          },
          {
            headline: 'Energy Market Destabilization Prompts Emergency Response',
            text: 'The International Energy Agency\u2019s proposal for the release of 400 million barrels of oil reflects the destabilizing effect of conflict on global energy markets. Economic disruption of this magnitude demonstrates how hostilities in one region cascade across global systems, amplifying tensions far beyond the battlefield.',
          },
        ],
      },
      {
        id: 'global-truce-relevance',
        title: 'Global Relevance of Truce Principles',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Ukraine: Continued Deportation of Children',
            text: 'In Ukraine, the continued deportation of children\u2014where 80% of them have yet to return\u2014represents a profound violation of protected humanitarian norms. The systematic removal of minors from conflict zones without return undermines the Truce\u2019s emphasis on the protection of vulnerable populations and the preservation of family unity.',
          },
          {
            headline: 'South Sudan: UN Mission Maintains Protective Presence',
            text: 'In South Sudan, the UN Mission\u2019s refusal to abandon its base in Akobo, insisting on maintaining a protective presence to civilians, aligns directly with the Truce\u2019s emphasis on safeguarding vulnerable populations amid conflict. This determination to hold ground for civilian protection offers a concrete example of Truce principles in practice.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Ongoing international events reflect a series of escalating hostilities across multiple regions that directly challenge the Olympic Truce\u2019s foundational aims. Maritime insecurity in the Strait of Hormuz, the refusal to pause airstrikes in Lebanon to enable negotiations, the widening scope of military strikes on U.S. installations, and the continued deportation of children in Ukraine collectively demonstrate an urgent need for mechanisms of restraint. Limited points of convergence\u2014including France\u2019s expanded humanitarian aid and the UN Mission\u2019s protective stance in South Sudan\u2014underscore the Truce\u2019s continued relevance as a framework for safeguarding civilians and creating openings for diplomacy.',
    },
    keyConstraints: [
      'Fourteen ships struck in the Strait of Hormuz since the start of the conflict, with three vessels hit by unknown projectiles, directly undermining the Truce\u2019s safe passage principles in a critical global waterway.',
      'Israeli airstrikes killed at least 95 people in Lebanon while negotiations remain stalled over refusal to pause hostilities, contradicting the Truce\u2019s call for de-escalation to enable dialogue.',
      'At least 17 U.S. sites struck and 140 service members wounded in 10 days of attacks, demonstrating the widening scope of conflict and absence of restraint.',
      'Continued deportation of children in Ukraine, with 80% yet to return, represents a profound violation of protected humanitarian norms central to the Truce framework.',
    ],
    publishedAt: '2026-03-11',
  },
  {
    id: 'pulse-2026-03-09-safe-passage-humanitarian-escalation',
    periodStart: '2026-03-09',
    periodEnd: '2026-03-09',
    periodLabel: '9 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage Constrained Across Multiple Domains',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Airstrikes and Missile Activity Across Five Countries',
            text: 'Airstrikes and missile activity affecting Iran, Lebanon, Syria, Bahrain, and Turkey have contributed to civilian casualties, displacement, and regional insecurity. The scale and geographic spread of ongoing military operations directly implicate the Truce\u2019s emphasis on safe passage for civilians, mediators, and neutral actors.',
          },
          {
            headline: 'Strait of Hormuz and Regional Airspace Disrupted',
            text: 'The reported disruption of flight routes, maritime traffic, and cross-border movement\u2014particularly in the Strait of Hormuz and surrounding airspace\u2014illustrates how active hostilities constrain the freedom of movement that the Truce seeks to preserve. Naval escorts for commercial shipping highlight attempts to mitigate risk, but also reflect the extent to which ordinary civilian and commercial transit has become militarized rather than safeguarded through restraint.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Humanitarian Access Under Acute Pressure',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Large-Scale Displacement in Lebanon',
            text: 'Large-scale displacement in Lebanon, including significant numbers of children, places immediate demands on humanitarian corridors, relief operations, and host-community support. The situation presents acute challenges to humanitarian access, a core pillar of the Olympic Truce.',
          },
          {
            headline: 'Mediation and Peace-Support Functions Disrupted',
            text: 'The expansion of hostilities across multiple theaters complicates the ability of humanitarian agencies to operate safely and predictably. Diplomatic and mediation efforts related to other conflicts have been delayed or suspended due to regional insecurity and travel disruptions, illustrating how intensified warfare can indirectly impede humanitarian and peace-support functions well beyond the immediate zone of combat.',
          },
        ],
      },
      {
        id: 'escalation',
        title: 'Escalation Dynamics Counter De-escalation Objectives',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Conflict Spillover Assumes Global Significance',
            text: 'The conflict\u2019s spillover effects\u2014ranging from threats to international energy supply routes to heightened military alert levels among regional and extra-regional actors\u2014demonstrate how localized warfare can rapidly assume global significance. These escalation dynamics run counter to the Truce\u2019s objective of calming global hostilities.',
          },
          {
            headline: 'Political Signals Favor Continued Military Action',
            text: 'Political statements signaling continued or intensified military action, alongside warnings of retaliatory measures affecting international commerce, contribute to an environment of uncertainty that the Olympic Truce was designed to mitigate through symbolic and practical restraint.',
          },
        ],
      },
      {
        id: 'convergence',
        title: 'Limited Convergence with Truce Principles',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Diplomatic Communications and Civilian Shipping Escorts',
            text: 'Diplomatic communications among major powers, efforts to stabilize energy markets, and discussions around escorting civilian shipping suggest an underlying recognition of the need to contain escalation and protect civilian interests. While these measures fall short of a comprehensive cessation of hostilities, they reflect partial alignment with the Truce\u2019s broader intent to reduce harm to non-combatants.',
          },
          {
            headline: 'Fragility and Relevance of the Truce Framework',
            text: 'Today\u2019s events illustrate both the fragility and continued relevance of the Olympic Truce in a highly interconnected security environment. The widespread disruption of safe passage, constraints on humanitarian access, and escalation of hostilities reinforce the importance of the Truce as a guiding framework for restraint, even when its observance remains aspirational rather than operational.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Today\u2019s events reveal multiple points of tension with the Olympic Truce\u2019s long-standing call for the protection of civilians, the facilitation of humanitarian access, and the de-escalation of armed conflict. The widespread disruption of safe passage across multiple domains, acute constraints on humanitarian operations, and escalation dynamics that extend well beyond the immediate zone of combat all underscore the gap between Truce aspirations and conditions on the ground. Limited but notable points of convergence\u2014including diplomatic communications and efforts to protect civilian shipping\u2014suggest partial recognition of Truce principles, but fall far short of the comprehensive restraint the framework envisions.',
    },
    keyConstraints: [
      'Airstrikes and missile activity affecting Iran, Lebanon, Syria, Bahrain, and Turkey have caused civilian casualties, displacement, and regional insecurity, directly implicating the Truce\u2019s safe passage principles.',
      'Large-scale displacement in Lebanon, including significant numbers of children, places acute demands on humanitarian corridors and relief operations that the Truce seeks to protect.',
      'Disruption of the Strait of Hormuz maritime traffic and regional airspace demonstrates how active hostilities constrain civilian and commercial movement, militarizing transit that the Truce aims to safeguard.',
      'Diplomatic and mediation efforts related to other conflicts have been delayed or suspended due to regional insecurity, illustrating how escalation impedes peace-support functions beyond the immediate combat zone.',
    ],
    publishedAt: '2026-03-11',
  },
  {
    id: 'pulse-2026-03-07-08-safe-passage-humanitarian-access',
    periodStart: '2026-03-07',
    periodEnd: '2026-03-08',
    periodLabel: '7\u20138 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage Jeopardized Across Multiple Theaters',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Israeli Strikes on Iranian Fuel Depots',
            text: 'Strikes on Iranian fuel infrastructure produced widespread fires and thick, oily smoke over Tehran, highlighting acute risks to civilian movement and the broader environment. The destruction of energy supply chains compounds the barriers to safe passage for civilians, humanitarian workers, and diplomatic missions.',
          },
          {
            headline: 'U.S. Cruise Missile Reportedly Strikes Girls\u2019 School Compound',
            text: 'A reported strike on a school compound in Iran killed approximately 175 students and staff, starkly illustrating the vulnerability of noncombatants and the erosion of protected civilian spaces. Such incidents directly contravene the Olympic Truce\u2019s guarantee that civilian areas remain insulated from hostilities.',
          },
          {
            headline: 'Cross-Border Spillover Threatens Regional Movement',
            text: 'Iran\u2019s Islamic Revolutionary Guard Corps claimed drone strikes on a U.S. air combat center near Abu Dhabi, and rockets targeted the U.S. Embassy in Baghdad. These cross-border actions create unpredictable security conditions that impede the movement of civilians, humanitarian personnel, and diplomatic missions across the region.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Humanitarian Access & Essential Infrastructure Under Attack',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Desalination Plant Strikes Threaten Water Supply',
            text: 'Iran\u2019s foreign minister accused the United States of striking a desalination plant on Qeshm Island, affecting the water supply of 30 villages. Separately, Bahrain reported an Iranian drone caused material damage to a desalination facility. These incidents underscore how essential civilian services become entangled in military operations, with immediate humanitarian consequences.',
          },
          {
            headline: 'Gaza: Civilians and UN Operations Targeted',
            text: 'The killing of six Palestinians\u2014including two girls\u2014during Israeli air and tank strikes in Gaza, alongside an accidental Israeli strike on a UN fuel truck, demonstrates how humanitarian operations and civilian survival depend on predictable, de-escalated conditions that the Truce seeks to foster.',
          },
        ],
      },
      {
        id: 'escalation',
        title: 'Widening Conflict Trajectory Challenges De-escalation',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S. Emergency Arms Transfers and Production Surge',
            text: 'The United States\u2019 emergency sale of thousands of bombs to Israel, the quadrupling of \u201CExquisite Class\u201D weaponry production, and discussions of potential U.S.\u2013Israeli troop deployments into Iran all signal an expanding conflict trajectory that runs directly counter to the Truce\u2019s call for calming global hostilities.',
          },
          {
            headline: 'Partial Restraint Amid Continued Retaliation',
            text: 'Iran\u2019s temporary leadership council attempted to signal restraint by suspending attacks on neighboring states unless strikes originated from their territory, yet retaliatory actions continued. Regional actors\u2014including Iraqi Kurdish leaders seeking neutrality\u2014are navigating heightened insecurity that complicates diplomatic stabilization.',
          },
        ],
      },
      {
        id: 'global-ripple',
        title: 'Global Economic & Political Ripple Effects',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Oil Prices Surge Above $100/Barrel',
            text: 'The conflict has driven oil prices above $100 per barrel, prompting G7 discussions on emergency strategic reserves. Economic volatility of this scale demonstrates how hostilities in one region destabilize global systems, amplifying tensions far beyond the battlefield.',
          },
          {
            headline: 'Truce Principles Salient Amid Global Instability',
            text: 'The Olympic Truce\u2019s emphasis on collective calm and international cooperation becomes particularly urgent when economic disruption and political polarization risk compounding the humanitarian impact of conflict across multiple continents.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Unfolding events reveal a landscape where the principles of the Olympic Truce are urgently relevant yet profoundly strained. Civilian protection, humanitarian continuity, and de-escalation remain essential benchmarks for assessing progress toward peace, but reported strikes on schools, desalination plants, and energy infrastructure\u2014alongside cross-border military actions and an expanding arms pipeline\u2014demonstrate a widening gap between the Truce\u2019s aspirations and conditions on the ground. The global economic fallout further underscores that no region is insulated from the consequences of escalation.',
    },
    keyConstraints: [
      'A reported strike on a school compound killing approximately 175 students and staff represents one of the most severe violations of civilian protection norms during the Truce period.',
      'Attacks on desalination infrastructure in both Iran and Bahrain directly threaten water access for civilian populations, implicating the Truce\u2019s humanitarian access principles.',
      'Cross-border military actions\u2014including drone strikes near Abu Dhabi and rocket attacks on the U.S. Embassy in Baghdad\u2014create unpredictable security conditions that impede safe passage across the region.',
      'Oil prices surging above $100/barrel and G7 emergency reserve discussions illustrate the global economic destabilization resulting from conflict escalation during the Truce window.',
    ],
    publishedAt: '2026-03-09',
  },
  {
    id: 'pulse-2026-03-06-civilian-protection-safe-passage',
    periodStart: '2026-03-06',
    periodEnd: '2026-03-06',
    periodLabel: '6 March 2026 \u2014 Civilian Protection, Safe Passage & Humanitarian Corridors',
    focusAreas: ['Humanitarian Access', 'Safe Passage', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'civilian-protection',
        title: 'Civilian Protection & Humanitarian Access Under Strain',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Airstrikes on Civilian Infrastructure in Lebanon and Iran',
            text: 'The scale and geographic spread of active hostilities underscore acute challenges to the Olympic Truce\u2019s call for the protection of civilians and the preservation of humanitarian space. Airstrikes in densely populated areas of southern Beirut, as well as strikes in Tehran affecting residential buildings, a medical clinic, and a gas station, reflect conditions in which civilian infrastructure is exposed to direct harm.',
          },
          {
            headline: 'WHO Verifies Attacks on Health Infrastructure',
            text: 'Reported casualties and mass displacement in Lebanon, alongside large-scale population movements out of Iran, illustrate the humanitarian consequences that the Truce seeks to mitigate. The verification by the World Health Organization of attacks on health infrastructure further highlights the tension between ongoing military operations and the Truce\u2019s emphasis on respect for humanitarian norms and uninterrupted medical access.',
          },
        ],
      },
      {
        id: 'safe-passage',
        title: 'Safe Passage & Freedom of Movement',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Strait of Hormuz Maritime Safe Passage Discussions',
            text: 'Discussions involving maritime safe passage through the Strait of Hormuz represent a partial alignment with the Truce\u2019s principle of safe passage, as they aim to reduce risks to shipping and maintain the flow of critical energy supplies. While driven by economic and strategic considerations, such efforts nonetheless resonate with the Truce\u2019s broader call to prevent the escalation of conflict into domains that sustain civilian livelihoods and global stability.',
          },
          {
            headline: 'Sharp Decline in Tanker Transits Constrains Movement',
            text: 'The sharp decline in tanker transits and the concentration of vessels in the strait indicate how insecurity constrains freedom of movement, with secondary humanitarian and economic effects that extend well beyond the immediate theater of conflict.',
          },
        ],
      },
      {
        id: 'prisoner-exchange',
        title: 'Prisoner Exchange as Confidence-Building Measure',
        icon: '\u{1F91D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Ukraine\u2013Russia Prisoner Exchange',
            text: 'The exchange of prisoners of war between Ukraine and Russia provides a notable point of convergence with the Olympic Truce\u2019s humanitarian ethos. Prisoner exchanges are internationally recognized confidence-building measures that can reduce immediate human suffering and signal limited cooperation even amid ongoing conflict.',
          },
          {
            headline: 'Human Dignity at the Forefront',
            text: 'Such actions align with the Truce\u2019s objective of fostering pauses in hostility that place human dignity at the forefront, even if they do not constitute a broader cessation of fighting.',
          },
        ],
      },
      {
        id: 'regional-displacement',
        title: 'Regional Conflict & Civilian Displacement',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Pakistan\u2013Afghanistan Border Displacement',
            text: 'The reporting on displacement resulting from fighting along the Pakistan\u2013Afghanistan border highlights the Truce\u2019s relevance beyond high-profile conflicts. Large-scale civilian displacement, contested casualty figures, and ongoing cross-border fire demonstrate how regional conflicts contribute cumulatively to global instability.',
          },
          {
            headline: 'Diplomatic Appeals for Restraint Echo Truce Norms',
            text: 'The overall international response\u2014ranging from diplomatic criticism of perceived breaches of international law to efforts to manage economic fallout\u2014illustrates the interconnected nature of modern conflict. Statements emphasizing the erosion of international law and calls for de-escalation echo the normative foundations of the Olympic Truce, which seeks to leverage global sporting moments to reaffirm commitments to peace, legality, and multilateral cooperation.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Today\u2019s events do not indicate adherence to a comprehensive calming of hostilities. However, they reveal discrete points where Truce principles are implicitly engaged: in humanitarian access debates, in efforts to secure safe passage, in prisoner exchanges, and in diplomatic appeals for restraint. These intersections underscore both the continued relevance of the Olympic Truce and the gap between its aspirations and the realities of contemporary conflict.',
    },
    keyConstraints: [
      'Airstrikes on densely populated areas in Lebanon and Iran, including strikes affecting residential buildings, a medical clinic, and a gas station, directly contravene the Olympic Truce\u2019s call for the protection of civilians and preservation of humanitarian space.',
      'The sharp decline in Strait of Hormuz tanker transits and the concentration of stranded vessels demonstrate how insecurity constrains freedom of movement, with cascading humanitarian and economic effects across multiple regions.',
      'Large-scale civilian displacement along the Pakistan\u2013Afghanistan border, with contested casualty figures and ongoing cross-border fire, illustrates how regional conflicts beyond headline crises contribute cumulatively to global instability.',
    ],
    publishedAt: '2026-03-06',
  },
  {
    id: 'pulse-2026-03-05-paralympic-boycott-safe-passage',
    periodStart: '2026-03-05',
    periodEnd: '2026-03-05',
    periodLabel: '5 March 2026 \u2014 Paralympic Boycott, Safe Passage & Humanitarian Corridors',
    focusAreas: ['Safe Passage', 'Diplomatic Engagement', 'Humanitarian Access', 'Participation'],
    sections: [
      {
        id: 'diplomatic-boycott',
        title: 'Paralympic Ceremony Boycott Invokes Truce Norms',
        icon: '\u{1F3DB}\u{FE0F}',
        color: 'purple',
        bullets: [
          {
            headline: 'Growing Coalition Boycotts Opening Ceremony',
            text: 'A growing group of states has announced a diplomatic boycott of the Paralympic opening ceremony, explicitly referencing the continued violation of the Olympic Truce in the context of an ongoing international armed conflict. The boycott signals a concern that the presence of state symbols associated with active hostilities risks normalizing conflict within a space traditionally reserved for peaceful competition.',
          },
          {
            headline: 'Truce as Safeguard Against Political Instrumentalization of Sport',
            text: 'This response illustrates how the Truce functions not only as a call for cessation of hostilities, but also as a safeguard against the political instrumentalization of sport during wartime. While the boycott does not impede athlete participation or cross-border movement, it underscores the expectation that periods linked to the Olympic and Paralympic Games should be insulated from the symbolism and conduct of war.',
          },
        ],
      },
      {
        id: 'safe-passage',
        title: 'Safe Passage for Athletes Preserved Despite Tensions',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Host Authorities Guarantee Freedom of Movement',
            text: 'Italian authorities, while expressing diplomatic disagreement with certain aspects of participation, have explicitly clarified that no action will be taken to block visas for athletes or their entourages. This distinction aligns closely with the Olympic Truce\u2019s emphasis on freedom of movement and non-discrimination for participants.',
          },
          {
            headline: 'Athletes Not Penalized by Geopolitical Disputes',
            text: 'The deliberate effort by host-state authorities and international actors to preserve safe passage ensures that individuals are not penalized through travel restrictions or denied access to competition venues as a consequence of geopolitical disputes. This represents a practical application of the Truce\u2019s core principles even amid significant political opposition.',
          },
        ],
      },
      {
        id: 'humanitarian-corridors',
        title: 'Humanitarian Corridors & Civilian Displacement',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Tens of Thousands Evacuated Through Coordinated Corridors',
            text: 'The intensification of military operations in the Middle East and the resulting civilian displacement demonstrate the Truce\u2019s relevance beyond the immediate Olympic sphere. The evacuation of tens of thousands of civilians through coordinated flights and border crossings illustrates the practical importance of safe passage and humanitarian corridors during periods of heightened conflict.',
          },
          {
            headline: 'Truce Principles Applied Beyond Olympic Operations',
            text: 'Although these movements are not formally linked to Olympic operations, they reflect the same principles embedded in the Truce: the protection of civilians, facilitation of movement, and prioritization of humanitarian considerations amid hostilities.',
          },
        ],
      },
      {
        id: 'international-law',
        title: 'UN Condemnation & International Legal Framework',
        icon: '\u{1F30D}',
        color: 'amber',
        bullets: [
          {
            headline: 'UN Mechanisms Condemn Attacks Inconsistent with UN Charter',
            text: 'The condemnation by UN mechanisms of attacks inconsistent with the UN Charter reinforces the Truce\u2019s foundational alignment with international law. The Truce\u2019s call for restraint and dialogue is mirrored in international scrutiny of military actions that endanger civilians or civilian infrastructure, including educational facilities.',
          },
          {
            headline: 'Persistent Gap Between Truce Principles and Realities',
            text: 'These developments underscore the persistent gap between Truce principles and realities on the ground, while also highlighting the Truce\u2019s role as a reference point for assessing conduct during periods that symbolically emphasize peace.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Current events illustrate how the Olympic Truce operates as a connective normative thread across disparate crises. From debates over national symbols in international sport, to diplomatic efforts to protect citizens and enable humanitarian movement, the Truce provides a shared vocabulary for restraint, safe passage, and de-escalation. Even where compliance is partial or contested, repeated references to the Truce affirm its continued relevance as a global instrument for calming hostilities and reaffirming the primacy of peace during moments of collective international attention. The diplomatic boycott of the Paralympic ceremony, the preservation of athlete safe passage by Italian authorities, the evacuation of civilians through humanitarian corridors, and the condemnation of attacks by UN mechanisms all intersect with the Olympic Truce\u2019s core principles in multiple, mutually reinforcing ways.',
    },
    keyConstraints: [
      'A growing diplomatic boycott of the Paralympic opening ceremony reflects concern that the presence of state symbols associated with active hostilities risks normalizing conflict within the Olympic and Paralympic space.',
      'Intensified military operations in the Middle East have displaced tens of thousands of civilians, requiring coordinated evacuation flights and humanitarian corridors\u2014directly implicating the Truce\u2019s safe passage and humanitarian access principles.',
      'UN mechanisms have condemned attacks on civilian infrastructure including educational facilities, underscoring the persistent gap between Truce principles and conduct on the ground.',
    ],
    publishedAt: '2026-03-05',
  },
  {
    id: 'pulse-2026-03-04-strait-escalation',
    periodStart: '2026-03-04',
    periodEnd: '2026-03-04',
    periodLabel: '4 March 2026 — Strait of Hormuz Crisis & Widening Hostilities',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage Under Direct Threat',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Strait of Hormuz Maritime Transit Targeted',
            text: 'Incidents affecting maritime transit in the Strait of Hormuz directly implicate the Olympic Truce\u2019s emphasis on safe passage. Damage to a commercial container vessel, the abandonment of its crew, and explicit threats against shipping highlight the vulnerability of civilian and commercial traffic in a strategically vital international waterway that functions as a conduit for energy supplies and essential goods.',
          },
          {
            headline: 'Escort and Insurance Measures Signal Eroding Norms',
            text: 'Measures discussed by external actors to provide naval escorts or insurance guarantees for commercial vessels reflect an effort to mitigate immediate risks, but also point to a broader erosion of the norm that civilian transport should be protected from hostilities. Within the Olympic Truce framework, such maritime corridors would be expected to remain free from attack, intimidation, or militarization to ensure safe and neutral passage.',
          },
        ],
      },
      {
        id: 'military-escalation',
        title: 'Widening Military Operations Across Multiple Domains',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Missile Interceptions, Urban Airstrikes, and Naval Deployments Expand Conflict',
            text: 'The expansion of military operations across multiple domains\u2014including missile interceptions, airstrikes on urban centers, and deployments of major naval assets\u2014demonstrates the widening geographic scope of hostilities. These actions increase the likelihood of miscalculation and regional spillover, conditions the Olympic Truce seeks to prevent by encouraging restraint and de-escalation.',
          },
          {
            headline: 'Additional States Weighing Entry into the Conflict',
            text: 'The reported consideration by additional states of entering the conflict further illustrates how rapidly localized hostilities can escalate into broader confrontations. The Truce\u2019s call for a temporary suspension or reduction of military activities is particularly salient in this context, as even limited pauses can create space for diplomatic engagement and confidence-building measures.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Humanitarian Access & Civilian Protection',
        icon: '\u{1F6D1}',
        color: 'blue',
        bullets: [
          {
            headline: 'Infrastructure Damage and Transport Disruptions Impede Aid',
            text: 'Damage to infrastructure, attacks near populated areas, and the disruption of transportation routes all have downstream effects on civilian access to food, medical supplies, and emergency assistance. The abandonment of a commercial vessel\u2019s crew and the broader climate of insecurity point to obstacles facing humanitarian actors who rely on predictable and secure access.',
          },
          {
            headline: 'Truce Framework Demands Facilitation of Humanitarian Activities',
            text: 'The Olympic Truce explicitly calls for the facilitation of humanitarian activities, recognizing that the protection of civilians and aid workers is inseparable from efforts to limit suffering during conflict. The current pattern of disruption to essential supply routes and civilian infrastructure directly contravenes these principles.',
          },
        ],
      },
      {
        id: 'diplomatic-engagement',
        title: 'Diplomatic Pathways Amid Active Hostilities',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'Political Disagreements Persist but Diplomatic Channels Remain Open',
            text: 'Diplomatic responses underway\u2014including public disagreements over legality, the absence of de-escalatory talks, and domestic debates over authorization and funding\u2014underscore the persistence of political pathways even amid active hostilities. The Olympic Truce tradition situates sport as a catalyst for dialogue and symbolic restraint, reinforcing international law and multilateral norms.',
          },
          {
            headline: 'Truce Principles Align with Calls for Renewed Engagement',
            text: 'In the current context, the Truce\u2019s principles align with appeals for renewed diplomatic engagement, respect for international legal frameworks, and the avoidance of actions that could further inflame tensions. The coexistence of military escalation and active political debate highlights both the fragility and the necessity of the Truce\u2019s normative framework.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Today\u2019s events reveal a complex security environment in which the objectives of the Olympic Truce remain highly relevant. Safe passage is under direct threat in the Strait of Hormuz, humanitarian access is compromised by infrastructure damage and transport disruptions, and the widening of military operations across multiple domains challenges the Truce\u2019s call for de-escalation. Diplomatic pathways persist but remain fragile. Safe passage, humanitarian access, and the calming of hostilities are not abstract ideals but practical safeguards whose observance could reduce risks to civilians, preserve essential global linkages, and create openings for dialogue during this period of acute crisis.',
    },
    keyConstraints: [
      'Damage to a commercial container vessel in the Strait of Hormuz, abandonment of its crew, and explicit threats against shipping directly challenge the Olympic Truce\u2019s guarantee of safe and neutral passage through critical international waterways.',
      'Military operations have expanded across multiple domains\u2014missile interceptions, urban airstrikes, and major naval deployments\u2014with additional states reportedly considering entry into the conflict, increasing the risk of miscalculation and regional spillover.',
      'Infrastructure damage, attacks near populated areas, and disrupted transportation routes are impeding civilian access to food, medical supplies, and emergency assistance, contravening the Truce\u2019s explicit call to facilitate humanitarian activities.',
    ],
    publishedAt: '2026-03-04',
  },
  {
    id: 'pulse-2026-03-03-ioc-response',
    periodStart: '2026-03-03',
    periodEnd: '2026-03-03',
    periodLabel: '3 March 2026 — IOC Statement on the Olympic Truce',
    focusAreas: ['Safe Passage', 'Diplomatic Engagement', 'Participation', 'De-escalation'],
    sections: [
      {
        id: 'ioc-statement',
        title: 'IOC Issues Carefully Worded Truce Response',
        icon: '\u{1F3DB}\u{FE0F}',
        color: 'blue',
        bullets: [
          {
            headline: 'IOC Reaffirms Truce Commitment While Avoiding Judgment',
            text: 'The International Olympic Committee has issued a formal response to the escalating Middle East conflict, reaffirming its commitment to the Olympic Truce while stopping short of judging whether recent military action violates the agreement. The statement reflects the IOC\u2019s long-standing position of political neutrality, even as pressure mounts for clearer moral leadership with the Milano Cortina 2026 Winter Paralympics imminent.',
          },
          {
            headline: 'Resolution Described as "Aspirational and Non-Binding"',
            text: 'The IOC characterized the Olympic Truce Resolution as "an aspirational and non-binding resolution which the UN Member States agree on for each edition of the Olympic and Paralympic Games." The organization stated that enforcement "is entirely in the remit of the UN system and outside the remit of the IOC," explicitly distancing itself from accountability for violations during the Games period.',
          },
        ],
      },
      {
        id: 'safe-passage',
        title: 'Safe Passage & Paralympic Mobility',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'IOC Appeals for Support of Affected Paralympic Athletes',
            text: 'The IOC appealed to "all UN Member States to support athletes who have qualified for the Milano Cortina 2026 Winter Paralympics, and who may be affected by the most recent conflicts, in their journey to these Games." The appeal comes amid growing logistical concerns including airspace disruptions across the Middle East that have complicated delegation travel to Italy.',
          },
          {
            headline: 'Athletes from Conflict Nations Set to Compete',
            text: 'With athletes from Iran, Israel, and the United States set to compete at the Winter Paralympics, the safe passage principle faces a direct test. The IOC\u2019s statement frames the Truce Resolution\u2019s primary purpose as enabling "safe passage for all qualified athletes, from all corners of the world, as they travel to the host country."',
          },
        ],
      },
      {
        id: 'neutrality-tension',
        title: 'Neutrality vs. Moral Leadership',
        icon: '\u{2696}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'IOC Navigates Between Neutrality and Accountability',
            text: 'The IOC acknowledged that "as a global organization, the IOC has to navigate a complex reality" and must "live up to its mission to preserve a values-based, truly global sporting platform that can give hope to the world." The careful framing positions the IOC as a platform custodian rather than a moral arbiter\u2014prioritizing universal participation over condemnation of specific actors.',
          },
          {
            headline: 'Contrast with Past Responses Draws Scrutiny',
            text: 'The measured tone of the statement has drawn scrutiny given the IOC\u2019s swift condemnation of Russia\u2019s invasion of Ukraine during the 2022 Beijing Games. The episode once again highlights the strain between the Olympic movement\u2019s peace-building ideals and the geopolitical realities that increasingly surround it.',
          },
        ],
      },
      {
        id: 'diplomatic-context',
        title: 'Broader Diplomatic Context',
        icon: '\u{1F30D}',
        color: 'purple',
        bullets: [
          {
            headline: 'UN Condemnation Underscores Truce Violations',
            text: 'The IOC\u2019s intervention comes amid broader UN condemnation of recent strikes and growing international concern over the escalation\u2019s impact on civilian populations. The convergence of active military conflict involving multiple UN Member States during the Truce period represents an unprecedented challenge to the modern Olympic Truce tradition.',
          },
          {
            headline: 'Truce\u2019s Structural Limits Laid Bare',
            text: 'By explicitly stating that enforcement lies outside its remit, the IOC has laid bare the structural limitations of the Olympic Truce as a peace instrument. The resolution\u2019s reliance on voluntary compliance by Member States\u2014with no enforcement mechanism\u2014means the Truce\u2019s effectiveness depends entirely on the political will of the very actors now engaged in escalation.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'The IOC\u2019s carefully worded response reaffirms its commitment to the Olympic Truce while explicitly acknowledging the resolution is "aspirational and non-binding" with enforcement outside its remit. The statement prioritizes safe passage for Paralympic athletes over moral judgment of military action, reflecting the deepening tension between the Olympic movement\u2019s peace-building mission and the geopolitical realities of the Milano Cortina 2026 Games period.',
    },
    keyConstraints: [
      'The IOC characterized the Olympic Truce Resolution as "aspirational and non-binding," stating enforcement is "entirely in the remit of the UN system and outside the remit of the IOC"\u2014explicitly distancing itself from accountability for violations.',
      'Athletes from Iran, Israel, and the United States are set to compete at the Winter Paralympics amid airspace disruptions and UN condemnation of strikes, testing the Truce\u2019s safe passage guarantee.',
      'The measured response contrasts with the IOC\u2019s swift condemnation of Russia during the 2022 Beijing Games, highlighting inconsistencies in how the Olympic movement addresses Truce violations depending on the geopolitical actors involved.',
    ],
    publishedAt: '2026-03-03',
  },
  {
    id: 'pulse-2026-03-03-risk-tile',
    periodStart: '2026-03-03',
    periodEnd: '2026-03-03',
    periodLabel: '3 March 2026 — Risk Tile: Middle East Escalation & Milano Cortina Impact',
    focusAreas: ['Safe Passage', 'Regional Stability', 'De-escalation', 'Participation'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage Under Strain',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Airspace Closures Interrupt Athlete & Delegation Mobility',
            text: 'Airspace closures across the Arabian Peninsula and Gulf states are interrupting athlete and delegation mobility. Strikes on civilian airports (Dubai, Kuwait) directly undermine the Truce expectation of protected transit during the Games period.',
          },
          {
            headline: 'Delegations Report Delayed or Rerouted Travel',
            text: 'Several delegations report delayed or rerouted travel into Europe, affecting training schedules and final preparations. Contingency routing is now essential as travel logistics become the most immediate vulnerability for Milano Cortina.',
          },
        ],
      },
      {
        id: 'geopolitical-escalation',
        title: 'Geopolitical Escalation Redrawing the Truce Environment',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Operation Epic Fury Triggers Region-Wide Retaliation',
            text: 'Operation Epic Fury\u2014a U.S.\u2013Israeli strike targeting Iran\u2019s leadership\u2014has triggered region-wide retaliation. Iranian missile and drone attacks now span Israel, Bahrain, Qatar, Kuwait, and the UAE, expanding the conflict footprint across the Gulf.',
          },
          {
            headline: 'Humanitarian Toll Reaches 500\u2013600+ Deaths',
            text: 'The humanitarian toll of 500\u2013600+ deaths heightens global instability at a moment when the Truce seeks de-escalation. The scale and geographic spread of the conflict illustrate a deteriorating security environment that undermines the Truce\u2019s expectation of restraint.',
          },
        ],
      },
      {
        id: 'paralympic-governance',
        title: 'Paralympic Governance Under Dual Pressure',
        icon: '\u{2696}\u{FE0F}',
        color: 'blue',
        bullets: [
          {
            headline: 'IPC Managing Middle East Crisis & Russia/Belarus Reinstatement',
            text: 'IPC leadership is managing both the Middle East crisis and diplomatic fallout over Russia and Belarus\u2019s reinstatement. The convergence of active military conflict and unresolved participation disputes creates unprecedented pressure on Paralympic governance.',
          },
          {
            headline: 'Political Polarization Threatens Truce Neutrality',
            text: 'Political polarization around participation threatens the Truce\u2019s neutrality norm and risks cascading boycotts. Instead of a period of symbolic calm, the Games are unfolding against widening conflict\u2014diminishing the Truce\u2019s moral authority and complicating messaging around peace, inclusion, and unity.',
          },
        ],
      },
      {
        id: 'operational-consequences',
        title: 'Operational Consequences for Milano Cortina',
        icon: '\u{1F3D4}\u{FE0F}',
        color: 'purple',
        bullets: [
          {
            headline: 'Contingency Planning Now Essential for Affected Delegations',
            text: 'IPC and Milano Cortina organizers are coordinating solutions for affected delegations while maintaining athlete-first priorities. Travel logistics are the most immediate vulnerability, with contingency routing now essential for delegations transiting through or near the conflict zone.',
          },
          {
            headline: 'No Direct Threat to Italy, But Global Volatility Elevates Risk',
            text: 'No direct security threat to Italy has been identified, but global volatility elevates monitoring requirements. The operational burden of managing delegation travel disruptions, security assessments, and diplomatic sensitivities adds complexity to Games delivery at a critical moment.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'Overall Truce Risk Level: SEVERE. The Olympic Truce is under unprecedented strain as Operation Epic Fury and Iranian retaliation reshape security conditions across the Middle East. Airspace closures disrupt athlete mobility, 500\u2013600+ deaths underscore the humanitarian toll, and IPC faces dual pressure from the regional war and Russia/Belarus reinstatement politics. The Games are unfolding against widening conflict rather than the symbolic calm the Truce envisions.',
    },
    keyConstraints: [
      'Strikes on civilian airports in Dubai and Kuwait and airspace closures across the Gulf are directly disrupting delegation travel into Europe, with several teams reporting delayed or rerouted journeys affecting training and final preparations.',
      'Operation Epic Fury has expanded the conflict to at least nine countries with 500\u2013600+ deaths, while IPC simultaneously manages Russia/Belarus reinstatement fallout\u2014creating dual political and security pressure on Milano Cortina.',
      'The Truce\u2019s moral authority is diminished as the Games unfold against widening conflict rather than symbolic calm, complicating messaging around peace, inclusion, and unity.',
    ],
    publishedAt: '2026-03-03',
  },
  {
    id: 'pulse-2026-03-03-special',
    periodStart: '2026-03-03',
    periodEnd: '2026-03-03',
    periodLabel: '3 March 2026 — Special Edition',
    focusAreas: ['Safe Passage', 'Regional Stability', 'De-escalation', 'Participation'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage & Athlete Mobility',
        icon: '\u{1F6E1}\u{FE0F}',
        color: 'green',
        bullets: [
          {
            headline: 'Airspace Closures Disrupt Delegation Travel',
            text: 'Air travel across the region has been suspended or heavily restricted, with airports in Dubai and Kuwait among those hit. This has already disrupted the arrival of delegations en route to Europe for final preparations, undermining the Truce\u2019s expectation that athletes, officials, and humanitarian actors can move freely and safely during the Games period.',
          },
          {
            headline: 'Operation Epic Fury Triggers Widespread Flight Disruptions',
            text: 'The joint U.S.\u2013Israeli offensive against Iran, including the reported killing of Supreme Leader Ali Khamenei, has prompted extensive Iranian retaliation with missiles and drones striking Israel, U.S.-linked assets, and civilian infrastructure across Bahrain, Qatar, Kuwait, and the UAE. These developments have produced widespread airspace closures and flight disruptions, directly affecting safe passage\u2014one of the Truce\u2019s core guarantees.',
          },
        ],
      },
      {
        id: 'geopolitical-tensions',
        title: 'Heightened Geopolitical Tensions',
        icon: '\u{26A0}\u{FE0F}',
        color: 'amber',
        bullets: [
          {
            headline: 'Conflict Expands to at Least Nine Countries',
            text: 'The conflict\u2019s rapid expansion\u2014now affecting at least nine countries\u2014has intensified global instability at a moment when the Truce seeks de-escalation. The scale of Operation Epic Fury and Iran\u2019s retaliatory strikes have reshaped security conditions across the Middle East, straining diplomatic channels and humanitarian corridors simultaneously.',
          },
          {
            headline: 'Russia & Belarus Reinstatement Compounds Diplomatic Fallout',
            text: 'The IPC is simultaneously managing diplomatic fallout related to Russia and Belarus\u2019s reinstatement, compounding the political sensitivities surrounding Milano Cortina. The convergence of active military conflict and unresolved participation disputes creates an unprecedented challenge for the Olympic movement.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities',
        icon: '\u{2696}\u{FE0F}',
        color: 'blue',
        bullets: [
          {
            headline: 'Escalating Conflict Reshapes Regional Security',
            text: 'The Olympic Truce is being strained on multiple fronts as the escalating conflict triggered by Operation Epic Fury reshapes security conditions, disrupts mobility, and heightens geopolitical tensions across the Middle East. Rather than calming hostilities, the current trajectory reflects a dramatic intensification of military activity during the Games period.',
          },
          {
            headline: 'Iranian Retaliation Strikes Civilian Infrastructure',
            text: 'Extensive Iranian retaliation with missiles and drones has struck civilian infrastructure across Bahrain, Qatar, Kuwait, and the UAE, in addition to strikes on Israel and U.S.-linked assets. The targeting of civilian infrastructure\u2014including airports and urban areas\u2014represents a direct challenge to the Truce\u2019s call for the protection of civilians.',
          },
        ],
      },
      {
        id: 'operational-consequences',
        title: 'Operational Consequences for Milano Cortina',
        icon: '\u{1F3D4}\u{FE0F}',
        color: 'purple',
        bullets: [
          {
            headline: 'IPC Assessing Risks to Games Readiness',
            text: 'The IPC is assessing risks to logistics, delegation travel, and overall Games readiness. While committed to delivering safe, athlete-centered Paralympics, the organization acknowledges that the regional crisis may impose further operational burdens and require contingency planning.',
          },
          {
            headline: 'Truce Principles Under Unprecedented Strain',
            text: 'The convergence of active military conflict across the Middle East, disrupted air travel, and heightened geopolitical tensions creates conditions that stand in direct opposition to the Olympic Truce\u2019s core principles of safe passage, de-escalation, and the protection of civilians. The current crisis represents the most severe challenge to the Truce since its modern revival.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'The Olympic Truce is being strained on multiple fronts as the escalating conflict triggered by Operation Epic Fury reshapes security conditions, disrupts mobility, and heightens geopolitical tensions across the Middle East. The joint U.S.\u2013Israeli offensive against Iran and extensive Iranian retaliation across at least nine countries have produced widespread airspace closures, disrupted delegation travel, and imposed operational burdens on Milano Cortina\u2014conditions that directly contravene the Truce\u2019s guarantees of safe passage and de-escalation.',
    },
    keyConstraints: [
      'Airports in Dubai and Kuwait struck, regional airspace closures disrupting athlete and delegation travel to Europe for Paralympic preparations.',
      'Iranian retaliatory missile and drone strikes hitting civilian infrastructure across Bahrain, Qatar, Kuwait, UAE, and Israel\u2014expanding the conflict to at least nine countries during the Truce window.',
      'IPC forced into contingency planning as Russia/Belarus reinstatement diplomacy compounds the operational and political challenges of hosting Games amid regional war.',
    ],
    publishedAt: '2026-03-03',
  },
  {
    id: 'pulse-2026-03-03',
    periodStart: '2026-03-03',
    periodEnd: '2026-03-03',
    periodLabel: '3 March 2026',
    focusAreas: ['Safe Passage', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S.–Israeli Air Campaign Disrupts Civilian Movement in Iran',
            text: 'The U.S.–Israeli air campaign in Iran, including strikes on government facilities in Tehran and damage to the Natanz nuclear site, has contributed to widespread insecurity and disrupted civilian movement. Drone attacks on U.S. embassies in Saudi Arabia and Kuwait, and evacuation advisories for 14 countries, further constrain mobility for civilians, humanitarian personnel, and diplomatic actors.',
          },
          {
            headline: 'Lebanon Displacement & Regional Transit Threats',
            text: 'The displacement of at least 30,000 people in Lebanon following renewed hostilities between Israel and Hezbollah underscores the scale of forced movement triggered by the conflict. Attacks on airports, tourist areas, and urban centers—including strikes in Dubai—extend the threat to civilian transit corridors across the region and internationally, affecting the ability of athletes and others to travel safely to the Paralympic Games in Italy.',
          },
        ],
      },
      {
        id: 'humanitarian-access',
        title: 'Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Crossings Closed as Wartime Measure',
            text: 'The closure of all crossings into Gaza, justified by Israeli authorities as a wartime measure, has sharply limited the entry of fuel, food, and essential supplies. Local officials warn that shortages threaten hospital operations, water systems, and sanitation services. Although Israel has indicated that the Kerem Shalom crossing will reopen for gradual aid entry, the interruption highlights the fragility of humanitarian access in conflict settings.',
          },
          {
            headline: 'Afghanistan–Pakistan Border & South Sudan Violence',
            text: 'In Afghanistan, ongoing clashes along the Pakistan–Afghanistan border have resulted in civilian casualties, further complicating humanitarian operations in an already vulnerable region. The attack in South Sudan\u2019s Ruweng Administrative Area, which killed 169 people, adds to the global picture of acute humanitarian need amid violence.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities',
        icon: '⚖️',
        color: 'blue',
        bullets: [
          {
            headline: 'U.S. Signals Escalation Rather Than De-escalation',
            text: 'Statements by senior U.S. officials that the "hardest hits are yet to come," alongside the deployment of additional troops and aircraft, signal an escalation rather than de-escalation. Regional actors are adjusting their postures: France is deploying anti-missile systems to Cyprus following drone strikes on RAF Akrotiri, while neighboring states reportedly consider retaliatory measures against Iran.',
          },
          {
            headline: 'Killing of Iran\u2019s Supreme Leader Heightens Escalation Risk',
            text: 'The killing of Iran\u2019s Supreme Leader and the subsequent intelligence assessments warning of cyber or physical retaliation further heighten the risk of continued escalation. Political rhetoric across capitals reflects hardened positions, with leaders emphasizing military objectives and deterrence over dialogue.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Regional Environment Marked by Heightened Insecurity',
            text: 'The cumulative effect is a regional environment marked by heightened insecurity, constrained humanitarian access, and expanding conflict dynamics. The scale and geographic spread of military activity—from Iran, Israel, and Lebanon to the Gulf, Cyprus, and beyond—illustrate a deteriorating security environment that undermines the Truce\u2019s expectation of restraint and the protection of civilians.',
          },
          {
            headline: 'Urgency of Reinforcing Truce Principles',
            text: 'These conditions stand in direct tension with the Olympic Truce\u2019s call for restraint, dialogue, and the protection of civilians. The events described illustrate the urgency of reinforcing the Truce\u2019s principles at a moment when global hostilities are intensifying rather than calming.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'critical',
      summary: 'A rapidly widening regional conflict whose effects directly challenge the Olympic Truce\u2019s call for safe passage, humanitarian access, and the reduction of hostilities during the Games period. The scale and geographic spread of military activity—from Iran, Israel, and Lebanon to the Gulf, Cyprus, and beyond—illustrate a deteriorating security environment that undermines the Truce\u2019s expectation of restraint and the protection of civilians.',
    },
    keyConstraints: [
      'The U.S.\u2013Israeli air campaign in Iran, drone attacks on embassies in Saudi Arabia and Kuwait, and evacuation advisories for 14 countries have severely constrained civilian and diplomatic mobility across the region.',
      'The closure of all Gaza crossings, civilian casualties along the Pakistan\u2013Afghanistan border, and the killing of 169 people in South Sudan\u2019s Ruweng Administrative Area demonstrate a collapse of humanitarian access across simultaneous crises.',
      'Signals of further escalation\u2014including deployment of additional troops, anti-missile systems to Cyprus, and intelligence warnings of Iranian retaliation\u2014indicate that hostilities are intensifying rather than calming during the Truce period.',
    ],
    publishedAt: '2026-03-03',
  },
  {
    id: 'pulse-2026-03-02',
    periodStart: '2026-03-02',
    periodEnd: '2026-03-02',
    periodLabel: '2 March 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S. Carrier Groups & Israeli Target Lists',
            text: 'U.S. carrier groups positioned in multiple strategic waterways, Israeli target lists, and anticipated reactions from Russia and China reflect heightened militarization rather than the Truce\'s aim of creating space for diplomacy, humanitarian access, and peaceful assembly.',
          },
          {
            headline: 'No Reference to Humanitarian Corridors or Dialogue',
            text: 'Current reporting and analysis focus on deterrence, preemption, and regime change scenarios—with no reference to safe passage for athletes, humanitarian access, or diplomatic engagement. This absence runs counter to the Truce\'s peacebuilding ethos and its traditional encouragement of unimpeded transit.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Symbolic Restraint Recognized During Olympic Period',
            text: 'The commonly held norm that "you can\'t bomb somebody during the Olympics" reflects a core Truce principle—the suspension of hostilities during the Games to allow peaceful international engagement. Even if the motivation is political optics rather than moral commitment, the acknowledgment itself aligns with the Truce\'s purpose.',
          },
          {
            headline: 'Global Attention Elevates Cost of Violence',
            text: 'The discussion of timing—waiting until after the Olympics—shows awareness that global norms discourage escalation during periods meant for peaceful competition. This mirrors the Truce\'s intent to use the Games as a platform for diplomacy and de-escalation, though the Truce is treated as a scheduling constraint rather than a peace instrument.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Iranian Internal Repression & Mass Killings',
            text: 'The Iranian regime has killed an estimated 32,000 demonstrators and may be executing thousands more—a direct violation of the Truce\'s core purpose to reduce violence, protect civilians, and promote human dignity. State violence against its own population is fundamentally incompatible with the Truce.',
          },
          {
            headline: 'Military Assets Embedded in Civilian Areas',
            text: 'Iranian military assets embedded in hospitals, mosques, and apartments raise the risk of mass civilian casualties. That this is treated as a strategic and moral complication reflects, at least indirectly, the Truce\'s principle of protecting civilians and reducing suffering amid active hostilities.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Strikes Planned Around the Games Undermine Truce Spirit',
            text: 'U.S. military posture reaching "extreme readiness" with action anticipated within days of the Games ending undermines the Truce\'s spirit. While the Truce contemplates a temporary pause, its purpose is to encourage longer-term dialogue and de-escalation—not to serve as a countdown to resumed hostilities.',
          },
          {
            headline: 'Truce Acknowledged but Not Honored',
            text: 'The only real alignment with the Truce is an implied recognition of the norm against military action during the Games. Everything else—internal repression, military escalation, strategic timing of strikes, and absence of peacebuilding measures—reveals a Truce acknowledged as a pause in a conflict cycle but not sourced as a catalyst for peace.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'weak',
      summary: 'The Olympic Truce is acknowledged as a symbolic constraint on military timing, but this instrumentalization falls far short of its purpose. Iranian internal repression, U.S. extreme military readiness, strikes planned around the Games, and the complete absence of humanitarian or diplomatic frameworks reveal a Truce recognized in form but not honored in substance—a pause in a conflict cycle rather than a catalyst for peace.',
    },
    keyConstraints: [
      'The Iranian regime\'s killing of an estimated 32,000 demonstrators and the embedding of military assets in civilian areas represent direct violations of the Truce\'s principles of civilian protection and human dignity.',
      'U.S. military posture at extreme readiness with strikes anticipated days after the Games, combined with the treatment of the Olympic period as a scheduling constraint rather than a peace opportunity, fundamentally undermines the Truce\'s purpose.',
    ],
    publishedAt: '2026-03-02',
  },
  {
    id: 'pulse-2026-03-01',
    periodStart: '2026-03-01',
    periodEnd: '2026-03-01',
    periodLabel: '1 March 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S.–Israel–Iran Strikes & Iranian Retaliation',
            text: 'Large-scale military strikes between the United States, Israel, and Iran, followed by Iranian retaliation across states hosting foreign forces, create a widening conflict arc. Missile and drone activity across airspace in Iran, Israel, the Gulf, and neighboring Arab states heightens risks to commercial aviation, relief corridors, and diplomatic movements.',
          },
          {
            headline: 'Afghanistan–Pakistan Aerial Engagements Over Kabul',
            text: 'Active fighting between Afghanistan and Pakistan, including reported aerial engagements over Kabul, threatens civilian airspace safety and humanitarian operations. The absence of clear de-escalatory mechanisms increases the risk of miscalculation, directly challenging the Truce\'s call for safe, unobstructed passage.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Widening Conflict Arc Across Multiple Theatres',
            text: 'Simultaneous military activity spanning Iran, Israel, the Gulf, Lebanon, Afghanistan, and Pakistan creates compounding barriers to international mobility, undermining the conditions needed for athletes, officials, and delegations to travel safely and participate in the Games.',
          },
          {
            headline: 'Horizontal Escalation into Lebanon',
            text: 'Israeli strikes in Beirut and southern Lebanon resulting in fatalities reflect the risk of horizontal escalation across interconnected conflict theatres, challenging efforts to localize hostilities and amplifying threats to safe participation during a period dedicated to peace and international cooperation.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Crossings Closed Amid Regional Escalation',
            text: 'Judicial action temporarily enabling aid organizations to continue operations in Gaza aligned with the Truce\'s humanitarian spirit, yet the subsequent closure of crossings demonstrates how rapidly access conditions deteriorate in response to broader regional military developments, undermining predictability of relief delivery.',
          },
          {
            headline: 'Civilian Casualties & South Sudan Security Deterioration',
            text: 'Reported civilian fatalities at a school site amid active hostilities, combined with warnings of deteriorating security and civilian killings in South Sudan, underline the Truce\'s emphasis on protecting non-combatants and the ongoing need for renewed commitment to peace processes in fragile environments.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Conflict Diffusion Challenges De-escalation Frameworks',
            text: 'The spillover of violence from Israel into Lebanon and the cross-border exchanges between Afghanistan and Pakistan illustrate how conflict diffusion undermines de-escalation efforts, reinforcing the Truce\'s relevance as a framework encouraging the prevention of conflict spread during globally symbolic periods.',
          },
          {
            headline: 'Truce as Normative Reference Amid Simultaneous Crises',
            text: 'Collectively, these developments across diverse and simultaneous crises demonstrate the Truce\'s potential role as a unifying normative reference point amid intensifying global hostilities—its core calls for restraint, humanitarian access, and safe passage remaining directly relevant even where formal observance is limited.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'weak',
      summary: 'Escalating military strikes between the U.S., Israel, and Iran, horizontal escalation into Lebanon, cross-border aerial engagements over Kabul, and the closure of Gaza crossings represent a significant deterioration from the Truce\'s ideals—though the Truce remains relevant as a normative benchmark against which the urgency of restraint, humanitarian access, and civilian protection is measured.',
    },
    keyConstraints: [
      'Large-scale U.S.–Israel–Iran military exchanges, Iranian retaliation across multiple states, and aerial engagements between Afghanistan and Pakistan represent an unprecedented widening of active conflict theatres during the Truce period.',
      'The closure of Gaza crossings despite judicial intervention, civilian casualties at a school site, and deteriorating security in South Sudan and Lebanon demonstrate a collapse of humanitarian access and civilian protection across simultaneous crises.',
    ],
    publishedAt: '2026-03-01',
  },
  {
    id: 'pulse-2026-02-26',
    periodStart: '2026-02-26',
    periodEnd: '2026-02-26',
    periodLabel: '26 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Pakistan Strikes Taliban Forces in Afghan Cities',
            text: 'Pakistan\'s direct strikes on Taliban government forces in Afghanistan\'s major cities, following retaliatory border attacks, illustrate an escalation that places civilians and cross-border movement at risk rather than safeguarding the safe passage the Truce demands.',
          },
          {
            headline: 'Mass Graves in DRC & Migrant Deaths on Transit Routes',
            text: 'The discovery of mass graves in eastern Democratic Republic of the Congo following M-23\'s withdrawal underscores a breakdown in civilian protection, while reported deaths of migrants on Mediterranean and Horn of Africa routes highlight how insecurity undermines safe passage far beyond battlefields.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Travel Advisories Urging Evacuation from Iran',
            text: 'Advisories urging citizens to avoid or evacuate Iran due to security concerns signal environments where international mobility is constrained, at odds with the Truce\'s aim of facilitating unhindered participation in the Olympic Games.',
          },
          {
            headline: 'Authorized Departures of U.S. Embassy Staff from Israel',
            text: 'The authorized departure of U.S. embassy staff from Israel reflects security conditions that constrain international travel and reduce confidence in safe movement—conditions incompatible with the Truce\'s goal of reducing security risks and travel barriers for athletes, officials, and spectators.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Sudanese RSF Attacks & Gaza Civilian Casualties',
            text: 'The Sudanese Rapid Support Forces\' attacks causing deaths, injuries, and mass displacement, alongside intensified military actions in Gaza resulting in civilian casualties, run counter to the Truce\'s appeal for restraint, protection of non-combatants, and enabling humanitarian access.',
          },
          {
            headline: 'U.S.–Iran Geneva Negotiations Continue',
            text: 'The continuation of U.S.–Iran negotiations in Geneva, despite the absence of a breakthrough, aligns with the Truce\'s emphasis on dialogue and conflict prevention—particularly given the stated intention to continue talks to avert war.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Congressional Authorization Required for Iran Strikes',
            text: 'U.S. legislative efforts to require explicit congressional authorization for military action against Iran emphasize institutional restraint and deliberation over unilateral escalation, resonating with the Truce\'s call for measured, accountable decision-making.',
          },
          {
            headline: 'Fragile Restraint Amid Competing Narratives',
            text: 'Statements downplaying the likelihood of prolonged war gesture toward caution, yet competing narratives, evacuation advisories, and preparations for possible strikes illustrate how fragile the commitment to restraint remains—the Truce serving as a normative benchmark against which this gap is measured.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Events reveal a world largely diverging from the Truce\'s ideals—escalating conflicts, humanitarian crises, and restricted mobility undermine safe passage and peaceful participation. Yet ongoing Geneva negotiations and calls for legislative oversight show that diplomatic pathways persist, with the Truce serving as a normative benchmark highlighting the gap between current tensions and aspirational goals of restraint and coexistence.',
    },
    keyConstraints: [
      'Pakistan\'s strikes in Afghanistan, mass graves in the DRC, Sudanese RSF attacks, and Gaza civilian casualties demonstrate escalating violence and breakdown of civilian protection across multiple regions.',
      'Travel advisories for Iran, embassy staff departures from Israel, and preparations for possible strikes constrain international mobility and expose the fragility of diplomatic restraint during the Truce period.',
    ],
    publishedAt: '2026-02-26',
  },
  {
    id: 'pulse-2026-02-25',
    periodStart: '2026-02-25',
    periodEnd: '2026-02-25',
    periodLabel: '25 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: '18 Additional F-35s & U.S. Tankers Deployed to Middle East',
            text: 'The arrival of 18 additional F-35 fighter jets and several U.S. tankers in the Middle East underscores rising militarization that threatens mobility and civilian transit, directly challenging the Truce\'s call for safe, unobstructed movement of athletes, delegations, and humanitarian actors.',
          },
          {
            headline: 'Iranian Military Drill in the Strait of Hormuz',
            text: 'Iran\'s initiation of a large-scale military drill in the Strait of Hormuz heightens tensions in a strategic chokepoint critical for global mobility, threatening maritime stability that humanitarian shipments rely on and intersecting with the Truce\'s call to safeguard passage and humanitarian access.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Regional Uncertainty Threatens Olympic Team Dispatch',
            text: 'Military drills and escalating tensions around the Strait of Hormuz increase regional uncertainty, raising concerns about whether nations can freely and confidently dispatch their Olympic teams during periods of acute geopolitical strain.',
          },
          {
            headline: 'U.S.–Iran–Israel Triangular Mistrust',
            text: 'Ongoing triangular tensions between the U.S., Iran, and Israel—including reported discussions about overflight permissions for potential air operations—reveal an atmosphere of deep mistrust that the Truce urges states to counter by modeling coexistence and peaceful interaction.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S. Military Preparing Weeks-Long Iran Operations',
            text: 'Reports that the U.S. military is preparing for possible weeks-long operations against Iran illustrate escalating rhetoric and planning that run counter to the Truce\'s appeal for calming hostilities, highlighting the need for a symbolic pause to reduce the momentum toward confrontation.',
          },
          {
            headline: 'Maritime Corridor Threats to Humanitarian Shipments',
            text: 'Iran\'s Strait of Hormuz drill, combined with increased U.S. and Israeli discussions on potential strikes, threatens the maritime stability that humanitarian shipments depend on—any disruption to sea-based corridors directly undermines the Truce\'s call to safeguard humanitarian access.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Geneva Indirect Talks via Witkoff & Kushner',
            text: 'Indirect U.S.–Iran talks in Geneva, mediated by Oman and involving envoys Steve Witkoff and Jared Kushner, exemplify diplomatic engagement aligned with the Truce\'s call for communication over confrontation. Their fragility amid simultaneous military build-ups amplifies the importance of protecting diplomatic avenues.',
          },
          {
            headline: 'Trump Supports Israeli Strikes on Iran\'s Missile Program',
            text: 'President Trump\'s willingness to support Israeli strikes on Iran\'s ballistic missile program represents political brinkmanship that the Truce seeks to counterbalance, emphasizing the need to lower the temperature during high-risk periods and pursue stability over escalatory signaling.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Geneva indirect talks and Oman-mediated diplomacy align with the Truce\'s spirit of dialogue and restraint, but massive military deployments, Strait of Hormuz drills, and preparations for weeks-long operations against Iran reveal an escalatory trajectory that starkly challenges the Truce\'s vision of safe passage, humanitarian access, and coexistence.',
    },
    keyConstraints: [
      'The deployment of 18 F-35s to the Middle East, Iranian military drills in the Strait of Hormuz, and U.S. preparations for weeks-long Iran operations represent an accelerating militarization that directly undermines the Truce\'s call for restraint and safe passage.',
      'Simultaneous military build-ups and diplomatic talks expose the fragility of current engagement channels, with discussions of overflight permissions and support for strikes risking the collapse of dialogue the Truce seeks to protect.',
    ],
    publishedAt: '2026-02-25',
  },
  {
    id: 'pulse-2026-02-23',
    periodStart: '2026-02-23',
    periodEnd: '2026-02-24',
    periodLabel: '23–24 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S. Personnel Ordered to Depart Beirut',
            text: 'The ordered departure of non-emergency U.S. personnel from Beirut due to security concerns underscores how escalating regional tensions restrict freedom of movement and jeopardize civilian safety, running counter to the Truce\'s objective of keeping borders and transit routes open for peaceful travel.',
          },
          {
            headline: 'Chad Closes Border with Sudan After Cross-Border Attacks',
            text: 'Chad\'s decision to close its border with Sudan following cross-border attacks reflects a breakdown of conditions necessary for safe passage, even for civilians fleeing violence—directly opposing the Truce\'s call for unhindered movement of athletes, officials, and humanitarian actors.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Cartel Violence Destabilizes Mexican States',
            text: 'Widespread cartel-related unrest across Mexico\'s states creates domestic instability that strains national resources and attention. The scale of violence and loss of life illustrates internal security crises that can impede preparation, athlete mobility, and equitable participation.',
          },
          {
            headline: 'Sustained Insecurity Barriers to Equitable Access',
            text: 'Countries grappling with sustained insecurity face compounding barriers to Olympic participation, as ongoing conflicts and retaliatory violence divert resources from athlete development and restrict the conditions needed for equitable access to the Games.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S. Caution on Iran Military Strikes',
            text: 'Discussions within U.S. leadership about the risks of military strikes on Iran—including concerns about prolonged conflict and casualties—reflect an awareness of the costs of escalation, aligning conceptually with the Truce\'s emphasis on restraint.',
          },
          {
            headline: 'Intensified Settler Violence in the West Bank',
            text: 'Intensified settler violence, attacks on civilians, and the displacement of Palestinian communities starkly violate the Truce\'s humanitarian spirit, exacerbating tensions and obstructing humanitarian access in direct opposition to the Truce\'s call for calming hostilities.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Hungary\'s Veto on EU Russia–Ukraine Sanctions',
            text: 'Hungary\'s maintenance of its veto on EU sanctions related to the Russia–Ukraine war highlights diplomatic fragmentation rather than collective restraint, showing how geopolitical divisions can undermine unified peace signals the Truce seeks to promote.',
          },
          {
            headline: 'ICC Hearings on Crimes Against Humanity',
            text: 'International Criminal Court hearings on alleged crimes against humanity demonstrate alternative, non-violent mechanisms for accountability that resonate with the Truce\'s underlying values of justice over force and the pursuit of coexistence through legal rather than military means.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Current events reveal a world in which the Olympic Truce remains profoundly relevant but insufficiently realized—some diplomatic caution and international legal processes align with its spirit, while border closures, settler violence, cartel unrest, and diplomatic fragmentation underscore that even temporary restraint and protection of civilians remain urgent and unmet objectives.',
    },
    keyConstraints: [
      'Border closures between Chad and Sudan, the departure of U.S. personnel from Beirut, and widespread cartel violence in Mexico directly undermine safe passage and athlete mobility across multiple regions.',
      'Intensified settler violence in the West Bank and Hungary\'s veto on EU sanctions illustrate how both ground-level hostilities and diplomatic fragmentation obstruct the Truce\'s vision of restraint, humanitarian access, and collective peace.',
    ],
    publishedAt: '2026-02-24',
  },
  {
    id: 'pulse-2026-02-22',
    periodStart: '2026-02-22',
    periodEnd: '2026-02-22',
    periodLabel: '22 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Mexican Cartel Violence Threatens Transit in Guadalajara',
            text: 'The killing of cartel leader "El Mencho" triggered widespread violence, road blockades, and public safety warnings in Guadalajara—instability that directly threatens safe passage of individuals, including athletes, and could impede participation in international events.',
          },
          {
            headline: 'Conflict Zones in Lebanon, Pakistan & Syria',
            text: 'Israeli strikes in Lebanon\'s Bekaa valley, Pakistani military operations along the Afghan border, and Islamic State attacks in Syria create environments where travel is perilous and the movement of athletes or delegations could be severely restricted, starkly contrasting the Truce\'s intent.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Escalatory Military Actions Undermine Access',
            text: 'U.S. military operations in the Pacific, threats of strikes against Iran, and heightened military posturing—including increased U.S. aircraft deployments in Jordan—risk further escalation rather than calming tensions, undermining the environment needed for safe Olympic participation.',
          },
          {
            headline: 'Multi-Region Instability Barriers',
            text: 'Active conflicts across Mexico, Lebanon, Pakistan, and Syria, combined with military build-ups, create compounding barriers to the free movement and safe participation of athletes and delegations from affected regions.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S.–Iran Geneva Negotiations',
            text: 'Ongoing negotiations between U.S. and Iranian officials in Geneva represent attempts at dialogue and compromise. Iran\'s willingness to offer concessions on uranium enrichment in exchange for recognition of peaceful nuclear rights and sanctions relief is a fragile but meaningful step toward reducing tensions.',
          },
          {
            headline: 'U.S. Ends Humanitarian Funding in Africa',
            text: 'The U.S. State Department\'s decision to end humanitarian funding in several African nations, citing a lack of alignment with national interests, could hinder humanitarian efforts and runs counter to the Truce\'s call for facilitating aid and relief during periods of conflict.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'EU Divisions on Ukraine Support',
            text: 'While the EU seeks to support Ukraine financially, internal divisions—such as Hungary\'s objection—and accusations of blackmail reflect the complexities of achieving unity and dialogue in times of crisis, testing the Truce\'s call for multilateral restraint.',
          },
          {
            headline: 'EU Diplomatic Convening on Gaza Peace',
            text: 'The convening of EU diplomats to discuss peace in Gaza and the inclusion of multiple nations in dialogue efforts mirror the Truce\'s call for multilateral engagement and peaceful resolution, even as the region remains volatile.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While diplomatic efforts such as U.S.–Iran Geneva negotiations and EU multilateral engagement echo the Truce\'s call for dialogue and restraint, ongoing violence from Mexico to the Middle East, military escalation, and restrictions on humanitarian access highlight the persistent distance between the Truce\'s vision and current realities.',
    },
    keyConstraints: [
      'Cartel violence in Mexico, Israeli strikes in Lebanon, and military operations in Pakistan and Syria create direct barriers to safe passage and athlete mobility across multiple regions.',
      'U.S. military posturing, the withdrawal of humanitarian funding in Africa, and EU internal divisions undermine the Truce\'s objectives of restraint, humanitarian access, and multilateral cooperation.',
    ],
    publishedAt: '2026-02-22',
  },
  {
    id: 'pulse-2026-02-20',
    periodStart: '2026-02-20',
    periodEnd: '2026-02-20',
    periodLabel: '20 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Violence Against Ukrainian Women & Kenyan Recruitment',
            text: 'Reports of hundreds of Ukrainian women and girls suffering violence and the recruitment of Kenyans to fight in Ukraine illustrate how war zones impede not only athletes\' travel but their very safety, directly threatening the Truce\'s principle of safe passage.',
          },
          {
            headline: 'Restrictions on Palestinian Movement',
            text: 'Israel\'s limitation on West Bank residents\' access to Al-Aqsa Mosque reflects broader barriers to free movement that could extend to Olympic participation, undermining the Truce\'s call for unhindered passage of athletes and delegations.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Ongoing Conflicts Threaten Athlete Participation',
            text: 'The Russia–Ukraine war, the Israel–Hamas war, and tensions involving Iran create environments where athletes from conflict zones face significant barriers to training, qualifying, and traveling to compete in the Games.',
          },
          {
            headline: 'Movement Restrictions & Conflict-Zone Barriers',
            text: 'Restrictions on civilian movement in the West Bank and ongoing violence across multiple regions highlight how geopolitical tensions can extend to exclude athletes and delegations from international sporting events.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Civilian Casualties & U.N. Report on Aid Denial',
            text: 'Ongoing violence in Gaza and the West Bank, with high civilian casualties and reports of ethnic cleansing, contradicts the Truce\'s humanitarian aims. The U.N. Human Rights Office\'s report on destruction and denial of aid in Gaza directly undermines the Truce\'s call for humanitarian access.',
          },
          {
            headline: '$7 Billion Gaza Reconstruction Pledges & Peacekeeping Deployments',
            text: 'The U.S. announcement of $7 billion in pledges for Gaza\'s reconstruction and the deployment of peacekeeping troops by several countries represent steps toward enabling humanitarian access and calming tensions, albeit within a highly contested and fragile context.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: '"Board of Peace" & Multilateral Reconstruction Pledges',
            text: 'The formation of the "Board of Peace" with pledges for reconstruction and peacekeeping echoes the Truce\'s call for dialogue and multilateral cooperation. However, the lack of clarity on disarmament and withdrawal from Gaza reveals the limits of current diplomatic efforts.',
          },
          {
            headline: 'Military Build-Ups & Treaty Withdrawals',
            text: 'U.S. naval deployments near Iran, Poland\'s use of landmines, new nuclear agreements lacking non-proliferation safeguards, and countries withdrawing from restraint treaties challenge the Truce\'s spirit and expose the escalation of military postures alongside diplomatic initiatives.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While diplomatic initiatives like the "Board of Peace" and humanitarian pledges for Gaza align with the Truce\'s ideals, the persistence of armed conflict, restrictions on movement, and escalation of military postures starkly undermine its core principles—highlighting both the urgent need for the Truce\'s vision and the formidable obstacles to its realization.',
    },
    keyConstraints: [
      'Ongoing violence in Gaza and Ukraine, restrictions on Palestinian movement, and reports of violence against Ukrainian civilians directly undermine safe passage and humanitarian access.',
      'Military build-ups, nuclear agreements without non-proliferation safeguards, and treaty withdrawals reveal the gap between diplomatic rhetoric and the Truce\'s call for restraint and coexistence.',
    ],
    publishedAt: '2026-02-20',
  },
  {
    id: 'pulse-2026-02-19',
    periodStart: '2026-02-19',
    periodEnd: '2026-02-19',
    periodLabel: '19 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Russia–Ukraine, Israel–Hamas & Sudan Conflicts Persist',
            text: 'Multiple conflicts continue through the Truce period, with the Russia–Ukraine war, Israel–Hamas war, and Sudanese civil war all undermining the Truce\'s call for safe passage of athletes and delegations.',
          },
          {
            headline: 'Geneva Talks & U.S. Restraint on Iran',
            text: 'Ongoing negotiations—including Geneva talks between Moscow and Kyiv and U.S. military readiness but restraint regarding Iran—reflect attempts to create corridors for dialogue and humanitarian access, echoing the Truce\'s spirit of reduced violence and increased mobility.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'U.N. Security Council & NATO Diplomatic Activity',
            text: 'U.N. Security Council meetings and the U.S. push for NATO to scale back foreign operations suggest a global environment prioritizing dialogue and cooperation—frameworks essential for ensuring athletes from conflict zones can participate safely.',
          },
          {
            headline: 'International Gaza Stabilization Board',
            text: 'The formation of international boards for Gaza stabilization reflects diplomatic cooperation that, while not directly tied to Olympic events, supports the broader environment of engagement the Truce seeks to protect for all participants.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Geneva Russia–Ukraine Talks & Belarus/Russia Sanctions',
            text: 'The Geneva talks on Russia–Ukraine, despite skepticism, represent ongoing efforts to reduce tensions. Sanctions and diplomatic pressure on Belarus and Russia aim to curb escalation and promote accountability, aligning with the Truce\'s call for calming hostilities.',
          },
          {
            headline: 'Gaza & Sudan Humanitarian Interventions',
            text: 'U.N. and international boards addressing Gaza and Sudan focus on humanitarian access and reconstruction, directly supporting the Truce\'s humanitarian objectives. U.S. military restraint regarding Iran signals a preference for dialogue over immediate conflict.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'International Negotiations & Multilateral Cooperation',
            text: 'Current international negotiations, sanctions, and humanitarian interventions illustrate a world grappling with conflict but striving for diplomatic solutions. The emphasis on meetings, boards, and international cooperation mirrors the Truce\'s ethos of restraint and dialogue.',
          },
          {
            headline: 'Frameworks for Peaceful Coexistence',
            text: 'While direct links to Olympic participation are not always explicit, the broader context of diplomatic engagement offers hope that such frameworks may eventually support safe passage and participation—reflecting the Truce\'s foundational commitment to peaceful coexistence.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Global attempts to reduce violence, enable humanitarian access, and foster diplomatic dialogue—from Geneva talks to Gaza stabilization boards—align with the Truce\'s call for restraint and coexistence, even as ongoing conflicts in Ukraine, Gaza, and Sudan underscore the distance between aspiration and reality.',
    },
    keyConstraints: [
      'The Russia–Ukraine war, Israel–Hamas war, and Sudanese civil war continue through the Truce period, directly undermining safe passage and the cessation of hostilities the Truce demands.',
      'Despite diplomatic frameworks and international cooperation, outcomes remain uncertain and the gap between dialogue and concrete de-escalation persists across multiple conflict zones.',
    ],
    publishedAt: '2026-02-19',
  },
  {
    id: 'pulse-2026-02-18',
    periodStart: '2026-02-18',
    periodEnd: '2026-02-18',
    periodLabel: '18 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S.–Iran Nuclear Negotiations',
            text: 'Iran\'s willingness to suspend nuclear enrichment and exchange drafts for a potential deal suggests a diplomatic opening that could reduce barriers to safe passage for Olympic participants. However, Vice President Vance\'s statement that military action remains an option signals that safe passage is not yet guaranteed.',
          },
          {
            headline: 'Russia–Ukraine Talks Stalled on Territorial Disputes',
            text: 'The continuation of talks between Russia, Ukraine, and the U.S. reflects attempts at dialogue that could support the Truce\'s aims, but the lack of substantive progress and ongoing territorial disputes pose persistent risks to the movement of athletes and delegations.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Poland Bars Chinese-Made Vehicles from Military Facilities',
            text: 'Poland\'s security restrictions on Chinese-made vehicles illustrate how geopolitical tensions can spill over into restrictions that, while not directly targeting Olympic participation, highlight an environment where exclusionary actions may affect athletes, officials, or national delegations.',
          },
          {
            headline: 'Belgium–U.S. Diplomatic Tensions over Antisemitism Accusations',
            text: 'Diplomatic friction between Belgium and the U.S. over accusations of antisemitism underscores how political disputes can create a climate of tension that risks affecting the inclusive spirit the Truce seeks to protect for all participants.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Lebanese Disarmament Plan Rejected by Hezbollah',
            text: 'The Lebanese government\'s disarmament plan and its rejection by Hezbollah illustrate ongoing regional tensions that hinder humanitarian access and the calming of hostilities, running counter to the Truce\'s call for a cessation of violence.',
          },
          {
            headline: 'U.S. Military Operations & Cambodian-Thai Border Dispute',
            text: 'U.S. military operations in the Caribbean and Pacific, the indictment of a tanker captain, and the Cambodian-Thai border dispute further underscore the persistence of conflict and enforcement actions that impede the Truce\'s vision of humanitarian corridors.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Geneva Negotiations & Continued Dialogue',
            text: 'The fact that negotiations are taking place in Geneva and that parties remain willing to continue talks aligns with the Truce\'s spirit of restraint and dialogue, even as concrete outcomes remain elusive.',
          },
          {
            headline: 'U.N. Human Rights Council & Canada\'s Defense Strategy',
            text: 'The U.N. Human Rights Council\'s investigation into global criminal enterprises and Canada\'s "Buy Canadian" defense strategy reflect international commitments to justice, sovereignty, and reduced dependency—steps toward the coexistence and self-determination the Truce envisions.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Diplomatic negotiations in Geneva, Iran\'s willingness to engage, and continued Russia–Ukraine–U.S. talks show alignment with the Truce\'s spirit of dialogue—yet military threats, sanctions, and unresolved territorial disputes reveal the gap between current realities and the Truce\'s vision of restraint, safe passage, and coexistence.',
    },
    keyConstraints: [
      'Vice President Vance\'s statement that military action against Iran remains on the table, combined with persistent sanctions and embargoes, undermine the Truce\'s call for safe passage and peaceful resolution.',
      'Lack of progress in Russia–Ukraine negotiations and ongoing regional conflicts—from Lebanon to the Cambodian-Thai border—run counter to the Truce\'s objectives of calming hostilities and enabling humanitarian access.',
    ],
    publishedAt: '2026-02-18',
  },
  {
    id: 'pulse-2026-02-17',
    periodStart: '2026-02-17',
    periodEnd: '2026-02-17',
    periodLabel: '17 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Israel–Hamas War & Sudanese Civil War',
            text: 'Airstrikes in Gaza and Sudan create environments where safe passage is severely compromised, directly threatening the safe movement of athletes, officials, and spectators.',
          },
          {
            headline: 'Russia–Ukraine Military Operations',
            text: 'Ongoing military operations in Ukraine continue to undermine safe transit, underscoring the urgent need for adherence to the Truce\'s principle of allowing unhindered access and movement for Olympic participants.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Conflict Zones Threatening Olympic Access',
            text: 'The Israel–Hamas war, Russia–Ukraine war, and Sudanese civil war directly threaten the ability of athletes, officials, and spectators to participate in the Games.',
          },
          {
            headline: 'Compromised Training & Travel Conditions',
            text: 'Active conflict environments create barriers to unhindered access and movement, highlighting the gap between the Truce\'s ideals and current realities for Olympic participants.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Doctors Without Borders Suspends Gaza Operations',
            text: 'The suspension of medical operations by Doctors Without Borders in Gaza due to security breaches highlights the critical importance of reducing violence to facilitate humanitarian aid.',
          },
          {
            headline: 'Mass Casualties in Sudan',
            text: 'The humanitarian crisis in Sudan underscores how a pause in conflict could allow medical and relief efforts to reach those in need, echoing the Truce\'s call for enabling humanitarian access.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'U.S.–Iran Indirect Talks',
            text: 'Indirect talks between the U.S. and Iran align with the Truce\'s broader diplomatic frame, advocating for restraint, dialogue, and peaceful resolution of disputes.',
          },
          {
            headline: 'U.S.-Brokered Ukraine–Russia Peace Talks',
            text: 'U.S.-brokered peace talks between Ukraine and Russia demonstrate ongoing attempts to resolve disputes peacefully, resonating with the Truce\'s ethos of coexistence and international mediation.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While diplomatic efforts and calls for humanitarian access reflect the Olympic Truce\'s spirit, ongoing conflicts and security challenges highlight the gap between the Truce\'s ideals and current realities—a reminder of the urgent need for global leaders to honor the Truce by prioritizing safe passage, participation, and peaceful coexistence.',
    },
    keyConstraints: [
      'Preparation for sustained operations against Iran, Israeli strikes in Gaza, and drone attacks in Sudan illustrate ongoing tensions that undermine the Truce\'s call for global calm and cooperation.',
      'Escalation of military operations and continued hostilities in several regions run counter to the Truce\'s objectives despite diplomatic efforts.',
    ],
    publishedAt: '2026-02-17',
  },
  {
    id: 'pulse-2026-02-14',
    periodStart: '2026-02-14',
    periodEnd: '2026-02-15',
    periodLabel: '14–15 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Russian Missile & Drone Attacks on Ukrainian Cities',
            text: 'Intensified Russian missile and drone attacks on Ukrainian cities, resulting in civilian casualties and infrastructure damage, directly challenge the Truce\'s principle of safe passage and undermine the ability of athletes and delegations to travel safely from affected regions.',
          },
          {
            headline: 'Blackouts & Heating Outages',
            text: 'The resulting blackouts and heating outages further jeopardize the safety and mobility of populations, including potential Olympic participants, creating conditions incompatible with the Truce\'s call for safe passage.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Ukraine Conflict & Regional Instability',
            text: 'The escalation of conflict and regional instability—highlighted in both the Ukraine conflict and the Munich Security Conference 2026—could impede athletes\' ability to train, qualify, or travel.',
          },
          {
            headline: 'Disrupted Infrastructure in Conflict Zones',
            text: 'The broader climate of insecurity and disrupted infrastructure in conflict zones poses indirect barriers to participation, even where Olympic attendance is not explicitly addressed.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'UAE–Russia Diplomatic Engagement',
            text: 'Diplomatic engagements between the UAE and Russia reflect efforts to de-escalate tensions and promote dialogue, aligning with the Truce\'s spirit by advocating peaceful solutions and regional stability.',
          },
          {
            headline: 'UAE–Iran Dialogue',
            text: 'The UAE–Iran dialogue emphasizes cooperation in the Gulf, echoing the Truce\'s humanitarian intent—enabling environments where humanitarian access and coexistence are possible.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Munich Security Conference 2026',
            text: 'The Munich Security Conference and global governance discussions underscore the urgent need for renewed multilateralism, trust, and institutional reform—themes that resonate with the Olympic Truce\'s broader aims of fostering restraint, dialogue, and coexistence.',
          },
          {
            headline: 'Security Council Reform & Inclusive Cooperation',
            text: 'Calls for Security Council reform and inclusive cooperation mirror the Truce\'s vision of a world where international events like the Olympics can proceed in peace amid fragmentation and polarization.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While active conflicts starkly violate the Truce\'s ideals, ongoing diplomatic efforts and calls for multilateral reform offer hope for alignment with its principles of safe passage, participation, and peaceful coexistence.',
    },
    keyConstraints: [
      'Russian missile and drone attacks on Ukrainian cities, causing civilian casualties, blackouts, and heating outages, directly challenge safe passage and athlete mobility.',
      'Escalation of conflict and regional instability could impede athletes\' ability to train, qualify, or travel from affected regions.',
    ],
    publishedAt: '2026-02-15',
  },
  {
    id: 'pulse-2026-02-13',
    periodStart: '2026-02-13',
    periodEnd: '2026-02-13',
    periodLabel: '13 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.N. Peacekeeping in DR Congo',
            text: 'The U.N. peacekeeping mission\'s reconnaissance flights to monitor a ceasefire in the Democratic Republic of the Congo directly support the Truce\'s goal of enabling humanitarian access and safe movement.',
          },
          {
            headline: 'U.S. Withdrawal from Al-Tanf, Syria',
            text: 'U.S. Central Command\'s orderly departure from the al-Tanf garrison in Syria, repositioning troops and reducing direct conflict, may contribute to safer regional conditions aligned with the Truce\'s call for restraint and secure transit.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Reduced Hostilities in Conflict Zones',
            text: 'The reduction of hostilities in conflict zones such as Syria and Congo, along with multinational defense initiatives proposed by the U.K., create environments more conducive to international sporting events and Olympic participation.',
          },
          {
            headline: 'U.N. Global Scientific Panel on AI',
            text: 'A new global scientific panel on AI approved by the U.N. reflects international cooperation and dialogue foundational to the Olympic spirit and the Truce\'s encouragement of peaceful participation.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Reducing Tensions',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S.–China Diplomatic Restraint',
            text: 'The U.S. pausing bans on Chinese telecom operations ahead of a summit with China signals diplomatic restraint and dialogue, resonating with the Truce\'s appeal for calming tensions.',
          },
          {
            headline: 'Bangladesh Election & Peaceful Transition',
            text: 'The Bangladesh Nationalist Party\'s landslide election win, if followed by peaceful transition, could reduce domestic tensions and support the Truce\'s humanitarian aims.',
          },
          {
            headline: 'High Court Ruling on Palestine Action',
            text: 'The High Court ruling on Palestine Action demonstrates legal processes over violent confrontation, echoing the Truce\'s preference for dialogue and institutional resolution.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Multinational Defense & Reconstruction Plans',
            text: 'Multinational defense and reconstruction plans for Gaza and joint U.S.-Mexico military exercises show efforts at international cooperation and coexistence fitting the Truce\'s diplomatic frame.',
          },
          {
            headline: 'Intelligence & Alliance Coordination',
            text: 'CIA outreach in China and NATO\'s coordinated support for Ukraine, while rooted in security interests, reflect the importance of communication and alliances that can foster restraint and coexistence if managed constructively.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Positive Signals: Peacekeeping operations, diplomatic pauses, multinational initiatives, and legal restraint collectively align with the Truce\'s core values of safe passage, participation, calming hostilities, and fostering dialogue.',
    },
    keyConstraints: [
      'Ongoing conflict in DR Congo and Syria continues to challenge full realization of safe passage despite peacekeeping and withdrawal efforts.',
      'Geopolitical tensions between major powers (U.S.-China, NATO-Russia) remain an underlying risk to the Truce\'s vision of global restraint.',
    ],
    publishedAt: '2026-02-13',
  },
  {
    id: 'pulse-2026-02-12',
    periodStart: '2026-02-12',
    periodEnd: '2026-02-12',
    periodLabel: '12 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage & Protection of Civilians',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Iran Protest Crackdown',
            text: 'The death toll from Iran\'s crackdown on nationwide protests has reached at least 7,002 people, underscoring a domestic environment where safe passage is far from guaranteed.',
          },
          {
            headline: 'Afghan Migrant Deaths Near Chios',
            text: 'Deaths of Afghan migrants near Chios, where autopsies show they died of head injuries rather than drowning, reveal the acute vulnerability of displaced populations the Truce explicitly aims to protect.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'U.S. Aircraft Carrier Deployment Toward Iran',
            text: 'The Pentagon\'s preparation of a second U.S. aircraft carrier for potential deployment toward Iran signals rising tensions that could impede athletes\' ability to travel safely or represent their nations without political pressure.',
          },
          {
            headline: 'Russian Strike on Odesa Infrastructure',
            text: 'A Russian strike leaving nearly 300,000 people without electricity and water in Odesa illustrates how ongoing conflict disrupts the basic infrastructure necessary for training, qualification, and international mobility.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Iran Nuclear Negotiations',
            text: 'President Trump insisted that negotiations with Iran continue, and Turkey\'s foreign minister emphasized that expanding the talks could risk another war. These gestures toward dialogue align with the Truce\'s spirit of de-escalation.',
          },
          {
            headline: 'Gaza Humanitarian Crisis',
            text: 'The Gaza situation, where hundreds of Palestinians were killed near aid sites, shows how far current realities are from the Truce\'s humanitarian aspirations for safe access and civilian protection.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Munich Security Conference',
            text: 'Secretary of State Rubio\'s plan to emphasize cooperation on the Middle East, Ukraine, and China at the Munich Security Conference reflects the Truce\'s diplomatic ethos. His intention to take a less contentious approach mirrors the Truce\'s aim to create space for coexistence amid strategic rivalry.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed: Diplomatic channels on Iran and the Munich Security Conference signal alignment with Truce principles, but severe civilian harm in Iran, Gaza, and Ukraine, alongside military escalation, underscores persistent gaps between Truce aspirations and ground realities.',
    },
    keyConstraints: [
      'Iran\'s protest crackdown and Afghan migrant deaths highlight severe threats to civilian safety and safe passage.',
      'Military escalation (U.S. carrier deployment, Russian infrastructure strikes) directly threatens athlete participation and regional stability.',
      'Humanitarian access in Gaza remains critically obstructed despite ongoing diplomatic efforts.',
    ],
    publishedAt: '2026-02-12',
  },
  {
    id: 'pulse-2026-02-11',
    periodStart: '2026-02-11',
    periodEnd: '2026-02-11',
    periodLabel: '11 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Middle East Military Escalation',
            text: 'U.S. carrier deployments, missile readiness in Qatar, and ongoing Israel-Hamas hostilities directly threaten regional stability and could impede safe transit routes for Olympic participants.',
          },
          {
            headline: 'Russia–Ukraine Conflict',
            text: 'Russian advances toward strategic Ukrainian cities pose risks to athletes and officials from affected regions, potentially limiting their ability to travel safely to the Games.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Indonesia Humanitarian Deployment to Gaza',
            text: 'Indonesia\'s preparation to send medical and engineering personnel to Gaza demonstrates a commitment to humanitarian support, echoing the Truce\'s principle of enabling participation and assistance even amid conflict.',
          },
          {
            headline: 'Conflict Zones Hindering Athletes',
            text: 'Ongoing violence in Myanmar, South Sudan, and Gaza may hinder athletes\' ability to train, qualify, or attend the Games, challenging the universality of Olympic participation.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Qatari Emir–Trump De-escalation Call',
            text: 'Diplomatic efforts such as the Qatari Emir\'s call with President Trump for regional de-escalation reflect attempts to calm hostilities in line with the Truce\'s spirit.',
          },
          {
            headline: 'U.S. Draft Plan for Hamas & Indonesia Deployment',
            text: 'The U.S. negotiation team\'s draft plan for Hamas and Indonesia\'s humanitarian deployment are practical steps toward reducing violence and enabling humanitarian corridors.',
          },
          {
            headline: 'Persistent Barriers to Humanitarian Access',
            text: 'Ongoing airstrikes, restrictions on humanitarian access in South Sudan and Myanmar, and continued military buildups in the Arctic and Europe highlight challenges to the Truce\'s humanitarian aims.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Diplomatic Engagement',
            text: 'U.S.-Qatar and U.S.-Azerbaijan dialogues, along with humanitarian missions, support the Truce\'s ideals of restraint, dialogue, and coexistence.',
          },
          {
            headline: 'Rising Militarization & Political Deadlocks',
            text: 'Increasing militarization, political deadlocks, and fragmented conflict landscapes underscore the difficulties of achieving global restraint and peaceful coexistence during the Games.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed: Diplomatic and humanitarian efforts echo Truce principles, while ongoing conflicts and militarization threaten safe passage, participation, and the broader vision for peace and dialogue.',
    },
    keyConstraints: [
      'Military escalations in the Middle East and Europe threaten safe transit routes for Olympic participants.',
      'Ongoing violence in Myanmar, South Sudan, and Gaza may hinder athletes\' ability to train, qualify, or attend the Games.',
    ],
    publishedAt: '2026-02-11',
  },
  {
    id: 'pulse-2026-02-10',
    periodStart: '2026-02-10',
    periodEnd: '2026-02-10',
    periodLabel: '10 February 2026',
    focusAreas: ['Diplomatic Engagement', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'diplomatic',
        title: 'Diplomatic Engagement',
        icon: '🤝',
        color: 'blue',
        bullets: [
          {
            headline: 'Iran–U.S. Muscat Meeting',
            text: 'Continued diplomatic engagement between Iranian and U.S. representatives in Muscat reflects ongoing efforts to de-escalate tensions and foster dialogue, resonating with the Olympic Truce\'s spirit of peaceful engagement.',
          },
          {
            headline: 'VP Vance\'s Historic Visit to Armenia',
            text: 'Vice President JD Vance\'s historic visit to Armenia to promote peace represents a significant diplomatic gesture aligned with Truce principles of dialogue and reconciliation.',
          },
        ],
      },
      {
        id: 'humanitarian',
        title: 'Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S. Maritime Strike & Rescue Operations',
            text: 'A U.S. military strike against a suspected drug trafficking vessel in the eastern Pacific, followed by immediate Coast Guard notification for search and rescue, demonstrates commitment to safeguarding survivors and humanitarian access.',
          },
          {
            headline: 'Migrant Boat Capsizes off Libya',
            text: 'IOM reports a capsized migrant boat off Libya with only two survivors rescued. Nearly 500 migrants dead or missing in 2026 highlights the urgent need for international cooperation to ensure safe passage for vulnerable populations.',
          },
        ],
      },
      {
        id: 'deescalation',
        title: 'Conflict De-escalation',
        icon: '⚖️',
        color: 'green',
        bullets: [
          {
            headline: 'Gaza: Continued Violence Despite Ceasefire',
            text: 'Continued airstrikes and fatalities in Gaza illustrate the difficulties in calming hostilities and securing humanitarian corridors. Casualty figures since the ceasefire agreement emphasize the gap between truce intentions and realities on the ground.',
          },
        ],
      },
      {
        id: 'stabilization',
        title: 'Regional Stabilization',
        icon: '🌍',
        color: 'purple',
        bullets: [
          {
            headline: 'Progress and Persistent Obstacles',
            text: 'Events collectively reveal both progress and persistent obstacles in realizing the Olympic Truce\'s vision, underscoring the need for sustained international commitment to safe passage, humanitarian access, and the reduction of hostilities.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed Progress: Diplomatic openings and rescue commitments demonstrate partial alignment with Truce objectives, while continued violence in Gaza and migration casualties reveal persistent gaps between truce intentions and ground realities.',
    },
    keyConstraints: [
      'Continued violence in Gaza despite ceasefire agreements challenges the realization of humanitarian corridors and safe passage.',
      'Nearly 500 migrant deaths or disappearances in 2026 underscore systemic failures in ensuring safe passage for vulnerable populations.',
    ],
    publishedAt: '2026-02-10',
  },
  {
    id: 'pulse-2026-w01',
    periodStart: '2026-01-30',
    periodEnd: '2026-02-06',
    periodLabel: '30 January 2026 – 6 February 2026',
    focusAreas: ['Diplomatic Engagement', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'diplomatic',
        title: 'Diplomatic Engagement',
        icon: '🤝',
        color: 'blue',
        bullets: [
          {
            headline: 'Iran–U.S. Indirect Talks (Oman)',
            text: 'Renewed diplomatic channel supports restraint and conditions for dialogue during the Truce period.',
          },
          {
            headline: 'U.S.–Russia Military Dialogue Restored',
            text: 'Reopening high-level communication reduces escalation risk and reinforces confidence-building.',
          },
        ],
      },
      {
        id: 'humanitarian',
        title: 'Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Displacement (UAE Proposal)',
            text: 'Temporary housing plan highlights urgent civilian needs; feasibility concerns underscore barriers to safe passage.',
          },
          {
            headline: 'Sudan Crisis',
            text: 'Famine-level malnutrition and attacks on medical facilities continue to obstruct humanitarian access and civilian protection.',
          },
        ],
      },
      {
        id: 'deescalation',
        title: 'Conflict De-escalation',
        icon: '⚖️',
        color: 'green',
        bullets: [
          {
            headline: 'Russia–Ukraine: Prisoner Exchange',
            text: 'U.S.-brokered talks in Abu Dhabi produced a 314-person prisoner exchange.',
          },
          {
            headline: 'Russia–Ukraine: Resumed Negotiations',
            text: 'Agreement to resume negotiations aligns with Truce principles of dialogue over confrontation.',
          },
          {
            headline: 'Russia–Ukraine: Ongoing Fragility',
            text: 'Persistent instability (communications disruptions, targeted violence) signals ongoing fragility.',
          },
        ],
      },
      {
        id: 'stabilization',
        title: 'Regional Stabilization',
        icon: '🌍',
        color: 'purple',
        bullets: [
          {
            headline: 'Yemen',
            text: 'Saudi financial commitments aim to stabilize government-held areas and encourage renewed talks with the Houthis, reflecting movement toward political pathways.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Moderate Positive Movement: Multiple diplomatic openings and humanitarian initiatives reflect partial alignment with Truce objectives.',
    },
    keyConstraints: [
      'Active conflicts, civilian displacement, and attacks on essential services continue to challenge safe passage and humanitarian access.',
    ],
    publishedAt: '2026-02-07',
  },
];

export function getLatestPulse(): PulseEntry {
  return PULSE_ENTRIES[0];
}

export function getPulseById(id: string): PulseEntry | undefined {
  return PULSE_ENTRIES.find(entry => entry.id === id);
}
