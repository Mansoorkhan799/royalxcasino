"use client";

import { useState } from "react";
import Link from "next/link";

const TOC_LINKS = [
  { href: "#overview", label: "App overview" },
  { href: "#what-is-royal-x-casino", label: "What is Royal X Casino Pakistan?" },
  { href: "#key-features", label: "Key features" },
  { href: "#games-available", label: "Complete games list" },
  { href: "#app-screenshots", label: "App screenshots" },
  { href: "#how-to-download", label: "How to download and install" },
  { href: "#how-to-register", label: "Register and log in" },
  { href: "#bonuses", label: "Bonuses, VIP levels and agent programme" },
  { href: "#deposit-withdraw", label: "Deposit and withdrawal methods" },
  { href: "#how-to-earn", label: "Ways to play and win" },
  { href: "#tips-tricks", label: "Practical tips" },
  { href: "#security", label: "Is Royal X Casino safe?" },
  { href: "#pros-cons", label: "Pros and cons" },
  { href: "#user-reviews", label: "Reviews and ratings" },
  { href: "#faqs", label: "FAQs" },
];

export default function TableOfContentsAccordion() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-gradient-to-br from-[#0A1029] via-[#0f1729] to-[#0A1029] rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
      {/* Header – click to toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 md:px-8 py-5 group focus:outline-none"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFA500]/20 shrink-0">
            <svg className="w-5 h-5 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#FFA500]">Table of Contents</h2>
        </div>
        <svg
          className={`w-5 h-5 text-[#FFA500] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 md:px-8 pb-6 space-y-2">
          {TOC_LINKS.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#06091F]/60 border border-gray-700/50 hover:border-[#0ea5e9]/50 hover:bg-[#0ea5e9]/5 transition-all duration-200"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-[#0ea5e9]/20 text-[#0ea5e9] text-sm font-semibold group-hover:bg-[#0ea5e9]/30 transition-colors">
                {index + 1}
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors font-medium flex-1">
                {label}
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover:text-[#0ea5e9] group-hover:translate-x-0.5 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
