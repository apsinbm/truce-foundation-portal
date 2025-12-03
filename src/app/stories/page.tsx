'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Story interface
interface Story {
  id: string;
  author: string;
  age: number;
  location: string;
  country: string;
  countryCode: string;
  title: string;
  excerpt: string;
  fullStory?: string;
  imageUrl?: string;
  category: 'conflict-zone' | 'athlete' | 'refugee' | 'advocate';
  featured?: boolean;
  publishDate: string;
}

// Sample stories (placeholder data)
const SAMPLE_STORIES: Story[] = [
  {
    id: '1',
    author: 'Amara',
    age: 17,
    location: 'Nairobi',
    country: 'Kenya',
    countryCode: 'KE',
    title: 'Running Toward Peace',
    excerpt: 'When I run, I forget about the conflict that displaced my family. The Olympic dream gives me something to run toward, not away from.',
    category: 'athlete',
    featured: true,
    publishDate: '2025-11-15',
  },
  {
    id: '2',
    author: 'Yuki',
    age: 19,
    location: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    title: 'My Grandfather\'s Olympic Truce',
    excerpt: 'My grandfather competed in 1964. He always said the Olympics showed him that former enemies could become friends. Now I carry his message.',
    category: 'advocate',
    featured: true,
    publishDate: '2025-11-10',
  },
  {
    id: '3',
    author: 'Hassan',
    age: 16,
    location: 'Kakuma Camp',
    country: 'Kenya',
    countryCode: 'KE',
    title: 'A Soccer Ball Changed Everything',
    excerpt: 'In the refugee camp, a simple soccer ball brought kids from different countries together. Sport doesn\'t ask where you\'re from.',
    category: 'refugee',
    featured: false,
    publishDate: '2025-11-05',
  },
  {
    id: '4',
    author: 'Maria',
    age: 18,
    location: 'Cortina',
    country: 'Italy',
    countryCode: 'IT',
    title: 'Preparing for 2026',
    excerpt: 'As a volunteer for Milano-Cortina 2026, I believe we young people can show the world that peace is possible, one small act at a time.',
    category: 'advocate',
    featured: false,
    publishDate: '2025-10-28',
  },
  {
    id: '5',
    author: 'Omar',
    age: 15,
    location: 'Beirut',
    country: 'Lebanon',
    countryCode: 'LB',
    title: 'The Sound of Basketball',
    excerpt: 'When the explosions stopped for a moment, we would play basketball. The sound of the ball bouncing was the sound of normal life.',
    category: 'conflict-zone',
    featured: true,
    publishDate: '2025-10-20',
  },
];

const STORY_CATEGORIES = [
  { id: 'all', name: 'All Stories', icon: '📖' },
  { id: 'conflict-zone', name: 'From Conflict Zones', icon: '🕊️' },
  { id: 'athlete', name: 'Young Athletes', icon: '🏅' },
  { id: 'refugee', name: 'Refugee Voices', icon: '🏠' },
  { id: 'advocate', name: 'Peace Advocates', icon: '✊' },
];

const getCategoryInfo = (category: string) => {
  const categories: Record<string, { color: string; label: string }> = {
    'conflict-zone': { color: 'bg-red-500/20 text-red-400 border-red-500/30', label: 'From Conflict Zone' },
    'athlete': { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: 'Young Athlete' },
    'refugee': { color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', label: 'Refugee Voice' },
    'advocate': { color: 'bg-green-500/20 text-green-400 border-green-500/30', label: 'Peace Advocate' },
  };
  return categories[category] || { color: 'bg-slate-500/20 text-slate-400', label: category };
};

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    title: '',
    story: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredStories = selectedCategory === 'all'
    ? SAMPLE_STORIES
    : SAMPLE_STORIES.filter(s => s.category === selectedCategory);

  const featuredStories = SAMPLE_STORIES.filter(s => s.featured);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowSubmitForm(false);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/truce-foundation-logo.jpg" alt="Truce Foundation" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-semibold text-white">Truce Foundation</span>
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-6xl">💚</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Youth Stories
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              First-person accounts from young people around the world. Their experiences remind us why the Olympic Truce matters.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Collecting stories for 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Featured Stories</h2>
            <p className="text-slate-400">Highlighted voices from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredStories.map((story, index) => {
              const categoryInfo = getCategoryInfo(story.category);
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/5 border border-green-500/30 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${categoryInfo.color}`}>
                      {categoryInfo.label}
                    </span>
                    <span className="text-xs text-slate-500">Featured</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">{story.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-medium text-slate-400">{story.author}, {story.age}</span>
                    <span>•</span>
                    <span>{story.location}, {story.country}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Browse by Category</h2>
            <p className="text-slate-400">Filter stories by theme or perspective</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8">
            {STORY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Filtered Stories */}
          <div className="space-y-4">
            {filteredStories.map((story, index) => {
              const categoryInfo = getCategoryInfo(story.category);
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">💚</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full border ${categoryInfo.color}`}>
                          {categoryInfo.label}
                        </span>
                        {story.featured && (
                          <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
                      <p className="text-slate-400 mb-3">{story.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="font-medium text-slate-400">{story.author}, {story.age}</span>
                          <span>•</span>
                          <span>{story.location}, {story.country}</span>
                          <span>•</span>
                          <span>{new Date(story.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <button
                          disabled
                          className="text-xs text-slate-500 cursor-not-allowed"
                        >
                          Read Full Story (Coming Soon)
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No stories in this category yet. Be the first to share yours!
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/10 border border-green-500/30"
          >
            {submitted ? (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-6xl mb-4"
                >
                  💚
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Thank You for Sharing
                </h2>
                <p className="text-slate-400">
                  Your story has been submitted. Our team will review it and may reach out for more details.
                </p>
              </div>
            ) : showSubmitForm ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Share Your Story
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Your First Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Amara"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Your Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="17"
                      min="10"
                      max="25"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Location (City, Country)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Nairobi, Kenya"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Story Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Give your story a meaningful title"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Your Story</label>
                  <textarea
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    placeholder="Share your experience with sport, peace, or the Olympic Truce. How has it impacted your life?"
                    rows={5}
                    maxLength={2000}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500 resize-none"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1 text-right">
                    {formData.story.length}/2000 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Email (for follow-up only)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Your email will not be displayed publicly.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitForm(false)}
                    className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Submit Story
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Share Your Voice
                </h2>
                <p className="text-slate-400 mb-6">
                  Are you a young person (ages 10-25) with a story about sport, peace, or the Olympic Truce?
                  We want to hear from you. Your story could inspire others around the world.
                </p>
                <button
                  onClick={() => setShowSubmitForm(true)}
                  className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-xl">💚</span>
                  Share Your Story
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              Story Guidelines
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-white mb-2">What we're looking for:</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    Personal experiences with sport bringing people together
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    How the Olympic spirit has impacted your community
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    Stories of hope and resilience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    Your vision for peace during the 2026 Truce
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Our commitment to you:</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Your story will be reviewed before publishing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    We'll contact you before making any edits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    You can use just your first name
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Under 18? We'll need guardian consent
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/forum"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Forum
              </h3>
              <p className="text-sm text-slate-400 mt-1">Join the conversation</p>
            </Link>
            <Link
              href="/candles"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Global Candle Wall
              </h3>
              <p className="text-sm text-slate-400 mt-1">Light a candle for peace</p>
            </Link>
            <Link
              href="/advocacy"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Advocacy Toolkit
              </h3>
              <p className="text-sm text-slate-400 mt-1">Resources to spread the word</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
