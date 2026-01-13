"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
              Habit Tracker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
              >
                Home
              </Link>
              <Link
                href="/habits"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
              >
                Habits
              </Link>
              <Link
                href="/stats"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
              >
                Statistics
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
            >
              Home
            </Link>
            <Link
              href="/habits"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
            >
              Habits
            </Link>
            <Link
              href="/stats"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
            >
              Statistics
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}