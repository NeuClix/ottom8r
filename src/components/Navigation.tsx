"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Systems", href: "/systems-built" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/90 backdrop-blur-md border-b border-[#4CAF50]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#06B6D4] flex items-center justify-center text-sm font-bold text-[#0A2540] group-hover:shadow-[0_0_20px_rgba(76,175,80,0.4)] transition-shadow">
            O
          </div>
          <span className="font-bold text-lg text-[#F1FAEE] tracking-tight">
            OTTO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540]/95 backdrop-blur-md border-t border-[#4CAF50]/10 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-[#A8DADC] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
