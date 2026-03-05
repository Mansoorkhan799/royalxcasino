'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

export default function Header() {
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
        <nav className="hidden md:flex flex-wrap items-center gap-x-6">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/royal-x-casino-download" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/royal-x-casino-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC
          </Link>
          <Link href="/royal-x-casino-for-ios" className="text-white hover:text-accent font-medium transition-colors">
            iOS
          </Link>
          <Link href="/how-to-register-royal-x-casino" className="text-white hover:text-accent font-medium transition-colors">
            Register
          </Link>
          <Link href="/how-to-login-royal-x-casino" className="text-white hover:text-accent font-medium transition-colors">
            Login
          </Link>
          <Link href="/royal-x-casino-deposit-guide" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/royal-x-casino-withdraw-guide" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
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