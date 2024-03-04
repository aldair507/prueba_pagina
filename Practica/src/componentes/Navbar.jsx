import React from "react";
import logo from "../assets/logo_asheri-2.png"; // Import the logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  {
    name: <img src={logo} alt="logo" className="img-fluid h-20" />,
    href: "#",
    current: true,
  },
  { name: "Asheri", href: "#", current: false },
  {
    name: <FontAwesomeIcon icon={faBell} className="h-6 w-6 mr-2 text-white" />,
    href: "#",
    current: true,
    notifications: 5,
  },
  { name: "Jose Aldair", href: "#", current: false },
  {
    name: (
      <FontAwesomeIcon
        icon={faSignOutAlt}
        className="h-6 w-6 mr-2 text-white"
      />
    ),
    href: "#",
    current: false,
  },
];

export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex space-x-4">
            <a
              key={navigation[0].name}
              href={navigation[0].href}
              aria-current={navigation[0].current ? "page" : undefined}
            >
              {navigation[0].name}
            </a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <h1 className="text-white text-xl">
              <a
                key={navigation[1].name}
                href={navigation[1].href}
                aria-current={navigation[1].current ? "page" : undefined}
              >
                {navigation[1].name}
              </a>
            </h1>
          </div>
          <div className="flex items-center justify-end space-x-4 mr-6">
            <div className="relative">
              <a
                key={navigation[2].name}
                href={navigation[2].href}
                aria-current={navigation[2].current ? "page" : undefined}
              >
                {navigation[2].name}
              </a>
              {navigation[2].notifications && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {navigation[2].notifications}
                </span>
              )}
            </div>

            <a
              className="text-white"
              key={navigation[3].name}
              href={navigation[3].href}
              aria-current={navigation[3].current ? "page" : undefined}
            >
              {navigation[3].name}
            </a>
            <a
              key={navigation[4].name}
              href={navigation[4].href}
              aria-current={navigation[4].current ? "page" : undefined}
            >
              {navigation[4].name}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
