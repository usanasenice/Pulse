import React from 'react';
import { CheckCircle } from "lucide-react";

const Price = () => {
  return (
    <div className="bg-blue-950 w-full mt-28 px-4 py-10">
      {/* Title */}
      <p className="text-white text-xl font-medium pt-6 text-center">OUR PRICES</p>
      <p className="text-3xl text-white font-bold pt-6 text-center">
        <span className="text-blue-500">Affordable</span> Pricing <span className="text-blue-500">Packages</span>
      </p>
      <p className="text-white font-light text-center pt-4 max-w-xl mx-auto">
        At Pulse, we offer innovative solutions for seamless navigation. From real-time tracking to optimized routing.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700">
          Monthly
        </button>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700">
          Yearly
        </button>
      </div>

      {/* Pricing Plans */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 pb-10 max-w-5xl mx-auto">
        {/* Free Trial */}
        <div className="border border-white shadow-lg rounded-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl dance">
          <p className="text-lg text-white font-semibold">Free Trial</p>
          <div className="w-full h-px bg-white my-3"></div>
          <p className="text-xl font-bold text-white">$0.00</p>
          
          {/* Features */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">14 days Trial</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">Chat support</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">24/7 support</p>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700">
            Get Plan
          </button>
        </div>

        {/* Paid Plan */}
        <div className="border border-white shadow-lg rounded-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl dance">
          <p className="text-lg text-white font-semibold">Paid Plan</p>
          <div className="w-full h-px bg-white my-3"></div>
          <p className="text-xl font-bold text-white">$9.99</p>

          {/* Features */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">30 days trial</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">Chat support</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">24/7 support</p>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700">
            Get Plan
          </button>
        </div>

        {/* Premium */}
        <div className="border border-white shadow-lg rounded-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl dance">
          <p className="text-lg text-white font-semibold">Premium</p>
          <div className="w-full h-px bg-white my-3"></div>
          <p className="text-xl font-bold text-white">$19.99</p>

          {/* Features */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">30 days trial</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">Chat support</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-white">24/7 support</p>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700">
            Get Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default Price;
