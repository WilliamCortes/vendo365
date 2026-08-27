import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo Vendo365 recopila, usa y protege los datos personales de sus clientes en Colombia.",
  alternates: { canonical: "https://www.vendo365.com/politica-privacidad" },
};

export default function PoliticaPrivacidad() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center">POLÍTICA DE PRIVACIDAD DE VENDO365</h1>
      <p className="text-sm text-gray-600 mb-8 text-center">Última actualización: 27 de agosto de 2026</p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">1. INTRODUCCIÓN</h2>
      <p className="mb-4">
        Bienvenido a Vendo365. Diseñamos landing pages y mini tiendas online para emprendedores y pequeñas y medianas empresas en Colombia.
      </p>
      <p className="mb-4">
        En Vendo365 nos comprometemos a proteger su privacidad y a garantizar el tratamiento seguro, transparente y legal de sus datos personales. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cuáles son sus derechos en relación con sus datos.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">2. RESPONSABLE DEL TRATAMIENTO DE DATOS</h2>
      <p className="mb-2"><strong>Responsable:</strong> Vendo365</p>
      <p className="mb-4"><strong>Correo electrónico de contacto:</strong> hola@vendo365.com</p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">3. DATOS PERSONALES QUE RECOPILAMOS</h2>
      <p className="mb-4">Para brindarle nuestros servicios, recopilamos:</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Nombre completo:</strong> para identificarlo como cliente.</li>
        <li><strong>Número de WhatsApp:</strong> para coordinar el diseño de su landing page o tienda.</li>
        <li><strong>Información del negocio:</strong> nombre comercial, productos, servicios, precios y contenido que usted nos proporcione para construir su página.</li>
        <li><strong>Correo electrónico (opcional):</strong> para notificaciones sobre el estado de su proyecto.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">4. FINALIDAD Y USO DE LOS DATOS</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Diseñar, publicar y mantener su landing page o mini tienda online.</li>
        <li>Comunicarnos con usted sobre su proyecto y darle soporte.</li>
        <li>Cumplir con obligaciones legales y regulatorias aplicables.</li>
      </ul>
      <p className="mb-4">No utilizaremos sus datos para finalidades distintas sin su consentimiento previo y expreso.</p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">5. BASE LEGAL PARA EL TRATAMIENTO</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Consentimiento informado:</strong> al contactarnos y contratar nuestros servicios.</li>
        <li><strong>Ejecución de contrato:</strong> necesario para prestarle el servicio contratado.</li>
        <li><strong>Obligación legal:</strong> cumplimiento de requisitos aplicables en Colombia.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">6. DERECHOS DEL TITULAR DE LOS DATOS</h2>
      <p className="mb-4">
        De conformidad con la Ley 1581 de 2012 de Colombia y, cuando aplique, el GDPR de la Unión Europea, usted tiene derecho a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales, a revocar su consentimiento y a presentar reclamaciones ante la Superintendencia de Industria y Comercio.
      </p>
      <p className="mb-4">
        Para ejercer estos derechos, escríbanos a <strong>hola@vendo365.com</strong>. Responderemos en un plazo máximo de 15 días hábiles.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">7. COMPARTIR INFORMACIÓN CON TERCEROS</h2>
      <p className="mb-4">
        No compartimos, vendemos ni alquilamos sus datos personales a terceros, excepto:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Con su consentimiento expreso.</strong></li>
        <li><strong>Proveedores técnicos:</strong> hosting, dominios y pasarelas de pago (Nequi, Daviplata, Wompi, PayU) necesarios para operar su página.</li>
        <li><strong>Cumplimiento legal:</strong> cuando sea requerido por ley o autoridad competente.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">8. MEDIDAS DE SEGURIDAD</h2>
      <p className="mb-4">
        Implementamos medidas técnicas y administrativas razonables para proteger su información, incluyendo cifrado en tránsito mediante protocolos SSL/TLS y control de acceso a los sistemas donde se aloja su información.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">9. CONSERVACIÓN DE DATOS</h2>
      <p className="mb-4">
        Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas, o según lo requiera la ley.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">10. TRANSFERENCIAS INTERNACIONALES</h2>
      <p className="mb-4">
        Algunos proveedores de hosting o pasarelas de pago pueden estar ubicados fuera de Colombia. Garantizamos que estas transferencias cumplan los requisitos legales aplicables.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">11. MENORES DE EDAD</h2>
      <p className="mb-4">
        Vendo365 está dirigido a emprendedores y empresas, y no recopila intencionalmente datos de menores de 18 años.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">12. COOKIES</h2>
      <p className="mb-4">
        Nuestro sitio puede usar cookies técnicas básicas para el funcionamiento del sitio. No usamos cookies de rastreo publicitario de terceros.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">13. CAMBIOS A ESTA POLÍTICA</h2>
      <p className="mb-4">
        Podemos actualizar esta política periódicamente. La fecha de &ldquo;Última actualización&rdquo; al inicio indica la modificación más reciente.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">14. LEGISLACIÓN APLICABLE</h2>
      <p className="mb-4">
        Esta Política se rige por las leyes de la República de Colombia, en particular la Ley 1581 de 2012, el Decreto 1377 de 2013 y la Ley 1266 de 2008.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">15. CONTACTO</h2>
      <p className="mb-4">
        Para preguntas sobre esta política, escríbanos a <strong>hola@vendo365.com</strong>.
      </p>

      <hr className="my-8" />

      <p className="text-center font-semibold mb-4">
        Vendo365 — Landing pages y tiendas online para emprendedores
      </p>
    </div>
  );
}
