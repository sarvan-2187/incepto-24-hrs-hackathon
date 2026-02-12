"use client"

import { ShieldCheck, BrainCircuit, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function TrustSection() {
    const trustItems = [
        {
            icon: ShieldCheck,
            title: "Verified Agniveer Profiles",
            description:
                "Every profile is authenticated and validated to ensure genuine service records and credibility."
        },
        {
            icon: BrainCircuit,
            title: "AI Skill Translation",
            description:
                "Military skills intelligently mapped to high-demand civilian roles using AI-driven analysis."
        },
        {
            icon: BadgeCheck,
            title: "Verified Recruiters",
            description:
                "Companies undergo structured verification to maintain a secure and professional hiring ecosystem."
        }
    ]

    // Parent container animation
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    // Child animation
    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.section
            className="w-full bg-black text-white py-20 px-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}  // 🔥 Animates only once
        >
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <motion.h2
                    variants={item}
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                    Built on Trust. Powered by Discipline.
                </motion.h2>

                <motion.p
                    variants={item}
                    className="mt-4 text-gray-400 max-w-2xl mx-auto"
                >
                    SkillTorch ensures a structured, verified, and AI-driven ecosystem
                    designed specifically for Agniveers transitioning into civilian careers.
                </motion.p>

                {/* Grid */}
                <div className="mt-14 grid gap-10 md:grid-cols-3">
                    {trustItems.map((itemData, index) => {
                        const Icon = itemData.icon
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:border-white/30 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-orange-500/10 p-4 rounded-full">
                                        <Icon className="h-8 w-8 text-orange-500" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {itemData.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {itemData.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </motion.section>
    )
}
