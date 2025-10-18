import React from 'react';

const Footeri = () => {
  const faqData = [
    { question: "What does Pulse do?", answer: "Pulse is a health emergency app." },
    { question: "What is Pulse?", answer: "Pulse is a life-saving medical app." },
    { question: "How does Pulse help in case of emergencies?", answer: "It provides quick emergency services." },
    { question: "Can I use Pulse in case of emergencies?", answer: "Yes, it’s designed specifically for emergencies." },
    { question: "Can I link multiple medical insurances to my account?", answer: "Yes, you can link multiple policies." }
  ];

  return (
    <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
      {/* FAQ Section */}
      <section>
        <p className="text-blue-900 font-bold text-2xl md:text-xl mb-6">Frequently Asked Questions</p>
        <ul className="space-y-6 text-gray-600 font-medium">
          {faqData.map((item, index) => (
            <li 
              key={index} 
              className="group relative cursor-pointer"
            >
              <p className="hover:text-blue-700">{item.question}</p>
              <div 
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 opacity-0"
                style={{ transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
              >
                <p className="mt-2 text-sm text-gray-500">{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div className="hidden md:block w-px h-96 bg-gray-300 mx-auto mb-4"></div>

      {/* Form Section */}
      <section>
        <p className="text-blue-900 font-bold text-2xl md:text-xl mb-6 text-center md:text-left">
          Ask a Different Question
        </p>
        <form className="max-w-md mx-auto md:mx-0">
          <div className="relative">
            <label htmlFor="name" className="text-sm text-gray-700"></label>
            <input 
              type="text" 
              id="name" 
              placeholder="Name"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 transition p-2"
              required 
            />
          </div>
    
          <div className="relative">
            <label htmlFor="email" className="text-sm text-gray-700"></label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 transition p-2"
              required 
            />
          </div>
    
          <div className="relative">
            <label htmlFor="message" className="text-sm text-gray-700"></label>
            <textarea 
              id="message" 
              placeholder="Type your question..."
              rows="3"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 transition p-2 resize-none"
              required
            ></textarea>
          </div>
    
          <button 
            type="submit"
            className="bg-white p-6 py-2 text-black font-medium rounded-lg shadow-lg ml-80 mt-10 "
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Footeri;
