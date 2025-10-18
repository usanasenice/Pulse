import React from 'react';
import bebi from './bebi.png';
import boy from './boy.png';
import man from './man.png';
import sets from './sets.png'
import aid from './aid.png'
import camera from './camera.png'
import clock from './clock.png'
import { Star } from "lucide-react";

const Clients = () => {
  return (
    <div className="text-center px-4 sm:px-0">
      <p className='text-blue-800 font-medium text-2xl mt-6'>OUR CUSTOMERS</p>
      <p className='text-3xl font-bold text-blue-950 mt-6'>
        <span className='text-blue-600'>Hear</span> It <span className='text-blue-600'>From</span> Our <span className='text-blue-600'>Happy</span>
      </p>
      <p className='text-3xl font-bold text-blue-950'>Clients</p>

      {/* Wrapper for Responsiveness */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        
        {/* Client Card 1 */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center w-full sm:w-96 h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-1">
          <img src={man} alt="Client" className="w-20 h-20 rounded-full object-cover" />
          <p className="mt-3 font-semibold text-blue-900">Sam</p>
          <p className='text-blue-900 font-medium mb-2 mt-2'>Verified 12/12/2021</p>
          
          {/* Star Ratings */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={24} className="text-yellow-400" />
            ))}
          </div>

          <p className='font-bold text-blue-900 mt-2'>Useful Products</p>
          <p className="text-sm text-gray-500 text-center mt-4">Pulse has offered me the best medical healthcare services</p> 
          <p className='text-sm text-gray-500 text-center'>Use pulse , Enhance your healthcare.</p>
        </div>

        {/* Client Card 2 */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center w-full sm:w-96 h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-1">
          <img src={bebi} alt="Client" className="w-20 h-20 rounded-full object-cover" />
          <p className="mt-3 font-semibold text-blue-900">Jane Smith</p>
          <p className='text-blue-900 font-medium mb-2 mt-2'>Verified 01/10/2021</p>
          
          {/* Star Ratings */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={24} className="text-yellow-400" />
            ))}
          </div>

          <p className='font-bold text-blue-900 mt-2'>Excellent Services</p>
          <p className="text-sm text-gray-500 text-center mt-4">Pulse saved me from death , my ambulance was lost</p> 
          <p className='text-sm text-gray-500 text-center'>and Pulse directed it .</p>
        </div>

        {/* Client Card 3 */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center w-full sm:w-96 h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-1">
          <img src={boy} alt="Client" className="w-20 h-20 rounded-full object-cover" />
          <p className="mt-3 font-semibold text-blue-900">John Doe</p>
          <p className='text-blue-900 font-medium mb-2 mt-2'>Verified 02/15/2022</p>
          
          {/* Star Ratings */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={24} className="text-yellow-400" />
            ))}
          </div>

          <p className='font-bold text-blue-900 mt-2'>Very Good Services</p>
          <p className="text-sm text-gray-500 text-center mt-4">Pulse gave me first aid info for my kid , </p> 
          <p className='text-sm text-gray-500 text-center'>No any other app like pulse .</p>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-blue-50 w-full mt-10 pt-4 pb-6">
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 items-center text-center">
          <div>
            <img src={sets} className="h-20 w-20 mx-auto" />
            <p className="text-blue-800 font-medium mt-2">Excellent</p>
            <p className="text-blue-800 font-medium">Customer Services</p>
          </div>

          <div>
            <img src={clock} className="h-20 w-20 mx-auto" />
            <p className="text-blue-800 font-medium mt-2">24/7 Available</p>
          </div>

          <div>
            <img src={camera} className="h-20 w-20 mx-auto" />
            <p className="text-blue-800 font-medium mt-2">30 Day-Money Back</p>
          </div>

          <div>
            <img src={aid} className="h-20 w-20 mx-auto" />
            <p className="text-blue-800 font-medium mt-2">First-Aid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
