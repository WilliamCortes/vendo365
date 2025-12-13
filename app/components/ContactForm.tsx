'use client';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get('name'),
      whatsapp: formData.get('whatsapp'),
      businessType: formData.get('businessType')
    });
  };

  return (
    <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Tu nombre"
        className="w-full p-3 rounded-lg text-gray-900"
        required
      />
      <input
        name="whatsapp"
        type="tel"
        placeholder="Tu WhatsApp"
        className="w-full p-3 rounded-lg text-gray-900"
        required
      />
      <select name="businessType" className="w-full p-3 rounded-lg text-gray-900" required>
        <option value="">Tipo de negocio</option>
        <option value="artesanias">Artesanías</option>
        <option value="plantas">Plantas</option>
        <option value="alimentos">Alimentos</option>
        <option value="ropa">Ropa</option>
        <option value="servicios">Servicios</option>
        <option value="otro">Otro</option>
      </select>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Solicitar Mi Tienda
      </button>
    </form>
  );
}