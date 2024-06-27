'use client';
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import Champions from '@/app/awards/teams/internacional/champions-league/page';
import SuperCupS from '@/app/awards/teams/internacional/super-copa-europa/page';
import Mundialdc from '@/app/awards/teams/internacional/mundialc/page';

function PresentationIn() {
  // Estado para controlar qué opción está seleccionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Función para manejar la selección de opciones
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  // Estilos CSS para el contenedor de opciones
  const optionsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  // Estilos CSS para las opciones
  const optionStyles = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    margin: "0 10px",
  };

  // Renderizar la lista de opciones y el componente seleccionado
  return (
    <div>
      <div style={optionsContainerStyles}>
        <button style={optionStyles} onClick={() => handleOptionSelect("Champions")}>Champions</button>
        <button style={optionStyles} onClick={() => handleOptionSelect("SuperCupS")}>Super Cup</button>
        <button style={optionStyles} onClick={() => handleOptionSelect("Mundialdc")}>Mundialdc</button>
      </div>
      {/* Renderizar el componente seleccionado */}
      {selectedOption === "Champions" && <Champions />}
      {selectedOption === "SuperCupS" && <SuperCupS />}
      {selectedOption === "Mundialdc" && <Mundialdc />}
    </div>
  );
}

export default PresentationIn;
