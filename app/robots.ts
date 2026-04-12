import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*.json$', '/*.xml$'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://smsu-portfolio.vercel.app/sitemap.xml',
  }
}
