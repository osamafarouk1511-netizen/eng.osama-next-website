"use client";

import { motion } from 'framer-motion';
import { Database, Server, Globe, ShoppingCart, Code2, Cloud, Shield } from 'lucide-react';
import { AnimatedServiceCard } from '../ui/animated-service-card';
import CurvedBackground from '../ui/curved-background';
import { useLanguage } from '@/lib/LanguageProvider';


export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.section.items.0.title'),
      description: t('services.section.items.0.description'),
      icon: Database,
      tech: t('services.section.items.0.tech').split('||'),
    },
    {
      title: t('services.section.items.1.title'),
      description: t('services.section.items.1.description'),
      icon: Server,
      tech: t('services.section.items.1.tech').split('||'),
    },
    {
      title: t('services.section.items.2.title'),
      description: t('services.section.items.2.description'),
      icon: Globe,
      tech: t('services.section.items.2.tech').split('||'),
    },
    {
      title: t('services.section.items.3.title'),
      description: t('services.section.items.3.description'),
      icon: ShoppingCart,
      tech: t('services.section.items.3.tech').split('||'),
    },
    {
      title: t('services.section.items.4.title'),
      description: t('services.section.items.4.description'),
      icon: Code2,
      tech: t('services.section.items.4.tech').split('||'),
    },
    {
      title: t('services.section.items.5.title'),
      description: t('services.section.items.5.description'),
      icon: Cloud,
      tech: t('services.section.items.5.tech').split('||'),
    },
    {
      title: t('services.section.items.6.title'),
      description: t('services.section.items.6.description'),
      icon: Shield,
      tech: t('services.section.items.6.tech').split('||'),
    },
  ];
  return (
    <section className="relative py-24 bg-black">
      <CurvedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{t('services.section.title')}</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t('services.section.p')}
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        {/* YouTube Videos Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--color-navy)]">{t('services.section.videos_title')}</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Top row */}
            <div className="rounded-xl shadow-lg bg-[var(--color-sky)] p-4 flex flex-col items-center border-2 border-[var(--color-blue)] col-span-1" dir="rtl">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/Iwe52JYeKLA"
                title="تكامل الفاتورة الإلكترونية"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 border border-[var(--color-blue)]"
              ></iframe>
              <div className="font-bold text-xl text-center text-white" style={{color: '#fff'}}>
                {t('services.section.videos.0.title')}
              </div>
            </div>
            <div className="rounded-xl shadow-lg bg-[var(--color-sky)] p-4 flex flex-col items-center border-2 border-[var(--color-blue)] col-span-1" dir="rtl">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/FCUwz7J6--4"
                title="مميزات وفوائد نقاط البيع الذكية"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 border border-[var(--color-blue)]"
              ></iframe>
              <div className="font-bold text-xl text-center text-white" style={{color: '#fff'}}>
                {t('services.section.videos.1.title')}
              </div>
            </div>
            <div className="rounded-xl shadow-lg bg-[var(--color-sky)] p-4 flex flex-col items-center border-2 border-[var(--color-blue)] col-span-1" dir="rtl">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/ByeiS0VgOIE"
                title="نظرة عامة على نظام CSS ERP"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 border border-[var(--color-blue)]"
              ></iframe>
              <div className="font-bold text-xl text-center text-white" style={{color: '#fff'}}>
                {t('services.section.videos.2.title')}
              </div>
            </div>
            {/* Bottom row */}
            <div className="rounded-xl shadow-lg bg-[var(--color-sky)] p-4 flex flex-col items-center border-2 border-[var(--color-blue)] col-span-1" dir="rtl">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/AP92ZUfmBbo"
                title="الأمن السيبراني وإدارة المخاطر"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 border border-[var(--color-blue)]"
              ></iframe>
              <div className="font-bold text-xl text-center text-white" style={{color: '#fff'}}>
                {t('services.section.videos.3.title')}
              </div>
            </div>
            <div className="rounded-xl shadow-lg bg-[var(--color-sky)] p-4 flex flex-col items-center border-2 border-[var(--color-blue)] col-span-1" dir="rtl">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/roEbzfPBRk0"
                title="حلول سحابية للأعمال"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 border border-[var(--color-blue)]"
              ></iframe>
              <div className="font-bold text-xl text-center text-white" style={{color: '#fff'}}>
                {t('services.section.videos.4.title')}
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
