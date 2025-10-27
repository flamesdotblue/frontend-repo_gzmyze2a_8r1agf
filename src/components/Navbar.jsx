import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#features', label: 'Features' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-xl tracking-tight">Tiffinbox</a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-700 hover:text-black transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md border border-black/10 hover:bg-black/5 transition"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-2 py-2 rounded-md text-sm text-neutral-800 hover:bg-black/5 transition"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
