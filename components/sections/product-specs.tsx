'use client';

import { Product } from '@/types/product';

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const specifications = [
    { label: 'Marca', value: product.specifications.brand },
    { label: 'Modelo', value: product.specifications.model },
    { label: 'Tipo', value: product.specifications.type },
    { label: 'Capacidad de Carga', value: product.specifications.loadCapacity },
    { label: 'Potencia', value: product.specifications.power },
    { label: 'Peso Operativo', value: product.specifications.operatingWeight },
    { label: 'Altura de Descarga', value: product.specifications.dischargeHeight },
    { label: 'Capacidad del Balde', value: product.specifications.bucketCapacity },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f97316] mb-8">Especificaciones Técnicas</h2>
        <div className="border border-[#f97316] rounded-lg p-6">
          <table className="w-full">
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-semibold text-[#1e293b]">{spec.label}</td>
                  <td className="py-3 px-4">{spec.value || '~~'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
