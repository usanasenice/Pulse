import React, { useState } from 'react';
import about from './about.png';

const textContent = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "The printing and typesetting industry has evolved, but Lorem Ipsum remains a vital placeholder text. It has been widely used for designing and prototyping projects across various industries.",
  "Modern design still relies on Lorem Ipsum for layout visualization. Its purpose is to help designers focus on the structure of a page without being distracted by meaningful content."
];

const About = () => {
  const [currentText, setCurrentText] = useState(0);

  return (
    <section className="flex flex-col md:flex-row items-center mt-10 mx-auto px-6 md:px-16 lg:px-24">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={about} className="h-auto w-[80%] md:w-[500px] lg:w-[600px]" alt="About" />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <p className="text-lg text-blue-900 font-semibold">ABOUT US</p>
        <p className="text-3xl text-blue-900 font-bold mt-2">
          <span className="text-blue-500 font-bold">Making </span>Hospitals <span className="text-blue-500">In</span>
        </p>
        <p className="text-3xl text-blue-900 font-bold">Emergencies</p>

        {/* Text Content */}
        <p className="mt-4 text-gray-700 text-base md:text-lg">{textContent[currentText]}</p>

        {/* Pagination Dots */}
        <div className="flex justify-start mt-4 space-x-3">
          {textContent.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentText === index ? 'bg-blue-500 scale-110' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentText(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
