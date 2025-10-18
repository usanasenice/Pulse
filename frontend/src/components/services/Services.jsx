import React, { useEffect, useState } from 'react';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';

const Services = () => {
  const [typedLines, setTypedLines] = useState([]); // Store all typed lines
  const [currentLineIndex, setCurrentLineIndex] = useState(0); // Track the current line being typed
  const [currentCharIndex, setCurrentCharIndex] = useState(0); // Track the current character in the line
  const [isTyping, setIsTyping] = useState(true); // Control the blinking cursor

  const lines = [
    'At PULSE, we deliver innovative healthcare solutions.',
    'Real-time tracking for seamless navigation.',
    'Optimized routes and emergency support.',
    'PulseBot: Your 24/7 health assistant.',
    'Smart route optimization for faster care.',
    'Real-time traffic data for efficiency.',
    'Solving ambulance delays with technology.',
    'Bridging the gap in medical donations.',
    'Zero delays, zero preventable losses.',
    'Enhanced emergency medical services.',
  ];

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLineText = lines[currentLineIndex];

      if (currentCharIndex < currentLineText.length) {
        // Typing the current line character by character
        const typingInterval = setInterval(() => {
          setTypedLines((prevLines) => {
            const updatedLines = [...prevLines];
            if (updatedLines[currentLineIndex]) {
              updatedLines[currentLineIndex] = currentLineText.substring(0, currentCharIndex + 1);
            } else {
              updatedLines[currentLineIndex] = currentLineText[currentCharIndex];
            }
            return updatedLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 80); // Typing speed: 80ms per character

        return () => clearInterval(typingInterval);
      } else {
        // Finished typing the current line, move to the next line
        setIsTyping(false);
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          setIsTyping(true);
        }, 1500); // Pause for 1.5 seconds before starting the next line
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <section className="flex flex-wrap items-start mt-10 ml-20 mr-20">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        {/* Heading Section */}
        <p className="text-blue-800 font-semibold text-2xl tracking-wide">OUR SERVICES</p>
        <p className="text-4xl font-bold mt-6 leading-tight">
          <span className="text-blue-500 font-extrabold">Experience</span>
          <span className="text-blue-900"> the </span>
          <span className="text-blue-500">Pulse </span>
          <span className="text-blue-900">of</span>
        </p>
        <p className="text-4xl font-bold leading-tight">
          <span className="text-blue-500">Seamless</span>{' '}
          <span className="text-blue-900">Journeys</span>
        </p>

        {/* Typing Effect Section */}
        <div className="mt-10 text-lg font-medium text-blue-900 relative">
          {typedLines.map((line, index) => (
            <p key={index} className="min-h-[30px] leading-relaxed">
              {line}
              {/* Show blinking cursor only on the last line being typed */}
              {index === currentLineIndex - 1 && isTyping && (
                <span className="inline-block h-6 w-1 bg-blue-500 animate-blink ml-1"></span>
              )}
            </p>
          ))}
          {/* Show cursor on the current line if it's still typing */}
          {currentLineIndex < lines.length && isTyping && typedLines.length === currentLineIndex && (
            <p className="min-h-[30px] leading-relaxed">
              <span className="inline-block h-6 w-1 bg-blue-500 animate-blink"></span>
            </p>
          )}
        </div>
      </div>

      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <div className="relative w-80 h-80 mt-20">
          <img src={one} alt="Service One" className="rounded-lg object-cover w-full h-full" />
          <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Real-Time Location Tracking
          </p>
        </div>

        <div className="relative w-80 h-80">
          <img src={two} alt="Service Two" className="rounded-lg object-cover w-full h-full" />
          <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Emergency Support
          </p>
        </div>

        <div className="relative w-80 h-80 mt-40">
          <img src={three} alt="Service Three" className="rounded-lg object-cover w-full h-full" />
          <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Route Optimization
          </p>
        </div>

        <div className="relative w-80 h-80 mt-10">
          <img src={four} alt="Service Four" className="rounded-lg object-cover w-full h-full" />
          <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Trip Insights
          </p>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.7s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Services;