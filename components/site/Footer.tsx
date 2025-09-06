'use client';

import { Github, Youtube, Instagram, Link } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-filmbox-border bg-filmbox-card/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-white">CS</span>
            </div>
            <span className="text-lg font-semibold text-filmbox-text-primary">
              CINESUMER
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@CINESUMER/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/cinesumer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://buymeacoffee.com/cinesumerb/extras"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="Demo Link"
            >
              <Link size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-filmbox-border text-center space-y-2">
          <p className="text-filmbox-text-muted text-sm">
            Made by CINESUMER. All rights reserved.
          </p>
          <p className="text-filmbox-text-muted text-sm">
            Crafted by{" "}
            <a
              href="https://github.com/vikas-yadav2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-filmbox-text-secondary underline"
            >
              Vikas Yadav
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
