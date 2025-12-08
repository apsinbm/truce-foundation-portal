'use client';

import { useState } from 'react';

export type BadgeTier = 'platinum' | 'gold' | 'silver' | 'bronze';

interface DataIntegrityBadgeProps {
  tier: BadgeTier;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BADGE_CONFIG: Record<BadgeTier, {
  label: string;
  tooltip: string;
  colors: { primary: string; secondary: string; accent?: string };
}> = {
  platinum: {
    label: 'Platinum',
    tooltip: 'Externally verified. Full transparency and compliance.',
    colors: { primary: '#3b82f6', secondary: '#1e40af', accent: '#fbbf24' },
  },
  gold: {
    label: 'Gold',
    tooltip: 'Verified by internal review. Transparent and compliant.',
    colors: { primary: '#3b82f6', secondary: '#1e40af' },
  },
  silver: {
    label: 'Silver',
    tooltip: 'Mostly verified. Some items pending review.',
    colors: { primary: '#64748b', secondary: '#475569' },
  },
  bronze: {
    label: 'Bronze',
    tooltip: 'Preliminary data. Verification in progress.',
    colors: { primary: '#78716c', secondary: '#57534e' },
  },
};

const SIZE_CONFIG = {
  sm: { width: 20, height: 24, fontSize: 'text-[10px]' },
  md: { width: 28, height: 32, fontSize: 'text-xs' },
  lg: { width: 36, height: 42, fontSize: 'text-sm' },
};

export default function DataIntegrityBadge({
  tier,
  showLabel = true,
  size = 'md',
  className = ''
}: DataIntegrityBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = BADGE_CONFIG[tier];
  const sizeConfig = SIZE_CONFIG[size];

  return (
    <div
      className={`relative inline-flex items-center gap-1.5 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Shield SVG */}
      <svg
        width={sizeConfig.width}
        height={sizeConfig.height}
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield shape */}
        <path
          d="M14 1L2 5v10c0 8.4 5.6 14.4 12 16 6.4-1.6 12-7.6 12-16V5L14 1z"
          fill={config.colors.primary}
          stroke={config.colors.secondary}
          strokeWidth="1.5"
        />
        {/* Inner highlight */}
        <path
          d="M14 4L5 7v8c0 6.3 4.2 10.8 9 12 4.8-1.2 9-5.7 9-12V7L14 4z"
          fill={config.colors.secondary}
          opacity="0.3"
        />
        {/* Checkmark */}
        <path
          d="M9 16l4 4 6-8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Gold trim for platinum */}
        {tier === 'platinum' && config.colors.accent && (
          <path
            d="M14 1L2 5v10c0 8.4 5.6 14.4 12 16 6.4-1.6 12-7.6 12-16V5L14 1z"
            fill="none"
            stroke={config.colors.accent}
            strokeWidth="2"
          />
        )}
      </svg>

      {/* Label */}
      {showLabel && (
        <span className={`${sizeConfig.fontSize} font-medium text-slate-500`}>
          {config.label}
        </span>
      )}

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50">
          <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-slate-700">
            <div className="font-semibold mb-1">Data Integrity: {config.label}</div>
            <div className="text-slate-300">{config.tooltip}</div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="border-4 border-transparent border-t-slate-800" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Export current tier based on assessment
export const CURRENT_INTEGRITY_TIER: BadgeTier = 'silver';
