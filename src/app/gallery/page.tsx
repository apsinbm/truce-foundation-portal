'use client';

import { useState } from 'react';
import ImageGallery, { GalleryImage } from '@/components/ImageGallery';
import Link from 'next/link';

// Categories for filtering
const CATEGORIES = ['all', 'events', 'awardees', 'sculpture', 'ceremonies'] as const;
type Category = typeof CATEGORIES[number];

// =============================================================================
// PHOTO DATA - Edit this array to add/remove photos
// =============================================================================
// To add a photo:
// 1. Add the image file to /public/images/gallery/ (or use an external URL)
// 2. Add an entry to this array with: id, src, alt, category (optional), caption (optional)
//
// Example:
// { id: '1', src: '/images/gallery/event-2024.jpg', alt: 'Truce Foundation Event 2024', category: 'events' }
// { id: '2', src: 'https://example.com/photo.jpg', alt: 'External Photo', category: 'ceremonies' }
// =============================================================================

const photos: GalleryImage[] = [
  // Add your photos here - the gallery will display them automatically
  // Example entries (commented out):
  // { id: '1', src: '/images/gallery/truce-sculpture.jpg', alt: 'Olympic Truce Sculpture by Rosa Serra', category: 'sculpture', caption: 'The Olympic Truce Sculpture at IOC headquarters' },
  // { id: '2', src: '/images/gallery/un-ceremony-2024.jpg', alt: 'UN General Assembly Truce Resolution', category: 'ceremonies' },
  // { id: '3', src: '/images/gallery/awardee-2023.jpg', alt: 'Truce Foundation Awardee 2023', category: 'awardees' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore moments from Olympic Truce events, ceremonies, and our global peace initiatives
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <ImageGallery images={filteredPhotos} />

        {/* Empty state with instructions */}
        {photos.length === 0 && (
          <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-xl text-center">
            <h3 className="text-lg font-medium text-white mb-2">Gallery Coming Soon</h3>
            <p className="text-slate-400 text-sm mb-4">
              Photos will be added to showcase Truce Foundation events and initiatives.
            </p>
            <p className="text-slate-500 text-xs">
              To add photos, edit the <code className="px-1 py-0.5 bg-slate-800 rounded">photos</code> array in{' '}
              <code className="px-1 py-0.5 bg-slate-800 rounded">src/app/gallery/page.tsx</code>
            </p>
          </div>
        )}

        {/* Link to Videos */}
        <div className="mt-12 text-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            View Video Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
