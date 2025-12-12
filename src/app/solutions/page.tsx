"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, CloudCog, Shield, Blocks, MoveRight, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageProvider';

export default function SolutionsPage() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const gradientVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  const solutions = [
    { id: 'sol-0', icon: Code, ...(() => ({ title: t('solutions.section.items.0.title'), description: t('solutions.section.items.0.description'), highlights: t('solutions.section.items.0.highlights').split('||'), benefits: t('solutions.section.items.0.benefits') }))() },
    { id: 'sol-1', icon: CloudCog, ...(() => ({ title: t('solutions.section.items.1.title'), description: t('solutions.section.items.1.description'), highlights: t('solutions.section.items.1.highlights').split('||'), benefits: t('solutions.section.items.1.benefits') }))() },
    { id: 'sol-2', icon: Shield, ...(() => ({ title: t('solutions.section.items.2.title'), description: t('solutions.section.items.2.description'), highlights: t('solutions.section.items.2.highlights').split('||'), benefits: t('solutions.section.items.2.benefits') }))() },
    { id: 'sol-3', icon: Blocks, ...(() => ({ title: t('solutions.section.items.3.title'), description: t('solutions.section.items.3.description'), highlights: t('solutions.section.items.3.highlights').split('||'), benefits: t('solutions.section.items.3.benefits') }))() }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div
          className="absolute inset-0 z-0"
          initial="initial"
          animate="animate"
          variants={gradientVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-30 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-primary/10 to-transparent opacity-30 blur-3xl" />
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
              {t('solutions.section.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('solutions.section.p')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 rounded-xl text-lg font-medium backdrop-blur-sm border border-white/10"
              >
                {t('solutions.section.cta_button')} <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card-dark bg-neutral-900/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                    <p className="text-white/90 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm text-white/80">
                          <Zap className="w-4 h-4 mr-2 text-white/80" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-white flex items-center text-sm">
                        <span className="font-semibold">{solution.benefits}</span>
                        <MoveRight className="w-4 h-4 ml-2 text-white" />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30 blur-3xl" />
        </motion.div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('solutions.section.cta_title')}</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('solutions.section.cta_p')}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                className="bg-white text-black hover:bg-white/90 px-8 py-6 rounded-xl text-lg font-medium"
              >
                {t('solutions.section.cta_button')} <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}