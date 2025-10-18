import React from 'react';
import body from './body.png';
import {Link} from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex flex-col items-center pt-32 px-4 md:px-10"> {/* Ensure vertical centering */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full"> {/* Flex for both desktop and mobile */}
        
        {/* Text Section */}
        <div className="text-black  gap-3 md:ml-20 md:pt-20 flex flex-col justify-center text-center md:text-left">
          <p className="text-3xl sm:text-4xl">
            <span className="text-blue-500 font-bold">Trusted <span className="text-blue-800">Partner</span></span>
          </p>
          <p className="text-3xl sm:text-4xl">
            <span className="text-blue-800 font-bold">for Better</span>
          </p>
          <p className="text-3xl sm:text-4xl">
            <span className="text-blue-500 font-bold">Health</span>
          </p>
          <p className="mt-4">Pulse is a solution to the medical industry issues in Rwanda.</p>
          <p className="mt-px">We provide health services virtually online, people's health always comes before.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition mt-4 sm:mt-6'>
              Contact Us
            </button>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition ml-0 sm:ml-4 mt-4 sm:mt-6'>
              <Link to={'/signup'}>Signup</Link>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 flex justify-center md:ml-10 w-full md:w-auto">
          <img 
            src={body} 
            alt="Body Image" 
            className=" mb-10 h-[250px] w-[250px] sm:h-[400px] sm:w-[350px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Body;
