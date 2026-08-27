import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-40 pb-24 bg-bg-base">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Error 404
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-4">
            Esta página no existe
          </h1>
          <p className="text-lg text-text-secondary mb-10">
            El enlace que seguiste puede estar roto o la página se movió. Prueba en el inicio o en el blog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-[10px] transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              href="/blog"
              className="border border-border text-text hover:border-primary hover:text-primary font-medium py-3 px-6 rounded-[10px] transition-colors"
            >
              Ver el blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
