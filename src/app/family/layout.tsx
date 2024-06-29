import Menu from '@/app/components/menu';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className='flex flex-col md:overflow-hidden'>
      <div className='w-full md:w-full'>
        <Menu />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-0 md:flex md:flex-col'>
        {children}
      </div>
    </div>
  );
}
export default Layout;