'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MachineCard } from '@/components/ui/machine-card';
import { machines } from '@/data/machines';

export function MachineryCarousel() {
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const autoplayInterval = setInterval(() => {
      carouselApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [carouselApi]);

  const handleQuote = (machineId: number) => {
    console.log(`Solicitud de cotización para máquina ID: ${machineId}`);
  };

  return (
    <section className="py-12 bg-[#f8fafc]" id="rental">
      <div className="container mx-auto px-4 xl:px-0 max-w-[90vw]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1e293b]">
          Nuestra Maquinaria
        </h2>
        <Carousel 
          className="w-full"
          opts={{ 
            loop: true,
            align: "start",
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {machines.map((machine) => (
              <CarouselItem key={machine.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1 h-full">
                  <MachineCard
                    {...machine}
                    onQuote={() => handleQuote(machine.id)}
                    productId={machine.id}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
