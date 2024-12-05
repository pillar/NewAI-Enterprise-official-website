'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/use-translation';

export function AboutTeam() {
  const { t } = useI18n();

  const team = [
    {
      name: t('about.team.ceo.name'),
      role: t('about.team.ceo.role'),
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: t('about.team.cto.name'),
      role: t('about.team.cto.role'),
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: t('about.team.cdo.name'),
      role: t('about.team.cdo.role'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">
        {t('about.team.title')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
            <p className="text-muted-foreground">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}