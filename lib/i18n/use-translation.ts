'use client';

import { create } from 'zustand';
import { translations } from './translations';

type Language = 'en' | 'zh' | 'zh-TW';

type TranslationValue = string | Record<string, any>;

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
    let value: TranslationValue = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  },
}));