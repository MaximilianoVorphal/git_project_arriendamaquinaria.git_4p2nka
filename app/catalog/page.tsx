'use client';

import { Navbar } from '@/components/ui/navbar';
import { CatalogHeader } from '@/components/catalog/catalog-header';
import { ProductGrid } from '@/components/catalog/product-grid';
import { ProductFilters } from '@/components/catalog/product-filters';
import { useState } from 'react';
import { useProductFilters } from '@/hooks/use-product-filters';
import Footer from '@/components/sections/footer-section';
export default function CatalogPage() {
  const { filteredProducts, filters, updateFilters } = useProductFilters();


  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc]">
        <CatalogHeader />
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[280px,1fr] gap-8">
            <ProductFilters filters={filters} onFilterChange={updateFilters} />
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
        
      </main>
      <Footer/>
    </>
  );
}
