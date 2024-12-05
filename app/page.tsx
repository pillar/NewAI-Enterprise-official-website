'use client';

import { useI18n } from '@/lib/i18n/use-translation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import { ProductCard } from '@/components/products/product-card';
import { VisionSection } from '@/components/sections/vision-section';
import { AboutSection } from '@/components/sections/about/about-section';

export default function Home() {
  const { t } = useI18n();

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={scrollToProducts}
          >
            {t('hero.cta')}
          </Button>
        </motion.div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('products.title')}</h2>
            <p className="text-muted-foreground">{t('products.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
    </main>
  );
}