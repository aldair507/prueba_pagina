import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "./Navbar";
import Home  from "./Home.jsx";
import Modal from "./Modal"; // Asegúrate de importar o crear un componente de modal
import ClientRegistrationModal from "./ModalRegistroCliente.jsx";
const AccordionItem = ({ title, icon, submenus, selected, onClick }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalCliente, setShowModalCliente] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const handleSubMenuClick = (submenuTitle) => {
    if (submenuTitle === "Registrar") {
      setShowModal(true); // Mostrar el modal cuando se hace clic en "Registrar"
    } else if (submenuTitle === "Registro clientes") {
      setShowModalCliente(true);
    }

    // Aquí puedes agregar más lógica según sea necesario para otros elementos del submenú
  };

  return (
    <div className={`relative flex flex-col rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${selected ? "bg-light-white" : ""}`}>
      <div className="flex items-center" onClick={() => { toggleAccordion(); onClick(); }}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span className={`ml-2 duration-200`}>{title}</span>
      </div>
      {open && submenus && (
        <ul className="submenu grid grid-cols-1 gap-2 bg-light-white p-2 mt-2">
          {submenus.map((submenu, subIndex) => (
            <li
              key={subIndex}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
              onClick={() => handleSubMenuClick(submenu.title)}
            >
              <span className={`ml-2 duration-200`}>{submenu.title}</span>
            </li>
          ))}
        </ul>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {showModalCliente && <ModalCliente onClose={() => setShowModalCliente(false)} />} {/* Renderizar el modal del cliente si showModalCliente es true */}
    </div>
  );
};

// Componente de Modal para Registrar Clientes
const ModalCliente = ({ onClose }) => {
  // Lógica y contenido del modal para registrar clientes
  return (
    <ClientRegistrationModal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Registro de Clientes</h2>
      {/* Agrega aquí los campos y la lógica para el registro de clientes */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => {
          // Lógica para registrar clientes aquí
          onClose();
        }}
      >
        Registrar Cliente
      </button>
    </ClientRegistrationModal>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const Menus = [
    {
      title: "Registro de Empleados",
      icon: faUser,
      submes: [
        { title: "Registrar" },
        { title: "Ver empleados" },
      ],
    },
    {
      title: "Gestión Comercial",
      icon: faBriefcase,
      submes: [
        { title: "Registro clientes" },
        { title: "Ver Clientes" },
      ],
    },
  ];

  const handleMenuClick = (index) => {
    if (selectedMenu === index) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(index);
    }
  };

  return (
    <div className="flex">
      <div
        className={`sidebar ${
          open ? "w-72" : "w-14"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300 bg-gray-700`}
      >
        <div className="items-center mb-6">
          <button
            className={`cursor-pointer w-7 border-dark-purple ${!open ? "rotate-180" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {open && (
            <h1 className={`text-white ml-2 font-medium text-xl duration-200`}>
              Dashboard
            </h1>
          )}
        </div>

        {open && (
          <ul>
            {Menus.map((Menu, index) => (
              <AccordionItem
                key={index}
                title={Menu.title}
                icon={Menu.icon}
                submenus={Menu.submes}
                selected={selectedMenu === index}
                onClick={() => handleMenuClick(index)}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="flex-1 p-4">
        {/* Espacio para otros componentes */}
        <NavBar />
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
