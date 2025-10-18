// src/components/WelcomeDashboard.jsx
import React, { useState, useRef, useEffect } from "react";
import pulse from "../../components/images/pulse.png";
import picture from "./picture.png";
import ford from "./ford.png";
import doctor from "./doctor.png";
import melvin from "./melvin.png";
import sharon from "./sharon.png";
import {
  Home,
  MessageCircle,
  Heart,
  BarChart2,
  Search,
  HelpCircle,
  AlertTriangle,
  Calendar as CalendarIcon,
  Stethoscope,
  AlertCircle,
  Hospital,
  Menu,
  X,
  Settings,
  Bell,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";

const Explore = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 9));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for toggling sidebar on mobile
  const [isProfileOpen, setIsProfileOpen] = useState(false); // New state for profile dropdown
  const profileRef = useRef(null);
  const username = localStorage.getItem("username") || "Guest"; // Get username from localStorage
  const email = localStorage.getItem("email") || "guest@example.com";

  const bloodPressureData = [
    { name: "Blood Pressure", value: 98, fill: "url(#bloodPressureGradient)" },
  ];
  const sugarLevelData = [
    { name: "Sugar Level", value: 72, fill: "url(#sugarLevelGradient)" },
  ];
  const activityLevelData = [
    { name: "Activity Level", value: 72, fill: "url(#activityLevelGradient)" },
  ];
  const sleepData = [{ name: "Sleep", value: 89, fill: "url(#sleepGradient)" }];

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isHighlightedDate =
        date.getDate() === 9 &&
        date.getMonth() === 0 &&
        date.getFullYear() === 2025;
      return isHighlightedDate ? "bg-blue-500 text-white rounded-full" : null;
    }
    return null;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("fullName");
    localStorage.removeItem("id");
    localStorage.removeItem("profilePicture");
    window.location.href = "/login";
  };

  // Handle click outside of profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white p-4 transform transition-transform duration-300 ease-in-out md:w-1/5 md:static md:h-auto md:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src={pulse}
              alt="Pulse Logo"
              className="h-12 w-12 xs:h-14 xs:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 mr-2"
            />
            <span className="text-base xs:text-lg md:text-xl font-bold">
              PULSE
            </span>
          </div>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <Navbar />
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-3 xs:p-4 md:p-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-3 xs:mb-4 md:mb-6">
          <div className="flex items-center space-x-2 xs:space-x-3">
            <button className="md:hidden text-gray-800" onClick={toggleSidebar}>
              <Menu className="h-6 w-6 xs:h-8 xs:w-8" />
            </button>
            <h1 className="text-lg xs:text-xl md:text-2xl font-bold">
              Welcome, <span className="text-blue-600">{username}</span>! 👋
            </h1>
          </div>
          <div className="flex items-center space-x-1 xs:space-x-2 md:space-x-4 mt-2 sm:mt-0">
            <span className="text-xs xs:text-sm md:text-base">
              <Settings />
            </span>
            <span className="text-xs xs:text-sm md:text-base">
              <Bell />
            </span>
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <User className="h-4 w-4 xs:h-5 xs:w-5 md:h-6 md:w-6" />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">
                      {username}
                    </p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/profile-settings"
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      Account Settings
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 mb-3 xs:mb-4 md:mb-6">
          {/* Congratulations Card */}
          <div className="relative bg-white p-3 xs:p-4 rounded-lg shadow h-64 xs:h-72 sm:h-80 lg:h-96">
            <img
              src={picture}
              alt="Health"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 bg-white bg-opacity-80 p-2 xs:p-3 rounded-lg">
              <h2 className="text-sm xs:text-base md:text-lg font-semibold">
                Congratulations 🎉
              </h2>
              <p className="text-[10px] xs:text-xs md:text-sm text-gray-600">
                This week your general body wellness has increased by 2%
                compared to last week!
              </p>
            </div>
          </div>

          {/* Health Metrics */}
          <div className="grid grid-cols-2 gap-3 xs:gap-4">
            {/* Blood Pressure */}
            <div className="bg-white p-3 xs:p-4 rounded-lg shadow text-center">
              <h3 className="text-[10px] xs:text-xs md:text-sm font-semibold">
                BLOOD PRESSURE
              </h3>
              <p className="text-base xs:text-lg md:text-2xl font-bold">
                98 bpm
              </p>
              <div className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={8}
                    data={bloodPressureData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <defs>
                      <linearGradient
                        id="bloodPressureGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                    </defs>
                    <RadialBar
                      background={{ fill: "#E5E7EB" }}
                      dataKey="value"
                      cornerRadius={50}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sugar Level */}
            <div className="bg-white p-3 xs:p-4 rounded-lg shadow text-center">
              <h3 className="text-[10px] xs:text-xs md:text-sm font-semibold">
                SUGAR LEVEL
              </h3>
              <p className="text-base xs:text-lg md:text-2xl font-bold">
                72/100 mg/dl
              </p>
              <div className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={8}
                    data={sugarLevelData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <defs>
                      <linearGradient
                        id="sugarLevelGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9D174D" />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#F9A8D4" />
                      </linearGradient>
                    </defs>
                    <RadialBar
                      background={{ fill: "#E5E7EB" }}
                      dataKey="value"
                      cornerRadius={50}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activity Level */}
            <div className="bg-white p-3 xs:p-4 rounded-lg shadow text-center">
              <h3 className="text-[10px] xs:text-xs md:text-sm font-semibold">
                ACTIVITY LEVEL
              </h3>
              <p className="text-base xs:text-lg md:text-2xl font-bold">72%</p>
              <div className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={8}
                    data={activityLevelData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <defs>
                      <linearGradient
                        id="activityLevelGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#4C1D95" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#C4B5FD" />
                      </linearGradient>
                    </defs>
                    <RadialBar
                      background={{ fill: "#E5E7EB" }}
                      dataKey="value"
                      cornerRadius={50}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sleep */}
            <div className="bg-white p-3 xs:p-4 rounded-lg shadow text-center">
              <h3 className="text-[10px] xs:text-xs md:text-sm font-semibold">
                SLEEP
              </h3>
              <p className="text-base xs:text-lg md:text-2xl font-bold">89%</p>
              <div className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={8}
                    data={sleepData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <defs>
                      <linearGradient
                        id="sleepGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#1E40AF" />
                        <stop offset="50%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#BFDBFE" />
                      </linearGradient>
                    </defs>
                    <RadialBar
                      background={{ fill: "#E5E7EB" }}
                      dataKey="value"
                      cornerRadius={50}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white p-3 xs:p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-3 xs:mb-4">
              <h3 className="text-[10px] xs:text-xs md:text-sm font-semibold">
                CALENDAR
              </h3>
              <div className="flex items-center space-x-1 xs:space-x-2">
                <span className="text-[10px] xs:text-xs md:text-sm">
                  {selectedDate
                    .toLocaleString("default", { month: "long" })
                    .toUpperCase()}
                </span>
                <span className="text-[10px] xs:text-xs md:text-sm">
                  {selectedDate.getFullYear()}
                </span>
              </div>
            </div>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileClassName={tileClassName}
              className="border-none w-full text-[10px] xs:text-xs md:text-sm"
              navigationLabel={({ date }) => (
                <span className="text-gray-700 font-semibold text-[10px] xs:text-xs md:text-sm">
                  {date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
              nextLabel={
                <span className="text-blue-500 font-bold text-[10px] xs:text-xs md:text-sm">
                  →
                </span>
              }
              prevLabel={
                <span className="text-blue-500 font-bold text-[10px] xs:text-xs md:text-sm">
                  ←
                </span>
              }
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
          {/* Recent Consultations */}
          <div className="bg-white p-3 xs:p-4 rounded-lg shadow">
            <h3 className="text-sm xs:text-base md:text-lg font-semibold mb-3 xs:mb-4">
              Recent consultations
            </h3>
            <ul className="space-y-3 xs:space-y-4 max-h-48 xs:max-h-56 md:max-h-64 overflow-y-auto">
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={melvin}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Melvin Smith
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      Cardiologist
                    </p>
                  </div>
                </div>
                <button className="text-[10px] xs:text-xs md:text-sm font-medium hover:underline px-1 py-0.5 xs:px-2 xs:py-1 md:px-2 md:py-2 rounded-xl shadow-md text-black">
                  Message
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={ford}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Sharon Kayites
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      Neurologist
                    </p>
                  </div>
                </div>
                <button className="text-[10px] xs:text-xs md:text-sm font-medium hover:underline px-1 py-0.5 xs:px-2 xs:py-1 md:px-2 md:py-2 rounded-xl shadow-md text-black">
                  Message
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={doctor}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Sharon Kayites
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      Neurologist
                    </p>
                  </div>
                </div>
                <button className="text-[10px] xs:text-xs md:text-sm font-medium hover:underline px-1 py-0.5 xs:px-2 xs:py-1 md:px-2 md:py-2 rounded-xl shadow-md text-black">
                  Message
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={sharon}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Sharon Kayites
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      Neurologist
                    </p>
                  </div>
                </div>
                <button className="text-[10px] xs:text-xs md:text-sm font-medium hover:underline px-1 py-0.5 xs:px-2 xs:py-1 md:px-2 md:py-2 rounded-xl shadow-md text-black">
                  Message
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-3 xs:p-4 rounded-lg shadow">
            <h3 className="text-sm xs:text-base md:text-lg font-semibold mb-3 xs:mb-4">
              Quick actions
            </h3>
            <ul className="space-y-3 xs:space-y-4">
              <li className="flex items-center space-x-2 xs:space-x-3">
                <div className="h-7 w-7 xs:h-8 xs:w-8 md:h-10 md:w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <CalendarIcon className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 text-gray-600" />
                </div>
                <span className="text-[10px] xs:text-xs md:text-sm text-gray-800">
                  Talk with PULSE AI
                </span>
              </li>
              <li className="flex items-center space-x-2 xs:space-x-3">
                <div className="h-7 w-7 xs:h-8 xs:w-8 md:h-10 md:w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 text-gray-600" />
                </div>
                <span className="text-[10px] xs:text-xs md:text-sm text-gray-800">
                  Dial the Emergencies
                </span>
              </li>
              <li className="flex items-center space-x-2 xs:space-x-3">
                <div className="h-7 w-7 xs:h-8 xs:w-8 md:h-10 md:w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 text-gray-600" />
                </div>
                <span className="text-[10px] xs:text-xs md:text-sm text-gray-800">
                  Locate Hospitals
                </span>
              </li>
              <li className="flex items-center space-x-2 xs:space-x-3">
                <div className="h-7 w-7 xs:h-8 xs:w-8 md:h-10 md:w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 text-gray-600" />
                </div>
                <span className="text-[10px] xs:text-xs md:text-sm text-gray-800">
                  Donate Blood
                </span>
              </li>
              <li className="flex items-center space-x-2 xs:space-x-3">
                <div className="h-7 w-7 xs:h-8 xs:w-8 md:h-10 md:w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Hospital className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 text-gray-600" />
                </div>
                <span className="text-[10px] xs:text-xs md:text-sm text-gray-800">
                  Get Medical advices
                </span>
              </li>
            </ul>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white p-3 xs:p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-3 xs:mb-4">
              <h3 className="text-sm xs:text-base md:text-lg font-semibold">
                Upcoming appointments
              </h3>
              <button className="text-blue-500 text-[10px] xs:text-xs md:text-sm font-medium hover:underline">
                View All
              </button>
            </div>
            <ul className="space-y-3 xs:space-y-4 max-h-48 xs:max-h-56 md:max-h-64 overflow-y-auto">
              <li className="flex items-center justify-between bg-gray-200 rounded-xl p-2 xs:p-3">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={melvin}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Samantha Avis
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      04/04/2025
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between bg-gray-200 rounded-xl p-2 xs:p-3">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={melvin}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Samantha Avis
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      04/04/2025
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between bg-gray-200 rounded-xl p-2 xs:p-3">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={melvin}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Samantha Avis
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      04/04/2025
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between bg-gray-200 rounded-xl p-2 xs:p-3">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <img
                    src={melvin}
                    alt="Doctor"
                    className="h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-gray-800">
                      Dr Samantha Avis
                    </p>
                    <p className="text-[10px] xs:text-xs text-gray-500">
                      04/04/2025
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
