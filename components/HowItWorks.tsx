const STEPS = [
  {
    number: '1',
    title: 'Nos escribes por WhatsApp',
    description: 'Nos cuentas de tu negocio, qué vendes y qué te gustaría lograr con tu página.',
  },
  {
    number: '2',
    title: 'Te mostramos una propuesta',
    description: 'Armamos una primera versión de tu landing page o mini tienda para que la veas antes de avanzar.',
  },
  {
    number: '3',
    title: 'La ajustamos juntos',
    description: 'Nos dices qué cambiar —textos, fotos, colores— hasta que sientas que representa bien tu negocio.',
  },
  {
    number: '4',
    title: 'La publicamos',
    description: 'Tu página queda en línea, con tu dominio y lista para recibir clientes.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-bg-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text">
            Un proceso hecho contigo, no un formulario que adivina
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-12 h-12 bg-primary text-white font-display font-bold text-lg flex items-center justify-center rounded-full mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-display font-bold text-text mb-2">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
