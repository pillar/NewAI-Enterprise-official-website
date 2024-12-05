'use client';

import { create } from 'zustand';
import { translations } from './translations';

type Language = 'en' | 'zh';

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useI18n = create<I18nStore>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const { language } = get();
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value?.[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value as string;
  },
}));