'use client';

/**
 * Source badge component for displaying data source attribution
 * Provides visual differentiation between ACLED, UCDP, and other sources
 */

export type DataSourceId = 'ACLED' | 'UCDP' | 'UCDP GED' | 'ReliefWeb' | 'OSINT' | 'Manual';

interface SourceBadgeProps {
  source: string;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  className?: string;
}

// Source badge styling by data source
const SOURCE_STYLES: Record<string, {
  bg: string;
  text: string;
  label: string;
  description: string;
}> = {
  'ACLED': {
    bg: 'bg-blue-900/50 border-blue-700/50',
    text: 'text-blue-300',
    label: 'ACLED',
    description: 'Armed Conflict Location & Event Data - Near real-time, human-coded events'
  },
  'UCDP GED': {
    bg: 'bg-purple-900/50 border-purple-700/50',
    text: 'text-purple-300',
    label: 'UCDP',
    description: 'Uppsala Conflict Data Program - Academic dataset with 25+ death threshold'
  },
  'UCDP': {
    bg: 'bg-purple-900/50 border-purple-700/50',
    text: 'text-purple-300',
    label: 'UCDP',
    description: 'Uppsala Conflict Data Program - Academic dataset with 25+ death threshold'
  },
  'ReliefWeb': {
    bg: 'bg-teal-900/50 border-teal-700/50',
    text: 'text-teal-300',
    label: 'ReliefWeb',
    description: 'UN OCHA humanitarian reports and situation updates'
  },
  'OSINT': {
    bg: 'bg-amber-900/50 border-amber-700/50',
    text: 'text-amber-300',
    label: 'OSINT',
    description: 'Open-source intelligence from verified RSS/social feeds'
  },
  'Manual': {
    bg: 'bg-slate-800 border-slate-700/50',
    text: 'text-slate-300',
    label: 'Manual',
    description: 'Manually entered or verified incident'
  }
};

const SIZE_CLASSES = {
  sm: 'px-1.5 py-0.5 text-[10px]',
  md: 'px-2 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export default function SourceBadge({
  source,
  size = 'md',
  showDescription = false,
  className = ''
}: SourceBadgeProps) {
  const style = SOURCE_STYLES[source] || SOURCE_STYLES['Manual'];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        className={`inline-flex items-center rounded border font-medium ${style.bg} ${style.text} ${SIZE_CLASSES[size]}`}
        title={style.description}
      >
        {style.label}
      </span>
      {showDescription && (
        <span className="text-[10px] text-slate-500 mt-0.5 max-w-[200px] leading-tight">
          {style.description}
        </span>
      )}
    </div>
  );
}

/**
 * Inline source indicator for compact displays
 */
export function SourceIndicator({ source }: { source: string }) {
  const style = SOURCE_STYLES[source] || SOURCE_STYLES['Manual'];

  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${style.bg.replace('/50', '')}`}
      title={`Source: ${style.label}`}
    />
  );
}

/**
 * Full source attribution block with methodology info
 */
export function SourceAttribution({
  source,
  datasetVersion,
  sourceEventId
}: {
  source: string;
  datasetVersion?: string;
  sourceEventId?: string;
}) {
  const style = SOURCE_STYLES[source] || SOURCE_STYLES['Manual'];

  return (
    <div className="space-y-1">
      <div className={`inline-flex items-center gap-2 px-2 py-1.5 rounded-lg border ${style.bg}`}>
        <span className={`font-semibold text-xs ${style.text}`}>
          {style.label}
        </span>
      </div>
      <p className="text-[10px] text-slate-500">
        {style.description}
      </p>
      {datasetVersion && (
        <p className="text-[10px] text-slate-600">
          Version: <span className="text-slate-400">{datasetVersion}</span>
        </p>
      )}
      {sourceEventId && (
        <p className="text-[10px] text-slate-600">
          ID: <span className="font-mono text-slate-500">{sourceEventId}</span>
        </p>
      )}
    </div>
  );
}

/**
 * Fatality uncertainty range display
 * For UCDP data that provides low/best/high estimates
 */
export function FatalityRange({
  low,
  best,
  high,
  compact = false
}: {
  low?: number;
  best?: number;
  high?: number;
  compact?: boolean;
}) {
  if (!best && !low && !high) return null;

  const hasRange = low !== undefined && high !== undefined && low !== high;

  if (compact) {
    return (
      <span className="text-xs text-slate-400">
        {hasRange ? (
          <>
            <span className="text-red-400 font-medium">{best?.toLocaleString()}</span>
            <span className="text-slate-600 text-[10px] ml-1">({low?.toLocaleString()}–{high?.toLocaleString()})</span>
          </>
        ) : (
          <span className="text-red-400 font-medium">{(best || low || high || 0).toLocaleString()}</span>
        )}
      </span>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-red-400 font-bold text-lg">
          {best?.toLocaleString() || '—'}
        </span>
        <span className="text-slate-500 text-xs">fatalities</span>
      </div>
      {hasRange && (
        <>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500">Range:</span>
            <span className="text-slate-400">
              {low?.toLocaleString()} – {high?.toLocaleString()}
            </span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
            <div
              className="absolute inset-y-0 bg-red-500/30 rounded-full"
              style={{
                left: `${Math.min(100, ((low || 0) / (high || 1)) * 100)}%`,
                right: '0%'
              }}
            />
            <div
              className="absolute inset-y-0 w-0.5 bg-red-500 rounded-full"
              style={{
                left: `${Math.min(100, ((best || 0) / (high || 1)) * 100)}%`
              }}
            />
          </div>
          <p className="text-[10px] text-slate-600">
            UCDP provides uncertainty ranges for fatality estimates
          </p>
        </>
      )}
    </div>
  );
}
