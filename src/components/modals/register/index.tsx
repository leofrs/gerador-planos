import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalRegister: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-end items-center mb-4">
          <button onClick={onClose} className=" text-xl">
            Fechar
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
