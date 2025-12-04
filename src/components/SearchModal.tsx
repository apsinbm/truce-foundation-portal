'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { searchPortal, getCategoryLabel, getCategoryColor, SearchItem } from '@/lib/search-data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Search when query changes
  useEffect(() => {
    const searchResults = searchPortal(query);
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, onClose]
  );

  // Navigate to selected result
  const navigateToResult = (item: SearchItem) => {
    if (item.href.startsWith('http')) {
      window.open(item.href, '_blank');
    } else {
      router.push(item.href);
    }
    onClose();
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // This would need to be handled by parent component
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-700">
              <svg
                className="w-5 h-5 text-slate-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search pages, countries, topics..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
              />
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">
                  ESC
                </kbd>
                <span>to close</span>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.length < 2 ? (
                <div className="px-4 py-8 text-center">
                  <p className="text-slate-500 text-sm">
                    Type at least 2 characters to search
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Ukraine', 'Ceasefire', 'Methodology', 'Maritime'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1 text-xs bg-slate-800 text-slate-400 rounded-full hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="px-4 py-8 text-center">
                  <p className="text-slate-500 text-sm">
                    No results found for &quot;{query}&quot;
                  </p>
                </div>
              ) : (
                <div className="py-2">
                  {results.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => navigateToResult(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full px-4 py-3 flex items-start gap-3 text-left transition-colors ${
                        index === selectedIndex
                          ? 'bg-slate-800'
                          : 'hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium truncate">
                            {item.title}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 text-[10px] rounded ${getCategoryColor(
                              item.category
                            )}`}
                          >
                            {getCategoryLabel(item.category)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      {item.href.startsWith('http') && (
                        <svg
                          className="w-4 h-4 text-slate-500 flex-shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">
                    ↑
                  </kbd>
                  <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">
                    ↓
                  </kbd>
                  <span>navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">
                    ↵
                  </kbd>
                  <span>select</span>
                </div>
              </div>
              <span>{results.length} results</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
