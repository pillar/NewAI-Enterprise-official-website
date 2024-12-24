'use client';

import { useI18n } from '@/lib/i18n/use-translation';

export function StructuredData() {
  const { t } = useI18n();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NEWAI',
    alternateName: t('meta.alternateName'),
    url: 'https://newailabs.com',
    description: t('meta.description'),
    sameAs: [
      'https://twitter.com/newailabs',
      'https://github.com/newailabs',
      'https://www.facebook.com/newailabs'
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEWAI',
    url: 'https://newailabs.com',
    logo: 'https://newailabs.com/images/logo.png',
    description: t('meta.description'),
    sameAs: [
      'https://twitter.com/newailabs',
      'https://github.com/newailabs',
      'https://www.facebook.com/newailabs'
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
