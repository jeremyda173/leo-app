/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Portada from '@/../../public/Portada.jpg';
import Masia from '@/../../public/masia.jpg';
import MessiFr from '@/../../public/MessiFr.jpg';
import Footer from '@/app/components/footer';
import Menu from '@/app/components/menu-home';
import Welcome from '@/app/components/welcome';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500`}>
      {/* <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}

      {/* Contenido del Dashboard */}
      <div className="flex flex-col relative z-10 container mx-auto">
        <div>
          <Welcome />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
