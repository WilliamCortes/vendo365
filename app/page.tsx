'use client';

import { useState } from 'react';
import { Check, X, Sparkles, Store, Zap, MessageCircle, Clock, Shield, TrendingUp, Instagram, Facebook, ShoppingBag, CreditCard, Smartphone } from 'lucide-react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    tipoNegocio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Te contactaremos por WhatsApp en menos de 2 horas 🚀');
    setFormData({ nombre: '', whatsapp: '', tipoNegocio: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white pt-20 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Incluye publicación diaria con IA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tu Tienda Online +<br />
              <span className="text-emerald-600">Redes Sociales Automáticas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Por solo <span className="text-emerald-600 font-bold text-3xl md:text-4xl">$49.500/mes</span>
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Sin permanencia • Lista en 48 horas • Todo incluido
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Comenzar por $49.500/mes
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Menos de $2.000 al día para tener tu negocio online
            </p>
          </div>
        </div>
      </section>

      {/* Problema/Solución */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Te suena familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">No tengo tiempo para publicar</h3>
              <p className="text-gray-600">Entre producir y vender, ¿quién tiene tiempo para redes sociales?</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">No sé qué publicar</h3>
              <p className="text-gray-600">Crear contenido atractivo es difícil y toma mucho tiempo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Crear una tienda es caro</h3>
              <p className="text-gray-600">Diseñadores y programadores cobran millones que no tengo</p>
            </div>
          </div>
          <div className="text-center bg-emerald-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              La Solución: Tienda + Contenido Automático
            </h3>
            <p className="text-xl">
              Por menos de un almuerzo diario, tu negocio vende 24/7 y publica solo
            </p>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que Necesitas en Un Solo Lugar
            </h2>
            <p className="text-xl text-gray-600">
              Plan Básico - <span className="text-emerald-600 font-bold">$49.500/mes</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Tu Tienda Online */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">🌐 Tu Tienda Online</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dirección web personalizada (tutienda.vendo365.com)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hasta 30 productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Recibe pagos (Nequi, Daviplata, tarjetas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hosting seguro incluido</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Soporte por WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Automatización con IA */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-8 text-white transform md:scale-105 shadow-xl">
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">🤖 Automatización con IA</h3>
              <p className="text-emerald-100 text-sm mb-4">LO DIFERENCIADOR</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>1 publicación diaria en Facebook automática</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>1 publicación diaria en Instagram automática</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Contenido creado por IA sobre tus productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Sin que muevas un dedo</span>
                </li>
              </ul>
            </div>

            {/* Sin Sorpresas */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">💰 Sin Sorpresas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sin permanencia, cancela cuando quieras</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Setup: $50.000 única vez</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Todo incluido, sin costos ocultos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Súper Simple, Solo 3 Pasos
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Me cuentas de tu negocio</h3>
              <p className="text-gray-600">Solo 10 minutos por WhatsApp para conocer tus productos</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">En 48 horas tu tienda está lista</h3>
              <p className="text-gray-600">Yo me encargo de todo, tú solo revisas y apruebas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">La IA publica por ti todos los días</h3>
              <p className="text-gray-600">Despierta cada día con contenido nuevo en tus redes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Es Tan Accesible */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por Qué Es Tan Accesible?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <Zap className="w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Automatización = Bajo costo para ti</h3>
              <p className="text-gray-600">La tecnología hace el trabajo pesado</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <Store className="w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Sin oficinas físicas</h3>
              <p className="text-gray-600">Ese ahorro te lo paso a ti</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <TrendingUp className="w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Tecnología que yo trabajo</h3>
              <p className="text-gray-600">No necesitas diseñador ni programador</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <Sparkles className="w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Mi misión</h3>
              <p className="text-gray-600">Hacer esto accesible para más colombianos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Mira Cuánto Te Ahorras
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Forma Tradicional */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-6 h-6 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Forma Tradicional</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Diseñador</span>
                  <span className="font-semibold text-gray-900">$800.000+</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Desarrollador</span>
                  <span className="font-semibold text-gray-900">$1.200.000+</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Community Manager</span>
                  <span className="font-semibold text-gray-900">$600.000/mes</span>
                </li>
              </ul>
              <div className="pt-4 border-t-2 border-red-300">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-red-600">$2.600.000+</span>
                </div>
              </div>
            </div>

            {/* Con Vendo365 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Con Vendo365</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex justify-between items-center pb-3 border-b border-emerald-500">
                  <span>Todo incluido</span>
                  <span className="font-semibold">$49.500/mes</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-emerald-500">
                  <span>Setup inicial</span>
                  <span className="font-semibold">$50.000 (una vez)</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-emerald-500">
                  <span>Tienda + IA + Hosting</span>
                  <span className="font-semibold">✓ Incluido</span>
                </li>
              </ul>
              <div className="pt-4 border-t-2 border-emerald-400">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold">Total primer mes</span>
                  <span className="text-2xl font-bold">$99.500</span>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <p className="text-sm mb-1">Ahorro vs tradicional:</p>
                  <p className="text-2xl font-bold">$2.550.000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Sutil - Bot WhatsApp */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ¿Quieres vender aún más? 📱 Bot de WhatsApp con IA
                </h3>
                <p className="text-gray-700 mb-4">Servicio adicional opcional: <span className="font-bold text-orange-600">+$80.000/mes</span></p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Responde a tus clientes 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Toma pedidos automáticamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Confirma disponibilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-semibold">Nunca pierdes una venta</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 italic">Puedes agregarlo cuando quieras, no es obligatorio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Únete a los Emprendedores que Ya Venden 24/7
          </h2>
          <p className="text-center text-gray-600 mb-12">Pronto aquí verás historias de éxito</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-32"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded"></div>
                  <div className="h-3 bg-gray-100 rounded"></div>
                  <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-gray-600">
              <Facebook className="w-6 h-6" />
              <span className="font-medium">Facebook</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Instagram className="w-6 h-6" />
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ShoppingBag className="w-6 h-6" />
              <span className="font-medium">Tienda Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Necesito conocimientos técnicos?</h3>
              <p className="text-gray-600">No, absolutamente nada. Yo me encargo de todo lo técnico. Tú solo te enfocas en vender.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Qué pasa si no sé qué publicar en redes?</h3>
              <p className="text-gray-600">¡Esa es la magia! La IA crea el contenido por ti automáticamente. Analiza tus productos y genera publicaciones atractivas todos los días.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Puedo cancelar cuando quiera?</h3>
              <p className="text-gray-600">Sí, sin permanencia y sin penalización. Si decides cancelar, simplemente me avisas.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Qué pasarelas de pago acepta?</h3>
              <p className="text-gray-600">Nequi, Daviplata y todas las tarjetas de crédito y débito. Tus clientes pueden pagar como prefieran.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Cómo funciona la publicación automática?</h3>
              <p className="text-gray-600">La IA analiza tus productos, crea textos atractivos y publica 1 vez al día en Facebook e Instagram. Todo automático, sin que tengas que hacer nada.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">¿Cuánto cuesta el bot de WhatsApp?</h3>
              <p className="text-gray-600">Es opcional y cuesta +$80.000/mes adicionales. No es obligatorio, puedes agregarlo cuando quieras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empieza a Vender Hoy Mismo
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Plazas limitadas para garantizar calidad del servicio
          </p>
          
          <div className="bg-white rounded-xl p-8 text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                  placeholder="300 123 4567"
                />
              </div>
              
              <div>
                <label htmlFor="tipoNegocio" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de negocio
                </label>
                <select
                  id="tipoNegocio"
                  required
                  value={formData.tipoNegocio}
                  onChange={(e) => setFormData({ ...formData, tipoNegocio: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="artesanias">Artesanías</option>
                  <option value="plantas">Plantas</option>
                  <option value="alimentos">Alimentos</option>
                  <option value="ropa">Ropa</option>
                  <option value="servicios">Servicios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Quiero Mi Tienda por $49.500/mes
              </button>
              
              <p className="text-center text-sm text-gray-600">
                Te contacto en menos de 2 horas por WhatsApp 💬
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Vendo365</h3>
          <p className="mb-6">Tu tienda online + redes sociales automáticas</p>
          <div className="flex justify-center gap-6 mb-6">
            <Facebook className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            <MessageCircle className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-sm">
            © 2024 Vendo365. Hecho con ❤️ para emprendedores colombianos.
          </p>
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-emerald-600 p-4 shadow-lg z-50">
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Empezar por $49.500/mes
        </button>
      </div>
    </div>
  );
}
