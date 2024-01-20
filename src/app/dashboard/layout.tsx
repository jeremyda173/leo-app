import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Menu from '@/app/components/menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
<div className='flex h-screen flex-col md:overflow-hidden'>
  <div className='w-full md:w-full'>
    <Menu />
  </div>
  <div className='flex-grow p-6 md:overflow-y-auto md:p-4 md:flex md:flex-col'>
    {children}
  </div>
</div>

  );
}