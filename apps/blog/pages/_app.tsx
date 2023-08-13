import 'nextra-theme-blog/style.css';
import Head from 'next/head';

import '../styles/main.css';

import { ComponentType } from 'react';

interface NextraProps {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}

export default function Nextra({ Component, pageProps }: NextraProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
