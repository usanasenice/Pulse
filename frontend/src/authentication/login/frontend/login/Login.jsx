import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import boy from "../signup/image/boy.png";
import { signInWithGoogle } from "../../backend/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );

      // Store all user information in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("fullName", response.data.user.name);
      localStorage.setItem("id", response.data.user.id);

      // Redirect user to the dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Remove all user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("fullName");
    localStorage.removeItem("id");
    localStorage.removeItem("profilePicture");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <button
            onClick={() => signInWithGoogle(navigate)}
            className="bg-blue-900 text-white px-36 py-2 rounded mb-4 hover:bg-blue-800 transition"
          >
            Sign in with Google
          </button>
          <h2 className="text-2xl font-bold text-center mb-2 text-black">OR</h2>
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
            LOG IN
          </h2>
          {error && (
            <p className="text-red-500 text-center mb-4 bg-red-50 p-2 rounded">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 text-sm hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="inline-block animate-spin mr-2">⌛</span>
              ) : null}
              {isLoading ? "Logging in..." : "LOG IN"}
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-bold hover:text-blue-800"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Welcome Section with Curved Layers */}
      <div className="w-1/2 relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-400 clip-path-layer-1"></div>
        <div className="absolute inset-0 bg-blue-900 clip-path-layer-2"></div>
        <div className="absolute inset-0 bg-blue-950 clip-path-layer-3"></div>
        <div className="relative text-center z-10">
          <div className="text-6xl">
            <img src={boy} className="h-40 w-40 mb-4 ml-40" alt="Welcome" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            WELCOME TO <span className="text-blue-600">PULSE</span>
          </h2>
          <p className="font-medium text-gray-200">
            Log in, Pulse is an app that brings people's health to peace.
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
