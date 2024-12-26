import { Building2, Phone, Truck } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-20 bg-[#1e293b]" id="about"> {/* Fondo gris en la sección */}
      <div className="container mx-auto px-4">
        <div className="bg-[##1e293b] rounded-lg p-8 text-white"> {/* Fondo naranja y texto blanco */}
          <h2 className="text-3xl font-bold text-center mb-4">
            Quiénes Somos
          </h2>
          <p className='text-center text-base mt-5'>
            Somos una plataforma de intermediarios para el arriendo y compra de maquinaria.
          </p>
          <p className='text-center text-base mt-2'>
            Aquí encontrarás máquinas para movimiento de tierra, manipulación de materiales, camiones y otros, tanto como también accesorios en venta y arriendo para maquinaria pesada: martillos hidráulicos, cizallas, etc.
          </p>
          <p className='text-center text-base mt-4'>
            Si estás buscando entregar en arriendo tu máquina, de forma mensual, semanal o diaria, puedes registrarla aquí con nosotros como proveedor.
          </p>
          <p className='text-center text-base mt-4'>
            Si necesitas solicitar el arriendo de una máquina específica, puedes buscar lo que necesites aquí, cotizar el arriendo y enviar una solicitud en las opciones de la página. Nosotros te contactaremos con el proveedor de la máquina y podrás hacer el trato directamente con él.
          </p>
          <p className='text-center text-base mt-4'>
            Si quieres vender tu máquina, la puedes publicar acá, y te pondremos en contacto con quienes consulten la cotización en la página.
          </p>
        </div>
      </div>
    </section>
  );
}
