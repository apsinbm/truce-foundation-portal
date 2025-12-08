'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataIntegrityBadge, { CURRENT_INTEGRITY_TIER } from './DataIntegrityBadge';

interface ChecklistItem {
  label: string;
  status: 'complete' | 'partial' | 'pending';
  detail?: string;
}

interface ChecklistCategory {
  name: string;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    name: 'Source Validation',
    items: [
      { label: 'Data traceable to primary sources', status: 'complete', detail: 'ACLED, UCDP, ReliefWeb, ACAPS, UN Docs' },
      { label: 'Metadata includes timestamp & origin', status: 'complete', detail: 'SourceBadge component tracks attribution' },
      { label: 'Cross-checked against independent source', status: 'partial', detail: 'Seton Hall validation planned' },
    ],
  },
  {
    name: 'Data Hygiene',
    items: [
      { label: 'Consistent formatting across datasets', status: 'complete', detail: 'TypeScript interfaces enforced' },
      { label: 'No missing fields or duplicates', status: 'partial', detail: 'Manual curation process' },
      { label: 'Accessibility compliance (WCAG)', status: 'pending', detail: 'Audit scheduled for Phase 3' },
    ],
  },
  {
    name: 'Feedback & Correction',
    items: [
      { label: 'Public flagging mechanism', status: 'pending', detail: 'Forum launching January 2026' },
      { label: 'Version history visible', status: 'pending', detail: 'Planned for Phase 2' },
      { label: 'Peer review cycle completed', status: 'pending', detail: 'Quarterly review planned' },
    ],
  },
  {
    name: 'Transparent Methodology',
    items: [
      { label: 'Calculation methods published', status: 'complete', detail: '/methodology page live' },
      { label: 'Raw data downloadable', status: 'pending', detail: 'Export endpoints in Phase 2' },
      { label: 'Audit trail maintained', status: 'partial', detail: 'Source attribution active' },
    ],
  },
  {
    name: 'Security & Permissions',
    items: [
      { label: 'Role-based access enforced', status: 'complete', detail: 'Public portal - open access by design' },
      { label: 'Encryption & backup in place', status: 'pending', detail: 'Documentation in Phase 3' },
      { label: 'Data retention policy documented', status: 'pending', detail: 'To be published' },
    ],
  },
];

const STATUS_ICONS = {
  complete: (
    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  partial: (
    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
    </svg>
  ),
  pending: (
    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
    </svg>
  ),
};

export default function DataAccuracyChecklist() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Calculate completion stats
  const allItems = CHECKLIST_DATA.flatMap(c => c.items);
  const complete = allItems.filter(i => i.status === 'complete').length;
  const partial = allItems.filter(i => i.status === 'partial').length;
  const total = allItems.length;
  const percentage = Math.round(((complete + partial * 0.5) / total) * 100);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-sm"
        title="Data Integrity Status"
      >
        <DataIntegrityBadge tier={CURRENT_INTEGRITY_TIER} showLabel={false} size="sm" />
        <span className="text-xs text-slate-600 hidden sm:inline">Data Integrity</span>
      </button>

      {/* Checklist Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l border-slate-200 z-50 overflow-y-auto shadow-xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-slate-900">Data Accuracy Checklist</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded"
                >
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Badge & Progress */}
              <div className="flex items-center gap-4">
                <DataIntegrityBadge tier={CURRENT_INTEGRITY_TIER} size="lg" />
                <div className="flex-1">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{complete} complete, {partial} partial</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="p-4 space-y-3">
              {CHECKLIST_DATA.map((category) => {
                const isExpanded = expandedCategory === category.name;
                const categoryComplete = category.items.filter(i => i.status === 'complete').length;

                return (
                  <div
                    key={category.name}
                    className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : category.name)}
                      className="w-full flex items-center justify-between p-3 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-900">{category.name}</span>
                        <span className="text-xs text-slate-400">
                          {categoryComplete}/{category.items.length}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 space-y-2">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2 bg-white rounded border border-slate-100"
                          >
                            {STATUS_ICONS[item.status]}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-slate-700">{item.label}</div>
                              {item.detail && (
                                <div className="text-xs text-slate-400 mt-0.5">{item.detail}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200">
              <Link
                href="/methodology"
                className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                View Full Methodology
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <p className="text-xs text-slate-400 text-center mt-3">
                Last updated: December 8, 2025
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
