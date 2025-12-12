'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Cloud, Server, Database, Globe, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceAccordion from '@/components/ui/ServiceAccordion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageProvider';

// services and projects are localized inside the component using `t()`

// JSON-LD will be generated inside the component to use localized strings

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <div className="relative h-56 md:h-64 overflow-hidden bg-black">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            fill
            className="w-full h-full object-cover"
            priority={false}
          />
        </motion.div>
        
        {/* Navigation Buttons */}
        {project.images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label={t('services.prev_image')}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label={t('services.next_image')}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </>
        )}

        {/* Image Counter */}
        {project.images.length > 1 && (
          <motion.div
            key={`counter-${currentImageIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-2 right-2 bg-black/60 px-3 py-1 rounded-full text-sm text-white"
          >
            {currentImageIndex + 1} / {project.images.length}
          </motion.div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6">
        <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('services.projects.0.title'),
      category: t('services.projects.0.category'),
      images: ['/case-studies/testing.jpg', '/case-studies/testing.jpg']
    },
    {
      id: 2,
      title: t('services.projects.1.title'),
      category: t('services.projects.1.category'),
      images: ['/case-studies/testing.jpg', '/case-studies/testing.jpg', '/case-studies/testing.jpg', '/case-studies/testing.jpg']
    },
    {
      id: 3,
      title: t('services.projects.2.title'),
      category: t('services.projects.2.category'),
      images: ['/case-studies/testing.jpg', '/case-studies/testing.jpg', '/case-studies/testing.jpg', '/case-studies/testing.jpg']
    }
  ];

  const services = [
    {
      id: 'focus-erp',
      icon: Database,
      title: t('services.items.focus-erp.title'),
      description: t('services.items.focus-erp.description'),
      features: t('services.items.focus-erp.features').split('||'),
      color: 'from-blue-600/20 to-cyan-400/20',
      ctaLabel: t('services.items.focus-erp.ctaLabel'),
      ctaHref: '/downloads/focus-erp-features.pdf'
    },
    {
      id: 'hr-system',
      icon: Server,
      title: t('services.items.hr-system.title'),
      description: t('services.items.hr-system.description'),
      features: t('services.items.hr-system.features').split('||'),
      color: 'from-emerald-600/20 to-teal-400/20',
      ctaLabel: t('services.items.hr-system.ctaLabel'),
      ctaHref: '/downloads/hr-system-features.pdf'
    },
    {
      id: 'erplite',
      icon: Cloud,
      title: t('services.items.erplite.title'),
      description: t('services.items.erplite.description'),
      features: t('services.items.erplite.features').split('||'),
      color: 'from-purple-600/20 to-pink-400/20',
      ctaLabel: t('services.items.erplite.ctaLabel'),
      ctaHref: '/downloads/erplite-features.pdf'
    },
    {
      id: 'e-invoicing',
      icon: Globe,
      title: t('services.items.e-invoicing.title'),
      description: t('services.items.e-invoicing.description'),
      features: t('services.items.e-invoicing.features').split('||'),
      color: 'from-red-600/20 to-rose-400/20',
      ctaLabel: t('services.items.e-invoicing.ctaLabel'),
      ctaHref: '/contact?service=e-invoicing'
    }
  ];
  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: t('services.product_focus_name'),
      description: t('services.product_focus_description'),
      brand: 'CSS',
      url: 'https://yourdomain/services#focus-erp'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: t('services.product_erplite_name'),
      description: t('services.product_erplite_description'),
      brand: 'CSS',
      url: 'https://yourdomain/services#erplite'
    }
  ]);

  return (
  <main className="flex flex-col min-h-screen overflow-x-hidden text-white">
  {/* JSON-LD for products */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero Section */}
  <section className="py-12 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-40" />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{t('services.title')}</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">{t('services.intro')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
  <section className="py-8 sm:py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl`}>
                  <ServiceAccordion
                    title={service.title}
                    description={service.description}
                    items={service.features}
                    icon={service.icon}
                    ctaLabel={service.ctaLabel}
                    ctaHref={service.ctaHref}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
  <section className="py-12 md:py-24 bg-black relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">{t('services.contact_cta_title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-8">{t('services.contact_cta_p')}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                noHover
                variant="white"
                onClick={() => router.push('/contact?scroll=form')}
                className="px-8 py-6 rounded-xl text-lg font-medium"
              >
                {t('services.contact_cta_button')} <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Showcase Section - Placeholder for future content */}
  <section className="py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{t('services.projects_title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">{t('services.projects_desc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}