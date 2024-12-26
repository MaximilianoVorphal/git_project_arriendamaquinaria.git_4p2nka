'use client';

import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Filters } from '@/types/filters';

interface ProductFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  return (
    <Card className="p-6 space-y-6 h-fit">
      <div>
        <h3 className="font-semibold mb-4">Tipo de Operación</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox 
              id="rent"
              checked={filters.operation.includes('rent')}
              onCheckedChange={(checked) => {
                onFilterChange({
                  ...filters,
                  operation: checked 
                    ? [...filters.operation, 'rent']
                    : filters.operation.filter(op => op !== 'rent')
                });
              }}
            />
            <label htmlFor="rent" className="ml-2">Arriendo</label>
          </div>
          <div className="flex items-center">
            <Checkbox 
              id="sale"
              checked={filters.operation.includes('sale')}
              onCheckedChange={(checked) => {
                onFilterChange({
                  ...filters,
                  operation: checked 
                    ? [...filters.operation, 'sale']
                    : filters.operation.filter(op => op !== 'sale')
                });
              }}
            />
            <label htmlFor="sale" className="ml-2">Venta</label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Categoría</h3>
        {['Excavadoras', 'Martillo Hidráulico', 'Grúas', 'Retroexcavadoras', 'Compactadores', 'Motoniveladoras', 'Camiones', 'Generadores', 'Plataformas Elevadoras', 'Manipuladores Telescópicos'].map((category) => (
          <div key={category} className="flex items-center mb-2">
            <Checkbox 
              id={category}
              checked={filters.categories.includes(category)}
              onCheckedChange={(checked) => {
                onFilterChange({
                  ...filters,
                  categories: checked 
                    ? [...filters.categories, category]
                    : filters.categories.filter(cat => cat !== category)
                });
              }}
            />
            <label htmlFor={category} className="ml-2">{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-4">Rango de Precio</h3>
        <Slider
          value={[filters.priceRange.min, filters.priceRange.max]}
          min={0}
          max={10000000}
          step={100000}
          onValueChange={([min, max]) => {
            onFilterChange({
              ...filters,
              priceRange: { min, max }
            });
          }}
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>${filters.priceRange.min.toLocaleString()}</span>
          <span>${filters.priceRange.max.toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
}
