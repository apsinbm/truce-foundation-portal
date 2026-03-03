'use client';

import Image from 'next/image';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import DataAccuracyChecklist from './DataAccuracyChecklist';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200">
      {/* Main Footer */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/truce-foundation-logo.jpg"
                  alt="Truce Foundation"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-gray-900">Truce Foundation</span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Transforming the Olympic Truce tradition into meaningful action for peace.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href={TRUCE_INDEX_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Compliance Index
                  </a>
                </li>
                <li>
                  <a href="/press" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="/partners" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <p className="text-sm text-gray-600">
                For inquiries, please visit our <a href="/about" className="text-blue-600 hover:underline">About page</a>.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Truce Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <DataAccuracyChecklist />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
