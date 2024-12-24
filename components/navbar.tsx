'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/use-translation';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="NewAI Logo"
            width={32}
            height={32}
            className="transition-opacity duration-300 hover:opacity-80"
          />
          <motion.span 
            className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            NEWAI
          </motion.span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.home')}
          </Link>
          <Link href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.slogan')}
          </Link>
          <Link href="#products" className="text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.products')}
          </Link>
          <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.about')}
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
