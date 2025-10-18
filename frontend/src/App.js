import React, { useEffect } from "react";
import HomePage from "./components/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./authentication/login/frontend/login/Login";
import Signup from "./authentication/login/frontend/signup/Signup";
import DashBoard from "./dashboard/overview/DashBoard";
import ChatBot from "./chatbot/ChatBot.jsx";
import Donation from "./Donation/Donation.jsx";
import Explore from "./dashboard/explore/Explore.jsx";
import ProfileSettings from "./dashboard/profile/ProfileSettings";


const App = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX - 15}px`;
      cursor.style.top = `${e.pageY - 15}px`;
    });
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/explore",
      element: <DashBoard />,
    },
    {
      path: "/chatbot",
      element: <ChatBot />,
    },
    {
      path: "/donation",
      element: <Donation />,
    },
    {
      path: "/dashboard",
      element: <Explore />,
    },
    {
      path: "/profile-settings",
      element: <ProfileSettings />,
    },
  
  ]);

  return (
    <div>
      <div className="cursor"></div> {/* Custom cursor */}
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
