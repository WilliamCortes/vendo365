import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Landing page',
    description: 'Para presentar tu negocio o un servicio puntual',
    features: [
      'Una página con tu información, servicios y fotos',
      'Botón de WhatsApp en toda la página',
      'Dominio propio y hosting incluido',
      'SEO básico configurado',
    ],
    popular: false,
  },
  {
    name: 'Mini tienda online',
    description: 'Para vender tu catálogo de productos',
    features: [
      'Todo lo de Landing page',
      'Catálogo de productos con fotos y precios',
      'Botón de compra o pedido por WhatsApp',
      'Espacio para crecer tu catálogo con el tiempo',
    ],
    popular: true,
  },
  {
    name: 'A la medida',
    description: 'Landing + tienda, o algo distinto que necesites',
    features: [
      'Combinamos landing page y mini tienda',
      'Integraciones puntuales (agenda, pagos, formularios)',
      'Acompañamiento en los ajustes después de publicar',
      'Diseñado para lo que tu negocio necesita en concreto',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-4">
            Un plan según lo que tu negocio necesita
          </h2>
          <p className="text-lg text-text-secondary">
            El precio final depende del alcance de tu proyecto. Te lo confirmamos en la conversación, sin sorpresas después.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface rounded-lg p-8 flex flex-col ${
                plan.popular ? 'border-2 border-primary shadow-md md:-translate-y-2' : 'border border-border'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 bg-secondary text-text text-xs font-medium px-3 py-1 rounded-full">
                  Más elegido
                </span>
              )}

              <h3 className="text-xl font-display font-bold text-text mb-1">{plan.name}</h3>
              <p className="text-text-secondary text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/573103298346?text=${encodeURIComponent(`Hola, quiero cotizar el plan "${plan.name}" de Vendo365`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-3 px-6 rounded-[10px] font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-hover text-white'
                    : 'border border-border hover:border-primary hover:text-primary text-text'
                }`}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
