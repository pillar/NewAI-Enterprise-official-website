'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/use-translation';

export function AboutStats() {
  const { t } = useI18n();

  const stats = [
    { value: '10+', label: t('about.stats.years') },
    { value: '1000+', label: t('about.stats.clients') },
    { value: '100+', label: t('about.stats.projects') },
    { value: '98%', label: t('about.stats.satisfaction') },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-orange-500 mb-2">
            {stat.value}
          </div>
          <div className="text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}