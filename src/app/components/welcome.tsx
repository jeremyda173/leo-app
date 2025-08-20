"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import FlagUSA from "@/../../public/us.png";
import FlagDominicanRepublic from "@/../../public/DO.png";
import Portada from "@/../../public/Portada2.jpg";
import { translate, setLocale } from "@/app/components/translate";
import Gallery from "./gallery";
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MessiLogo from '@/../../public/messi-logo.png';

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: '/home', label: 'Home' },
  { href: '/match_history', label: 'Match History' },
  { href: '/awards', label: 'Awards' },
  { href: '/groups', label: 'Groups' },
  { href: '/family', label: 'Family' },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const base = 'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors';
  const activeCls = 'text-white bg-white/10';
  const idleCls = 'text-white/80 hover:text-white hover:bg-white/10';
  return (
    <Link href={href} aria-current={active ? 'page' : undefined} className={`${base} ${active ? activeCls : idleCls}`}>
      {label}
    </Link>
  );
}

const WelcomeSection = () => {
  const [showFlags, setShowFlags] = useState(false);
  const [language, setLanguage] = useState("en");
  const videoUrl =
    "https://www.youtube.com/embed/esB0AkFIDeE?si=n_KCbw_c6ETsNpD4";
    const pathname = usePathname() || '/';
    const [open, setOpen] = useState(false);
  
    useEffect(() => setOpen(false), [pathname]);
  
    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const handleToggleFlags = useCallback(() => {
    setShowFlags((prevShowFlags) => !prevShowFlags);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLocale(lang);
  };

  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback();
    }
  };

  return (
    <div className="relative">
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75">
      <nav className="flex h-14 w-full items-center justify-between px-3 md:px-4">
        <Link href="/home" className="flex items-center">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <Image src={MessiLogo} alt="Messi Logo" width={20} height={20} priority />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href} label={label} active={isActive(href)} />
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(v => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="grid gap-1 px-3 pb-3 md:px-4">
          {NAV.map(({ href, label }) => {
            const active = isActive(href);
            const base = 'block rounded-md px-3 py-2 text-sm font-medium ring-1 transition-colors';
            const activeCls = 'bg-white/15 text-white ring-white/15';
            const idleCls = 'bg-white/5 text-white/80 ring-white/10 hover:bg-white/10 hover:text-white';
            return (
              <li key={href}>
                <Link href={href} aria-current={active ? 'page' : undefined} className={`${base} ${active ? activeCls : idleCls}`}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>

      {/* Contenedor de la imagen con translate */}
      <div className="relative h-screen">
        <Image
          src={Portada}
          layout="fill"
          objectFit="cover"
          alt="Welcome Banner"
        />
      </div>

      {/* Título y banderas */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleToggleFlags}
          onKeyDown={(event) => handleKeyDown(event, handleToggleFlags)}
          className="flex items-center p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
          aria-label="Toggle Language Options"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-lg" />
        </button>

        {/* Contenedor de las banderas con animación y tamaño */}
        {showFlags && (
          <div className="absolute top-12 right-0 mt-2 w-24 bg-white bg-opacity-75 shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-1 flex items-center justify-between">
              <Image
                src={FlagUSA}
                alt="Flag USA"
                className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Switch to English"
                onClick={() => handleLanguageChange("en")}
                onKeyDown={(event) =>
                  handleKeyDown(event, () => handleLanguageChange("en"))
                }
              />
              <Image
                src={FlagDominicanRepublic}
                alt="Flag Dominican Republic"
                className="w-6 h-6 rounded transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Switch to Spanish"
                onClick={() => handleLanguageChange("es")}
                onKeyDown={(event) =>
                  handleKeyDown(event, () => handleLanguageChange("es"))
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* Título con animación */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 absolute transform -translate-y-3/4 animate-fadeInRight">
        LIONEL MESSI
      </h1>

      {/* Línea divisora y textos debajo */}
      <div className="relative flex flex-col items-center mt-4">
        <hr className="w-11/12 border-t border-gray-400 mb-4" />
        <p
          id="home"
          className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto"
        >
          {translate("text.description")}
        </p>
        <p
          id="matchHistory"
          className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto"
        >
          {translate("text.journey")}
        </p>
        <p
          id="awards"
          className="text-justify mb-4 leading-relaxed max-w-4xl mx-auto"
        >
          {translate("text.masia")}
        </p>
        <p
          id="teams"
          className="text-justify leading-relaxed max-w-4xl mx-auto mb-4"
        >
          {translate("text.international")}
        </p>
      </div>
      <div className="w-full bg-white py-16 flex justify-center items-center">
        <div className="max-w-5xl w-full px-6">
          <div className="mb-6">
            <h4 className="text-3xl font-bold text-gray-800 text-center animate-slideInRight">
              {translate("words.presentacion")}
            </h4>
          </div>
          <div className="flex justify-center">
            <div
              className="relative pb-9/16 h-0 w-full md:w-9/12 animate-fadeInVideo"
              style={{ paddingBottom: "38.35%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={videoUrl}
                title="Video del Barcelona"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInVideo {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-in-out;
        }

        .animate-fadeInVideo {
          animation: fadeInVideo 1.5s ease-in-out 0.5s;
        }
      `}</style>

      <Gallery />
    </div>
  );
};

export default WelcomeSection;
