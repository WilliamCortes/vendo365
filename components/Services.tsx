import { Globe, ShoppingBag, Search, MessageCircle } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Landing page',
    description: 'Una página para presentar tu negocio, tus servicios o un producto puntual, con un objetivo claro: que el visitante te escriba o te compre.',
  },
  {
    icon: ShoppingBag,
    title: 'Mini tienda online',
    description: 'Catálogo con tus productos, precios y fotos, listo para que el cliente elija y te contacte o pague directamente.',
  },
  {
    icon: Search,
    title: 'SEO básico incluido',
    description: 'Título, descripción y estructura pensados para que Google entienda de qué trata tu negocio desde el primer día.',
  },
  {
    icon: MessageCircle,
    title: 'Contacto por WhatsApp',
    description: 'Botón de WhatsApp visible en toda la página, para que cerrar una venta o resolver una duda sea un solo clic.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-4">
            Landing pages y tiendas hechas a la medida de tu negocio
          </h2>
          <p className="text-lg text-text-secondary">
            Nada de plantillas genéricas armadas solas. Cada proyecto lo revisamos contigo antes de publicarlo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-surface rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-md bg-primary-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-display font-bold text-text mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
