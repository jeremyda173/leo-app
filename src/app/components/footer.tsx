import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { translate } from '@/app/components/translate';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <a
                    href="https://www.instagram.com/leomessi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400 transition-colors flex items-center"
                >
                    <FaInstagram className="mr-2" size={24} />
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/LeoMessi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400 transition-colors flex items-center"
                >
                    <FaFacebook className="mr-2" size={24} />
                    Facebook
                </a>
                <a
                    href="https://messi.com/fundacion-leo-messi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400 transition-colors flex items-center"
                >
                    <FaGoogle className="mr-2" size={24} />
                    {translate("footer.web")}
                </a>
            </div>
            <p className="text-center sm:text-right text-sm">&copy; 2023 Messi Fan Club. {translate("footer.derechos")}</p>
        </footer>
    );
}

export default Footer;
