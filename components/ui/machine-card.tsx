'use client';

import { Button } from './button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Link from 'next/link';

interface MachineCardProps {
  image: string;
  title: string;
  productId: number;
}

export function MachineCard({
  image,
  title,
  productId
}: MachineCardProps) {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-[#1e293b] text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grow" />
      <CardFooter className="mt-auto p-4">
        <Link href={`/productos/${productId}`}>
          <Button 
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white transition-colors"
          >
            Ver Cotización
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
