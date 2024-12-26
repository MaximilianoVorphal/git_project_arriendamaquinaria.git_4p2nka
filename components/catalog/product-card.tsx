'use client';

import { Card, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-70 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      </div>
      <CardFooter className="mt-auto p-4">
          <Link href={`/productos/${product.id}`}>
            <Button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white transition-colors">Ver Cotización</Button>
          </Link>
      </CardFooter>
    </Card>
  );
}
