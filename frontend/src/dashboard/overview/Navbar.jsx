import React from "react";
import {
  Search,
  Bell,
  Settings,
  ShoppingCart,
  User,
  MessageCircle,
  HeartPulse,
  AlertTriangle,
  MessagesSquare,
  Layers,
  ClipboardCheck,
  Cross,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleEmergencyClick = () => {
    // Open Next.js app in a new tab
    window.open("http://localhost:3000", "_blank");
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 bg-gray-100">
        {/* Left Side - Logo & Menu */}
        <div className="flex items-center space-x-4">
          <p className="text-blue-950 font-bold text-xl">PULSE</p>
          <ul className="flex space-x-4 text-gray-700 font-semibold">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-900 ml-72">
              <HeartPulse className="w-5 h-5" />
              <span>
                <Link to={"/dashboard"}>Overview</Link>
              </span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-800 ml-72">
              <HeartPulse className="w-5 h-5" />
              <span>
                <Link to={"/explore"}>Explore</Link>
              </span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-800">
              <MessageCircle className="w-5 h-5" />
              <span>
                <Link to={"/chatbot"}>Chat bot</Link>
              </span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-800">
              <HeartPulse className="w-5 h-5" />
              <span>
                <Link to={"/donation"}>Transplants</Link>
              </span>
            </li>
            <li
              onClick={handleEmergencyClick}
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-800 hover:bg-blue-50 transition-colors"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Emergencies</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 px-4 py-2 border-2 border-blue-900 rounded-md text-blue-800 relative">
              <MessagesSquare className="w-5 h-5" />
              <span>Messages</span>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                !
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-blue-600 text-blue-800" />
          <Settings className="w-6 h-6 text-blue-800 cursor-pointer hover:text-blue-600" />
          <Bell className="w-6 h-6 text-blue-800 cursor-pointer hover:text-blue-600" />
          <User className="w-8 h-8 text-blue-800 cursor-pointer hover:text-blue-600 rounded-full border border-gray-300 p-1" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
