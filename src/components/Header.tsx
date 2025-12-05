'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import SearchModal from './SearchModal';

// Organized navigation groups - key sections only
const NAV_GROUPS = [
  {
    label: 'Monitor',
    items: [
      { href: TRUCE_INDEX_URL, label: 'Live Index', external: true },
      { href: '/portal', label: 'Portal Hub' },
      { href: '/briefing', label: 'Daily Briefing' },
      { href: '/leaderboard', label: 'Leaderboard' },
      { href: '/humanitarian', label: 'Humanitarian Access' },
      { href: '/ceasefire', label: 'Ceasefire Watch' },
    ],
  },
  {
    label: 'Learn',
    items: [
      { href: '/history', label: 'Truce History' },
      { href: '/co-sponsors', label: 'Co-Sponsors (166)' },
      { href: '/methodology', label: 'Methodology' },
      { href: '/documents', label: 'Documents' },
      { href: '/accountability', label: 'Accountability' },
    ],
  },
  {
    label: 'Engage',
    items: [
      { href: '/stories', label: 'Youth Stories' },
      { href: '/candles', label: 'Candle Wall' },
      { href: '/advocacy', label: 'Advocacy Toolkit' },
      { href: '/forum', label: 'Forum' },
    ],
  },
  {
    label: 'Media',
    items: [
      { href: '/gallery', label: 'Photo Gallery' },
      { href: '/videos', label: 'Video Gallery' },
      { href: '/press', label: 'Press & Media' },
    ],
  },
  {
    label: 'About',
    items: [
      { href: '/about', label: 'About Us' },
      { href: '/partners', label: 'Partners' },
      { href: '/reports', label: 'Reports' },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Global keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      // Close menu on Escape
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/truce-foundation-logo.jpg"
              alt="Truce Foundation"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-semibold text-white hidden sm:block">Truce Foundation</span>
          </Link>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-slate-700 rounded">⌘K</kbd>
            </button>

            {/* Hamburger Menu Button */}
            <div className="menu-container relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(!menuOpen);
                }}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-h-[80vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl">
                  <div className="p-4">
                    {NAV_GROUPS.map((group, groupIndex) => (
                      <div key={group.label} className={groupIndex > 0 ? 'mt-4 pt-4 border-t border-slate-800' : ''}>
                        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2 px-2">
                          {group.label}
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            item.external ? (
                              <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-2 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                                <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-2 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* View Live Index CTA */}
                    <div className="mt-4 pt-4 border-t border-slate-800">
                      <a
                        href={TRUCE_INDEX_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        View Live Index
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
