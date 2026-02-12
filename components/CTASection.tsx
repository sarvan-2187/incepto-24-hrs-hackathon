"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
    return (
        <motion.section
            className="relative w-full bg-black text-white py-20 px-4 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}  // Animates only once
        >
            <div className="absolute inset-0 opacity-40">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto text-center">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(255,255,255,0.2)] overflow-hidden">
                    {/* Apple-style window header */}
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="px-4 py-12 md:px-8">
                        {/* Headline */}
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Start Your{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 text-transparent bg-clip-text">
                                Civilian Journey
                            </span>{" "}
                            Today
                        </h2>

                        {/* Subtext */}
                        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
                            Build your verified profile, translate your military expertise,
                            and connect with trusted recruiters — all in one structured platform.
                        </p>

                        {/* Button */}
                        <div className="mt-10">
                            <Link href="/signup">
                                <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-black font-semibold transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)]">
                                    Get Started
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
