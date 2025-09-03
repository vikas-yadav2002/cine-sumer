import { Github, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-filmbox-border bg-filmbox-card/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-filmbox-blue rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-filmbox-bg">VV</span>
            </div>
            <span className="text-lg font-semibold text-filmbox-text-primary">Video Village</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors">
              Terms
            </a>
            <a href="#" className="text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="p-2 text-filmbox-text-muted hover:text-filmbox-text-secondary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-filmbox-border text-center">
          <p className="text-filmbox-text-muted text-sm">
            © 2025 Video Village. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}