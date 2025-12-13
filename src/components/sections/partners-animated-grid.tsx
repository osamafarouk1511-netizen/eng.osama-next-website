"use client";

import { motion } from 'framer-motion';
import FadeInView from '@/components/animations/FadeInView';
import { useLanguage } from '@/lib/LanguageProvider';

const logos = [
  { name: 'Alpha', desc: 'AI Solutions' },
  { name: 'Beta', desc: 'Cloud Platform' },
  { name: 'Gamma', desc: 'FinTech' },
  { name: 'Delta', desc: 'Retail Partner' },
  { name: 'Epsilon', desc: 'Mobile Apps' },
  { name: 'Zeta', desc: 'Agency' },
  { name: 'Eta', desc: 'System Integrator' },
  { name: 'Theta', desc: 'Data Analytics' },
  { name: 'Iota', desc: 'E-commerce' },
];

export default function PartnersAnimatedGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <FadeInView>
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            {t('partners.collaborators_title') ?? 'Collaborators & Integrations'}
          </h2>
        </FadeInView>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {logos.map((l, idx) => (
              <motion.div
                key={l.name}
                variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } }}
                className="bg-white/5 p-6 rounded-2xl border border-white/8 flex flex-col items-start"
              >
                <div className="text-xl font-semibold text-white">{t(`partners.logo_${idx}`) ?? l.name}</div>
                <div className="text-sm text-gray-400 mt-1">{t(`partners.logo_${idx}_desc`) ?? l.desc}</div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
