export interface Filters {
  operation: string[];
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  search: string;
}
