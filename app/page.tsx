import { CheckCircle, Clock, DollarSign, Zap, Users, MessageCircle, Star, ChevronRight, Phone, Store, Bot, Globe, Shield, HeadphonesIcon } from 'lucide-react';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            ✨ Incluye publicación diaria con IA
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Tu Tienda Online + Redes Sociales Automáticas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Por solo <span className="text-emerald-600 font-bold">$49.500/mes</span>. Sin permanencia. Lista en 48 horas.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors">
            Comenzar Ahora - $49.500/mes
          </button>
          <div className="mt-8">
            <img src="/placeholder-store.png" alt="Ejemplo de tienda online" className="mx-auto max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Problema/Solución */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Te suena familiar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No tengo tiempo para publicar</h3>
              <p className="text-gray-600">Las redes sociales me quitan horas que podría usar en mi negocio</p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No sé qué publicar</h3>
              <p className="text-gray-600">¿Qué contenido funciona? ¿Cómo atraigo clientes?</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crear una tienda es caro</h3>
              <p className="text-gray-600">Diseñadores y programadores cuestan una fortuna</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">La solución: Tienda + contenido automático por menos de un almuerzo diario</h3>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Todo lo que Incluye por $49.500/mes</h2>
          <div className="bg-emerald-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">🌐 Tu Tienda Online:</h3>
            <ul className="space-y-3">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-3" /> Dirección web personalizada (tutienda.vendo365.com)</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-3" /> Hasta 30 productos</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-3" /> Recibe pagos (Nequi, Daviplata, tarjetas)</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-3" /> Hosting seguro incluido</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-3" /> Soporte por WhatsApp</li>
            </ul>
          </div>
          <div className="bg-orange-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-6">🤖 Automatización con IA (Lo que te diferencia):</h3>
            <ul className="space-y-3">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-600 mr-3" /> 1 publicación diaria en Facebook automática</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-600 mr-3" /> 1 publicación diaria en Instagram automática</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-600 mr-3" /> Contenido creado por IA sobre tus productos</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-600 mr-3" /> Sin que muevas un dedo</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">💰 Sin Sorpresas:</h3>
            <ul className="space-y-3">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gray-600 mr-3" /> Sin permanencia, cancela cuando quieras</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gray-600 mr-3" /> Setup: $50.000 única vez</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gray-600 mr-3" /> Todo incluido, sin costos ocultos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">¿Quieres vender aún más?</h3>
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <Bot className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Bot de WhatsApp con IA</h4>
            <p className="text-sm text-gray-600 mb-4">Responde a tus clientes 24/7 y toma pedidos automáticamente</p>
            <p className="text-orange-600 font-semibold">+$79.500/mes</p>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona (Súper Simple)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Me cuentas de tu negocio</h3>
              <p className="text-gray-600">10 minutos por WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">En 48 horas tu tienda está lista</h3>
              <p className="text-gray-600">Personalizada para tu negocio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">La IA publica por ti todos los días</h3>
              <p className="text-gray-600">Contenido fresco y atractivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Accesible */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Por qué tan accesible?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Automatización = Bajo costo para ti</h3>
              <p className="text-gray-600">La IA hace el trabajo de marketing por menos</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sin oficinas físicas = Ahorro que te paso</h3>
              <p className="text-gray-600">Todo online, costos operativos mínimos</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tecnología que trabajo = No necesitas diseñador ni programador</h3>
              <p className="text-gray-600">Años de experiencia hacen esto posible</p>
            </div>
          </div>
          <p className="text-lg mt-8 text-emerald-600 font-semibold">Hago esto accesible para que más colombianos vendan online</p>
        </div>
      </section>

      {/* Comparación */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mira el Ahorro</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Forma Tradicional</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Diseñador: $800.000+</li>
                <li>Desarrollador: $1.200.000+</li>
                <li>Community Manager: $600.000/mes</li>
                <li><strong>Total: $2.600.000+</strong></li>
              </ul>
            </div>
            <div className="border-2 border-emerald-200 rounded-lg p-6 bg-emerald-50">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">✅ Con Vendo365</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Todo incluido: $49.500/mes</li>
                <li>Setup único: $50.000</li>
                <li><strong>Ahorro: $2.550.000+</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Únete a los emprendedores que ya venden 24/7</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-4">"Mi tienda está lista y la IA publica por mí. Increíble valor."</p>
              <p className="font-semibold">- María, Artesana de Joyería</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-4">"Sin conocimientos técnicos y ya vendo online. Fantástico."</p>
              <p className="font-semibold">- Carlos, Vendedor de Plantas</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-4">"El precio es increíble. Todo incluido por tan poco."</p>
              <p className="font-semibold">- Ana, Productos Naturales</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Necesito conocimientos técnicos?</h3>
              <p className="text-gray-600">No, nada. Yo me encargo de todo. Solo me cuentas de tu negocio.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Qué pasa si no sé qué publicar?</h3>
              <p className="text-gray-600">La IA crea el contenido por ti. Analiza tus productos y genera posts atractivos diariamente.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Puedo cancelar cuando quiera?</h3>
              <p className="text-gray-600">Sí, sin penalización. Sin permanencia forzada.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Qué pasarelas acepta?</h3>
              <p className="text-gray-600">Nequi, Daviplata, todas las tarjetas de crédito y débito.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Cómo funciona la publicación automática?</h3>
              <p className="text-gray-600">La IA analiza tus productos, crea descripciones atractivas y publica en tus redes sociales todos los días.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">¿Cuánto cuesta el bot de WhatsApp?</h3>
              <p className="text-gray-600">Es opcional, +$79.500/mes. Responde automáticamente y toma pedidos 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Empieza a Vender Hoy Mismo</h2>
          <p className="text-xl mb-8">Plazas limitadas para garantizar calidad del servicio</p>
          <ContactForm />
          <p className="text-sm mt-4">Te contacto en menos de 2 horas</p>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-emerald-600 text-white p-4 md:hidden">
        <button className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg">
          Comenzar por $49.500/mes
        </button>
      </div>
    </div>
  );
}