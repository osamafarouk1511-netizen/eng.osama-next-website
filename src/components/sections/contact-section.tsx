"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageProvider';

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-24 bg-white" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              id="contact-form-title" 
              className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
            aria-labelledby="contact-form-title"
            role="form"
          >
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.label_name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-xl bg-white/50 sm:backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 shadow-sm text-base"
                  placeholder={t('contact.placeholder_name')}
                  aria-label={t('contact.label_name')}
                  title={t('contact.label_name')}
                  autoComplete="name"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.label_email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-xl bg-white/50 sm:backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 shadow-sm text-base"
                  placeholder={t('contact.placeholder_email')}
                  aria-label={t('contact.label_email')}
                  title={t('contact.label_email')}
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.label_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/50 sm:backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 shadow-sm resize-none text-base"
                placeholder={t('contact.placeholder_message')}
                aria-label={t('contact.label_message')}
                title={t('contact.label_message')}
              />
            </div>
            <div className="text-center">
              <Button size="lg" type="submit" aria-label={t('contact.send_message')} title={t('contact.send_message')}>
                {t('contact.send_message')}
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}