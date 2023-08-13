import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'rareyes blog',
    description: 'Clone and deploy your own Next.js portfolio in minutes.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
  };

  return (
    <Html lang="en">
      <Head>
        <meta content="follow, index" name="robots" />
        <meta content={meta.description} name="description" />
        <meta content={meta.title} property="og:site_name" />
        <meta content={meta.description} property="og:description" />
        <meta content={meta.title} property="og:title" />
        <meta content={meta.image} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@rareyesdev" name="twitter:site" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.description} name="twitter:description" />
        <meta content={meta.image} name="twitter:image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
