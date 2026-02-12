"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Briefcase,
  Bot,
  MessageSquare,
  Video,
  Award,
  Mic,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "AI Upskilling",
    description: "Personalized courses and training modules powered by advanced AI",
    icon: GraduationCap,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-400 to-cyan-400",
    bgDark: "from-blue-950/40 to-cyan-950/40",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Resume Builder",
    description: "Professional LaTeX-based resume creation tool",
    icon: FileText,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "from-emerald-400 to-teal-400",
    bgDark: "from-emerald-950/40 to-teal-950/40",
    bgImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Smart Job Matching",
    description: "AI-driven job recommendations tailored to your skills",
    icon: Briefcase,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "from-purple-400 to-pink-400",
    bgDark: "from-purple-950/40 to-pink-950/40",
    bgImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "24/7 AI Support",
    description: "Career guidance and mental wellness support anytime",
    icon: Bot,
    gradient: "from-red-500/20 to-orange-500/20",
    iconBg: "from-red-400 to-orange-400",
    bgDark: "from-red-950/40 to-orange-950/40",
    bgImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Recruiter Chat",
    description: "Connect directly with hiring managers and recruiters",
    icon: MessageSquare,
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconBg: "from-amber-400 to-yellow-400",
    bgDark: "from-amber-950/40 to-yellow-950/40",
    bgImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Video Interviews",
    description: "Built-in conference rooms for seamless interviews",
    icon: Video,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "from-green-400 to-emerald-400",
    bgDark: "from-green-950/40 to-emerald-950/40",
    bgImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Skill Certification",
    description: "Earn recognized certifications for your achievements",
    icon: Award,
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconBg: "from-indigo-400 to-purple-400",
    bgDark: "from-indigo-950/40 to-purple-950/40",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Interview Simulator",
    description: "Practice with AI-powered mock interviews",
    icon: Mic,
    gradient: "from-violet-500/20 to-blue-500/20",
    iconBg: "from-violet-400 to-blue-400",
    bgDark: "from-violet-950/40 to-blue-950/40",
    bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  },
];

const spans = [
  "lg:col-span-2 lg:row-span-1", // 1: wide
  "lg:col-span-2 lg:row-span-1", // 2: wide
  "lg:col-span-2 lg:row-span-1", // 3: wide
  "lg:col-span-1 lg:row-span-1", // 4: small
  "lg:col-span-1 lg:row-span-1", // 5: small
  "lg:col-span-1 lg:row-span-1", // 6: small
  "lg:col-span-2 lg:row-span-1", // 7: wide
  "lg:col-span-1 lg:row-span-1", // 8: small
];

export default function Features() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 24;
    const delta = (cardWidth + gap) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
      <div className="max-w-8xl mx-auto relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">
              Accelerate Your Career
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools and AI-powered features designed to help you succeed
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-end gap-3 mb-6">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/40 transition shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/40 transition shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <div
            ref={trackRef}
            aria-label="Feature cards carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
                  data-card
                >
                  {/* Apple-style card */}
                  <div className="group relative min-h-[240px] p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-[0_20px_60px_-30px_rgba(255,255,255,0.15)]">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${feature.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${feature.iconBg} mb-6 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl transform rotate-12" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
