import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*.json$',
          '/*.xml$',
          '/.env',
          '/.git',
          '/node_modules/'
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended', 'Bingbot', 'Slurp', 'DuckDuckBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://smsu-portfolio.vercel.app/sitemap.xml',
    host: 'https://smsu-portfolio.vercel.app',
  };
}
