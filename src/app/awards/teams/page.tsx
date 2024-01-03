import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Nacional from '@/app/awards/teams/nacional/page';

function Presentation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="text-lg mb-8">Selecciona una opción:</p>
      <div className="space-x-4">
        <a href="/national/page">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Nacional
          </a>
        </a>
        {/* Agrega las rutas correspondientes para "Internacional" */}
        <a href="/internacional">
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Internacional
          </a>
        </a>
      </div>
    </div>
  );
}

export default Presentation;
