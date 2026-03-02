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
