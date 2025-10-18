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
import human from "../human.png";
import Rectangle78 from "./Rectangle 78.png";
import Rectangle80 from "./Rectangle 80.png";
import Rectangle79 from "./Rectangle 79.png";
import Rectangle81 from "./Rectangle 81.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const username = localStorage.getItem("username") || "Guest";

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Welcome Message */}
      <div className="px-6 pt-4">
        <h1 className="text-3xl font-bold text-blue-900">
          Welcome, <span className="text-blue-600">{username}</span>! 👋
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex p-6 space-x-6">
        {/* Left Panel */}
        <div className="w-1/4">
          {/* Top Two Boxes (Consultation & Protocol) */}
          <div className="flex space-x-4">
            <div className="p-4 bg-white shadow-md rounded-lg w-1/2">
              <div className="inline-flex gap-2">
                <User className="text-blue-800" />
                <p className="text-blue-800 font-medium text-lg">
                  CONSULTATION
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-2">28 October 2025</p>
              <p className="text-black text-sm font-medium mt-2">
                Initial Examination
              </p>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg w-60">
              <div className="inline-flex gap-2">
                <Layers className="text-blue-800" />
                <p className="text-blue-800 font-medium text-lg">PROTOCOLS</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">28 November 2025</p>
              <p className="text-black text-sm font-medium mt-2">
                Ultrasound: left arm
              </p>
            </div>
          </div>

          {/* NEW BOX - UNDER CONSULTATION & PROTOCOL */}
          <div className="mt-4 p-4 bg-blue-900 shadow-md rounded-lg">
            <div className="inline-flex gap-2">
              <ClipboardCheck className="text-white" />
              <p className="text-blue-800 font-medium text-lg"></p>
            </div>
            <p className="text-gray-500 text-xs mt-2">29 November 2025</p>
            <p className="text-white text-sm font-medium mt-2 inline-flex">
              Blood screening: CPR,RF and ESR
              <AlertTriangle className="ml-20 " />
            </p>
          </div>

          <div>
            <h1 className="text-2xl mt-4 font-bold text-blue-600">
              <span className="text-blue-900">Medical</span> history
            </h1>

            <div className="bg-white shadow-md rounded-lg border-4 border-white mt-4 border-l-blue-800  w-96">
              <div className="flex justify-between text-blue-800 text-xs">
                <p className="ml-2 pt-2">1:00-2:00 PM</p>
                <p className="mr-2 pt-2">• Home treatment</p>
              </div>
              <p className="text-xl text-blue-800 ml-4 mt-2">
                Consultation: Diabetes medication
              </p>
              <hr className="border-black my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="mr-2 text-blue-800" />
                  <div>
                    <p className="font-medium text-blue-800 text-lg">
                      Ishema N. Love
                    </p>
                    <p className="text-gray-500 text-xs pb-4">
                      MH, Primary Care Physician
                    </p>
                  </div>
                </div>
                <MessageCircle className="text-black" />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg border-4 border-white mt-4 border-l-blue-800  w-96">
              <div className="flex justify-between text-blue-800 text-xs">
                <p className="ml-2 pt-2">1:00-2:00 PM</p>
                <p className="mr-2 pt-2">• Home treatment</p>
              </div>
              <p className="text-xl text-blue-800 ml-4 mt-2">
                Consultation: Diabetes medication
              </p>
              <hr className="border-black my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="mr-2 text-blue-800" />
                  <div>
                    <p className="font-medium text-blue-800 text-lg">
                      Ishema N. Love
                    </p>
                    <p className="text-gray-500 text-xs pb-4">
                      MH, Primary Care Physician
                    </p>
                  </div>
                </div>
                <MessageCircle className="text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Panel - Human Anatomy Image */}
        <div className="flex-grow flex justify-center relative">
          <img
            src={human}
            alt="Human Anatomy"
            className="w-96 h-auto object-cover"
          />
          {/* Interactive Points */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-blue-500 w-3 h-3 rounded-full cursor-pointer"></div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-500 w-3 h-3 rounded-full cursor-pointer"></div>
        </div>

        {/* Right Panel - Tasks */}
        <div className="w-1/4 space-y-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 inline-flex">
              Tasks
              <Cross className="ml-60" />
            </h2>
            <ul className="mt-4">
              <li className="text-gray-700 font-medium">
                {" "}
                Do preliminary tests{" "}
              </li>
              <p className="text-gray-700 font-medium text-xs">in 1 hour</p>
              <li className="text-gray-700 font-medium pt-2">
                {" "}
                Approve HIV testing
              </li>
              <p className="text-gray-700 font-medium text-xs">in 10 hour</p>
              <li className="text-gray-700 font-medium pt-2"> Donate blood</li>
              <p className="text-gray-700 font-medium text-xs">in 2 Days</p>
            </ul>
          </div>

          {/* Additional Content */}
          <p className="text-blue-800 text-xl mt-2 font-bold">Medication</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white shadow-md rounded-lg ">
              <ShoppingCart className="ml-32 mb-4" />
              <img src={Rectangle78} />
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg ">
              <ShoppingCart className="ml-32 mb-4" />
              <img src={Rectangle79} />
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg ">
              <ShoppingCart className="ml-32 mb-4" />
              <img src={Rectangle80} />
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg ">
              <ShoppingCart className="ml-32 mb-4" />
              <img src={Rectangle81} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
