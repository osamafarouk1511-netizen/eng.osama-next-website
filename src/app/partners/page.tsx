"use client";

import { useLanguage } from '@/lib/LanguageProvider';

export default function PartnersPage() {
  const { t } = useLanguage();
  return (
    <main className="flex flex-col min-h-screen text-white bg-black">
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('partners.title')}</h1>
          <p className="text-xl text-gray-400 mb-12">{t('partners.subtitle')}</p>
          {/* Example partners list, replace with real data as needed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">{t('partners.partner1')}</h2>
              <p className="text-gray-400">{t('partners.partner1_desc')}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">{t('partners.partner2')}</h2>
              <p className="text-gray-400">{t('partners.partner2_desc')}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">{t('partners.partner3')}</h2>
              <p className="text-gray-400">{t('partners.partner3_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
