'use client';

import { Youtube, Instagram, Link } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-black">CS</span>
            </div>
            <span className="text-lg font-semibold text-white">
              CINESUMER
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <a
              href="/privacy"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:SumerFade@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links - Minimalist Style */}
        <div className="flex items-center space-x-6">
  {/* YouTube */}
  <a
    href="https://www.youtube.com/@CINESUMER/videos"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-zinc-400 hover:text-white transition-all hover:scale-110"
    aria-label="YouTube"
  >
    <Youtube size={20} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/cinesumer/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-zinc-400 hover:text-white transition-all hover:scale-110"
    aria-label="Instagram"
  >
    <Instagram size={20} />
  </a>

  {/* Buy Me a Coffee / Link */}
  <a
    href="https://buymeacoffee.com/cinesumerb/extras"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-zinc-400 hover:text-white transition-all hover:scale-110"
    aria-label="Support Us"
  >
    <Link size={20} />
  </a>
</div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-8 border-t border-zinc-800 text-center space-y-2">
          <p className="text-zinc-500 text-sm">
            Made by CINESUMER. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Crafted by{" "}
            <a
              href="https://github.com/vikas-yadav2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Vikas Yadav
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}