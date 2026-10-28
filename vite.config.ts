import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~slices': path.resolve(__dirname, 'src/slices'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~constants': path.resolve(__dirname, 'src/constants'),
        '~context': path.resolve(__dirname, 'src/context'),
        '~data': path.resolve(__dirname, 'src/data'),
        '~schemas': path.resolve(__dirname, 'src/schemas'),
        '~types': path.resolve(__dirname, 'src/types'),
        '~api': path.resolve(__dirname, 'src/api'),
        'src/slices/Advisors': path.resolve(__dirname, 'src/schemas'),
        'sanity/schemas/documents/advisor': path.resolve(__dirname, 'src/schemas'),
        'gatsby': path.resolve(__dirname, 'src/shims/gatsby.tsx'),
        'gatsby-plugin-image': path.resolve(__dirname, 'src/shims/gatsby-plugin-image.tsx'),
        '@reach/router': path.resolve(__dirname, 'src/shims/reach-router.ts'),
        'react-spring': path.resolve(__dirname, 'src/shims/react-spring.tsx'),
        'react-helmet': path.resolve(__dirname, 'src/shims/react-helmet.tsx'),
        'react-fast-marquee': path.resolve(__dirname, 'src/shims/react-fast-marquee.tsx'),
        'firebase/app': path.resolve(__dirname, 'src/shims/firebase-app.ts'),
        'firebase/storage': path.resolve(__dirname, 'src/shims/firebase-storage.ts'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
