'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const Menu: React.FC = () => {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
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
  );
};

export default Menu;
