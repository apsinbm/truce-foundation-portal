'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRUCE_START_DATE, isInTruceWindow } from '@/lib/constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = TRUCE_START_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isInTruceWindow()) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-600/20 border border-green-600/30"
      >
        <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />
        <span className="text-green-700 font-semibold text-lg">
          Olympic Truce Window Active
        </span>
      </motion.div>
    );
  }

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="glass-card px-3 py-2 min-w-[55px] sm:min-w-[65px]">
        <span className="text-xl sm:text-2xl font-bold text-gray-900 tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-gray-500 text-xs sm:text-sm">
        Countdown to Olympic Truce Window
      </p>
      <div className="flex gap-2 sm:gap-3">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-xl sm:text-2xl text-gray-400 self-start mt-2">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-xl sm:text-2xl text-gray-400 self-start mt-2">:</span>
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <span className="text-xl sm:text-2xl text-gray-400 self-start mt-2">:</span>
        <TimeBlock value={timeLeft.seconds} label="Sec" />
      </div>
      <p className="text-gray-500 text-xs mt-1">
        Milano-Cortina 2026 Winter Olympics
      </p>
    </div>
  );
}
