'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

type Lang = 'AR' | 'ENG';

type TFunc = (key: string) => string;

const translations: Record<Lang, Record<string, string>> = {
  AR: flatten(ar),
  ENG: flatten(en),
};

function flatten(obj: any, prefix = ''): Record<string, string> {
  const res: Record<string, string> = {};
  for (const k of Object.keys(obj)) {
    const val = obj[k];
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof val === 'string') res[key] = val;
    else Object.assign(res, flatten(val, key));
  }
  return res;
}

const defaultLang: Lang = 'AR';

const LanguageContext = createContext<{
  lang: Lang;
  changeLang: (l: Lang) => void;
  t: TFunc;
}>({ lang: defaultLang, changeLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('site-lang');
      if (stored) {
        const lower = stored.toLowerCase();
        if (lower.includes('ar')) setLang('AR');
        else setLang('ENG');
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('site-lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang === 'AR' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
  }, [lang]);

  const t: TFunc = (key) => {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang: setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
