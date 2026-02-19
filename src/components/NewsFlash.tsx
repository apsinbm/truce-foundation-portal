'use client';

import { motion } from 'framer-motion';
import { getActiveFlashes } from '@/lib/flash-data';

export default function NewsFlash() {
  const flashes = getActiveFlashes();

  if (flashes.length === 0) return null;

  return (
    <div className="px-4 pb-6">
      <div className="max-w-6xl mx-auto space-y-3">
        {flashes.map((flash, index) => (
          <motion.div
            key={flash.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-amber-50 border border-amber-300 rounded-xl p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">{flash.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                  <h3 className="font-semibold text-amber-900 text-sm sm:text-base">
                    {flash.headline}
                  </h3>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {flash.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
