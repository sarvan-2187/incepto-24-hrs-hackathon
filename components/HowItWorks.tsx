"use client"

import { motion } from "framer-motion"

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Build Your Profile",
            description:
                "Create a verified professional profile by adding your service details, experience, education, and certifications."
        },
        {
            number: "02",
            title: "Get Skill Mapped",
            description:
                "Our AI translates your military trade and responsibilities into high-demand civilian roles and industry-recognized competencies."
        },
        {
            number: "03",
            title: "Upskill & Certify",
            description:
                "Access AI-powered training modules, complete assessments, and earn certifications to strengthen your career readiness."
        },
        {
            number: "04",
            title: "Get Matched & Interview",
            description:
                "Receive intelligent job recommendations, connect with verified recruiters, and attend secure video interviews."
        }
    ]

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.section
            className="w-full bg-black text-white py-24 px-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}  // Animates only once
        >
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <motion.h2
                    variants={item}
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                    How It Works
                </motion.h2>

                <motion.p
                    variants={item}
                    className="mt-4 text-gray-400 max-w-2xl mx-auto"
                >
                    A structured transition process designed exclusively for Agniveers.
                </motion.p>

                {/* Steps */}
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="relative"
                        >
                            {/* Step Number */}
                            <div className="text-5xl font-bold text-orange-500/20 mb-6">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Divider Line (Desktop Only) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 right-[-24px] w-12 h-[1px] bg-orange-500/50" />
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    )
}
