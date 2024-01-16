import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';
import React from 'react';
import 'tailwindcss/tailwind.css';
  

function Footer () {
    return (
        <>
         {/* Pie de página con enlaces a redes sociales, íconos y derechos reservados */}
      <footer className="bg-gray-800 text-white p-4 text-center flex items-center justify-center space-x-4">
        <a href="https://www.instagram.com/leomessi" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#fff" />
        </a>
        <a href="https://www.facebook.com/LeoMessi" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} color="#fff" />
        </a>
        <a href="https://messi.com/fundacion-leo-messi/" target="_blank" rel="noopener noreferrer">
          <FaGoogle size={30} color="#fff" />
        </a>
        {/* Agrega más enlaces y íconos según sea necesario */}
        <p className="ml-2">&copy; 2023 Messi Fan Club. Todos los derechos reservados.</p>
      </footer>
        </>
    );
}

export default Footer;