import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1e293b', padding: '20px', fontFamily: 'sans-serif', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '33%', maxWidth: '350px' }}>
        <img src="https://arriendamaquinaria.cl/wp-content/uploads/2024/03/cropped-MaqrriendaTheNewLogoOfHope.png" alt="Logo Arrienda Maquinaria" style={{ width: '10000px'}} />
        <p style={{ margin: '5px 0 0 0', textAlign: 'center' }}>Blanco Encalada 575, Quillota, Valparaíso</p>
      </div>
      <div style={{ width: '33%' }}>
        <h3 style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>TIENDA</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li>
            <Link href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
              Cotizar Repuestos
            </Link>
          </li>
          <li>
            <Link href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
              Cotizar Maquinarias
            </Link>
          </li>
          <li>
            <Link href="/soluciones" style={{ color: 'white', textDecoration: 'none' }}>
              Soluciones
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ width: '33%' }}>
        <h3 style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Horarios de Atención</h3>
        <p style={{ margin: 0 }}>Lunes a Viernes: 8:30 - 18:30</p>
        <p style={{ margin: 0 }}>Sábado - Domingo:</p>
        <p style={{ margin: 0 }}>WhatsApp +56944611678</p>
      </div>
    </footer>
  );
};

export default Footer;
