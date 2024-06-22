import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
      >
        X
      </button>
      {children}
    </div>
  </div>
);

export default Modal;