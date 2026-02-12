"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "What is SkillTorch?",
      answer:
        "SkillTorch is an AI-powered professional networking and career transition platform built exclusively for Agniveers. It helps translate military experience into civilian career opportunities through structured profiles, skill validation, and intelligent job matching."
    },
    {
      question: "Is SkillTorch really free for Agniveers?",
      answer:
        "Yes. SkillTorch is permanently free for all Agniveers. There are no subscriptions, no hidden charges, and no premium barriers. Our mission is to support your transition without financial burden."
    },
    {
      question: "How does AI Skill Translation work?",
      answer:
        "Our AI analyzes your military trade, responsibilities, and service experience to map them to relevant civilian job roles and industry-recognized skill sets. This ensures your expertise is understood correctly by recruiters."
    },
    {
      question: "How are recruiters verified?",
      answer:
        "All companies undergo structured verification before gaining access to candidate profiles. This maintains a secure and professional hiring environment."
    },
    {
      question: "Can I build a resume on SkillTorch?",
      answer:
        "Yes. SkillTorch includes a built-in LaTeX-based AI resume builder that generates structured, professional resumes optimized for civilian roles. You can export them as PDF instantly."
    },
    {
      question: "Does SkillTorch provide interview preparation?",
      answer:
        "Yes. Our AI-powered interview simulation tool conducts mock interviews, evaluates responses, provides scoring, and gives actionable feedback to improve performance."
    },
    {
      question: "Can I directly communicate with recruiters?",
      answer:
        "Yes. SkillTorch includes an inbuilt chat system and secure video interview rooms, allowing candidates and recruiters to connect directly within the platform."
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. SkillTorch uses secure authentication, role-based access control, and database-level security policies to ensure profile privacy and data protection."
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-black text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Skill Torch
          </p>
        </motion.div>

        <motion.div variants={containerVariants}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
