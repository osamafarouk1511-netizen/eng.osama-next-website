"use client";

import AchievementTimeline from '@/components/sections/achievement-timeline';
import { useLanguage } from '@/lib/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
  <main className="flex flex-col min-h-screen text-white">
      {/* About Hero Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {t('about.p1')}
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <AchievementTimeline />

      {/* Vision Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('about.vision_title')}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{t('about.vision_p1')}</p>
              <p className="text-gray-400 leading-relaxed">{t('about.vision_p2')}</p>
            </div>
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-transparent rounded-2xl">
              {/* Placeholder for future image or 3D element */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}