'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Child = { href: string; label: string };

const MOBILE_GROUPS: { id: string; label: string; children: Child[] }[] = [
  {
    id: 'platforms',
    label: 'Platforms',
    children: [
      { href: '/royal-x-casino-for-pc', label: 'PC' },
      { href: '/royal-x-casino-for-ios', label: 'iOS' },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    children: [
      { href: '/how-to-register-royal-x-casino', label: 'Register' },
      { href: '/how-to-login-royal-x-casino', label: 'Login' },
    ],
  },
  {
    id: 'banking',
    label: 'Banking',
    children: [
      { href: '/royal-x-casino-deposit-guide', label: 'Deposit Guide' },
      { href: '/royal-x-casino-withdraw-guide', label: 'Withdraw Guide' },
    ],
  },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button className="flex items-center text-accent p-1" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-800 sticky top-0 bg-primary z-10">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino Logo" fill sizes="(max-width: 768px) 32px, 40px" className="object-contain" priority={true} />
              </div>
              <span className="text-accent text-xl font-bold" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                Royal X Casino
              </span>
            </Link>
            <button onClick={closeMenu} className="text-accent p-1" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-4">
            <Link href="/" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors border-b border-gray-800" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/royal-x-casino-download" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors border-b border-gray-800" onClick={closeMenu}>
              Download
            </Link>

            {MOBILE_GROUPS.map((group) => {
              const isGroupOpen = openGroup === group.id;
              return (
                <div key={group.id} className="border-b border-gray-800">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isGroupOpen ? null : group.id)}
                    aria-expanded={isGroupOpen}
                    className="w-full flex items-center justify-between text-white hover:text-accent py-2 text-lg font-medium transition-colors"
                  >
                    <span>{group.label}</span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${isGroupOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isGroupOpen && (
                    <div className="pl-4 pb-2">
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-gray-300 hover:text-accent py-2 text-base transition-colors"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/royal-x-casino-redeem-code" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors border-b border-gray-800" onClick={closeMenu}>
              Redeem Code
            </Link>
            <Link href="/royal-x-casino-about-us" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors border-b border-gray-800" onClick={closeMenu}>
              About Us
            </Link>
            <Link href="/blog" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors border-b border-gray-800" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/royal-x-casino-contact-us" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
