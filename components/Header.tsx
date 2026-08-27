'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Planes', href: '/#planes' },
  { label: 'Preguntas', href: '/#preguntas' },
  { label: 'Blog', href: '/blog' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-border shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary text-white">
              <Zap className="w-4 h-4" strokeWidth={2.5} fill="currentColor" />
            </span>
            <span
              className={`text-xl font-display font-extrabold tracking-tight ${
                scrolled ? 'text-text' : 'text-dark-text'
              }`}
            >
              Vendo365
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-medium text-sm transition-colors ${
                  scrolled ? 'text-text-secondary hover:text-primary' : 'text-dark-text-muted hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/573103298346?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Vendo365"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary-hover text-text font-medium py-2.5 px-3.5 sm:px-5 rounded-[10px] shadow-sm transition-all duration-200 text-sm whitespace-nowrap flex-shrink-0"
          >
            <span className="hidden sm:inline">Hablemos por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
