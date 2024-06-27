// components/TrophiesTable.tsx
import React from "react";
import Image from "next/image";
import BarcelonaLogo from "@/../../public/Shield/LogoB.png";
import PSGLogo from "@/../../public/Shield/LogoP.png";

const trophiesData = [
  {
    team: "FC Barcelona",
    competition: "La Liga",
    years: "10 veces (2004–05, 2005–06, 2008–09, 2009–10, 2010–11, 2012–13, 2014–15, 2015–16, 2017–18, 2018–19)",
    logo: BarcelonaLogo,
  },
  {
    team: "Paris Saint-Germain (PSG)",
    competition: "Ligue 1",
    years: "1 vez (2021–22)",
    logo: PSGLogo,
  },
  {
    team: "FC Barcelona",
    competition: "Champions League",
    years: "4 veces (2005–06, 2008–09, 2010–11, 2014–15)",
    logo: BarcelonaLogo,
  },
  {
    team: "FC Barcelona",
    competition: "Supercopa de España",
    years: "8 veces (2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018)",
    logo: BarcelonaLogo,
  },
  {
    team: "FC Barcelona",
    competition: "Supercopa de Europa",
    years: "3 veces (2009, 2011, 2015)",
    logo: BarcelonaLogo,
  },
  {
    team: "FC Barcelona",
    competition: "Mundial de Clubes",
    years: "3 veces (2009, 2011, 2015)",
    logo: BarcelonaLogo,
  },
];

const TrophiesTable: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Títulos de Lionel Messi en Clubes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competición</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Años</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {trophiesData.map((trophy, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image src={trophy.logo} alt={trophy.team} width={40} height={40} className="rounded-full" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{trophy.team}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trophy.competition}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trophy.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrophiesTable;
