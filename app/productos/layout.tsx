import { Navbar } from '@/components/ui/navbar';

export const metadata = {
  title: 'Productos',
  description: 'Listado de productos disponibles.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
