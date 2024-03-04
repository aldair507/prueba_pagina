import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const data = [
    { name: "empleado", icon: faUser, imageUrl: "https://blog.dataprius.com/wp-content/uploads/2016/01/empresa-empleados.jpg",parrafo:"cantidad de empleados"},
    { name: "chekeo salud", icon: faBars, imageUrl: "https://img.freepik.com/vector-premium/concepto-chequeo-salud-banner-web-medico-examinando-o-comprobando-concepto-paciente-atencion-medica-seguro-salud-informe-medico-ilustracion-vectorial_940574-322.jpg?w=900" ,parrafo:"cantidad de salud"},
    { name: "talento humano", icon: faBriefcase, imageUrl: "https://img.freepik.com/vector-gratis/agente-reclutamiento-analizando-candidatos_74855-4565.jpg?size=626&ext=jpg&ga=GA1.1.1707466627.1709424000&semt=ais",parrafo:"cantidad de talento" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index} name={item.name} icon={item.icon} imageUrl={item.imageUrl} parrafo={item.parrafo} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, icon, imageUrl, parrafo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
      {imageUrl && <img className="w-full h-49 object-fill" src={imageUrl} alt={name} />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          <a href="">{name}</a>
        </div>
        <p className="text-gray-700 text-base text-center">
          {parrafo}
        </p>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <button className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Más Información
        </button>
        {/* Otros elementos o botones si es necesario */}
      </div>
    </div>
  );
};

export default Home;
