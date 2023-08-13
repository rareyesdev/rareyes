//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Scaffolded by Nx
const { composePlugins, withNx } = require('@nx/next');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// @ts-expect-error - Seems Nextra has some issues with the exported types.
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  showLineNumbers: true,
  defaultShowCopyCode: true,
  codeHighlight: true,
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // webpack: (config, { dev }) => {
  //   config.module.rules = [
  //     ...config.module.rules,
  //     // ensure our libs barrel files don't constitute imports
  //     {
  //       test: /libs\/.*src\/index.ts/i,
  //       sideEffects: false,
  //     },
  //   ];
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  // withBundleAnalyzer,
  withNextra,
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
