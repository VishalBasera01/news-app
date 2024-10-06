// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-300">
      <h1 className="text-5xl font-bold bg-blue-300 text-black text-center mb-4">
        News App
      </h1>
      <div className="bg-blue-300 p-4 shadow-md">
        <nav className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/india"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            India
          </NavLink>
          <NavLink
            to="/australia"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Australia
          </NavLink>
          <NavLink
            to="/usa"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            USA
          </NavLink>
          <NavLink
            to="/france"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            France
          </NavLink>
          <NavLink
            to="/israel"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Israel
          </NavLink>
          <NavLink
            to="/russia"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Russia
          </NavLink>
          <NavLink
            to="/japan"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Japan
          </NavLink>
          <NavLink
            to="/ukraine"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 transition duration-300 text-white font-semibold py-2 px-4 rounded"
                : "bg-blue-700 hover:bg-blue-800 transition duration-300 text-white font-semibold py-2 px-4 rounded"
            }
          >
            Ukraine
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
