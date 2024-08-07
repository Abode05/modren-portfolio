import React from 'react'
import { education } from '../../constant/data'
// src/ExperienceTimeline.js

// src/ExperienceTimeline.js
 





const Experience = () => {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-center   relative ">
      <div className="relative">
        {/* top shape */}
        <div className="h-8 w-8 bg-teal-600 rounded-md absolute right-24 -top-1 md:top-3"></div>
        <div className="h-6 w-6 bg-teal-600 rounded-full absolute right-12 top-24"></div>
        <div className="h-4 w-4 bg-teal-600 rounded-full absolute right-48 -top-6"></div>
        {/* bottom shape */}
        <div className="h-8 w-8 bg-teal-600 rounded-md absolute left-4 -bottom-4"></div>
        <div className="h-4 w-4 bg-teal-600 rounded-full absolute -left-0 md:-left-6 bottom-20"></div>
        <div className="h-4 w-4 bg-teal-600 rounded-full absolute left-32 -bottom-12"></div>
        <div className="text-center mb-6">
          <p className="text-teal-400">Education and Experience</p>
          <h2 className="text-3xl font-bold text-center mb-8">
            Education & Experience
          </h2>
        </div>

        <div className="flex justify-around items-center gap-10 p-6 ">
          <div className="flex flex-col gap-20 ">
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="z-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute h-48 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Experience Designer</h3>
                <p className="text-gray-500 max-w-md ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="h-16 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 ">
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="z-10 w-4 h-4 bg-blue-500 rounded-full "></div>
                <div className="absolute h-48 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Experience Designer</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="h-16 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};



export default Experience
