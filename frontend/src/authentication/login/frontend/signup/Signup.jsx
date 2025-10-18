import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed (npm install axios)

import boy from "./image/boy.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          name: fullName,
          email,
          password,
        }
      );

      // On success, redirect to the login page or show success message
      navigate("/login"); // Use navigate to redirect
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
            SIGN UP
          </h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-600 text-sm">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-400 clip-path-layer-1"></div>
        <div className="absolute inset-0 bg-blue-900 clip-path-layer-2"></div>
        <div className="absolute inset-0 bg-blue-950 clip-path-layer-3"></div>
        <div className="relative text-center z-10">
          <div className="text-6xl">
            <img src={boy} className="h-40 w-40 ml-20 mb-4" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            WELCOME TO <span className="text-blue-600">PULSE</span>
          </h2>
          <p className="font-medium text-gray-200">
            Pulse is an app that brings people's health to peace.
          </p>
        </div>
      </div>

      <style jsx>{`
        .clip-path-layer-1 {
          clip-path: ellipse(90% 100% at right);
        }
        .clip-path-layer-2 {
          clip-path: ellipse(70% 100% at right);
        }
        .clip-path-layer-3 {
          clip-path: ellipse(50% 100% at right);
        }
      `}</style>
    </div>
  );
}
