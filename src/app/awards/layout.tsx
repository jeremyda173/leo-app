import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Home from '@/app/page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-full'>
        {/* <Home /> */}
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
}