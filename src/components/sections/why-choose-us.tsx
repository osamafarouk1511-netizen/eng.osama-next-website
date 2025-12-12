"use client";

import { motion } from 'framer-motion';
import { Server, Shield, Zap, Users, Code2, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageProvider';

const features = [
  { icon: Server, key: 'why.features.0', color: 'from-blue-500/20 to-blue-600/20' },
  { icon: Shield, key: 'why.features.1', color: 'from-green-500/20 to-green-600/20' },
  { icon: Zap, key: 'why.features.2', color: 'from-yellow-500/20 to-yellow-600/20' },
  { icon: Users, key: 'why.features.3', color: 'from-purple-500/20 to-purple-600/20' },
  { icon: Code2, key: 'why.features.4', color: 'from-red-500/20 to-red-600/20' },
  { icon: Heart, key: 'why.features.5', color: 'from-pink-500/20 to-pink-600/20' },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('why.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('why.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 bg-white/5 sm:backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                <div className="relative z-10">
                  <feature.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t(`${feature.key}.title`)}</h3>
                  <p className="text-gray-400">{t(`${feature.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}