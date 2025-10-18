import React from 'react'
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
    Bell,User
  } from 'lucide-react';
  import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
              <nav>
          <ul className="space-y-3">
            <li className="bg-blue-700 p-2 rounded inline-flex items-center w-full mb-2">
              <Home className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base"><Link to={'/dashboard'}>DASHBOARD</Link></span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <MessageCircle className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base"><Link to={'/chatbot'}>Chat bot</Link></span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <Heart className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base"><Link to={'/donation'}>Transplants</Link></span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <BarChart2 className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base "><Link to={'/explore'}>Overview</Link></span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <Search className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base">Discover</span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <HelpCircle className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base">Help</span>
            </li>
            <li className="inline-flex items-center w-full pt-2">
              <AlertTriangle className="h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3" />
              <span className="text-xs xs:text-sm md:text-base">Emergencies</span>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
