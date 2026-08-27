import { Zap } from 'lucide-react';

export function AuthorByline({ publishedAt, readingTime }: { publishedAt: string; readingTime: string }) {
  const date = new Date(publishedAt).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary text-white flex-shrink-0">
        <Zap className="w-4 h-4" strokeWidth={2.5} fill="currentColor" />
      </span>
      <div className="text-sm">
        <p className="font-semibold text-text">Vendo365</p>
        <p className="text-text-secondary">
          {date} · {readingTime} de lectura
        </p>
      </div>
    </div>
  );
}
