import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PostCard } from '@/components/blog/PostCard';
import { posts } from '@/content/blog/posts';

const siteUrl = 'https://www.vendo365.com';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guías sobre landing pages, mini tiendas online y presencia digital para emprendedores y pymes en Colombia.',
  alternates: { canonical: `${siteUrl}/blog` },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sorted.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Header />
      <main className="pt-36 pb-24 bg-bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-4">
              Ideas para tener presencia online sin complicarte
            </h1>
            <p className="text-lg text-text-secondary">
              Guías prácticas sobre landing pages, mini tiendas y ventas online para emprendedores y pymes en Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
