'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/use-translation';
import { Target, Heart, Lightbulb } from 'lucide-react';

export function AboutContent() {
  const { t } = useI18n();

  const features = [
    {
      icon: Target,
      title: t('about.features.innovation.title'),
      description: t('about.features.innovation.description'),
    },
    {
      icon: Heart,
      title: t('about.features.team.title'),
      description: t('about.features.team.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.features.solutions.title'),
      description: t('about.features.solutions.description'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="p-3 bg-orange-500/10 rounded-full mb-4">
            <feature.icon className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}