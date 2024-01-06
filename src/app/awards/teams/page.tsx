import 'tailwindcss/tailwind.css';
import PresentacionNa from '@/app/awards/teams/nacional/page';
import PresantacionIn from '@/app/awards/teams/internacional/page';

function Presentation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="text-lg mb-8">Selecciona una opción:</p>
      <div className="space-x-4">
        {/* Utiliza el elemento "a" con "href" para la navegación */}
        <a href="/Nacional" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nacional
        </a>
        {/* También para la opción "Internacional" */}
        <a href="/Internacional" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Internacional
        </a>
      </div>
    </div>
  );
}

export default Presentation;
