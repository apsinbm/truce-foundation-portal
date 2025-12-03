'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TRUCE_INDEX_URL } from '@/lib/constants';

// Organized navigation groups - key sections only
const NAV_GROUPS = [
  {
    label: 'Monitor',
    items: [
      { href: TRUCE_INDEX_URL, label: 'Live Index', external: true },
      { href: '/briefing', label: 'Daily Briefing' },
      { href: '/leaderboard', label: 'Leaderboard' },
      { href: '/humanitarian', label: 'Humanitarian Access' },
    ],
  },
  {
    label: 'Learn',
    items: [
      { href: '/history', label: 'Truce History' },
      { href: '/methodology', label: 'Methodology' },
      { href: '/documents', label: 'UN Documents' },
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
    label: 'About',
    items: [
      { href: '/about', label: 'About Us' },
      { href: '/partners', label: 'Partners' },
      { href: '/press', label: 'Press & Media' },
      { href: '/reports', label: 'Reports' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeDropdown === group.label
                      ? 'text-white bg-slate-800'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {group.label}
                  <svg
                    className={`inline-block w-3 h-3 ml-1 transition-transform ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl">
                    {group.items.map((item) => (
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
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
                          className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              View Index
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="mb-4">
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
                        onClick={() => setMobileMenuOpen(false)}
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
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile CTA */}
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-3 text-center text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              View Live Index
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
