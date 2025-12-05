'use client';

import { useState } from 'react';
import YouTubeEmbed from './YouTubeEmbed';
import MediaModal from './MediaModal';

export interface GalleryVideo {
  id: string;
  youtubeId: string;
  title: string;
  category?: string;
  description?: string;
}

interface VideoGalleryProps {
  videos: GalleryVideo[];
  className?: string;
}

export default function VideoGallery({ videos, className = '' }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-500 text-lg">No videos to display yet</div>
        <p className="text-slate-600 text-sm mt-2">Check back soon for video content</p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group text-left"
          >
            {/* Thumbnail with play button */}
            <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all shadow-lg">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Category badge */}
              {video.category && (
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-medium bg-black/60 text-white rounded">
                    {video.category}
                  </span>
                </div>
              )}
            </div>

            {/* Title and description */}
            <div className="mt-3">
              <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                {video.title}
              </h3>
              {video.description && (
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">{video.description}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      <MediaModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
      >
        {selectedVideo && (
          <YouTubeEmbed
            videoId={selectedVideo.youtubeId}
            title={selectedVideo.title}
          />
        )}
      </MediaModal>
    </>
  );
}
