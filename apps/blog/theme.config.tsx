import type { NextraBlogTheme } from 'nextra-theme-blog';

const yearLabel = new Date().getFullYear();

// eslint-disable-next-line import/no-anonymous-default-export -- Not imported directly
export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{yearLabel}</time> © Alejandro Reyes.
      {/* <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style> */}
    </small>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: Check if the title should be added to the head
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: undefined, // TODO: Consider adding a post footer
  darkMode: false,
  navs: [
    {
      url: 'https://www.rareyes.dev',
      name: 'Home',
    },
  ],
} satisfies NextraBlogTheme;
