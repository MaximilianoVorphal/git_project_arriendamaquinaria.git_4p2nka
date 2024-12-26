'use client';

import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { Clock, MapPin, Calendar, Gauge } from 'lucide-react';

export const ProductHero = ({ product }) => {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contenedor de la imagen */}
          <div className="md:max-w-sm">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          {/* Contenedor del texto, botones y datos técnicos */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {product.name}
            </h1>
            <p className="text-xl mb-6 text-gray-700">
              {product.description}
            </p>
            <div className="flex gap-4 mb-6">
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                Solicitar Cotización
              </Button>
              <Button size="lg" variant="outline" className="text-black border-black hover:bg-gray-100">
                <FileText className="mr-2 h-5 w-5" />
                Descargar Ficha Técnica
              </Button>
            </div>

            {/* Datos técnicos */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b]">
                {product.rentPrice && `Arriendo: $${product.rentPrice.toLocaleString()} mensual`}
                {product.rentPrice && product.salePrice && <br />}
                {product.salePrice && `Venta: $${product.salePrice.toLocaleString()}`}
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#f97316]" />
                  <span className="text-sm font-medium">Horas:</span>
                  <span className="text-sm">{product.specifications.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#f97316]" />
                  <span className="text-sm font-medium">Ubicación:</span>
                  <span className="text-sm">{product.specifications.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#f97316]" />
                  <span className="text-sm font-medium">Año:</span>
                  <span className="text-sm">{product.specifications.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-[#f97316]" />
                  <span className="text-sm font-medium">Kilometraje:</span>
                  <span className="text-sm">No disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
