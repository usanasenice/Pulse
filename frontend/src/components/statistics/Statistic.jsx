import React, { useState } from 'react';
import CountUp from 'react-countup';

const Statistic = () => {
  const [key, setKey] = useState(0); // Track the key to force remount

  const handleCountUpEnd = () => {
    setKey((prevKey) => prevKey + 1); // Change key to force remount and restart animation
  };

  return (
    <div className="bg-blue-950 text-white ml-4 sm:ml-10 md:ml-28 rounded-full p-8 sm:p-10 md:p-16 w-full sm:w-[100%] md:w-[1300px] flex flex-col items-center md:flex-row md:justify-around">
      <div className="text-center mb-6 md:mb-0">
        <p className="text-3xl text-blue-600 font-bold">PULSE</p>
        <p className="text-2xl font-bold">Statistics</p>
      </div>

      <div className="flex flex-col md:flex-row justify-around w-full md:w-auto">
        <div className="text-center mb-6 md:mb-0 mx-4">
          <p className="text-3xl font-bold">
            <CountUp
              key={key} // Changing the key will force remount
              start={0}
              end={1200}
              duration={3}
              separator=","
              onEnd={handleCountUpEnd} // Trigger handleCountUpEnd when animation ends
            />
            <span className="text-blue-800">K</span>+
          </p>
          <p className="mt-2 text-sm font-bold">Specialized Doctors</p>
        </div>

        <div className="text-center mb-6 md:mb-0 mx-4">
          <p className="text-3xl font-bold">
            <CountUp
              key={key} // Changing the key will force remount
              start={0}
              end={20000}
              duration={3}
              separator=","
              onEnd={handleCountUpEnd} // Trigger handleCountUpEnd when animation ends
            />
            <span className="text-blue-800">K</span>+
          </p>
          <p className="mt-2 text-sm font-bold">Treated Patients</p>
        </div>

        <div className="text-center mb-6 md:mb-0 mx-4">
          <p className="text-3xl font-bold">
            <CountUp
              key={key} // Changing the key will force remount
              start={0}
              end={95}
              duration={3}
              onEnd={handleCountUpEnd} // Trigger handleCountUpEnd when animation ends
            />
            <span className="text-blue-800">%</span>
          </p>
          <p className="mt-2 text-sm font-bold">Rwandan Hospitals</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
