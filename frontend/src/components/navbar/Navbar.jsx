import React, { useState } from "react";
import pulse from "./pulse.png";
import { Menu, X } from "lucide-react"; 
import {Link} from 'react-router-dom' ;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-50 fixed top-0 left-0">
      
      <div className="max-w-7xl mx-auto px-20">
     {/* Left margin set to 20 */}
        <div className="flex justify-between items-center h-20">
          
        <img src={pulse} alt="Pulse Logo" className="h-32 w-32 mt-6" /> 
          
          {/* Logo Section */}
          <div className="">
            {/* Increased size */}
            <span className="text-2xl font-bold text-blue-600">PULSE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">ABOUT US</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">SERVICES</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">TESTIMONIALS</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">FAQs</a>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-lg font-medium">
             <Link to={'/signup'} >Get Started</Link> 
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-20 w-full flex flex-col items-center py-4 space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">Testimonials</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">FAQs</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-lg">
           <Link to={'/signup'}>Get Started</Link> 
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
