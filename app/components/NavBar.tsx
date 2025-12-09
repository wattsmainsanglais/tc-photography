'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Coast', href: '#coast' },
    { name: 'Landscape', href: '#landscape' },
    { name: 'Wildlife', href: '#wildlife' },
    { name: 'Birds', href: '#birds' },
    { name: 'Insects', href: '#insects' },
    { name: 'River', href: '#river' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bad-script text-lavender hover:text-lavender-light transition-colors">
            Terry Carroll Photography
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-lavender transition-colors text-sm font-medium tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="block text-gray-700 hover:text-lavender transition-colors text-base font-medium tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
