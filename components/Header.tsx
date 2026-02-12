"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-[83rem] mx-auto px-6 py-4">
        <nav className="relative backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl px-6 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold text-lg">
                Skill Torch
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex flex-col gap-1">
                <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/docs"
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/services"
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/jobs"
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Jobs
              </Link>
              <Link
                href="/learning"
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Learning
              </Link>
              <Button
                asChild
                className="bg-white/20 rounded-full hover:bg-white/30 text-white border border-white/20 backdrop-blur-sm"
              >
                <Link href="/signin">Sign in</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
                <Link href="/docs" className="block text-white/90 hover:text-white font-medium transition-colors">
                  Docs
                </Link>
                <Link href="/services" className="block text-white/90 hover:text-white font-medium transition-colors">
                  Services
                </Link>
                <Link href="/jobs" className="block text-white/90 hover:text-white font-medium transition-colors">
                  Jobs
                </Link>
                <Link href="/learning" className="block text-white/90 hover:text-white font-medium transition-colors">
                  Learning
                </Link>
                <Button
                  asChild
                  className="w-full bg-white/20 rounded-full hover:bg-white/30 text-white border border-white/20 backdrop-blur-sm"
                >
                  <Link href="/signin">Sign in</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
