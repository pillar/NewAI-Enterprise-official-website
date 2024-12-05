'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data/products';
import { useI18n } from '@/lib/i18n/use-translation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useI18n();
  
  const handleClick = () => {
    window.open(product.website, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative pb-[56.25%]">
        <Image
          src={product.image}
          alt={t(product.nameKey)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{t(product.nameKey)}</h3>
        <p className="text-muted-foreground">
          {t(product.descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
}