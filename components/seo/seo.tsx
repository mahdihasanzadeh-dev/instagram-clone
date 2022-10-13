import type { ReactElement } from 'react';
import Head from 'next/head';
import type { ISEOProperties } from './seo-interface';

export function SEO({
  pageTitle,
  keywords = [],
  description,
}: ISEOProperties):ReactElement {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(',')} />
    </Head>
  );
}
