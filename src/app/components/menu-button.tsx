import React from "react";
import { FaGlobe } from "react-icons/fa";  // Necesitas instalar react-icons: npm install react-icons

interface LanguageToggleProps {
    language: 'en' | 'es';
    toggleLanguage: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, toggleLanguage }) => {
    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 text-white hover:text-gray-200 transition-all duration-300"
        >
            <FaGlobe size={24} />
        </button>
    );
}

export default LanguageToggle;
