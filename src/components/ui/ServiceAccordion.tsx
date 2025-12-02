'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from './button';

interface Props {
  title: string;
  description?: string;
  items: string[];
  icon?: any;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceAccordion({ title, description, items, icon: Icon, ctaLabel, ctaHref }: Props) {
  const [open, setOpen] = useState(false);
  const summaryCount = 3;

  return (
    <div className="bg-black/90 p-4 rounded-2xl">
      <div className="flex items-start gap-4">
        {Icon && <Icon className="w-7 h-7 text-primary shrink-0" />}
        <div className="flex-1">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            {description && <p className="text-sm text-gray-400 mt-1 leading-relaxed">{description}</p>}
          </div>

          <ul className="mt-3 space-y-1 text-gray-300 text-sm">
            {items.slice(0, summaryCount).map((it) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-sm text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full font-medium"
              aria-expanded={open}
            >
              <span>{open ? 'إخفاء التفاصيل' : 'عرض جميع الخصائص و المميزات'}</span>
              {open ? <ArrowUp className="w-4 h-4 text-white" /> : <ArrowDown className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        className="px-0 overflow-hidden"
      >
        <div className="pt-2 pb-4">
          <ul className="space-y-1 text-gray-300 text-sm">
            {items.map((it) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>

          {ctaLabel && (
            <div className="mt-4">
              <Button
                noHover
                variant="white"
                onClick={() => (ctaHref?.startsWith('/contact') ? (window.location.href = ctaHref) : window.open(ctaHref, '_blank'))}
                className="px-6 py-3 rounded-xl font-medium"
              >
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
