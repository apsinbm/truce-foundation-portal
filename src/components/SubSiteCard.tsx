'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SubSite } from '@/lib/constants';

interface SubSiteCardProps {
  site: SubSite;
  index: number;
}

// Varied action words based on card type
const getActionWord = (id: string): string => {
  const actions: Record<string, string> = {
    index: 'View Dashboard',
    history: 'Browse Timeline',
    advocacy: 'Access Tools',
    methodology: 'Learn More',
    partners: 'Meet Partners',
  };
  return actions[id] || 'Visit';
};

export default function SubSiteCard({ site, index }: SubSiteCardProps) {
  const isLive = site.status === 'live';
  const isExternal = site.external;

  const CardContent = () => (
    <>
      {/* Status badge */}
      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
        isLive
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-slate-700/50 text-slate-400 border border-slate-600/30'
      }`}>
        {isLive ? 'Live' : 'Coming Soon'}
      </div>

      {/* Icon */}
      <div className="text-4xl mb-4">{site.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {site.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 line-clamp-2">{site.description}</p>

      {/* Arrow indicator for live sites */}
      {isLive && (
        <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium">
          <span>{getActionWord(site.id)}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          {isExternal && (
            <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </div>
      )}
    </>
  );

  const cardClasses = `
    glass-card p-6 relative overflow-hidden group
    transition-all duration-300
    ${isLive ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10' : 'cursor-default opacity-75'}
  `;

  if (isLive) {
    if (isExternal) {
      return (
        <motion.a
          href={site.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={cardClasses}
        >
          <CardContent />
        </motion.a>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link href={site.href} className={cardClasses + ' block'}>
          <CardContent />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cardClasses}
    >
      <CardContent />
    </motion.div>
  );
}
