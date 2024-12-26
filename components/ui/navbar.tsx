'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calcula la altura del navbar para el padding
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const navbarElement = document.querySelector('nav');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }

    // Añade un padding-top al body igual a la altura del navbar
    document.body.style.paddingTop = `${navbarHeight}px`;

    return () => {
      // Limpia el padding-top cuando el componente se desmonte
      document.body.style.paddingTop = '';
    };
  }, [navbarHeight]);

  return (
<nav className="fixed top-0 w-full z-50 bg-[#1e293b] py-4 px-4 md:px-8 lg:px-8 text-white">
      {/* Resto del código de tu navbar */}
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link href="/">
          <Image
            src="https://arriendamaquinaria.cl/wp-content/uploads/2024/03/cropped-MaqrriendaTheNewLogoOfHope.png"
            alt="AriendaMaquinaria"
            width={150}
            height={50}
            style={{ objectFit: 'contain', width: 'auto', height: '40px' }} // Ajustes aquí
          />
        </Link>

        {/* Botón para abrir/cerrar el menú en mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menú principal */}
        <div className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-medium">
            <li>
            <Link href="/" className={`hover:text-[#f97316] font-bold text-lg ${pathname === '/' ? 'text-[#f97316]' : 'text-white'}`}>
                Inicio
            </Link>
            </li>
            <li>
              <Link href="/productos?operation=rent" className={`hover:text-[#f97316] font-bold text-lg ${pathname.startsWith('/productos') && pathname.includes('operation=rent') ? 'text-[#f97316]' : ''}`}>
                Arriendo
              </Link>
            </li>
            <li>
              <Link href="/productos?operation=sale" className={`hover:text-[#f97316] font-bold text-lg ${pathname.startsWith('/productos') && pathname.includes('operation=sale') ? 'text-[#f97316]' : ''}`}>
                Venta
              </Link>
            </li>
          </ul>

          {/* Número de teléfono y botón de Inscríbete */}
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-8 space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://wa.me/56944611678" target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M16.3 13.35c-.15-.46-.94-2.7-1.35-3.62-.27-.62-.56-1.27-.85-1.95-.19-.46-.09-.94.26-1.29.27-.27.61-.45.95-.54.78-.21 1.6-.14 2.3.18.46.21.85.54 1.12.92.27.37.41.83.38 1.29-.06.86-.56 1.73-1.07 2.27-.65.71-1.55 1.15-2.57 1.23-.57.04-1.19-.11-1.75-.46-.55-.34-.99-.85-1.27-1.45-.2-.4-.3-.83-.3-1.28 0-.45.11-.89.32-1.28.27-.51.68-1.01 1.21-1.4.14-.1.28-.2.42-.29-.01.08-.01.17 0 .25.01.08.01.17 0 .25l-.01.07c-.07 1.17.47 2.29 1.41 3.06.56.46 1.22.76 1.95.9.53.1 1.03.07 1.51-.08.57-.17 1.07-.48 1.51-.92.44-.44.75-.99.91-1.59.17-.63.16-1.29-.01-1.9-.16-.58-.49-1.12-.94-1.57zm-3.48 5.03c.98-.83 2.1-1.32 3.31-1.44 1.12-.11 2.26.16 3.29.78.8.48 1.47 1.14 1.97 1.97.49.83.75 1.76.75 2.72 0 .96-.26 1.9-.75 2.72-.49.83-1.17 1.5-1.97 1.97-1.03.62-2.17.89-3.29.78-1.21-.12-2.33-.61-3.31-1.44-1.41-1.2-2.3-2.97-2.45-4.9-.15-1.93.74-3.7 2.15-4.9z" />
              </svg>
              +56 9 4461 1678
            </a>
            <Link href="/registro" className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-2 px-4 rounded">
              Inscríbete
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
