'use client';

import { useState } from 'react';
import VideoGallery, { GalleryVideo } from '@/components/VideoGallery';
import Link from 'next/link';

// Categories for filtering
const CATEGORIES = ['all', 'ceremonies', 'speeches', 'interviews', 'documentaries'] as const;
type Category = typeof CATEGORIES[number];

// =============================================================================
// VIDEO DATA - Edit this array to add/remove videos
// =============================================================================
// To add a YouTube video:
// 1. Get the video ID from the YouTube URL (the part after "v=" or "youtu.be/")
//    Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> videoId = "dQw4w9WgXcQ"
// 2. Add an entry to this array with: id, youtubeId, title, category (optional), description (optional)
//
// Example:
// { id: '1', youtubeId: 'dQw4w9WgXcQ', title: 'Olympic Truce Resolution 2024', category: 'ceremonies' }
// =============================================================================

const videos: GalleryVideo[] = [
  // Add your YouTube videos here - the gallery will display them automatically
  // Example entries (commented out):
  // { id: '1', youtubeId: 'abc123xyz', title: 'UN General Assembly - Olympic Truce Resolution', category: 'ceremonies', description: 'The adoption of the Olympic Truce resolution at the UN General Assembly' },
  // { id: '2', youtubeId: 'def456uvw', title: 'IOC President Speech on Peace Through Sport', category: 'speeches' },
  // { id: '3', youtubeId: 'ghi789rst', title: 'Youth Ambassador Interview', category: 'interviews' },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(video => video.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Video Gallery
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Watch speeches, ceremonies, and documentaries about the Olympic Truce and global peace initiatives
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

        {/* Video Grid */}
        <VideoGallery videos={filteredVideos} />

        {/* Empty state with instructions */}
        {videos.length === 0 && (
          <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-xl text-center">
            <h3 className="text-lg font-medium text-white mb-2">Videos Coming Soon</h3>
            <p className="text-slate-400 text-sm mb-4">
              Videos will be added to showcase Truce Foundation events, speeches, and documentaries.
            </p>
            <p className="text-slate-500 text-xs">
              To add videos, edit the <code className="px-1 py-0.5 bg-slate-800 rounded">videos</code> array in{' '}
              <code className="px-1 py-0.5 bg-slate-800 rounded">src/app/videos/page.tsx</code>
            </p>
          </div>
        )}

        {/* Link to Photo Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Photo Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
