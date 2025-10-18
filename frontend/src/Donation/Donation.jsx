import React from 'react'
import Navbar from '../dashboard/overview/Navbar'
import sam from './sam.png'
import sem from './sem.png'
import bro from './bro.png'


const Donation = () => {
  return (
    <div>

    <Navbar/>

 
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header and Form Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Donation Form */}
          <div className="w-full">
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Donate blood Save lives</h1>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select
                  className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select
                  className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Age</option>
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Donate
              </button>
            </form>
          </div>

          {/* Right Side - Eligibility and Contact */}
          <div className="  ">
            {/* Eligibility */}
            <div className="bg-gray-100 pb-4 rounded-lg ml-40">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Eligibility</h2>
              <p className="text-gray-700">
                Every drop counts! Our blood donation program ensures that those in urgent need receive life-saving blood. By donating, you give hope and extend lives.
              </p>
              <p className="text-gray-700 mt-2">
                We bridge the gap between patients in need of organ transplants and willing donors. Whether it’s a kidney, liver, or other essential organs, we facilitate safe and ethical matches to give recipients a second chance at life.
              </p>
              <p className="text-gray-700 mt-2">
                If you or a loved one needs a transplant or if you’re willing to donate, we’re here to help. Click the Contact us button to learn more.
              </p>
            </div>

            {/* Contact Us */}
           
              {/* Contact Us */}
<div className="mt-4 ml-40">
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
  >
    Contact us
  </button>
</div>
              
           
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12 pb-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Success stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Laura Baker */}
            <div className="bg-blue-900 text-white  rounded-lg p-4 ">
                <div className='inline-flex'>
              <img
                src={bro} // Replace with actual image URL
                alt="Laura Baker"
                className="w-12 h-12 rounded-full object-cover"
               
              />
               <h3 className="font-semibold pt-2 pl-8">Laura Baker</h3>
               </div>
              <div className='pt-2 pl-2 text-gray-200'>
               
                <p>Pulse has been a really good experience for me and I highly recommend it.</p>
              </div>
            </div>

            {/* Sam Clinton */}
            <div className="bg-blue-900 text-white  rounded-lg p-4 ">
                <div className='inline-flex'>
              <img
                src={sam} // Replace with actual image URL
                alt="Laura Baker"
                className="w-12 h-12 rounded-full object-cover"
               
              />
               <h3 className="font-semibold pt-2 pl-8">Laura Baker</h3>
               </div>
              <div className='pt-2 pl-2 text-gray-200'>
               
                <p>Pulse has been a really good experience for me and I highly recommend it.</p>
              </div>
            </div>
            {/* Leighton Brody */}
            <div className="bg-blue-900 text-white  rounded-lg p-4 ">
                <div className='inline-flex'>
              <img
                src={sem} // Replace with actual image URL
                alt="Laura Baker"
                className="w-12 h-12 rounded-full object-cover"
               
              />
               <h3 className="font-semibold pt-2 pl-8">Laura Baker</h3>
               </div>
              <div className='pt-2 pl-2 text-gray-200'>
               
                <p>Pulse has been a really good experience for me and I highly recommend it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Donation
