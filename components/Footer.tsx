import Link from 'next/link';
import { Zap, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark-bg text-dark-text pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-secondary text-text">
                <Zap className="w-4 h-4" strokeWidth={2.5} fill="currentColor" />
              </span>
              <span className="text-xl font-display font-extrabold tracking-tight">Vendo365</span>
            </div>
            <p className="text-dark-text-muted text-base max-w-md leading-relaxed">
              Landing pages y mini tiendas online para emprendedores y pymes en Colombia. Diseñadas contigo, no por un formulario automático.
            </p>
            <a
              href="mailto:hola@vendo365.com"
              className="inline-flex items-center gap-2 text-dark-text hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              hola@vendo365.com
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-6">Producto</h4>
            <ul className="space-y-3 text-dark-text-muted text-sm">
              <li><Link href="/#servicios" className="hover:text-secondary transition-colors">Servicios</Link></li>
              <li><Link href="/#como-funciona" className="hover:text-secondary transition-colors">Cómo funciona</Link></li>
              <li><Link href="/#planes" className="hover:text-secondary transition-colors">Planes</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-6">Enlaces</h4>
            <ul className="space-y-3 text-dark-text-muted text-sm">
              <li>
                <a
                  href="https://www.wabot365.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Wabot365 — chatbots de WhatsApp
                </a>
              </li>
              <li><Link href="/politica-privacidad" className="hover:text-secondary transition-colors">Política de privacidad</Link></li>
              <li><a href="mailto:hola@vendo365.com" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left text-dark-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Vendo365 — Hecho en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
