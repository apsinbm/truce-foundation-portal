'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

// Candle interface
interface Candle {
  id: string;
  name: string;
  location: string;
  country: string;
  countryCode: string;
  message: string;
  timestamp: string;
  coordinates?: { lat: number; lng: number };
}

// Sample candles for visualization (placeholder data)
const SAMPLE_CANDLES: Candle[] = [
  {
    id: '1',
    name: 'Maria G.',
    location: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    message: 'For peace during the Games. May sport unite us all.',
    timestamp: '2025-12-01T10:30:00Z',
    coordinates: { lat: 41.9, lng: 12.5 },
  },
  {
    id: '2',
    name: 'Kenji T.',
    location: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    message: 'The Olympic spirit transcends borders.',
    timestamp: '2025-12-01T09:15:00Z',
    coordinates: { lat: 35.7, lng: 139.7 },
  },
  {
    id: '3',
    name: 'Sarah M.',
    location: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    message: 'Lighting this candle for all affected by conflict.',
    timestamp: '2025-12-01T08:00:00Z',
    coordinates: { lat: 51.5, lng: -0.1 },
  },
  {
    id: '4',
    name: 'Ahmed K.',
    location: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    message: 'May the Truce bring hope to those who need it most.',
    timestamp: '2025-11-30T22:45:00Z',
    coordinates: { lat: 30.0, lng: 31.2 },
  },
  {
    id: '5',
    name: 'Elena R.',
    location: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    message: 'From South America with love and hope for peace.',
    timestamp: '2025-11-30T20:30:00Z',
    coordinates: { lat: -34.6, lng: -58.4 },
  },
];

// Stats for the wall
const CANDLE_STATS = {
  total: 0,
  countries: 0,
  thisWeek: 0,
};

export default function CandlesPage() {
  const [candles] = useState<Candle[]>(SAMPLE_CANDLES);
  const [showLightForm, setShowLightForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    country: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [candleAnimation, setCandleAnimation] = useState(true);

  // Candle flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCandleAnimation(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowLightForm(false);
    // In production, this would submit to an API
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero with animated candle */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Animated candle icon */}
            <motion.div
              animate={{
                scale: candleAnimation ? 1 : 1.05,
                filter: candleAnimation ? 'brightness(1)' : 'brightness(1.2)'
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-7xl sm:text-8xl"
            >
              🕯️
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Global Candle Wall
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Light a virtual candle for peace. Join voices from around the world in solidarity.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Wall opens January 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center"
            >
              <span className="text-3xl font-bold text-amber-400">{CANDLE_STATS.total || '---'}</span>
              <p className="text-xs text-slate-500 mt-1">Candles Lit</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-white">{CANDLE_STATS.countries || '---'}</span>
              <p className="text-xs text-slate-500 mt-1">Countries</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-white">{CANDLE_STATS.thisWeek || '---'}</span>
              <p className="text-xs text-slate-500 mt-1">This Week</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-slate-700/50"
          >
            {/* Map placeholder with candle dots */}
            <div className="aspect-[2/1] bg-slate-900/50 relative">
              {/* World map silhouette placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-500 text-sm mb-2">Interactive World Map</p>
                  <p className="text-slate-600 text-xs">Each candle will appear as a glowing point on the map</p>
                </div>
              </div>

              {/* Sample candle positions */}
              {candles.map((candle, index) => (
                <motion.div
                  key={candle.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute"
                  style={{
                    // Approximate positioning based on coordinates
                    left: `${((candle.coordinates?.lng || 0) + 180) / 3.6}%`,
                    top: `${(90 - (candle.coordinates?.lat || 0)) / 1.8}%`,
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: candleAnimation
                        ? '0 0 10px 5px rgba(251, 191, 36, 0.3)'
                        : '0 0 15px 8px rgba(251, 191, 36, 0.5)'
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="w-3 h-3 bg-amber-400 rounded-full cursor-pointer"
                    title={`${candle.name} - ${candle.location}, ${candle.country}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Light a Candle Form */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30"
          >
            {submitted ? (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-6xl mb-4"
                >
                  🕯️
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Your Candle is Reserved
                </h2>
                <p className="text-slate-400">
                  Thank you for your message of peace. Your candle will be lit when the wall opens in January 2026.
                </p>
              </div>
            ) : showLightForm ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Light Your Candle
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Your Name (or initials)</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Maria G."
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">City / Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Rome, Italy"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Your Message of Peace</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your hope for the Olympic Truce..."
                    rows={3}
                    maxLength={200}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1 text-right">
                    {formData.message.length}/200 characters
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLightForm(false)}
                    className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Light Candle
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Add Your Light to the Wall
                </h2>
                <p className="text-slate-400 mb-6">
                  Light a virtual candle and share a message of peace. Your candle will join thousands of others from around the world.
                </p>
                <button
                  onClick={() => setShowLightForm(true)}
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-xl">🕯️</span>
                  Light a Candle
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Recent Candles */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Recent Messages</h2>
            <p className="text-slate-400">Preview of messages from our community</p>
          </motion.div>

          <div className="grid gap-4">
            {candles.map((candle, index) => (
              <motion.div
                key={candle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">🕯️</div>
                  <div className="flex-1">
                    <p className="text-slate-300 mb-2">"{candle.message}"</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="font-medium text-slate-400">{candle.name}</span>
                      <span>•</span>
                      <span>{candle.location}, {candle.country}</span>
                      <span>•</span>
                      <span>{new Date(candle.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Tradition */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              The Olympic Flame Tradition
            </h2>
            <div className="text-sm text-slate-300 space-y-3">
              <p>
                The Olympic flame has been a symbol of peace and unity since ancient Greece.
                The flame was kept burning throughout the ancient Games at Olympia.
              </p>
              <p>
                Our Global Candle Wall extends this tradition into the digital age, allowing
                people everywhere to light a virtual candle and add their voice to the call
                for peace during the Olympic Truce.
              </p>
              <p className="text-slate-400 text-xs">
                Each candle on the wall represents a commitment to the ideals of the Olympic
                Truce: cessation of hostilities, safe passage, and the unifying power of sport.
              </p>
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
              href="/stories"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Youth Stories
              </h3>
              <p className="text-sm text-slate-400 mt-1">First-person accounts</p>
            </Link>
            <Link
              href="/advocacy"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Advocacy Toolkit
              </h3>
              <p className="text-sm text-slate-400 mt-1">Spread the message</p>
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
