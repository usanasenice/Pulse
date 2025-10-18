import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import googlePlay from "./google-play.png";
import appleStore from "./apple-store.png";
import pulse from "./pulse.png";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center md:text-left">
        {/* Logo & Address */}
        <div>
          <div className="inline-flex">
          <img src={pulse} alt="Pulse Logo" className="w-20 h-20 mx-auto md:mx-0" />
          <p className="font-bold text-lg mt-2 text-blue-800">PU<span className="text-white">L</span>SE</p>
          </div>
          <p className="text-gray-300">Pulse Medical Ltd - Est 2025</p>
          <p className="text-gray-300">KG 655 ST, Kigali, Rwanda</p>
        </div>

        {/* Our Company */}
        <div>
          <p className="font-bold text-xl">Our Company</p>
          <ul className="text-gray-300 space-y-2 mt-3">
            <li>Search</li>
            <li>Privacy Statement</li>
            <li>Join Our Affiliate</li>
            <li>Tortium Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="font-bold text-xl">Support</p>
          <ul className="text-gray-300 space-y-2 mt-3">
            <li>Help Center</li>
            <li>Reach Out</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-bold text-xl">Legal</p>
          <ul className="text-gray-300 space-y-2 mt-3">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <p className="font-bold text-xl">Social</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF size={20} /></a>
          </div>
        </div>

        {/* Mobile App Section */}
        <div>
          <p className="font-bold text-xl">Get Your Mobile App:</p>
          <div className="flex flex-col items-center md:items-start space-y-3 mt-3">
            <a href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
              <img src={googlePlay} alt="Google Play" className="w-8 h-8" />
              <span>Google Play Store</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
              <img src={appleStore} alt="Apple Store" className="w-8 h-8" />
              <span>Apple Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
