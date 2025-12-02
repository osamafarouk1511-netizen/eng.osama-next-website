'use client';

import AchievementTimeline from '@/components/sections/achievement-timeline';

export default function AboutPage() {
  return (
  <main className="flex flex-col min-h-screen text-white">
      {/* About Hero Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">عن CSS</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              نحن فريق من المبتكرين الشغوفين مكرسون لتحويل الأعمال من خلال حلول تقنية متطورة.
              يدفعنا التزامنا بالتميز والابتكار المستمر إلى تقديم نتائج استثنائية لعملائنا.
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
              <h2 className="text-4xl font-bold mb-6">رؤيتنا</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                في CSS، نطمح لأن نكون في طليعة الابتكار الرقمي، ونبتكر حلولاً لا تحل تحديات اليوم فحسب، بل تتوقع احتياجات الغد.
              </p>
              <p className="text-gray-400 leading-relaxed">
                يجمع منهجنا بين التفوق التقني وحل المشكلات الإبداعي، لضمان أن كل حل نقدمه يحدث تأثيراً حقيقياً في نجاح عملائنا.
              </p>
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