import Link from 'next/link';

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
    ];

    return (
        <div>
            <h1>Catálogo</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <Link href={`/productos/${producto.id}`}>
                            {producto.nombre}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogo;
