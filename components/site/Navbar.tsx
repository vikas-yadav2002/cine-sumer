'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Products', 'Blog', 'Support', 'Account'];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-filmbox-bg/70 border-b border-filmbox-border/60 shadow-lg/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -8, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.24 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-filmbox-blue rounded-md flex items-center justify-center">
                <span className="text-sm font-bold text-filmbox-bg">CS</span>
              </div>
              <span className="text-lg font-semibold">CineSummer</span>
              <div className="hidden md:block bg-filmbox-card px-3 py-1 rounded-full text-xs text-filmbox-text-muted">
                Colourist
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-filmbox-text-secondary hover:text-filmbox-text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-filmbox-card transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-filmbox-card border-t border-filmbox-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-filmbox-text-secondary hover:text-filmbox-text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-filmbox-blue text-filmbox-bg px-4 py-2 rounded-lg z-50"
      >
        Skip to content
      </a>
    </>
  );
}