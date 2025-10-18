import React from "react";
import offer from "./offer.png";

const Offer = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-16 px-6 flex flex-col items-center text-white"
      style={{ backgroundImage: `url(${offer})` }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Sign Up For Exclusive Offers, Care Tips, Newsletters And More!
      </h2>
      <p className="text-sm md:text-base text-center mt-2">
        Sign up to our newsletter to save 15% OFF your order!
      </p>

      <form className="flex flex-col md:flex-row items-center gap-3 mt-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Offer;
