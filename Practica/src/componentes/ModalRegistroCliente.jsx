// ClientRegistrationModal.jsx
import React, { useState, useEffect } from 'react';

const ClientRegistrationModal = ({ onClose }) => {
  const [clientName, setClientName] = useState('');
  const [address, setAddress] = useState('');
  const [numOfBranches, setNumOfBranches] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nit, setNit] = useState('');
  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario (usuario, email, contraseña y rol)
    // a tu backend o realizar otras acciones necesarias.
    // Por ahora, simplemente cerraremos el modal.
    onClose();
  };
  // ... (puedes mantener las funciones de cambio y envío similares)

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-16 rounded shadow-lg z-10 relative w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Registro de Cliente</h2>

          <div className="mb-4">
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-600">
              Nombre del Cliente
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              className="mt-1 p-2 border w-full rounded"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 border w-full rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="numOfBranches" className="block text-sm font-medium text-gray-600">
              Número de Sedes
            </label>
            <input
              type="number"
              id="numOfBranches"
              name="numOfBranches"
              className="mt-1 p-2 border w-full rounded"
              value={numOfBranches}
              onChange={(e) => setNumOfBranches(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Número de Teléfono
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 border w-full rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nit" className="block text-sm font-medium text-gray-600">
              NIT
            </label>
            <input
              type="text"
              id="nit"
              name="nit"
              className="mt-1 p-2 border w-full rounded"
              value={nit}
              onChange={(e) => setNit(e.target.value)}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Registrar Cliente
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationModal;
