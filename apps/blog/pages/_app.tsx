import Head from 'next/head';

import 'nextra-theme-blog/style.css';
import '../styles/main.css';

import type { ComponentType } from 'react';

interface NextraProps {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}

export default function Nextra({ Component, pageProps }: NextraProps) {
  return (
    <>
      <Head>
        <link
          href="/feed.xml"
          rel="alternate"
          title="RSS"
          type="application/rss+xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
