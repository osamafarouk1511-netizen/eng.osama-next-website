"use client";

import PartnersHero from '@/components/sections/partners-hero';
import PartnersAnimatedGrid from '@/components/sections/partners-animated-grid';
import { useLanguage } from '@/lib/LanguageProvider';
import Link from 'next/link';

export default function PartnersAnimatedPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white">
      <PartnersHero />
      <PartnersAnimatedGrid />

      <section className="py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            {t('partners.footer_note') ?? 'Interested in partnering?'}{' '}
            <Link href="/contact" className="text-white underline">
              {t('partners.contact_cta') ?? 'Contact us'}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
