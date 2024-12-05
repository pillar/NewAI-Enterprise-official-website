'use client';

import { useI18n } from '@/lib/i18n/use-translation';

export function StructuredData() {
  const { t } = useI18n();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ITUSI',
    alternateName: t('meta.alternateName'),
    url: 'https://itusi.ai',
    description: t('meta.description'),
    sameAs: [
      'https://twitter.com/zyailive',
      'https://github.com/321208008',
      'https://www.facebook.com/zyailive'
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ITUSI',
    url: 'https://itusi.ai',
    logo: 'https://itusi.ai/images/logo.png',
    description: t('meta.description'),
    sameAs: [
      'https://twitter.com/zyailive',
      'https://github.com/321208008',
      'https://www.facebook.com/zyailive'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
