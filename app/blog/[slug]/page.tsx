import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CoverArt } from '@/components/blog/CoverArt';
import { AuthorByline } from '@/components/blog/AuthorByline';
import { PostBody } from '@/components/blog/PostBody';
import { PostCard } from '@/components/blog/PostCard';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS } from '@/content/blog/types';

const siteUrl = 'https://www.vendo365.com';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [`${siteUrl}/blog/${post.slug}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqBlock = post.body.find((b) => b.type === 'faq');
  const related = posts.filter((p) => p.cluster === post.cluster && p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [`${siteUrl}/blog/${post.slug}/opengraph-image`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: 'Vendo365', url: siteUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Vendo365',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.png` },
    },
    keywords: post.keywords.join(', '),
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  const faqJsonLd =
    faqBlock && faqBlock.type === 'faq'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqBlock.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Header />
      <main className="pt-36 pb-24 bg-bg-base">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </nav>

          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            {CLUSTER_LABELS[post.cluster]}
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-6 leading-tight">
            {post.title}
          </h1>

          <AuthorByline publishedAt={post.publishedAt} readingTime={post.readingTime} />

          <div className="aspect-[16/9] my-10 rounded-lg overflow-hidden">
            <CoverArt variant={post.coverVariant} eyebrow={post.coverEyebrow} />
          </div>

          <PostBody blocks={post.body} />

          {post.sources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-4">Fuentes</h2>
              <ul className="space-y-2">
                {post.sources.map((source) => (
                  <li key={source.url} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline"
                    >
                      {source.title}
                    </a>
                    <span className="text-text-secondary"> — {source.publisher}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 bg-dark-bg text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-display font-extrabold mb-3">¿Listo para tener tu página?</h2>
            <p className="text-dark-text-muted mb-6">Hablemos por WhatsApp y revisamos juntos tu proyecto.</p>
            <a
              href="https://wa.me/573103298346?text=Hola%2C%20le%C3%AD%20el%20blog%20de%20Vendo365%20y%20quiero%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary-hover text-text font-medium py-3 px-8 rounded-[10px] transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </article>

        {related.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-display font-extrabold text-text mb-6">Sigue leyendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
