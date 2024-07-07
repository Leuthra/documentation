import { PageData, defineConfigWithTheme, TransformPageContext } from 'vitepress';
import vitepressHelper, { config } from '@huyikai/vitepress-helper';
import { SEO } from './seo'

const vitepressHelperConfig = {
  directory: 'docs',
  collapsible: true
};

const vitepressConfig = {
  title: 'Dokumentasi Random Romi',
  description: 'Dokumentasi yang terstruktur, berawal dari catatan kecil.',
  head: [[
    'link',
    {
      rel: 'icon',
      sizes: '32x32',
      href: '/favicon.png'
    }
  ]],
  themeConfig: {
    siteTitle: "Dokumentasi Random Romi",
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leuthra/documentation' }
    ],
    docFooter: {
      prev: 'Kembali',
      next: 'Selanjutnya'
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2024'
    },
  },
  transformPageData: (pageData: PageData, _ctx: TransformPageContext) => {
    SEO(pageData);
  }
};

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};