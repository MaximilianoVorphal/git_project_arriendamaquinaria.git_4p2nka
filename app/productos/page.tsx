'use client';

import { ProductGrid } from '@/components/catalog/product-grid';
import { ProductFilters } from '@/components/catalog/product-filters';
import { useProductFilters } from '@/hooks/use-product-filters';
import Footer from '@/components/sections/footer-section';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ProductsPage() {
  const { filteredProducts, filters, updateFilters } = useProductFilters();
  const searchParams = useSearchParams();

  useEffect(() => {
    const operation = searchParams.get('operation');
    if (operation) {
      updateFilters({
        ...filters,
        operation: [operation],
      });
    }
  }, [searchParams]);

  return (
    <>
      <main className="min-h-screen bg-[#f8fafc] pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[280px,1fr] gap-8">
            <ProductFilters filters={filters} onFilterChange={updateFilters} />
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
