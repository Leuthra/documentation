import { defineConfigWithTheme } from 'vitepress';
import vitepressHelper, { config } from '@huyikai/vitepress-helper';

const vitepressHelperConfig = {
  directory: 'docs',
  collapsible: true
};

const vitepressConfig = {
  title: 'Dokumentasi Random Romi',
  description: 'Dokumentasi yang terstruktur, berawal dari catatan kecil.',
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
  }
};

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};