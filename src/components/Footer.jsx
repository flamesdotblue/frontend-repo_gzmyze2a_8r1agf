import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Tiffinbox. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#privacy" className="text-neutral-700 hover:text-black transition-colors">Privacy</a>
          <span className="text-neutral-300">•</span>
          <a href="#terms" className="text-neutral-700 hover:text-black transition-colors">Terms</a>
          <span className="text-neutral-300">•</span>
          <a href="mailto:hello@tiffinbox.app" className="text-neutral-700 hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
