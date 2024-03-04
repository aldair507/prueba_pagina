import React, { useState, useEffect } from "react";
const UserRegistrationModal = ({ onClose }) => {
    const [nombre, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");
    const [nombre_rol, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState("");
  
    const apiUrl = "http://localhost:3000/users/register";
  
    useEffect(() => {
      const fetchRoles = async () => {
        try {
          const response = await fetch("http://localhost:3000/roles");
          const rolesData = await response.json();
          setRoles(rolesData);
          setSelectedRole(rolesData[0]);
        } catch (error) {
          console.error("Error al obtener roles:", error);
        }
      };
  
      fetchRoles();
    }, []);
  
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRoleChange = (e) => setSelectedRole(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevenir el envío por defecto del formulario
  
      console.log("Valores antes del envío:", { nombre, email, contrasena, nombre_rol: selectedRole });
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: nombre,
            email,
            contrasena,
            nombre_rol: selectedRole,
          }),
        });
  
        if (response.ok) {
          console.log("Usuario registrado exitosamente");
          onClose();
        } else {
          const errorData = await response.json();
          console.error("Error al registrar usuario:", errorData.message);
        }
      } catch (error) {
        console.error("Error al procesar la solicitud:", error);
      }
    };
  
    return (
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 relative w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
  
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 border w-full rounded"
                  value={nombre}
                  onChange={handleUsernameChange}
                />
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border w-full rounded"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="contrasena"
                  className="mt-1 p-2 border w-full rounded"
                  value={contrasena}
                  onChange={handlePasswordChange}
                />
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-800"
                >
                  Rol
                </label>
                <select
                  id="role"
                  name="nombre_role"
                  className="mt-1 p-2 border w-full rounded text-gray-800"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  {nombre_rol.map((role) => (
                    <option key={role.id_rol} value={role.id_rol}>
                      {role.nombre_rol}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Registrarse
                </button>
                <button
                  className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  onClick={onClose}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserRegistrationModal;
  