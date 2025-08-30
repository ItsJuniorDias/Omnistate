import React from "react";

const ErrorModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // Não renderiza se não estiver aberto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-[#006EFF] text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
