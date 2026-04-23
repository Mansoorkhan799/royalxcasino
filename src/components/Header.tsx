'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

type NavChild = { href: string; label: string; desc?: string };
type NavGroup = { id: string; label: string; children: NavChild[] };

const GROUPS: NavGroup[] = [
  {
    id: 'platforms',
    label: 'Platforms',
    children: [
      { href: '/royal-x-casino-for-pc', label: 'PC', desc: 'Play Royal X Casino on Windows & Mac' },
      { href: '/royal-x-casino-for-ios', label: 'iOS', desc: 'Guide for iPhone & iPad users' },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    children: [
      { href: '/how-to-register-royal-x-casino', label: 'Register', desc: 'Create your Royal X Casino account' },
      { href: '/how-to-login-royal-x-casino', label: 'Login', desc: 'Sign in securely to your account' },
    ],
  },
  {
    id: 'banking',
    label: 'Banking',
    children: [
      { href: '/royal-x-casino-deposit-guide', label: 'Deposit', desc: 'Add funds via EasyPaisa & JazzCash' },
      { href: '/royal-x-casino-withdraw-guide', label: 'Withdraw', desc: 'Instant withdrawals in 10–30 minutes' },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-1 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Header() {
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenId(null);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/royal-x-casino-logo.webp"
              alt="Royal X Casino Logo"
              width={40}
              height={40}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Royal X Casino
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex flex-wrap items-center gap-x-5 lg:gap-x-6">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/royal-x-casino-download" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>

          {GROUPS.map((group) => {
            const isOpen = openId === group.id;
            return (
              <div
                key={group.id}
                className="relative"
                onMouseEnter={() => setOpenId(group.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : group.id)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className="flex items-center text-white hover:text-accent font-medium transition-colors"
                >
                  {group.label}
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-40"
                  >
                    <div className="bg-[#0A1029] border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-3 hover:bg-[#FFA500]/10 border-b border-gray-800 last:border-b-0 transition-colors group"
                          onClick={() => setOpenId(null)}
                        >
                          <div className="text-white font-semibold group-hover:text-accent">{child.label}</div>
                          {child.desc && (
                            <div className="text-gray-400 text-xs mt-0.5">{child.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link href="/royal-x-casino-redeem-code" className="text-white hover:text-accent font-medium transition-colors">
            Redeem Code
          </Link>
          <Link href="/royal-x-casino-about-us" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/royal-x-casino-contact-us" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
}
