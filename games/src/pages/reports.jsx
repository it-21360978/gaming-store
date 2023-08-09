import React from 'react';
import log1 from '../assets/g2.jpg';
import log2 from '../assets/logo2.jpg';

export default function reports() {
  return (
    <div>
      <section className=" bg-white dark:bg-gray-900 backdrop-blur-lg opacity-200">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-black bg-blue-700 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Games Store is out! See what's new</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase">
        Welcome to the latest games platform in Sri Lanka
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Your one-stop destination for all things gaming. We offer an extensive collection of the latest and greatest games across all platforms,
         including PC, console, and mobile. From action-packed adventures to immersive RPGs,
          our handpicked selection caters to passionate gamers of all ages and preferences.
           Whether you're a casual player or a seasoned pro, we've got something exciting for you.
            Level up your gaming experience with our cutting-edge accessories and dive into a world of entertainment and camaraderie.
             Join us and let the gaming begin!
        </p>
   
        <div className="flex justify-center space-x-4">
          <a href="#" className="w-40 h-40 p-2 bg-white">
            <img
              className="w-full h-full "
              src={log1}
              alt="Logo 1"
            />
          </a>
          <a href="#" className="w-52 h-40 p-2 bg-white">
            <img
              className="w-full h-full "
              src={log2}
              alt="Logo 2"
            />
          </a>
          {/* Add more logos here */}
        </div>
      </div>
    </section>
      
    </div>
  )
}
