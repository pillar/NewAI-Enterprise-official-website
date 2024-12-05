'use client';

import { useI18n } from '@/lib/i18n/use-translation';
import Link from 'next/link';

interface NavSection {
  title: string;
  links: Array<{ 
    label: string; 
    href: string;
    external?: boolean;
  }>;
}

export function FooterNav() {
  const { t } = useI18n();

  const navSections: NavSection[] = [
    {
      title: t('footer.products'),
      links: [
        { label: t('footer.wotushe'), href: 'https://www.52wts.cn', external: true },
        { label: t('footer.wtaigc'), href: 'https://www.wtaigc.com', external: true },
        { label: t('footer.wtainav'), href: 'https://wtai.cc', external: true },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.twitter'), href: 'https://x.com/zyailive', external: true },
        { label: t('footer.facebook'), href: 'https://facebook.com/zyailive', external: true },
        { label: t('footer.github'), href: 'https://github.com/321208008', external: true },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.vision'), href: '#vision' },
        { label: t('footer.products'), href: '#products' },
        { label: t('footer.about'), href: '#about' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 md:gap-16">
      {navSections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  {...(link.external ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  } : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}