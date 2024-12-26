'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    region: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-20 bg-[#f8fafc]" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#1e293b]">Contáctanos</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#f97316]" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Teléfono</h3>
                <p className="text-[#64748b]">+56 9 4461 1678</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#f97316]" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Email</h3>
                <p className="text-[#64748b]">contacto@comercialflf.com</p>
              </div>
            </div>
          </div>
          {/* Aquí está el id en la etiqueta form */}
          <form onSubmit={handleSubmit} className="space-y-6" id="mi-formulario">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-[#1e293b]">Nombre</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                />
              </div>
              <div>
                <label className="block mb-2 text-[#1e293b]">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-[#1e293b]">Teléfono</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-[#1e293b]">Región</label>
                <Input
                  type="text"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                  className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                />
              </div>
              <div>
                <label className="block mb-2 text-[#1e293b]">Ciudad</label>
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                  className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-[#1e293b]">Mensaje</label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                required
                className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
              />
            </div>
            <Button type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
