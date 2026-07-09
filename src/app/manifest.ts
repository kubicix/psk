import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Psikolog Asya Özcan',
    short_name: 'Asya Özcan',
    description:
      'İzmit / Kocaeli merkezli psikolog. Çocuk, genç ve yetişkin psikolojisi, online terapi, MMPI testleri.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F9FF',
    theme_color: '#9370DB',
    lang: 'tr',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
