'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Link from 'next/link';

// Co-sponsors data for Milano-Cortina 2026 Olympic Truce Resolution (A/80/L.10)
// Adopted by consensus November 19, 2025

interface CoSponsor {
  country: string;
  date: string;
  isPrimarySponsor?: boolean;
  addedAtPlenary?: boolean;
}

const CO_SPONSORS: CoSponsor[] = [
  // Primary Sponsors
  { country: 'Italy', date: '2025-10-06T12:54:54Z', isPrimarySponsor: true },
  { country: 'Turkmenistan', date: '2025-10-17T09:56:01Z', isPrimarySponsor: true },
  // Additional Co-Sponsors (alphabetical in source, sorted by date here)
  { country: 'Hungary', date: '2025-11-04T17:20:23Z' },
  { country: 'San Marino', date: '2025-11-05T09:12:45Z' },
  { country: 'Japan', date: '2025-11-05T10:23:49Z' },
  { country: 'Canada', date: '2025-11-06T11:53:12Z' },
  { country: 'Bulgaria', date: '2025-11-07T11:33:16Z' },
  { country: 'Ukraine', date: '2025-11-07T17:10:30Z' },
  { country: 'Greece', date: '2025-11-10T10:24:29Z' },
  { country: 'Republic of Korea', date: '2025-11-10T10:27:00Z' },
  { country: 'Malta', date: '2025-11-10T11:02:50Z' },
  { country: 'Croatia', date: '2025-11-10T11:06:34Z' },
  { country: 'Tonga', date: '2025-11-10T11:08:13Z' },
  { country: 'Philippines', date: '2025-11-10T11:42:11Z' },
  { country: 'Estonia', date: '2025-11-10T11:51:21Z' },
  { country: 'Singapore', date: '2025-11-10T12:25:57Z' },
  { country: 'Viet Nam', date: '2025-11-10T12:45:03Z' },
  { country: 'United Republic of Tanzania', date: '2025-11-10T12:58:44Z' },
  { country: 'Morocco', date: '2025-11-10T13:12:49Z' },
  { country: 'Slovenia', date: '2025-11-10T13:15:49Z' },
  { country: 'Mongolia', date: '2025-11-10T15:32:58Z' },
  { country: 'Montenegro', date: '2025-11-10T15:32:02Z' },
  { country: 'United Kingdom', date: '2025-11-10T15:47:35Z' },
  { country: 'Armenia', date: '2025-11-10T15:53:48Z' },
  { country: 'Türkiye', date: '2025-11-10T16:01:29Z' },
  { country: 'Monaco', date: '2025-11-10T17:12:48Z' },
  { country: 'Bahrain', date: '2025-11-10T18:05:35Z' },
  { country: 'Andorra', date: '2025-11-11T10:29:09Z' },
  { country: 'Latvia', date: '2025-11-11T12:51:53Z' },
  { country: 'Micronesia (Federated States of)', date: '2025-11-11T15:49:36Z' },
  { country: 'Tuvalu', date: '2025-11-11T19:04:25Z' },
  { country: 'Marshall Islands', date: '2025-11-11T21:21:09Z' },
  { country: 'Kuwait', date: '2025-11-11T23:40:17Z' },
  { country: 'Tunisia', date: '2025-11-12T10:20:00Z' },
  { country: 'Qatar', date: '2025-11-12T10:34:47Z' },
  { country: 'Czechia', date: '2025-11-12T10:42:35Z' },
  { country: 'Austria', date: '2025-11-12T14:01:40Z' },
  { country: 'Antigua and Barbuda', date: '2025-11-12T15:29:21Z' },
  { country: 'Papua New Guinea', date: '2025-11-12T15:58:09Z' },
  { country: 'Republic of Moldova', date: '2025-11-12T16:23:05Z' },
  { country: 'Rwanda', date: '2025-11-12T16:24:29Z' },
  { country: 'Fiji', date: '2025-11-12T16:50:12Z' },
  { country: 'Uzbekistan', date: '2025-11-12T16:54:12Z' },
  { country: 'New Zealand', date: '2025-11-12T16:56:54Z' },
  { country: 'Kyrgyzstan', date: '2025-11-12T17:49:06Z' },
  { country: 'Bosnia and Herzegovina', date: '2025-11-12T18:26:03Z' },
  { country: 'Burundi', date: '2025-11-12T18:28:30Z' },
  { country: "Côte d'Ivoire", date: '2025-11-13T10:13:54Z' },
  { country: 'Iceland', date: '2025-11-13T11:07:06Z' },
  { country: 'Germany', date: '2025-11-13T11:34:34Z' },
  { country: 'Luxembourg', date: '2025-11-13T12:17:53Z' },
  { country: 'Democratic Republic of the Congo', date: '2025-11-13T13:53:18Z' },
  { country: 'Spain', date: '2025-11-13T14:47:32Z' },
  { country: 'Myanmar', date: '2025-11-13T15:08:39Z' },
  { country: 'Belize', date: '2025-11-13T15:20:23Z' },
  { country: 'Gabon', date: '2025-11-13T15:59:07Z' },
  { country: 'Norway', date: '2025-11-13T17:13:04Z' },
  { country: 'Timor-Leste', date: '2025-11-13T22:40:27Z' },
  { country: 'North Macedonia', date: '2025-11-14T07:06:39Z' },
  { country: 'Jamaica', date: '2025-11-14T09:10:46Z' },
  { country: 'Mozambique', date: '2025-11-14T09:17:03Z' },
  { country: 'Solomon Islands', date: '2025-11-14T09:25:05Z' },
  { country: 'Poland', date: '2025-11-14T09:41:14Z' },
  { country: 'Eritrea', date: '2025-11-14T09:59:12Z' },
  { country: 'Peru', date: '2025-11-14T10:09:51Z' },
  { country: 'Somalia', date: '2025-11-14T11:29:12Z' },
  { country: 'Cabo Verde', date: '2025-11-14T11:59:52Z' },
  { country: 'Colombia', date: '2025-11-14T12:08:04Z' },
  { country: 'Uganda', date: '2025-11-14T13:03:00Z' },
  { country: 'Botswana', date: '2025-11-14T13:34:50Z' },
  { country: 'Kenya', date: '2025-11-14T13:50:18Z' },
  { country: 'Jordan', date: '2025-11-14T14:04:25Z' },
  { country: 'Mali', date: '2025-11-14T14:36:54Z' },
  { country: 'Ireland', date: '2025-11-14T14:40:26Z' },
  { country: 'Liechtenstein', date: '2025-11-14T15:05:38Z' },
  { country: 'Finland', date: '2025-11-14T16:43:22Z' },
  { country: 'Portugal', date: '2025-11-14T17:03:27Z' },
  { country: 'Cyprus', date: '2025-11-14T17:31:06Z' },
  { country: 'Guatemala', date: '2025-11-14T17:44:47Z' },
  { country: 'Bangladesh', date: '2025-11-14T18:13:39Z' },
  { country: 'Burkina Faso', date: '2025-11-14T18:19:17Z' },
  { country: 'Equatorial Guinea', date: '2025-11-14T18:24:21Z' },
  { country: 'Romania', date: '2025-11-14T18:52:41Z' },
  { country: 'Palau', date: '2025-11-15T12:00:58Z' },
  { country: 'Libya', date: '2025-11-16T12:36:24Z' },
  { country: 'Kiribati', date: '2025-11-16T22:04:55Z' },
  { country: 'Eswatini', date: '2025-11-17T08:20:34Z' },
  { country: 'Slovakia', date: '2025-11-17T08:56:23Z' },
  { country: 'Barbados', date: '2025-11-17T09:14:34Z' },
  { country: 'Netherlands (Kingdom of the)', date: '2025-11-17T09:15:31Z' },
  { country: 'Dominica', date: '2025-11-17T09:20:53Z' },
  { country: 'Turkmenistan', date: '2025-11-17T09:56:01Z' },
  { country: 'Belarus', date: '2025-11-17T10:14:52Z' },
  { country: 'China', date: '2025-11-17T10:21:44Z' },
  { country: 'France', date: '2025-11-17T11:03:08Z' },
  { country: 'Central African Republic', date: '2025-11-17T11:25:46Z' },
  { country: 'Sao Tome and Principe', date: '2025-11-17T13:08:10Z' },
  { country: 'Saint Kitts and Nevis', date: '2025-11-17T13:35:00Z' },
  { country: 'Belgium', date: '2025-11-17T13:55:15Z' },
  { country: 'Senegal', date: '2025-11-17T13:59:48Z' },
  { country: 'Niger', date: '2025-11-17T15:16:11Z' },
  { country: 'Lithuania', date: '2025-11-17T15:29:39Z' },
  { country: 'Albania', date: '2025-11-17T15:44:34Z' },
  { country: 'Djibouti', date: '2025-11-17T16:18:38Z' },
  { country: 'Guyana', date: '2025-11-17T16:25:22Z' },
  { country: 'Haiti', date: '2025-11-17T16:28:12Z' },
  { country: 'Honduras', date: '2025-11-17T17:53:56Z' },
  { country: 'Malawi', date: '2025-11-17T18:12:38Z' },
  { country: 'Afghanistan', date: '2025-11-17T12:48:21Z' },
  { country: 'Lesotho', date: '2025-11-17T21:03:25Z' },
  { country: 'Georgia', date: '2025-11-18T08:10:43Z' },
  { country: 'Lebanon', date: '2025-11-18T08:34:03Z' },
  { country: 'Israel', date: '2025-11-18T08:48:35Z' },
  { country: 'Azerbaijan', date: '2025-11-18T08:54:38Z' },
  { country: 'Tajikistan', date: '2025-11-18T08:55:36Z' },
  { country: 'Yemen', date: '2025-11-18T09:25:42Z' },
  { country: 'Ghana', date: '2025-11-18T09:31:05Z' },
  { country: 'Zimbabwe', date: '2025-11-18T09:39:54Z' },
  { country: 'Saint Vincent and the Grenadines', date: '2025-11-18T10:27:18Z' },
  { country: 'Brunei Darussalam', date: '2025-11-18T10:29:34Z' },
  { country: 'Thailand', date: '2025-11-18T11:37:41Z' },
  { country: 'Chile', date: '2025-11-18T11:57:32Z' },
  { country: 'Algeria', date: '2025-11-18T12:19:34Z' },
  { country: 'Guinea-Bissau', date: '2025-11-18T12:22:05Z' },
  { country: 'Chad', date: '2025-11-18T12:29:03Z' },
  { country: 'Mauritius', date: '2025-11-18T12:32:11Z' },
  { country: 'Switzerland', date: '2025-11-18T12:51:16Z' },
  { country: "Lao People's Democratic Republic", date: '2025-11-18T13:13:43Z' },
  { country: 'Sierra Leone', date: '2025-11-18T13:28:12Z' },
  { country: 'Samoa', date: '2025-11-18T13:36:18Z' },
  { country: 'Bahamas', date: '2025-11-18T15:30:23Z' },
  { country: 'Suriname', date: '2025-11-18T15:21:07Z' },
  { country: 'Costa Rica', date: '2025-11-18T15:44:35Z' },
  { country: 'Vanuatu', date: '2025-11-18T16:29:07Z' },
  { country: 'Gambia', date: '2025-11-18T16:47:11Z' },
  { country: 'Dominican Republic', date: '2025-11-18T16:47:05Z' },
  { country: 'Panama', date: '2025-11-18T17:15:34Z' },
  { country: 'Zambia', date: '2025-11-18T17:25:44Z' },
  { country: 'Kazakhstan', date: '2025-11-18T17:50:30Z' },
  { country: 'Mexico', date: '2025-11-18T18:03:21Z' },
  { country: 'Brazil', date: '2025-11-18T19:30:43Z' },
  { country: 'El Salvador', date: '2025-11-18T21:44:59Z' },
  { country: 'Pakistan', date: '2025-11-18T22:03:06Z' },
  { country: 'Mauritania', date: '2025-11-19T00:03:36Z' },
  { country: 'Maldives', date: '2025-11-19T00:16:11Z' },
  { country: 'United Arab Emirates', date: '2025-11-19T06:01:14Z' },
  { country: 'Cuba', date: '2025-11-19T07:23:44Z' },
  { country: 'Saint Lucia', date: '2025-11-19T08:15:22Z' },
  { country: 'India', date: '2025-11-19T08:31:54Z' },
  { country: 'Togo', date: '2025-11-19T08:55:19Z' },
  { country: 'Sweden', date: '2025-11-19T09:07:01Z' },
  { country: 'South Africa', date: '2025-11-19T09:14:45Z' },
  { country: 'Australia', date: '2025-11-19T09:16:25Z' },
  { country: 'Serbia', date: '2025-11-19T09:24:53Z' },
  { country: 'Bhutan', date: '2025-11-19T09:30:02Z' },
  { country: 'Sudan', date: '2025-11-19T09:31:51Z' },
  { country: 'Ecuador', date: '2025-11-19T09:40:16Z' },
  { country: 'Malaysia', date: '2025-11-19T09:55:40Z' },
  { country: 'Sri Lanka', date: '2025-11-19T10:03:14Z' },
  { country: 'Iraq', date: '2025-11-19T10:06:53Z' },
  { country: 'Angola', date: '2025-11-19T10:07:10Z' },
  { country: 'Uruguay', date: '2025-11-19T10:08:38Z' },
  // Added at 46th plenary meeting
  { country: 'Comoros', date: '2025-11-19T12:41:47Z', addedAtPlenary: true },
  { country: 'Congo', date: '2025-11-19T12:41:47Z', addedAtPlenary: true },
  { country: 'Guinea', date: '2025-11-19T12:41:47Z', addedAtPlenary: true },
  { country: 'Trinidad and Tobago', date: '2025-11-19T12:41:47Z', addedAtPlenary: true },
  { country: 'Egypt', date: '2025-11-19T12:41:47Z', addedAtPlenary: true },
];

// UN Member States that did NOT co-sponsor the resolution (27 countries)
// 193 total UN members - 166 co-sponsors = 27 non-signatories
interface NonSignatory {
  country: string;
  region: string;
  note?: string;
}

const NON_SIGNATORIES: NonSignatory[] = [
  { country: 'Argentina', region: 'Americas' },
  { country: 'Benin', region: 'Africa' },
  { country: 'Bolivia (Plurinational State of)', region: 'Americas' },
  { country: 'Cambodia', region: 'Asia' },
  { country: 'Cameroon', region: 'Africa' },
  { country: "Democratic People's Republic of Korea", region: 'Asia', note: 'North Korea' },
  { country: 'Ethiopia', region: 'Africa' },
  { country: 'Grenada', region: 'Americas' },
  { country: 'Indonesia', region: 'Asia' },
  { country: 'Iran (Islamic Republic of)', region: 'Asia' },
  { country: 'Liberia', region: 'Africa' },
  { country: 'Madagascar', region: 'Africa' },
  { country: 'Namibia', region: 'Africa' },
  { country: 'Nauru', region: 'Oceania' },
  { country: 'Nepal', region: 'Asia' },
  { country: 'Nicaragua', region: 'Americas' },
  { country: 'Nigeria', region: 'Africa' },
  { country: 'Oman', region: 'Asia' },
  { country: 'Paraguay', region: 'Americas' },
  { country: 'Russian Federation', region: 'Europe', note: 'Violated 2022 Olympic Truce' },
  { country: 'Saudi Arabia', region: 'Asia' },
  { country: 'Seychelles', region: 'Africa' },
  { country: 'South Sudan', region: 'Africa' },
  { country: 'Syrian Arab Republic', region: 'Asia' },
  { country: 'United States of America', region: 'Americas' },
  { country: 'Venezuela (Bolivarian Republic of)', region: 'Americas' },
  { country: 'Holy See (Observer)', region: 'Europe', note: 'Non-member observer state' },
];

// Region mapping for visualization
const REGIONS: Record<string, string[]> = {
  'Europe': ['Italy', 'Turkmenistan', 'Hungary', 'San Marino', 'Bulgaria', 'Ukraine', 'Greece', 'Malta', 'Croatia', 'Estonia', 'Slovenia', 'Montenegro', 'United Kingdom', 'Armenia', 'Türkiye', 'Monaco', 'Andorra', 'Latvia', 'Czechia', 'Austria', 'Bosnia and Herzegovina', 'Iceland', 'Germany', 'Luxembourg', 'Spain', 'Norway', 'North Macedonia', 'Poland', 'Liechtenstein', 'Finland', 'Portugal', 'Cyprus', 'Romania', 'Slovakia', 'Netherlands (Kingdom of the)', 'Belarus', 'France', 'Belgium', 'Lithuania', 'Albania', 'Georgia', 'Switzerland', 'Sweden', 'Serbia', 'Ireland'],
  'Asia': ['Japan', 'Republic of Korea', 'Philippines', 'Singapore', 'Viet Nam', 'Mongolia', 'Bahrain', 'Kuwait', 'Qatar', 'Kyrgyzstan', 'Myanmar', 'Timor-Leste', 'Jordan', 'Bangladesh', 'China', 'Afghanistan', 'Lebanon', 'Israel', 'Azerbaijan', 'Tajikistan', 'Yemen', 'Brunei Darussalam', 'Thailand', "Lao People's Democratic Republic", 'Kazakhstan', 'Pakistan', 'Maldives', 'United Arab Emirates', 'India', 'Bhutan', 'Malaysia', 'Sri Lanka', 'Iraq'],
  'Africa': ['United Republic of Tanzania', 'Morocco', "Côte d'Ivoire", 'Democratic Republic of the Congo', 'Gabon', 'Mozambique', 'Eritrea', 'Somalia', 'Cabo Verde', 'Uganda', 'Botswana', 'Kenya', 'Mali', 'Burkina Faso', 'Equatorial Guinea', 'Libya', 'Eswatini', 'Central African Republic', 'Sao Tome and Principe', 'Senegal', 'Niger', 'Djibouti', 'Malawi', 'Lesotho', 'Ghana', 'Zimbabwe', 'Algeria', 'Guinea-Bissau', 'Chad', 'Mauritius', 'Sierra Leone', 'Gambia', 'Zambia', 'Mauritania', 'Togo', 'South Africa', 'Sudan', 'Angola', 'Comoros', 'Congo', 'Guinea', 'Burundi', 'Rwanda'],
  'Americas': ['Canada', 'Antigua and Barbuda', 'Belize', 'Jamaica', 'Peru', 'Colombia', 'Guatemala', 'Barbados', 'Dominica', 'Saint Kitts and Nevis', 'Guyana', 'Haiti', 'Honduras', 'Chile', 'Bahamas', 'Suriname', 'Costa Rica', 'Dominican Republic', 'Panama', 'Mexico', 'Brazil', 'El Salvador', 'Cuba', 'Saint Lucia', 'Ecuador', 'Uruguay', 'Trinidad and Tobago', 'Saint Vincent and the Grenadines'],
  'Oceania': ['Tonga', 'Micronesia (Federated States of)', 'Tuvalu', 'Marshall Islands', 'Papua New Guinea', 'Republic of Moldova', 'Rwanda', 'Fiji', 'Uzbekistan', 'New Zealand', 'Solomon Islands', 'Palau', 'Kiribati', 'Samoa', 'Vanuatu', 'Australia'],
};

function getRegion(country: string): string {
  for (const [region, countries] of Object.entries(REGIONS)) {
    if (countries.includes(country)) return region;
  }
  return 'Other';
}

const REGION_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  'Europe': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-300' },
  'Asia': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-300' },
  'Africa': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-300' },
  'Americas': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-300' },
  'Oceania': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-300' },
  'Other': { bg: 'bg-slate-500/10', border: 'border-slate-500/30', text: 'text-slate-300' },
};

type SortOption = 'date' | 'alphabetical' | 'region';
type ViewMode = 'grid' | 'timeline' | 'list';

export default function CoSponsorsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredAndSortedSponsors = useMemo(() => {
    let sponsors = [...CO_SPONSORS];

    // Filter by search
    if (searchQuery) {
      sponsors = sponsors.filter(s =>
        s.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by region
    if (selectedRegion) {
      sponsors = sponsors.filter(s => getRegion(s.country) === selectedRegion);
    }

    // Sort
    switch (sortBy) {
      case 'date':
        sponsors.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'alphabetical':
        sponsors.sort((a, b) => a.country.localeCompare(b.country));
        break;
      case 'region':
        sponsors.sort((a, b) => {
          const regionA = getRegion(a.country);
          const regionB = getRegion(b.country);
          if (regionA !== regionB) return regionA.localeCompare(regionB);
          return a.country.localeCompare(b.country);
        });
        break;
    }

    return sponsors;
  }, [sortBy, searchQuery, selectedRegion]);

  // Stats
  const regionStats = useMemo(() => {
    const stats: Record<string, number> = {};
    CO_SPONSORS.forEach(s => {
      const region = getRegion(s.country);
      stats[region] = (stats[region] || 0) + 1;
    });
    return stats;
  }, []);

  // Use manual formatting to avoid hydration mismatch between server/client
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = MONTHS[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${month} ${day}, ${year}, ${hour12}:${minutes} ${ampm}`;
  };

  const formatShortDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = MONTHS[date.getUTCMonth()];
    const day = date.getUTCDate();
    return `${month} ${day}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <span>A/80/L.10</span>
              <span className="text-slate-500">|</span>
              <span>Milano-Cortina 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Olympic Truce</span>{' '}
              <span className="gradient-text">Co-Sponsors</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              {CO_SPONSORS.length} nations co-sponsored the resolution, adopted by consensus on November 19, 2025
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl">
                <div className="text-4xl font-bold text-white">{CO_SPONSORS.length}</div>
                <div className="text-sm text-blue-300">Total Co-Sponsors</div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl">
                <div className="text-4xl font-bold text-white">85%</div>
                <div className="text-sm text-green-300">of UN Members</div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl">
                <div className="text-4xl font-bold text-white">2</div>
                <div className="text-sm text-amber-300">Primary Sponsors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Sponsors Highlight */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30"
          >
            <h2 className="text-lg font-semibold text-amber-300 mb-4 flex items-center gap-2">
              <span>Primary Sponsors</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {CO_SPONSORS.filter(s => s.isPrimarySponsor).map(sponsor => (
                <div key={sponsor.country} className="p-4 bg-slate-900/50 rounded-xl border border-amber-500/20">
                  <div className="text-xl font-bold text-white">{sponsor.country}</div>
                  <div className="text-sm text-slate-400">Sponsored: {formatDate(sponsor.date)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Region Stats */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">By Region</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRegion(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !selectedRegion
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All ({CO_SPONSORS.length})
              </button>
              {Object.entries(regionStats).sort((a, b) => b[1] - a[1]).map(([region, count]) => {
                const colors = REGION_COLORS[region] || REGION_COLORS['Other'];
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedRegion === region
                        ? `${colors.bg} ${colors.border} ${colors.text} border`
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {region} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="date">By Date Signed</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="region">By Region</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded text-sm ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded text-sm ${viewMode === 'timeline' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid/List/Timeline */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredAndSortedSponsors.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No countries found matching your search.
            </div>
          ) : viewMode === 'grid' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            >
              {filteredAndSortedSponsors.map((sponsor, index) => {
                const region = getRegion(sponsor.country);
                const colors = REGION_COLORS[region] || REGION_COLORS['Other'];
                return (
                  <motion.div
                    key={sponsor.country}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.01 }}
                    className={`p-3 rounded-xl ${colors.bg} border ${colors.border} hover:scale-105 transition-transform cursor-default`}
                  >
                    <div className="font-medium text-white text-sm truncate" title={sponsor.country}>
                      {sponsor.country}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{formatShortDate(sponsor.date)}</div>
                    {sponsor.isPrimarySponsor && (
                      <span className="inline-block mt-1 px-1.5 py-0.5 text-[10px] bg-amber-500/30 text-amber-300 rounded">
                        Primary
                      </span>
                    )}
                    {sponsor.addedAtPlenary && (
                      <span className="inline-block mt-1 px-1.5 py-0.5 text-[10px] bg-purple-500/30 text-purple-300 rounded">
                        Plenary
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : viewMode === 'list' ? (
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">#</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Country</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Region</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Date Signed</th>
                    <th className="text-center py-3 px-4 text-slate-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedSponsors.map((sponsor, index) => {
                    const region = getRegion(sponsor.country);
                    const colors = REGION_COLORS[region] || REGION_COLORS['Other'];
                    return (
                      <tr key={sponsor.country} className="border-t border-slate-800/50 hover:bg-slate-800/30">
                        <td className="py-3 px-4 text-slate-500">{index + 1}</td>
                        <td className="py-3 px-4 text-white font-medium">{sponsor.country}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded text-xs ${colors.bg} ${colors.text}`}>
                            {region}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{formatDate(sponsor.date)}</td>
                        <td className="py-3 px-4 text-center">
                          {sponsor.isPrimarySponsor ? (
                            <span className="px-2 py-0.5 text-xs bg-amber-500/30 text-amber-300 rounded">Primary</span>
                          ) : sponsor.addedAtPlenary ? (
                            <span className="px-2 py-0.5 text-xs bg-purple-500/30 text-purple-300 rounded">Plenary</span>
                          ) : (
                            <span className="text-slate-600">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            // Timeline view
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700" />
              {filteredAndSortedSponsors.map((sponsor, index) => {
                const region = getRegion(sponsor.country);
                const colors = REGION_COLORS[region] || REGION_COLORS['Other'];
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={sponsor.country}
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={`relative flex items-center mb-2 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'} pl-8 sm:pl-0`}>
                      <div className={`inline-block p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <div className="font-medium text-white text-sm">{sponsor.country}</div>
                        <div className="text-xs text-slate-500">{formatShortDate(sponsor.date)}</div>
                      </div>
                    </div>
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-500 border-2 border-slate-950" />
                    <div className="flex-1 hidden sm:block" />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Notable Absences Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">Notable Information</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div>
                <h3 className="font-medium text-white mb-2">About the Resolution</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Resolution A/80/L.10 calls for the observance of the Olympic Truce during the Milano-Cortina 2026 Winter Olympics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Italy and Turkmenistan served as primary sponsors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Adopted by consensus on November 19, 2025 at the 46th plenary meeting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Truce Period</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Begins 7 days before the Opening Ceremony (Feb 6, 2026)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Ends 7 days after the Paralympic Closing Ceremony (Mar 22, 2026)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Total duration: approximately 44 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Signatories Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30">
            <h2 className="text-lg font-semibold text-red-300 mb-2 flex items-center gap-2">
              UN Member States That Did Not Co-Sponsor
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              {NON_SIGNATORIES.length} of 193 UN member states did not co-sponsor the resolution (15% of membership).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {NON_SIGNATORIES.sort((a, b) => a.country.localeCompare(b.country)).map((item) => {
                const colors = REGION_COLORS[item.region] || REGION_COLORS['Other'];
                return (
                  <div
                    key={item.country}
                    className="p-2 rounded-lg bg-slate-800/50 border border-slate-700"
                  >
                    <div className="text-sm text-white truncate" title={item.country}>
                      {item.country}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                        {item.region}
                      </span>
                      {item.note && (
                        <span className="text-[10px] text-slate-500" title={item.note}>
                          *
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-xs text-slate-500">
              <p>* Russia violated the 2022 Olympic Truce by invading Ukraine during the Beijing Winter Olympics.</p>
              <p className="mt-1">Note: The resolution was adopted by consensus, meaning no country voted against it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Documents */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/documents"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Documents Archive
          </Link>
        </div>
      </section>
    </div>
  );
}
