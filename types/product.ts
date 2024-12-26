export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  operationType: string[];
  specifications: {
    brand: string;
    model: string;
    year: number;
    hours: number;
    location: string;
    type?: string;
    loadCapacity?: string;
    power?: string;
    operatingWeight?: string;
    dischargeHeight?: string;
    bucketCapacity?: string;
  };
  salePrice?: number;
  rentPrice?: number;
}
