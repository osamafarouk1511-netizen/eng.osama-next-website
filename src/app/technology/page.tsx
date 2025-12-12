"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code2, Cpu, Brain, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageProvider';

export default function TechnologyPage() {
  const { t } = useLanguage();

  const icons = [Database, Code2, Cloud, Brain, Lock, Cpu];

  const items = Array.from({ length: 6 }).map((_, i) => ({
    category: t(`technology.section.items.${i}.category`),
    description: t(`technology.section.items.${i}.description`),
    techs: t(`technology.section.items.${i}.techs`).split('||'),
    icon: icons[i]
  }));

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent opacity-30 blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {t('technology.section.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t('technology.section.p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="relative px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{tech.category}</h3>
                </div>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent opacity-30 blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
                <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUpTech target={20} suffix="+" duration={1400} />
              </h3>
              <p className="text-gray-400">{t('technology.section.stats.0')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
                <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUpTech target={15} suffix="+" duration={1400} />
              </h3>
              <p className="text-gray-400">{t('technology.section.stats.1')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
                <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUpTech target={24} suffix="/7" duration={1400} />
              </h3>
              <p className="text-gray-400">{t('technology.section.stats.2')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CountUpTech({ target, suffix = '', duration = 1200 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const from = 0;
          const to = target;

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(from + (to - from) * eased);
            setValue(current);
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}
