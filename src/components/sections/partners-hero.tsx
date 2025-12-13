"use client";

import FadeInView from '@/components/animations/FadeInView';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageProvider';

export default function PartnersHero() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeInView>
          <h1 className="text-5xl font-bold mb-4">
            {t('partners.animated_title') ?? 'Our Partners'}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('partners.animated_subtitle') ?? 'We collaborate with world-class teams to build great products.'}
          </p>
        </FadeInView>

        <motion.div
          className="mt-12 flex justify-center flex-wrap gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => {
            const idx = i + 1;
            const fallback = `Partner ${idx}`;
            return (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                className="mx-3 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform"
                style={{ minWidth: 160 }}
              >
                <div className="text-lg font-semibold">{t(`partners.partner${idx}`) ?? fallback}</div>
                <p className="text-sm text-gray-400 mt-2">{t(`partners.partner${idx}_desc`) ?? 'Trusted partner'}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
