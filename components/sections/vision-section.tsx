'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/use-translation';
import { GraduationCap, Compass, Lightbulb } from 'lucide-react';

interface VisionCard {
  icon: typeof GraduationCap;
  title: string;
  description: string;
}

export function VisionSection() {
  const { t } = useI18n();
  
  const visionCards: VisionCard[] = [
    {
      icon: GraduationCap,
      title: t('vision.innovation.title'),
      description: t('vision.innovation.description'),
    },
    {
      icon: Compass,
      title: t('vision.technology.title'),
      description: t('vision.technology.description'),
    },
    {
      icon: Lightbulb,
      title: t('vision.global.title'),
      description: t('vision.global.description'),
    },
  ];

  return (
    <section id="vision" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('vision.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('vision.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-orange-500/10 rounded-full mb-4">
                  <card.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}