'use client';

import { useLanguage } from '@/lib/LanguageProvider';

export default function CtaSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold mb-4">{t('cta.join_title')}</h2>
      <p className="text-lg mb-8">{t('cta.join_p')}</p>
      <a href="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-primary font-bold shadow-xl hover:bg-primary hover:text-white transition-colors duration-300">
        {t('cta.contact_now')}
      </a>
    </section>
  );
}