'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/use-translation';
import { AboutContent } from './about-content';
import { AboutStats } from './about-stats';

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </section>
  );
}