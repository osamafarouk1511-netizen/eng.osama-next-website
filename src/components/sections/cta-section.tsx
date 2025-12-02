'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold mb-4">انضم إلى عملاء CSS</h2>
      <p className="text-lg mb-8">ابدأ رحلتك الرقمية مع حلولنا الذكية وحقق نمو أعمالك بثقة وسهولة.</p>
      <a href="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-primary font-bold shadow-xl hover:bg-primary hover:text-white transition-colors duration-300">
        تواصل معنا الآن
      </a>
    </section>
  );
}