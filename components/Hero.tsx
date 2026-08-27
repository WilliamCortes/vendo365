import { Check } from 'lucide-react';
import SiteMock from './SiteMock';

const TRUST_ITEMS = ['Revisamos tu proyecto juntos', 'Sin letra pequeña', 'Hecho para emprendedores en Colombia'];

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden bg-dark-bg">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(60% 50% at 50% 0%, rgba(43,76,126,0.5), transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium text-dark-text-muted">
              ✦ Landing pages y tiendas para emprendedores
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
              Tu negocio, visible en internet — bien hecho
            </h1>

            <p className="text-lg md:text-xl text-dark-text-muted leading-relaxed max-w-lg">
              Diseñamos tu landing page o tu mini tienda online. Nos escribes por WhatsApp, te mostramos una propuesta y la ajustamos juntos hasta que quede como la imaginaste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573103298346?text=Hola%2C%20quiero%20contarte%20sobre%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-secondary hover:bg-secondary-hover text-text font-medium py-4 px-8 rounded-[10px] shadow-lg transition-all duration-200 text-lg"
              >
                Hablemos por WhatsApp
              </a>
              <a
                href="#planes"
                className="text-center border border-white/20 text-white hover:bg-white/5 font-medium py-4 px-8 rounded-[10px] transition-all duration-200 text-lg"
              >
                Ver planes
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-dark-text-muted pt-2">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SiteMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
