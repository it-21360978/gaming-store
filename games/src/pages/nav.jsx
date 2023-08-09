import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nova logo.png';


export default function Nav() {
  

  return (
    <div>
      <nav className="bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 shadow-lg rounded-xl">
        <div className="max-w-screen-xl flex flex-wrap mx-auto p-4">
          <Link to="/home" className="flex items-center">
            <img src={logo} className="h-12 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Games Store</span>
          </Link>
          <div className="flex md:order-2">
          </div>
          <div className="justify-between hidden w-full md:flex md:w-auto md:order-1 flex-wrap ml-12 mt-4" id="navbar-sticky">
            <ul className="ml-12 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
              </li>
              <li>
                <Link to= "/login" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
              </li>
            </ul>
          </div>
          <div className="flex md:order-3 ml-auto space-x-4">
            <button type="button" className="p-2 text-gray-50 hover:text-yellow-200 focus:outline-none">
              English
            </button>
            <button type="button" className="p-2 text-gray-50 hover:text-yellow-200 focus:outline-none">
              Sinahala
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
