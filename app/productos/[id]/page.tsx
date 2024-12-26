import { products } from '../../../data/products';
import { ProductHero } from '@/components/sections/product-hero';
import { ProductSpecs } from '@/components/sections/product-specs';
import { ContactForm } from '@/components/sections/contact-form';
import { Navbar } from '@/components/ui/navbar';
import Footer from '@/components/sections/footer-section';

interface ProductoProps {
  params: { id: string };
}

const Producto = ({ params }: ProductoProps) => {
  const { id } = params;

  // Busca el producto por ID
  const producto = products.find((prod) => prod.id === parseInt(id));

  // Si no encuentra el producto, muestra un mensaje
  if (!producto) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <p>El producto con ID {id} no existe.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <ProductHero product={producto} /> 
        <ProductSpecs product={producto}/> 
        <ContactForm /> 
      </main>
      <Footer/>
    </>  
  );
};

export default Producto;

// Genera los parámetros estáticos para cada producto
export async function generateStaticParams() {
  return products.map((producto) => ({
    id: producto.id.toString(),
  }));
}
