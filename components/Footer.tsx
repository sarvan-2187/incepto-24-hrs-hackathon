"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer
            className="w-full bg-black text-white border-t border-white/10 px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">

                {/* Top Grid */}
                <div className="grid md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/logo.svg" alt="SkillTorch logo" className="h-7 w-7" />
                            <h3 className="text-xl font-bold tracking-wide">
                                SkillTorch
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            AI-powered professional networking and career transition platform
                            built exclusively for Agniveers.
                        </p>
                        <p className="mt-4 text-orange-500 text-sm font-medium">
                            Always Free for Agniveers.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                            <li><Link href="/jobs" className="hover:text-white transition">Explore Jobs</Link></li>
                            <li><Link href="/ai-tools" className="hover:text-white transition">AI Tools</Link></li>
                        </ul>
                    </div>

                    {/* Recruiters */}
                    <div>
                        <h4 className="font-semibold mb-4">For Recruiters</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/post-job" className="hover:text-white transition">Post a Job</Link></li>
                            <li><Link href="/hire" className="hover:text-white transition">Hire Agniveers</Link></li>
                            <li><Link href="/verify" className="hover:text-white transition">Verification Process</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                            <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} SkillTorch. All rights reserved.
                </div>

            </div>
        </motion.footer>
    )
}
