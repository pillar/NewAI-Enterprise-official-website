'use client';

import { useI18n } from '@/lib/i18n/use-translation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FooterNav } from './footer-nav';
import { SocialLinks } from './social-links';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Logo, Slogan, and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="ITUSI Logo" width={32} height={32} />
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ITUSI
              </motion.span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              {t('footer.slogan')}
            </p>
            <SocialLinks />
          </div>

          {/* Right Column - Navigation */}
          <FooterNav />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &copy; 2024-2025 ITUSI. {t('footer.rights')}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}