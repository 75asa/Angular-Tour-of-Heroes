import type { UserConfig } from 'vite';

const config: UserConfig = {
  server: {
    port: 4200,
  }
};

export default {
  ...config,
  optimizeDeps: {
    include: [
      'zone.js/dist/zone',
      '@angular/core',
      '@angular/platform-browser-dynamic',
      '@angular/platform-browser',
      '@angular/common',
    ],
    exclude: ['rxjs'],
  },
};
