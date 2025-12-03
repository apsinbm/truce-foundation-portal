// Shared Truce period data for accountability and country profiles

export interface Violation {
  country: string;
  countryIso3: string;
  description: string;
  date?: string;
  severity: 'critical' | 'major' | 'significant';
  casualties?: number;
  sources?: string[];
}

export interface TrucePeriod {
  id: string;
  games: string;
  year: number;
  city: string;
  country: string;
  season: 'Summer' | 'Winter';
  truceWindow: {
    start: string;
    end: string;
  };
  unResolution: string;
  violations: Violation[];
  status: 'observed' | 'violated' | 'mixed';
}

// Historical data - violations during Olympic Truce windows
export const TRUCE_PERIODS: TrucePeriod[] = [
  {
    id: 'paris-2024',
    games: 'Paris 2024',
    year: 2024,
    city: 'Paris',
    country: 'France',
    season: 'Summer',
    truceWindow: {
      start: '2024-07-19',
      end: '2024-09-15',
    },
    unResolution: 'A/RES/78/10',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Continued military operations in Ukraine throughout the Truce period, including missile strikes on civilian infrastructure',
        severity: 'critical',
        sources: ['UN Reports', 'OHCHR'],
      },
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Military operations in Gaza continued during the Truce window',
        severity: 'critical',
        sources: ['UN Reports', 'OCHA'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Ongoing civil conflict between SAF and RSF forces',
        severity: 'major',
        sources: ['ACLED', 'Crisis Group'],
      },
      {
        country: 'Myanmar',
        countryIso3: 'MMR',
        description: 'Continued military operations against civilian populations',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'beijing-2022-winter',
    games: 'Beijing 2022',
    year: 2022,
    city: 'Beijing',
    country: 'China',
    season: 'Winter',
    truceWindow: {
      start: '2022-01-28',
      end: '2022-03-20',
    },
    unResolution: 'A/RES/76/13',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Full-scale invasion of Ukraine launched February 24, 2022 - between Olympic and Paralympic Games',
        date: '2022-02-24',
        severity: 'critical',
        casualties: 10000,
        sources: ['UN Security Council', 'OHCHR'],
      },
    ],
  },
  {
    id: 'tokyo-2020',
    games: 'Tokyo 2020',
    year: 2021,
    city: 'Tokyo',
    country: 'Japan',
    season: 'Summer',
    truceWindow: {
      start: '2021-07-16',
      end: '2021-09-12',
    },
    unResolution: 'A/RES/74/16',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Taliban offensive and fall of Kabul during Games period',
        date: '2021-08-15',
        severity: 'critical',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Ethiopia',
        countryIso3: 'ETH',
        description: 'Tigray conflict escalation during Truce window',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'pyeongchang-2018',
    games: 'PyeongChang 2018',
    year: 2018,
    city: 'PyeongChang',
    country: 'South Korea',
    season: 'Winter',
    truceWindow: {
      start: '2018-02-02',
      end: '2018-03-25',
    },
    unResolution: 'A/RES/72/6',
    status: 'observed',
    violations: [],
  },
  {
    id: 'rio-2016',
    games: 'Rio 2016',
    year: 2016,
    city: 'Rio de Janeiro',
    country: 'Brazil',
    season: 'Summer',
    truceWindow: {
      start: '2016-07-29',
      end: '2016-09-25',
    },
    unResolution: 'A/RES/70/4',
    status: 'violated',
    violations: [
      {
        country: 'Syria',
        countryIso3: 'SYR',
        description: 'Syrian Civil War continued with intense fighting in Aleppo',
        severity: 'critical',
        sources: ['UN Reports', 'SOHR'],
      },
      {
        country: 'Yemen',
        countryIso3: 'YEM',
        description: 'Saudi-led coalition continued military operations',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'sochi-2014',
    games: 'Sochi 2014',
    year: 2014,
    city: 'Sochi',
    country: 'Russia',
    season: 'Winter',
    truceWindow: {
      start: '2014-01-31',
      end: '2014-03-23',
    },
    unResolution: 'A/RES/68/9',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Annexation of Crimea began February 27, 2014 - between Olympic and Paralympic Games',
        date: '2014-02-27',
        severity: 'critical',
        sources: ['UN General Assembly', 'OSCE'],
      },
    ],
  },
  {
    id: 'london-2012',
    games: 'London 2012',
    year: 2012,
    city: 'London',
    country: 'United Kingdom',
    season: 'Summer',
    truceWindow: {
      start: '2012-07-20',
      end: '2012-09-16',
    },
    unResolution: 'A/RES/66/5',
    status: 'violated',
    violations: [
      {
        country: 'Syria',
        countryIso3: 'SYR',
        description: 'Syrian Civil War intensified during Games period',
        severity: 'critical',
        sources: ['UN Reports'],
      },
    ],
  },
  {
    id: 'vancouver-2010',
    games: 'Vancouver 2010',
    year: 2010,
    city: 'Vancouver',
    country: 'Canada',
    season: 'Winter',
    truceWindow: {
      start: '2010-02-05',
      end: '2010-03-28',
    },
    unResolution: 'A/RES/64/4',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Operation Moshtarak (Feb 13) - major NATO offensive in Helmand during Games',
        date: '2010-02-13',
        severity: 'critical',
        sources: ['UN Reports', 'NATO'],
      },
      {
        country: 'Pakistan',
        countryIso3: 'PAK',
        description: 'War in North-West Pakistan - ongoing military operations against Taliban',
        severity: 'major',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Somalia',
        countryIso3: 'SOM',
        description: 'Somali Civil War continued with al-Shabaab offensive operations',
        severity: 'major',
        sources: ['UN Reports', 'ACLED'],
      },
    ],
  },
  {
    id: 'beijing-2008',
    games: 'Beijing 2008',
    year: 2008,
    city: 'Beijing',
    country: 'China',
    season: 'Summer',
    truceWindow: {
      start: '2008-08-01',
      end: '2008-09-24',
    },
    unResolution: 'A/RES/62/4',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Russo-Georgian War began August 7, 2008 - one day before Opening Ceremony',
        date: '2008-08-07',
        severity: 'critical',
        casualties: 850,
        sources: ['EU Fact-Finding Mission', 'UN Reports'],
      },
      {
        country: 'Georgia',
        countryIso3: 'GEO',
        description: 'Military engagement in South Ossetia conflict',
        date: '2008-08-07',
        severity: 'critical',
        sources: ['EU Fact-Finding Mission'],
      },
    ],
  },
  {
    id: 'turin-2006',
    games: 'Turin 2006',
    year: 2006,
    city: 'Turin',
    country: 'Italy',
    season: 'Winter',
    truceWindow: {
      start: '2006-02-03',
      end: '2006-03-26',
    },
    unResolution: 'A/RES/60/8',
    status: 'violated',
    violations: [
      {
        country: 'Iraq',
        countryIso3: 'IRQ',
        description: 'Iraq War continued with intense sectarian violence following the Al-Askari mosque bombing (Feb 22)',
        severity: 'critical',
        sources: ['UN Reports', 'Iraq Body Count'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Darfur conflict ongoing with continued attacks on civilians',
        severity: 'critical',
        sources: ['UN Reports', 'Crisis Group'],
      },
    ],
  },
  {
    id: 'athens-2004',
    games: 'Athens 2004',
    year: 2004,
    city: 'Athens',
    country: 'Greece',
    season: 'Summer',
    truceWindow: {
      start: '2004-08-06',
      end: '2004-10-03',
    },
    unResolution: 'A/RES/58/6',
    status: 'violated',
    violations: [
      {
        country: 'Iraq',
        countryIso3: 'IRQ',
        description: 'Iraq War continued - Battle of Najaf (Aug 5-27) and ongoing insurgency',
        severity: 'critical',
        sources: ['UN Reports', 'US DoD'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Darfur genocide ongoing - UN declared humanitarian emergency July 2004',
        severity: 'critical',
        sources: ['UN Security Council', 'Human Rights Watch'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War operations continued',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'salt-lake-2002',
    games: 'Salt Lake City 2002',
    year: 2002,
    city: 'Salt Lake City',
    country: 'United States',
    season: 'Winter',
    truceWindow: {
      start: '2002-02-01',
      end: '2002-03-24',
    },
    unResolution: 'A/RES/56/75',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'US-led Operation Anaconda (Mar 2-18) during Paralympic period',
        date: '2002-03-02',
        severity: 'critical',
        sources: ['US DoD', 'UN Reports'],
      },
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Second Intifada - IDF Operation Defensive Shield preparation, ongoing violence',
        severity: 'major',
        sources: ['UN Reports', 'B\'Tselem'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War continued with military operations',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'sydney-2000',
    games: 'Sydney 2000',
    year: 2000,
    city: 'Sydney',
    country: 'Australia',
    season: 'Summer',
    truceWindow: {
      start: '2000-09-08',
      end: '2000-11-05',
    },
    unResolution: 'A/RES/54/34',
    status: 'violated',
    violations: [
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Second Intifada began September 28, 2000 during Games',
        date: '2000-09-28',
        severity: 'critical',
        sources: ['UN Reports', 'B\'Tselem'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War operations ongoing',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'nagano-1998',
    games: 'Nagano 1998',
    year: 1998,
    city: 'Nagano',
    country: 'Japan',
    season: 'Winter',
    truceWindow: {
      start: '1998-01-30',
      end: '1998-03-22',
    },
    unResolution: 'A/RES/52/21',
    status: 'observed',
    violations: [],
  },
  {
    id: 'atlanta-1996',
    games: 'Atlanta 1996',
    year: 1996,
    city: 'Atlanta',
    country: 'United States',
    season: 'Summer',
    truceWindow: {
      start: '1996-07-12',
      end: '1996-09-08',
    },
    unResolution: 'A/RES/50/13',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'First Chechen War - Battle of Grozny (Aug 6-22) during Games',
        date: '1996-08-06',
        severity: 'critical',
        casualties: 2000,
        sources: ['Human Rights Watch', 'Memorial'],
      },
      {
        country: 'Burundi',
        countryIso3: 'BDI',
        description: 'Burundian Civil War - military coup July 25 during Games',
        date: '1996-07-25',
        severity: 'major',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Afghan Civil War continued - Taliban offensive operations',
        severity: 'major',
        sources: ['UN Reports'],
      },
    ],
  },
  {
    id: 'lillehammer-1994',
    games: 'Lillehammer 1994',
    year: 1994,
    city: 'Lillehammer',
    country: 'Norway',
    season: 'Winter',
    truceWindow: {
      start: '1994-02-05',
      end: '1994-03-27',
    },
    unResolution: 'A/RES/48/11',
    status: 'violated',
    violations: [
      {
        country: 'Bosnia and Herzegovina',
        countryIso3: 'BIH',
        description: 'Bosnian War continued - Siege of Sarajevo ongoing, Markale massacre (Feb 5) on Opening Day',
        date: '1994-02-05',
        severity: 'critical',
        casualties: 68,
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Serbia',
        countryIso3: 'SRB',
        description: 'Yugoslav Wars - Bosnian Serb forces continued siege operations',
        severity: 'critical',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Croatia',
        countryIso3: 'HRV',
        description: 'Croatian War of Independence - ongoing military operations',
        severity: 'major',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Rwanda',
        countryIso3: 'RWA',
        description: 'Rwandan Civil War escalating - genocide would begin April 1994',
        severity: 'major',
        sources: ['UN Reports', 'Human Rights Watch'],
      },
    ],
  },
  // Pre-revival era - before formal UN Olympic Truce resolutions (1993)
  {
    id: 'barcelona-1992',
    games: 'Barcelona 1992',
    year: 1992,
    city: 'Barcelona',
    country: 'Spain',
    season: 'Summer',
    truceWindow: {
      start: '1992-07-18',
      end: '1992-08-16',
    },
    unResolution: 'Pre-revival',
    status: 'violated',
    violations: [
      {
        country: 'Bosnia and Herzegovina',
        countryIso3: 'BIH',
        description: 'Bosnian War ongoing - Siege of Sarajevo began April 1992, intensified during Games period',
        severity: 'critical',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Serbia',
        countryIso3: 'SRB',
        description: 'Yugoslav Wars - Serbian forces engaged in ethnic cleansing campaigns in Bosnia',
        severity: 'critical',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Croatia',
        countryIso3: 'HRV',
        description: 'Croatian War of Independence - ongoing military operations',
        severity: 'major',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Somalia',
        countryIso3: 'SOM',
        description: 'Somali Civil War - ongoing conflict and humanitarian crisis',
        severity: 'major',
        sources: ['UN Reports'],
      },
    ],
  },
];

// Calculate repeat offenders from the data
export interface RepeatOffender {
  country: string;
  countryIso3: string;
  violationCount: number;
  gamesViolated: string[];
  mostRecent: number;
  violations: Array<{
    games: string;
    year: number;
    description: string;
    severity: string;
    date?: string;
    casualties?: number;
    sources?: string[];
  }>;
}

export const calculateRepeatOffenders = (): RepeatOffender[] => {
  const offenderMap = new Map<string, {
    country: string;
    countryIso3: string;
    games: string[];
    years: number[];
    violations: Array<{
      games: string;
      year: number;
      description: string;
      severity: string;
      date?: string;
      casualties?: number;
      sources?: string[];
    }>;
  }>();

  TRUCE_PERIODS.forEach(period => {
    period.violations.forEach(violation => {
      const key = violation.countryIso3;
      if (!offenderMap.has(key)) {
        offenderMap.set(key, {
          country: violation.country,
          countryIso3: violation.countryIso3,
          games: [],
          years: [],
          violations: [],
        });
      }
      const entry = offenderMap.get(key)!;
      if (!entry.games.includes(period.games)) {
        entry.games.push(period.games);
        entry.years.push(period.year);
      }
      entry.violations.push({
        games: period.games,
        year: period.year,
        description: violation.description,
        severity: violation.severity,
        date: violation.date,
        casualties: violation.casualties,
        sources: violation.sources,
      });
    });
  });

  return Array.from(offenderMap.values())
    .map(entry => ({
      country: entry.country,
      countryIso3: entry.countryIso3,
      violationCount: entry.games.length,
      gamesViolated: entry.games,
      mostRecent: Math.max(...entry.years),
      violations: entry.violations.sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => b.violationCount - a.violationCount);
};

export const REPEAT_OFFENDERS = calculateRepeatOffenders();

// Get country data by ISO3 code
export const getCountryByIso3 = (iso3: string): RepeatOffender | undefined => {
  return REPEAT_OFFENDERS.find(o => o.countryIso3 === iso3);
};

// Get all violations for a specific country
export const getViolationsForCountry = (iso3: string) => {
  const violations: Array<{
    period: TrucePeriod;
    violation: Violation;
  }> = [];

  TRUCE_PERIODS.forEach(period => {
    period.violations.forEach(violation => {
      if (violation.countryIso3 === iso3) {
        violations.push({ period, violation });
      }
    });
  });

  return violations.sort((a, b) => b.period.year - a.period.year);
};
