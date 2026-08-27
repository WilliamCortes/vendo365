'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | null;
  schemaAnswer?: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿Necesito saber de tecnología para tener mi página?',
    answer:
      'No. Tú nos cuentas tu negocio, tus productos y lo que quieres lograr; nosotros nos encargamos de todo el diseño y la configuración técnica.',
  },
  {
    question: '¿Cuánto se demora mi landing page o mini tienda?',
    answer:
      'Depende del alcance del proyecto. Apenas hablamos por WhatsApp te damos un tiempo estimado real, no una promesa genérica igual para todos.',
  },
  {
    question: '¿Puedo pedir cambios después de que la página esté publicada?',
    answer:
      'Sí. Después de publicar acordamos contigo cómo funciona el acompañamiento para ajustes: textos, fotos o pequeños cambios de estructura.',
  },
  {
    question: '¿Qué diferencia hay entre una landing page y una mini tienda?',
    answer:
      'Una landing page presenta tu negocio o un servicio con un objetivo claro (que te escriban). Una mini tienda además muestra un catálogo de productos para que el cliente elija y compre o pida por WhatsApp.',
  },
  {
    question: '¿Qué formas de pago se pueden integrar?',
    answer:
      'Según el proyecto, podemos integrar enlaces de pago de Nequi, Daviplata o pasarelas colombianas como Wompi o PayU, además del contacto directo por WhatsApp.',
  },
  {
    question: '¿También hacen chatbots de WhatsApp para atender clientes?',
    answer: null,
    schemaAnswer:
      'No directamente: para eso trabajamos con Wabot365 (wabot365.com), especializados en chatbots de WhatsApp. Si ya tienes o vas a tener tu página con nosotros, te podemos poner en contacto con ellos para automatizar la atención.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.schemaAnswer ?? faq.answer },
  })),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="py-24 bg-bg-subtle">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-base font-display font-bold text-text">{faq.question}</span>
                  <Plus
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-text-secondary leading-relaxed pb-6 pr-8">
                    {faq.answer ?? (
                      <>
                        No directamente: para eso trabajamos con{' '}
                        <a
                          href="https://www.wabot365.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline"
                        >
                          Wabot365
                        </a>
                        , especializados en chatbots de WhatsApp. Si ya tienes o vas a tener tu página con
                        nosotros, te podemos poner en contacto con ellos para automatizar la atención.
                      </>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-text-tertiary mt-8">
          ¿Tienes otra pregunta?{' '}
          <Link href="/blog" className="text-primary hover:underline">
            Revisa el blog
          </Link>{' '}
          o escríbenos directo por WhatsApp.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
