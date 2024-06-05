// button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
};

export default Button;
