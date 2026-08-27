import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vendo365 — Landing pages y tiendas online',
    short_name: 'Vendo365',
    description: 'Landing pages y mini tiendas online para emprendedores en Colombia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFBFC',
    theme_color: '#2B4C7E',
    icons: [
      { src: '/icon.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
