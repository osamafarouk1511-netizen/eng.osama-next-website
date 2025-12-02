'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'فيسبوك' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Linkedin, href: '#', label: 'لينكدإن' },
  { icon: Instagram, href: '#', label: 'انستغرام' },
];

const quickLinks = [
  { text: 'من نحن', href: '/about' },
  { text: 'خدماتنا', href: '/services' },
  { text: 'آراء العملاء', href: '/testimonials' },
  { text: 'اتصل بنا', href: '/contact' },
];

const services = [
  'حلول ERP',
  'إدارة النظم',
  'تطوير الويب',
  'حلول سحابية',
  'خدمات أمنية',
];

export default function SuperFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Deterministic values for hydration safety
  const bgShapes = Array.from({ length: 50 }, (_, i) => ({
    w: 50 + (i * 37) % 100,
    h: 50 + (i * 53) % 100,
    l: (i * 19) % 100,
    t: (i * 23) % 100,
    d: 2 + (i % 4),
    delay: (i % 10) * 0.2,
  }));
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        {bgShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: `${shape.w}px`,
              height: `${shape.h}px`,
              left: `${shape.l}%`,
              top: `${shape.t}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: shape.d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">CSS</h2>
            <p className="text-gray-300 mb-6">
              تحويل الأعمال من خلال حلول تقنية مبتكرة.
              شريكك الموثوق في التحول الرقمي.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ text, href }, index) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-300 flex items-center"
                >
                  <span className="mr-2 text-primary">•</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">اتصل بنا</h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300"
            >
              <Mail className="mr-3" size={20} />
              <a href="mailto:info@css.com">info@css.com</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300"
            >
              <Phone className="mr-3" size={20} />
              <a href="tel:+11234567890">+20 1113146750</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300"
            >
              <MapPin className="mr-3" size={20} />
              <p>Helmiet El-Zaitoun, Cairo, Egypt</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CSS. جميع الحقوق محفوظة.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 text-white/80 hover:text-white transition-colors flex items-center"
            aria-label="العودة للأعلى"
            title="العودة للأعلى"
          >
            <ArrowUpCircle className="mr-2" size={24} />
            العودة للأعلى
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}