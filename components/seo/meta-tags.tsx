'use client';

import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n/use-translation';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export function MetaTags({ title, description, image }: MetaTagsProps) {
  const pathname = usePathname();
  const { t } = useI18n();
  
  const defaultTitle = t('meta.title');
  const defaultDescription = t('meta.description');
  const defaultImage = '/images/og-image.jpg';

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const canonicalUrl = `https://itusi.ai${pathname}`;

  return (
    <>
      {/* 基本 Meta 标签 */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ITUSI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content="@zyailive" />

      {/* 其他必要的 Meta 标签 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F97316" />
      <meta name="keywords" content={t('meta.keywords')} />
      <meta name="author" content="ITUSI Team" />
    </>
  );
}
