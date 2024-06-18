'use client';
import React, { useState } from 'react';
import Menu from '@/app/components/menu';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col md:overflow-hidden ${darkMode ? 'dark' : ''}`}>
      <div className='w-full md:w-full'>
        <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-0 md:flex md:flex-col'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
