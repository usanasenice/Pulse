// src/components/ChatBot.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  FileText,
  Image,
  Newspaper,
  X,
  Menu,
  Loader,
  Mic,
  Volume2,
  VolumeX,
} from "lucide-react";
import Navbar from "../dashboard/overview/Navbar";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);

  const welcomeMessage =
    "Hi! I'm PulseBot, your personal health assistant. I can help you with medical advice, mental health support, and general wellness questions. How can I help you today?";

  // Separate state for current chat and chat history
  const [currentChat, setCurrentChat] = useState([
    {
      message: welcomeMessage,
      sender: "bot",
      date: new Date(),
    },
  ]);

  const [chatHistory, setChatHistory] = useState(() => {
    const savedChatHistory = localStorage.getItem("chatHistory");
    return savedChatHistory
      ? JSON.parse(savedChatHistory).map((chat) => ({
          ...chat,
          date: new Date(chat.date),
        }))
      : [];
  });

  // Initialize speech recognition
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join(" ");
        setUserInput(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Handle mute toggle
  const handleMuteToggle = () => {
    if (!isMuted) {
      // If we're muting, stop any ongoing speech
      stopSpeaking();
    }
    setIsMuted(!isMuted);
  };

  // Enhanced text-to-speech function
  const speak = (text) => {
    if ("speechSynthesis" in window && !isMuted) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      setIsSpeaking(true);

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        console.error("Speech synthesis error");
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  // Initialize voices and speak welcome message
  useEffect(() => {
    if ("speechSynthesis" in window) {
      // Ensure speech synthesis is ready
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }

      // Speak welcome message after a short delay
      const timer = setTimeout(() => {
        speak(welcomeMessage);
      }, 1000);

      return () => {
        clearTimeout(timer);
        if (speechSynthesis.speaking) {
          speechSynthesis.cancel();
        }
      };
    }
  }, []);

  // Stop speaking
  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Toggle speech recognition
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setUserInput(""); // Clear input when starting new voice input
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [currentChat]);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Clear current chat when component unmounts
  useEffect(() => {
    return () => {
      setCurrentChat([
        {
          message: welcomeMessage,
          sender: "bot",
          date: new Date(),
        },
      ]);
    };
  }, []);

  // Initialize voices when component mounts
  useEffect(() => {
    if ("speechSynthesis" in window) {
      // Load voices
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    setError(null);
  };

  const formatBotMessage = (message) => {
    const parts = message.split(/(?:\r?\n|\r|(?:\d+\.|\•)\s)/g).filter(Boolean);
    if (parts.length <= 1) return message;

    return parts.map((part, index) => {
      const isKeyPoint =
        part.includes(":") || /^[A-Z].*[:.!]/.test(part.trim());
      return (
        <span
          key={index}
          className={`block ${isKeyPoint ? "font-semibold" : "font-normal"}`}
        >
          {index > 0 && "• "}
          {part.trim()}
        </span>
      );
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (userInput.trim() === "") return;

    setIsLoading(true);
    setError(null);
    const message = userInput;
    setUserInput("");

    // Add message to current chat
    setCurrentChat((prev) => [
      ...prev,
      { message, sender: "user", date: new Date() },
    ]);

    try {
      const response = await axios.post("http://localhost:5001/chat", {
        message,
      });

      const botResponse = {
        message: response.data.reply,
        sender: "bot",
        date: new Date(),
      };

      // Add bot response to current chat and speak it
      setCurrentChat((prev) => [...prev, botResponse]);
      setChatHistory((prev) => [
        ...prev,
        { message, sender: "user", date: new Date() },
        botResponse,
      ]);

      // Ensure any ongoing speech is stopped before speaking new response
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      // Small delay before speaking to ensure UI is updated
      setTimeout(() => {
        speak(response.data.reply);
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to get response. Please try again.");

      const errorMessage = {
        message:
          "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        date: new Date(),
        isError: true,
      };

      setCurrentChat((prev) => [...prev, errorMessage]);
      setChatHistory((prev) => [...prev, errorMessage]);
      speak(errorMessage.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Group chat history by date
  const groupedChatHistory = chatHistory.reduce((acc, chat) => {
    const date = chat.date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(chat);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedChatHistory).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <button
          className="fixed top-20 right-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          onClick={handleMuteToggle}
          title={isMuted ? "Unmute chatbot" : "Mute chatbot"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>

        <button
          className="md:hidden fixed top-20 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* History Sidebar */}
        <div
          className={`
          fixed md:static w-3/4 md:w-1/4 bg-gray-100 h-full transition-transform duration-300 ease-in-out z-40
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
        >
          <div className="p-4 h-full overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Chat History
            </h2>
            <div className="space-y-6">
              {sortedDates.map((date) => (
                <div key={date}>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {date ===
                    new Date().toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                      ? "Today"
                      : date ===
                        new Date(Date.now() - 86400000).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "long", year: "numeric" }
                        )
                      ? "Yesterday"
                      : date}
                  </h3>
                  <ul className="space-y-2">
                    {groupedChatHistory[date].map((chat, index) => (
                      <li
                        key={index}
                        className="p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <p className="text-sm text-gray-700 truncate">
                          {chat.message}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col p-4 bg-gray-200 text-gray-800">
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-4 p-4"
          >
            {currentChat.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-4 rounded-xl shadow-md max-w-[80%] md:max-w-[60%] relative ${
                    chat.sender === "user"
                      ? "bg-blue-500 text-white"
                      : chat.isError
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {chat.sender === "bot" && !isMuted && (
                    <button
                      onClick={() =>
                        isSpeaking ? stopSpeaking() : speak(chat.message)
                      }
                      className="absolute -left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                      title={
                        isSpeaking ? "Stop speaking" : "Read message aloud"
                      }
                    >
                      {isSpeaking ? (
                        <VolumeX className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-blue-600" />
                      )}
                    </button>
                  )}
                  {chat.sender === "bot" ? (
                    <div className="text-gray-800">
                      {formatBotMessage(chat.message)}
                    </div>
                  ) : (
                    <p className="text-sm md:text-base">{chat.message}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-4 rounded-xl shadow-md bg-white">
                  <Loader className="h-5 w-5 animate-spin text-blue-500" />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-4 rounded-xl shadow-md mt-4"
          >
            {error && <div className="mb-2 text-sm text-red-600">{error}</div>}
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 rounded-full mr-2 transition-colors ${
                  isListening
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                title={isListening ? "Stop listening" : "Start voice input"}
              >
                <Mic className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                disabled={isLoading || isListening}
                className="flex-1 outline-none text-gray-800 placeholder-gray-400 px-4 py-2"
                placeholder={
                  isListening
                    ? "Listening..."
                    : isLoading
                    ? "Please wait..."
                    : "Message PulseBot"
                }
                autoFocus
              />
              <button
                type="submit"
                disabled={isLoading || !userInput.trim() || isListening}
                className={`ml-2 px-4 py-2 rounded-md text-white transition-colors ${
                  isLoading || !userInput.trim() || isListening
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
