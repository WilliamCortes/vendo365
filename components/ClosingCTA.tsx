const ClosingCTA = () => {
  return (
    <section className="py-24 bg-dark-bg text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
          ¿Listo para que tu negocio tenga su página?
        </h2>
        <p className="text-lg text-dark-text-muted mb-8">
          Escríbenos por WhatsApp, cuéntanos tu negocio y lo revisamos juntos. Sin compromiso.
        </p>
        <a
          href="https://wa.me/573103298346?text=Hola%2C%20quiero%20contarte%20sobre%20mi%20negocio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-secondary-hover text-text font-medium py-4 px-8 rounded-[10px] shadow-lg transition-all duration-200 text-lg"
        >
          Hablemos por WhatsApp
        </a>
        <p className="text-sm text-dark-text-muted mt-4">Sin letra pequeña. Te respondemos nosotros mismos.</p>
      </div>
    </section>
  );
};

export default ClosingCTA;
