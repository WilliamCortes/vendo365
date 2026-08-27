import { Search, HelpCircle, Coins } from 'lucide-react';

const PAINS = [
  {
    icon: Search,
    title: 'Tu negocio no aparece en Google',
    description: 'Sin una página propia, un cliente que te busca por internet simplemente no te encuentra.',
  },
  {
    icon: HelpCircle,
    title: 'No sabes por dónde empezar',
    description: '¿Landing page? ¿Tienda online? ¿Dominio propio? Demasiadas decisiones técnicas para tomar solo.',
  },
  {
    icon: Coins,
    title: 'Contratar un diseñador es caro',
    description: 'Entre diseñador, programador y hosting, un sitio a medida se vuelve una inversión grande de entrada.',
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-bg-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-text-secondary">
            La mayoría de emprendedores no necesita más tecnología. Necesita a alguien que se siente con ellos y resuelva esto de una vez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAINS.map((pain) => {
            const Icon = pain.icon;
            return (
              <div key={pain.title} className="bg-surface rounded-lg border border-border p-8 text-center shadow-sm">
                <div className="w-14 h-14 rounded-md bg-primary-light flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-display font-bold text-text mb-2">{pain.title}</h3>
                <p className="text-text-secondary leading-relaxed">{pain.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
