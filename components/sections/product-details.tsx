'use client';

import { Card } from '@/components/ui/card';
import { Clock, MapPin, Calendar, Gauge } from 'lucide-react';

export const ProductDetails = ({ product }) => {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            {/* Eliminamos el contenido que ya se muestra en ProductHero */}
          </div>
        </div>
      </div>
    </section>
  );
}
