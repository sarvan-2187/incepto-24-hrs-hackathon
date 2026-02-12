"use client";

import { useEffect, useRef, useState } from "react";
import HeroBg from "./HeroBg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LightPillar from "./HeroBg";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);


  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
          <LightPillar
          topColor="#29ff69"
          bottomColor="#ff6600"
          intensity={0.5}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Top Pill */}
        <div className="mb-8">
          <button className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 transition-all">
            <span className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Ignite Your Potential
            </span>
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl leading-tight">
          Build real skills. Sharpen discipline. Master what matters.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm"
          >
            <Link href="/explore">Explore Skills</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
