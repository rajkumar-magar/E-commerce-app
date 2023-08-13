import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const navigation = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'  
  },
  {
    name: 'Products',
    path: '/products'  
  },
  {
    name: 'Contact',
    path: '/contact'
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <img src={logo} className="w-14 h-14 ml-2  rounded-full "/>
          <span className="ml-3 text-xl">E-commerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigation.map((item) => {
              return (
                <Link key={item.name} to={item.path} className="mr-6 font-semibold text-lg hover:scale-105 transition-all duration-500 ">{item.name}</Link>
              );
            })
          }
        </nav>
        < button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 hover:scale-105 transition-all duration-500">
          Go to Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
