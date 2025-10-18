import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate in your component

const firebaseConfig = {
    apiKey: "AIzaSyAW1khT183Oe2iIahmz3Avy_KWnrsQ2Vpg",
    authDomain: "pulse-17351.firebaseapp.com",
    projectId: "pulse-17351",
    storageBucket: "pulse-17351.firebasestorage.app",
    messagingSenderId: "931385418764",
    appId: "1:931385418764:web:e03509f3b9ba2386af7a29",
    measurementId: "G-4RM1KX9DCY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    navigate("/dashboard"); // Redirect to /dashboard after success
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle };
