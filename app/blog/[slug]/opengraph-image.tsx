import { ImageResponse } from 'next/og';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS } from '@/content/blog/types';

export const alt = 'Vendo365 — artículo del blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const PALETTES = [
  { bg: '#E8EEF6', a: '#2B4C7E' },
  { bg: '#111827', a: '#F2994A' },
  { bg: '#FAFBFC', a: '#27AE60' },
  { bg: '#F4F6F8', a: '#2B4C7E' },
];

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const title = post?.title ?? 'Vendo365';
  const cluster = post ? CLUSTER_LABELS[post.cluster] : 'Blog';
  const palette = PALETTES[(post?.coverVariant ?? 1) % PALETTES.length];
  const isDark = palette.bg === '#111827';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: palette.bg,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 2,
            color: palette.a,
            marginBottom: 24,
            display: 'flex',
          }}
        >
          {cluster}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.2,
            color: isDark ? '#F1F3F5' : '#1C2331',
            maxWidth: 980,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 48,
            fontSize: 26,
            color: isDark ? '#F1F3F5' : '#1C2331',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: palette.a,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
          >
            ⚡
          </div>
          Vendo365
        </div>
      </div>
    ),
    { ...size }
  );
}
