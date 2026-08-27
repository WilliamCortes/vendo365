import type { BlogPost } from './types';

export const posts: BlogPost[] = [
  {
    slug: 'landing-page-vs-mini-tienda-online',
    title: 'Landing page vs. mini tienda online: ¿cuál necesita tu negocio?',
    description:
      'No todo negocio necesita una tienda con catálogo completo. Cómo decidir entre una landing page y una mini tienda online según lo que realmente vendes.',
    cluster: 'guias',
    publishedAt: '2026-08-20',
    keywords: ['landing page vs tienda online', 'que necesita mi negocio', 'pagina web para emprendedores'],
    coverVariant: 1,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Uno de los primeros errores al pedir una página web es pedir "una tienda online" cuando en realidad el negocio solo necesita presentar sus servicios y que el cliente escriba por WhatsApp. La elección entre landing page y mini tienda no es de gusto: depende de cómo vende tu negocio hoy.',
      },
      { type: 'h2', text: 'Qué es una landing page' },
      {
        type: 'p',
        text: 'Es una sola página enfocada en un objetivo: que el visitante haga una acción concreta, casi siempre escribir por WhatsApp o llamar. Muestra quién eres, qué ofreces y por qué confiar en ti, sin la complejidad de un catálogo con carrito de compras.',
      },
      { type: 'h2', text: 'Qué es una mini tienda online' },
      {
        type: 'p',
        text: 'Es una página con catálogo: varios productos, cada uno con foto, descripción y precio, para que el cliente elija antes de contactarte o pagar. Tiene sentido cuando el negocio vende más de un puñado de productos con precios y variaciones distintas.',
      },
      {
        type: 'table',
        headers: ['Tu negocio...', 'Te conviene'],
        rows: [
          ['Ofrece un servicio (asesoría, belleza, reparaciones)', 'Landing page'],
          ['Vende 3-5 productos o "hechos a pedido"', 'Landing page con sección de productos'],
          ['Vende un catálogo amplio con variaciones (tallas, colores)', 'Mini tienda online'],
          ['Necesitas que el cliente pueda pagar sin hablar contigo primero', 'Mini tienda online'],
        ],
      },
      { type: 'h2', text: 'La pregunta que de verdad decide' },
      {
        type: 'p',
        text: '¿Hoy, cuando alguien te escribe interesado, tú le mandas fotos y precios uno por uno, o le compartes un catálogo? Si ya vives mandando fotos por WhatsApp de varios productos, una mini tienda te ahorra ese trabajo repetido. Si lo que más te preguntan es "¿cómo funciona tu servicio?", una landing page bien hecha responde eso antes de que te escriban.',
      },
      {
        type: 'callout',
        text: 'Empezar con una landing page y crecer después a una mini tienda es un camino válido: muchos negocios no necesitan ambas cosas desde el primer día.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Puedo empezar con landing page y pasar a mini tienda más adelante?',
            a: 'Sí. Es común empezar con una landing page para validar la demanda y, cuando el catálogo crece, ampliarla a una mini tienda sin perder lo ya construido.',
          },
          {
            q: '¿Una landing page sirve para vender, o solo para informar?',
            a: 'Una landing page bien diseñada sí vende: presenta el producto o servicio, resuelve objeciones comunes y termina en un llamado a la acción claro, aunque el cierre de la venta ocurra por WhatsApp.',
          },
        ],
      },
    ],
    sources: [],
  },

  {
    slug: 'informacion-landing-page-negocio',
    title: 'Qué información no puede faltar en la landing page de tu negocio',
    description:
      'Una landing page incompleta genera más dudas que confianza. Los elementos que sí o sí debe tener la página de tu negocio para que un visitante se anime a escribirte.',
    cluster: 'guias',
    publishedAt: '2026-08-21',
    keywords: ['que debe tener una landing page', 'elementos landing page', 'pagina web para negocio pequeño'],
    coverVariant: 2,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Un visitante que llega a la página de tu negocio decide en segundos si se queda o se va. Esa decisión depende menos del diseño bonito y más de si encuentra, rápido, las respuestas que necesita para confiar.',
      },
      { type: 'h2', text: 'Lo que no puede faltar' },
      {
        type: 'ol',
        items: [
          'Qué haces, en una frase clara: no un eslogan ingenioso que no dice nada concreto.',
          'A quién le sirve lo que ofreces: para que el visitante correcto se sienta identificado de inmediato.',
          'Cómo contactarte: un botón de WhatsApp visible, no escondido al final de la página.',
          'Evidencia de que existes de verdad: fotos reales de tu producto o trabajo, no imágenes genéricas de internet.',
          'Precio o rango de precio, si es posible: la falta de precio genera más dudas que confianza en la mayoría de negocios pequeños.',
          'Ubicación o zona de cobertura, si es relevante para tu negocio (domicilios, servicios a domicilio).',
        ],
      },
      { type: 'h2', text: 'El error más común: hablar de ti antes que del cliente' },
      {
        type: 'p',
        text: 'Muchas landing pages empiezan con "Somos una empresa fundada en..." cuando el visitante todavía no decidió si le interesa. El orden que mejor funciona es: primero lo que el cliente gana, después quién eres tú.',
      },
      {
        type: 'quote',
        text: 'El visitante no llega buscando conocer tu empresa; llega buscando resolver algo suyo.',
      },
      { type: 'h2', text: 'Detalles que generan confianza sin costar nada' },
      {
        type: 'ul',
        items: [
          'Un número de WhatsApp real, no un formulario que nadie sabe cuándo se revisa.',
          'Horarios de atención claros, para que el cliente sepa cuándo esperar respuesta.',
          'Una sección de preguntas frecuentes que resuelva las dudas más comunes antes de que las pregunten.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Es necesario tener fotos profesionales para lanzar mi página?',
            a: 'No es obligatorio, pero sí es importante que las fotos sean reales y con buena luz. Una foto tomada con el celular en buenas condiciones de luz suele funcionar mejor que una imagen genérica de stock.',
          },
          {
            q: '¿Debo mostrar mis precios si todavía no son fijos?',
            a: 'Si tus precios varían mucho, un rango orientativo ("desde $X") ya reduce la incertidumbre del visitante, incluso si el precio final se confirma en la conversación.',
          },
        ],
      },
    ],
    sources: [],
  },

  {
    slug: 'errores-comunes-primera-pagina-negocio',
    title: 'Cinco errores comunes al lanzar la primera página de tu negocio',
    description:
      'La primera página web de un negocio suele repetir los mismos errores. Cómo identificarlos antes de publicar, y no después de perder visitas por ellos.',
    cluster: 'guias',
    publishedAt: '2026-08-22',
    keywords: ['errores landing page', 'errores pagina web negocio', 'lanzar pagina web emprendimiento'],
    coverVariant: 3,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'La mayoría de páginas web de negocios pequeños no fallan por falta de diseño bonito: fallan por decisiones simples que se pasan por alto en la prisa de "ya quiero tenerla lista".',
      },
      { type: 'h2', text: 'Los cinco errores más comunes' },
      {
        type: 'ol',
        items: [
          'No dejar claro qué se vende en los primeros segundos, obligando al visitante a adivinar o buscar.',
          'Esconder el botón de contacto al final de una página larga, en vez de dejarlo visible siempre.',
          'Usar un subdominio gratuito (tunegocio.plataforma.com) en vez de un dominio propio, lo que resta seriedad frente a la competencia.',
          'Publicar y nunca más revisar: precios desactualizados o productos agotados que siguen apareciendo disponibles.',
          'No pensar en cómo se ve la página desde el celular, cuando la mayoría de visitas llegan justamente desde ahí.',
        ],
      },
      { type: 'h2', text: 'Por qué el dominio propio importa más de lo que parece' },
      {
        type: 'p',
        text: 'Un dominio como tunegocio.com transmite permanencia: da la sensación de que el negocio piensa quedarse. Un subdominio gratuito, aunque funcional, comunica lo contrario, incluso si el sitio en sí está bien hecho.',
      },
      { type: 'h2', text: 'El error que más cuesta: no actualizar' },
      {
        type: 'p',
        text: 'Una página publicada no es un proyecto terminado. Precios que cambiaron, productos que ya no existen o un número de WhatsApp que se dio de baja son la forma más rápida de perder la confianza de alguien que sí estaba listo para comprar.',
      },
      {
        type: 'callout',
        text: 'Antes de publicar, pídele a alguien que no conoce tu negocio que revise la página en su celular y te diga, en sus palabras, qué vendes y cómo te contactaría. Si no puede responder rápido, la página todavía necesita ajustes.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Con qué frecuencia debería revisar mi página después de publicarla?',
            a: 'Una revisión mensual básica (precios, disponibilidad, datos de contacto) es suficiente para la mayoría de negocios pequeños, y más seguido si el catálogo cambia con frecuencia.',
          },
          {
            q: '¿Vale la pena un dominio propio si mi negocio es muy pequeño?',
            a: 'Sí. El costo de un dominio propio es bajo comparado con la percepción de seriedad que le da a un negocio, sin importar su tamaño.',
          },
        ],
      },
    ],
    sources: [],
  },

  {
    slug: 'dominio-propio-vs-subdominio-gratis',
    title: 'Por qué tu negocio necesita un dominio propio (y no un subdominio gratis)',
    description:
      'tunegocio.com vs. tunegocio.plataforma.com: la diferencia parece pequeña, pero afecta directamente cómo perciben tu negocio los clientes y cómo te encuentra Google.',
    cluster: 'guias',
    publishedAt: '2026-08-23',
    keywords: ['dominio propio negocio', 'comprar dominio colombia', 'subdominio gratis vs dominio propio'],
    coverVariant: 4,
    coverEyebrow: 'Guía práctica',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Cuando un negocio empieza, es tentador aceptar un subdominio gratuito (tunegocio.plataforma.com) para ahorrar unos pesos. Ese ahorro inicial tiene un costo silencioso que se paga después, en percepción y en posicionamiento.',
      },
      { type: 'h2', text: 'Lo que comunica cada opción' },
      {
        type: 'table',
        headers: ['', 'Subdominio gratuito', 'Dominio propio'],
        rows: [
          ['Percepción', 'Negocio que recién empieza, dependiente de una plataforma', 'Negocio establecido y serio'],
          ['Memorable', 'Difícil de recordar y dictar por teléfono', 'Corto y fácil de recordar'],
          ['Si cambias de proveedor', 'Pierdes esa dirección por completo', 'Te lo llevas contigo a donde vayas'],
          ['Costo anual aproximado', 'Gratis', 'Bajo (equivalente a pocos cafés al año)'],
        ],
      },
      { type: 'h2', text: 'El efecto en cómo te encuentra Google' },
      {
        type: 'p',
        text: 'Un dominio propio, bien mantenido en el tiempo, construye su propia reputación ante los buscadores. Un subdominio comparte la reputación de toda la plataforma que lo aloja, lo que diluye el esfuerzo de posicionamiento que hagas específicamente para tu negocio.',
      },
      {
        type: 'callout',
        text: 'El costo de un dominio propio es, casi siempre, menor que el de una sola publicación pagada en redes sociales, y su efecto dura todo el año, no un día.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Cómo elijo el nombre correcto para mi dominio?',
            a: 'Lo ideal es que coincida con el nombre de tu negocio o sea muy cercano a él, corto, fácil de escribir y de decir en voz alta sin deletrear.',
          },
          {
            q: '¿Qué pasa si el ".com" de mi negocio ya está tomado?',
            a: 'Extensiones como ".com.co" son una alternativa sólida y reconocida en Colombia, y en muchos casos incluso refuerzan que el negocio es local.',
          },
          {
            q: '¿Qué pasa si más adelante quiero cambiar de proveedor de hosting?',
            a: 'Con un dominio propio, ese cambio es sencillo: el dominio te pertenece a ti, no a la plataforma, así que puedes moverlo a donde quieras sin perder la dirección que tus clientes ya conocen.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'El correo profesional, un beneficio adicional',
      },
      {
        type: 'p',
        text: 'Tener tu propio dominio también te permite crear un correo con tu nombre de negocio (contacto@tunegocio.com) en vez de depender de un correo personal genérico. Es un detalle pequeño que, sumado al resto, refuerza la misma sensación de seriedad en cada punto de contacto con el cliente.',
      },
    ],
    sources: [],
  },

  {
    slug: 'seo-basico-landing-page',
    title: 'SEO básico para tu landing page: lo mínimo para aparecer en Google',
    description:
      'No necesitas ser experto en SEO para que Google entienda tu página. Los elementos básicos que marcan la diferencia entre aparecer o quedar invisible en las búsquedas.',
    cluster: 'ecommerce',
    publishedAt: '2026-08-24',
    keywords: ['seo basico landing page', 'aparecer en google negocio pequeño', 'posicionamiento pagina web'],
    coverVariant: 1,
    coverEyebrow: 'Landing pages',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'La mayoría de páginas de negocios pequeños no aparecen en Google no porque el algoritmo las castigue, sino porque nunca les dieron la información mínima que Google necesita para entender de qué tratan.',
      },
      { type: 'h2', text: 'Lo básico que sí o sí debe tener tu página' },
      {
        type: 'ul',
        items: [
          'Un título de página (title) que incluya qué haces y, si aplica, tu ciudad: "Panadería artesanal en Cali", no solo el nombre del negocio.',
          'Una descripción (meta description) de una o dos frases que resuma la página, porque suele ser lo que se muestra en el resultado de búsqueda.',
          'Un solo encabezado principal (H1) por página que diga claramente de qué trata.',
          'Texto real, no solo imágenes: Google no puede leer el contenido de una foto sin texto que lo acompañe.',
        ],
      },
      { type: 'h2', text: 'Por qué la velocidad de carga también es SEO' },
      {
        type: 'p',
        text: 'Una página que tarda varios segundos en cargar pierde visitantes antes de que lean una sola palabra, y Google penaliza esa lentitud en el posicionamiento. Imágenes livianas y un hosting confiable importan tanto como el contenido mismo.',
      },
      { type: 'h2', text: 'El SEO local, el que más importa para un negocio pequeño' },
      {
        type: 'p',
        text: 'Para la mayoría de emprendedores, no se trata de competir por palabras genéricas a nivel nacional, sino de aparecer cuando alguien busca "tu tipo de negocio + tu ciudad o barrio". Mencionar la ciudad o zona de cobertura de forma natural en el texto de la página ayuda directamente a ese objetivo.',
      },
      {
        type: 'callout',
        text: 'El SEO no es un truco técnico: es simplemente darle a Google la misma información clara que le darías a un cliente nuevo.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Cuánto tiempo tarda una página nueva en aparecer en Google?',
            a: 'Google suele indexar páginas nuevas en días a pocas semanas, pero aparecer en buenas posiciones para búsquedas competidas puede tomar más tiempo y depende de la competencia en tu zona y sector.',
          },
          {
            q: '¿Necesito pagar publicidad para aparecer en Google?',
            a: 'No es obligatorio. El posicionamiento orgánico (sin pago) es más lento pero permanente; la publicidad paga (Google Ads) da visibilidad inmediata mientras el SEO orgánico madura.',
          },
        ],
      },
    ],
    sources: [],
  },

  {
    slug: 'wompi-payu-nequi-cobrar-tienda-online',
    title: 'Wompi, PayU y Nequi: cómo recibir pagos en tu tienda online en Colombia',
    description:
      'Aceptar pagos en línea ya no requiere ser una empresa grande. Cómo funcionan las pasarelas de pago más usadas en Colombia y cuál conviene según tu negocio.',
    cluster: 'ecommerce',
    publishedAt: '2026-08-25',
    keywords: ['wompi payu nequi', 'recibir pagos tienda online colombia', 'pasarela de pago colombia'],
    coverVariant: 2,
    coverEyebrow: 'Landing pages',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Hace unos años, aceptar pagos con tarjeta en un negocio pequeño requería trámites bancarios largos. Hoy, pasarelas colombianas permiten empezar a cobrar en línea en días, sin ser una empresa grande.',
      },
      { type: 'h2', text: 'Las opciones más usadas en Colombia' },
      {
        type: 'table',
        headers: ['Pasarela', 'Qué la respalda', 'Métodos que acepta'],
        rows: [
          ['Wompi', 'Grupo Bancolombia', 'Tarjetas, PSE, Nequi, Bancolombia a la mano, Baloto, Efecty'],
          ['PayU', 'Presencia regional en Latinoamérica', 'Tarjetas, PSE y otros métodos locales'],
          ['Nequi / Daviplata', 'Bancos Bancolombia y Davivienda', 'Pago directo desde la billetera digital'],
        ],
      },
      {
        type: 'p',
        text: 'Wompi, por ejemplo, cobra una tarifa por transacción aprobada (un porcentaje más un valor fijo, más IVA sobre esa tarifa), que varía según el método de pago usado por el cliente. Las tarifas cambian con el tiempo, así que vale la pena confirmar el valor vigente directamente en el sitio oficial del proveedor antes de decidir.',
      },
      { type: 'h2', text: 'Cómo elegir la pasarela correcta' },
      {
        type: 'ul',
        items: [
          'Si la mayoría de tus clientes ya usa Nequi o Daviplata, prioriza una pasarela que los integre de forma directa y sencilla.',
          'Si vendes montos altos por transacción, compara con cuidado el costo fijo más el porcentaje, no solo el porcentaje.',
          'Revisa en cuántos días te llega el dinero a tu cuenta: varía entre pasarelas y según tu banco.',
        ],
      },
      { type: 'h2', text: 'El pago por WhatsApp sigue siendo válido' },
      {
        type: 'p',
        text: 'No todo negocio necesita cobrar de forma automática dentro de la página. Muchos emprendedores en Colombia siguen cerrando la venta con una transferencia directa por Nequi confirmada por WhatsApp, algo perfectamente razonable mientras el volumen de ventas sea manejable así.',
      },
      {
        type: 'callout',
        text: 'La pasarela de pago no reemplaza la confianza que genera responder rápido por WhatsApp: son complementarias, no sustitutas una de la otra.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Es obligatorio tener pasarela de pago para vender online?',
            a: 'No. Muchos negocios pequeños en Colombia venden bien recibiendo transferencias directas y confirmando por WhatsApp. La pasarela ayuda a automatizar y dar más confianza cuando el volumen crece.',
          },
          {
            q: '¿Dónde consulto las tarifas actualizadas de estas pasarelas?',
            a: 'Cada proveedor publica sus tarifas vigentes en su propio sitio oficial (por ejemplo, wompi.com), ya que estos valores pueden actualizarse con el tiempo.',
          },
        ],
      },
    ],
    sources: [
      {
        title: 'Planes y Tarifas',
        url: 'https://wompi.com/es/co/planes-tarifas/',
        publisher: 'Wompi',
      },
    ],
  },

  {
    slug: 'landing-page-vende-mas-que-instagram',
    title: 'Por qué una landing page vende más que un perfil de Instagram',
    description:
      'Instagram ayuda a que te descubran, pero rara vez cierra la venta por sí solo. Qué hace una landing page que un perfil de redes sociales no puede hacer.',
    cluster: 'ecommerce',
    publishedAt: '2026-08-26',
    keywords: ['landing page vs instagram', 'vender por instagram o pagina web', 'presencia digital negocio'],
    coverVariant: 3,
    coverEyebrow: 'Landing pages',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Muchos negocios pequeños en Colombia empiezan y se quedan solo con un perfil de Instagram. Funciona para que los descubran, pero tiene límites claros a la hora de convertir esa atención en una venta.',
      },
      { type: 'h2', text: 'Lo que Instagram hace bien' },
      {
        type: 'p',
        text: 'Es un excelente escaparate: fotos, historias, cercanía con la audiencia. Pero un perfil de Instagram no fue diseñado para explicar bien un servicio complejo, mostrar un catálogo ordenado o aparecer cuando alguien busca en Google.',
      },
      { type: 'h2', text: 'Lo que una landing page resuelve' },
      {
        type: 'table',
        headers: ['', 'Perfil de Instagram', 'Landing page'],
        rows: [
          ['Aparece en búsquedas de Google', 'No', 'Sí'],
          ['Catálogo organizado y filtrable', 'Limitado', 'Sí'],
          ['Control total del diseño y mensaje', 'Limitado a la plantilla de la red social', 'Completo'],
          ['Depende de un algoritmo externo para que te vean', 'Sí', 'No'],
        ],
      },
      {
        type: 'p',
        text: 'El punto más importante: el alcance de tus publicaciones en Instagram depende del algoritmo de la plataforma, que puede cambiar en cualquier momento. Tu landing page es tuya; nadie decide cuánta gente la ve excepto tu propio esfuerzo de posicionamiento.',
      },
      {
        type: 'callout',
        text: 'La estrategia que mejor funciona no es "Instagram o landing page": es usar Instagram para generar interés y dirigir a esa audiencia hacia tu propia página, donde sí controlas toda la experiencia de compra.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Debería cerrar mi Instagram si ya tengo landing page?',
            a: 'No. Ambos cumplen roles distintos: Instagram para descubrimiento y cercanía, la landing page como el lugar donde el interés se convierte en una acción concreta.',
          },
          {
            q: '¿Cómo conecto mi Instagram con mi landing page?',
            a: 'El enlace en la biografía de Instagram debe apuntar directo a tu landing page, y cada publicación relevante puede invitar a "ver más en el enlace de la bio" para dirigir tráfico real hacia ella.',
          },
          {
            q: '¿Qué pasa si mi cuenta de Instagram deja de tener el mismo alcance de antes?',
            a: 'Es un riesgo real: los algoritmos cambian y el alcance orgánico puede caer sin previo aviso. Una landing page propia no depende de esas decisiones externas, lo que la hace un activo más estable a largo plazo.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Lo que sí deberías esperar de cada canal',
      },
      {
        type: 'p',
        text: 'Instagram es bueno midiendo interés a corto plazo: likes, comentarios, mensajes directos. La landing page es mejor midiendo intención de compra real: cuántas personas llegaron y realmente escribieron por WhatsApp o hicieron un pedido. Medir bien esa diferencia evita invertir todo el esfuerzo de marketing en el canal que se ve más activo, pero no necesariamente en el que más vende.',
      },
    ],
    sources: [],
  },

  {
    slug: 'landing-page-whatsapp-combo-conversion',
    title: 'Landing page + WhatsApp: el combo que más convierte para negocios pequeños',
    description:
      'Una landing page sin un canal de contacto rápido pierde ventas. Por qué la combinación de página propia y WhatsApp es, hoy, la fórmula que mejor funciona en Colombia.',
    cluster: 'ecommerce',
    publishedAt: '2026-08-27',
    keywords: ['landing page whatsapp', 'boton de whatsapp en pagina web', 'convertir visitas en clientes'],
    coverVariant: 4,
    coverEyebrow: 'Landing pages',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Una landing page perfecta que no tiene una forma fácil de contactar es una vitrina sin puerta. En Colombia, esa puerta casi siempre es WhatsApp: el canal que la gente ya usa todos los días, sin fricción de aprender algo nuevo.',
      },
      { type: 'h2', text: 'Por qué esta combinación funciona tan bien' },
      {
        type: 'ul',
        items: [
          'La landing page resuelve las dudas iniciales (qué vendes, cuánto cuesta, cómo funciona) antes de que el cliente escriba.',
          'WhatsApp cierra lo que la página no puede: negociar un detalle puntual, resolver una duda específica, dar la confianza final de hablar con una persona.',
          'El cliente no tiene que salir de su app de mensajería habitual para completar la conversación.',
        ],
      },
      { type: 'h2', text: 'Cómo integrarlo bien en la página' },
      {
        type: 'ol',
        items: [
          'Un botón de WhatsApp visible en la parte superior de la página, no solo al final.',
          'Un mensaje pre-escrito que facilite el primer paso: "Hola, vi tu página y quiero más información sobre...".',
          'Botones de WhatsApp específicos junto a cada producto o servicio, no solo uno genérico para toda la página.',
        ],
      },
      {
        type: 'quote',
        text: 'El 82% de los consumidores espera una respuesta por WhatsApp en menos de 24 horas.',
        cite: 'The State of Business Messaging, WhatsApp Business',
      },
      { type: 'h2', text: 'Cuando el volumen de mensajes crece' },
      {
        type: 'p',
        text: 'Si tu landing page empieza a generar tantos mensajes por WhatsApp que ya no das abasto respondiendo uno por uno, ese es exactamente el momento de considerar un chatbot que resuelva las preguntas repetitivas. Para eso trabajamos de la mano con Wabot365, especializados en automatizar WhatsApp para negocios en Colombia.',
      },
      {
        type: 'callout',
        text: 'Una buena landing page no reemplaza la conversación humana por WhatsApp: la hace más eficiente, filtrando antes lo que ya no necesita explicación.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Cuántos botones de WhatsApp debería tener mi página?',
            a: 'Al menos uno fijo y visible en todo momento, y opcionalmente uno junto a cada producto o servicio si tu catálogo lo justifica, para que el contexto de la conversación ya venga incluido.',
          },
          {
            q: '¿En qué momento conviene automatizar las respuestas de WhatsApp?',
            a: 'Cuando las mismas preguntas (precio, disponibilidad, horario) se repiten decenas de veces al día y ya no alcanzas a responder todas a tiempo, un chatbot como el de Wabot365 puede absorber ese volumen repetitivo.',
          },
        ],
      },
    ],
    sources: [
      {
        title: 'The State of Business Messaging',
        url: 'https://business.whatsapp.com/resources/resource-library/state-of-business-messaging',
        publisher: 'WhatsApp Business',
      },
    ],
  },

  {
    slug: 'facturacion-electronica-emprendedores-online-colombia',
    title: 'Facturación electrónica para emprendedores que venden online en Colombia',
    description:
      'Vender por tu página o por WhatsApp no te exime de las reglas de facturación de la DIAN. Qué dice la norma y qué opciones existen para negocios pequeños.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['facturacion electronica emprendedores', 'dian factura electronica pequeños negocios', 'facturar ventas online colombia'],
    coverVariant: 1,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Vender por WhatsApp o por una landing page no saca a un negocio de las reglas tributarias colombianas. La DIAN es clara en un punto: prácticamente todo comerciante o prestador de servicios en Colombia está obligado a facturar, y la regla general hoy es hacerlo de forma electrónica.',
      },
      { type: 'h2', text: 'Quiénes están obligados, en términos simples' },
      {
        type: 'ul',
        items: [
          'Toda persona jurídica (empresas constituidas formalmente) que venda bienes o preste servicios.',
          'Quienes sean responsables del IVA en sus ventas.',
          'Quienes estén inscritos en el Régimen Simple de Tributación (SIMPLE).',
          'Comerciantes en general, según lo establecido en la Resolución 000165 de 2023 de la DIAN.',
        ],
      },
      { type: 'h2', text: 'Opciones para un negocio pequeño que recién empieza' },
      {
        type: 'p',
        text: 'La DIAN ofrece un portal gratuito para generar facturas electrónicas, sin necesidad de contratar un software de pago desde el primer día. A medida que el volumen de ventas crece, muchos negocios migran a proveedores de facturación con planes de bajo costo que se integran mejor con su operación diaria.',
      },
      {
        type: 'callout',
        text: 'No facturar cuando corresponde no es un detalle menor: las sanciones por incumplimiento pueden ser significativas. Vale la pena confirmar tu situación específica directamente en el portal de la DIAN o con un contador.',
      },
      { type: 'h2', text: 'Qué tiene que ver esto con tu landing page o tienda online' },
      {
        type: 'p',
        text: 'Tu página web no factura por ti automáticamente: sigue siendo tu responsabilidad emitir la factura correspondiente por cada venta, sin importar si el cliente pagó por transferencia, pasarela de pago o efectivo contra entrega.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Si vendo solo por WhatsApp, igual debo facturar?',
            a: 'Sí. La obligación de facturar depende de tu actividad económica y tu situación tributaria, no del canal por el que recibiste el pedido o el pago.',
          },
          {
            q: '¿Dónde puedo confirmar si estoy obligado a facturar electrónicamente?',
            a: 'El portal oficial de la DIAN tiene una sección específica para verificar esta obligación según tu caso: micrositios.dian.gov.co/sistema-de-facturacion-electronica.',
          },
          {
            q: '¿Cuánto cuesta empezar a facturar electrónicamente?',
            a: 'El portal gratuito de la DIAN no tiene costo de uso, aunque tiene límites de volumen. A medida que las ventas crecen, muchos negocios optan por proveedores de facturación con planes de bajo costo mejor integrados a su operación diaria.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'No dejes esto para "cuando el negocio crezca"',
      },
      {
        type: 'p',
        text: 'Es común que un emprendedor posponga la facturación pensando que solo aplica a negocios grandes. El riesgo de esa suposición es alto: verificar tu obligación real toma minutos en el portal de la DIAN, mientras que una sanción por no facturar cuando correspondía puede costar mucho más que ese trámite inicial.',
      },
    ],
    sources: [
      {
        title: '¿Debes facturar electrónicamente?',
        url: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/debes-facturar-electronicamente/',
        publisher: 'DIAN',
      },
    ],
  },

  {
    slug: 'crecimiento-ecommerce-colombia-que-significa',
    title: 'Cuánto está creciendo el comercio electrónico en Colombia (y qué significa para tu negocio)',
    description:
      'Los datos oficiales muestran un comercio digital colombiano en crecimiento constante. Qué significan esas cifras para un emprendedor que todavía no tiene su página propia.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['crecimiento ecommerce colombia', 'estadisticas comercio electronico colombia', 'vender online colombia datos'],
    coverVariant: 2,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Es fácil pensar que el comercio electrónico es cosa de las grandes marcas. Los datos de la Cámara Colombiana de Comercio Electrónico muestran algo distinto: un crecimiento sostenido en el que los negocios pequeños tienen un papel cada vez más grande.',
      },
      { type: 'h2', text: 'Los números' },
      {
        type: 'ul',
        items: [
          'El comercio electrónico colombiano creció 19,9% en número de operaciones frente al año anterior, según la Cámara Colombiana de Comercio Electrónico (CCCE).',
          'El eCommerce en Colombia alcanzó $27,3 billones en ventas en línea solo en un trimestre, con un crecimiento anual del 16,4%.',
          'El 84,1% de las tiendas en línea colombianas usa WhatsApp como canal de venta, muy por encima de otros canales digitales.',
        ],
      },
      {
        type: 'quote',
        text: 'Colombia rompió récord en compras en línea, con cientos de millones de transacciones en un solo año.',
        cite: 'Cámara Colombiana de Comercio Electrónico (CCCE)',
      },
      { type: 'h2', text: 'Lo que esto significa si todavía no tienes tu página' },
      {
        type: 'p',
        text: 'Cada punto de crecimiento en estas cifras representa clientes que ya decidieron comprar en línea, no clientes que hay que convencer de hacerlo. La pregunta para un negocio pequeño ya no es si sus clientes compran por internet, sino si van a encontrarlo a él o a su competencia cuando lo hagan.',
      },
      {
        type: 'callout',
        text: 'No necesitas competir con las grandes plataformas de comercio electrónico. Necesitas una página propia que capture la parte de ese crecimiento que ya te corresponde: tus propios clientes buscándote a ti.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Estos datos aplican también a negocios muy pequeños o solo a empresas grandes?',
            a: 'Las cifras agregan el comercio electrónico de negocios de todos los tamaños en Colombia. El crecimiento del canal beneficia a cualquier negocio que tenga presencia digital propia, no solo a las grandes marcas.',
          },
          {
            q: '¿Dónde se pueden consultar estos datos de forma oficial?',
            a: 'La Cámara Colombiana de Comercio Electrónico (CCCE) publica informes trimestrales del comercio electrónico colombiano de acceso público en su sitio oficial, ccce.org.co.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'De espectador a participante',
      },
      {
        type: 'p',
        text: 'La diferencia entre un negocio que solo observa estas cifras y uno que se beneficia de ellas es, casi siempre, una página propia bien hecha. No se trata de competir de igual a igual con las plataformas grandes, sino de asegurarte de que, cuando un cliente busque lo que tú vendes, tenga dónde encontrarte.',
      },
    ],
    sources: [
      {
        title: 'Informe Trimestral del Comercio Electrónico en Colombia',
        url: 'https://ccce.org.co/noticias/informe-trimestral-del-comercio-electronico-en-colombia-2025-i/',
        publisher: 'Cámara Colombiana de Comercio Electrónico (CCCE)',
      },
      {
        title: 'WhatsApp se consolida como aliado clave del comercio electrónico en Colombia',
        url: 'https://www.portafolio.co/tecnologia/whatsapp-se-consolida-como-aliado-clave-del-comercio-electronico-en-colombia-segun-informe-de-e-commerce-489757',
        publisher: 'Portafolio',
      },
    ],
  },
];
