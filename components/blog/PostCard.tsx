import Link from 'next/link';
import { CoverArt } from './CoverArt';
import { CLUSTER_LABELS, type BlogPost } from '@/content/blog/types';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <div className="group bg-surface border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <CoverArt variant={post.coverVariant} eyebrow={post.coverEyebrow} />
        </div>
      </Link>
      <div className="p-6">
        <span className="text-primary font-medium text-xs uppercase tracking-wide">
          {CLUSTER_LABELS[post.cluster]}
        </span>
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-lg font-display font-bold text-text mt-2 mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{post.description}</p>
        </Link>
      </div>
    </div>
  );
}
