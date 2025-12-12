"use client"

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useLanguage } from '@/lib/LanguageProvider'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { key: 'header.home', href: '/' },
    { key: 'header.products', href: '#products' },
    { key: 'header.pricing', href: '#pricing' },
    { key: 'header.faq', href: '#faq' },
    { key: 'header.contact_company', href: '#contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 sm:backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-start md:justify-between">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            {/* Use Next.js Image for better performance */}
            <Image 
              src="/Geometric_Logo_for_CSS_Company-removebg-preview.png" 
              alt="CSS Logo" 
              width={96} height={48} 
              className="h-12 w-24 md:h-10 md:w-20 w-auto" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <Button title={t('header.auth_button')} aria-label={t('header.auth_button')}>{t('header.auth_button')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            title={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden fixed inset-y-0 right-0 w-full bg-white p-4"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <div className="flex flex-col items-center gap-4 pt-16">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-xl text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Button onClick={() => setIsOpen(false)} title={t('header.auth_button')} aria-label={t('header.auth_button')}>{t('header.auth_button')}</Button>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header