import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";

const Skill = () => {
  return (
    <div id="skill">
  <section className="body-font bg-black">
    <div className="container px-12 py-24 mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-slate-300 mb-20 tracking-wide">
        SKILLS
      </h1>

      <div className="flex flex-wrap -mx-4">
        {/* HTML Skill */}
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full flex flex-col sm:flex-row items-center border-4 border-orange-500 rounded-lg bg-gray-800">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-yellow-500 font-bold mb-4 sm:mb-0 sm:mr-4">
            <FaHtml5 className="w-8 h-8" />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h2 className="text-slate-200 text-xl font-bold mb-2">HTML</h2>
            <div className="h-2 w-full relative bg-gray-300 rounded-xl">
              <div className="absolute bg-yellow-500 h-2 rounded w-[100%]"></div>
            </div>
            <p className="font-bold text-yellow-400 text-right mt-2">100%</p>
          </div>
        </div>

        {/* CSS Skill */}
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full flex flex-col sm:flex-row items-center border-4 border-orange-500 rounded-lg bg-gray-800">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-yellow-500 font-bold mb-4 sm:mb-0 sm:mr-4">
            <FaCss3Alt className="text-3xl" />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h2 className="text-slate-200 text-xl font-bold mb-2">CSS</h2>
            <div className="h-2 w-full relative bg-gray-300 rounded-xl">
              <div className="absolute bg-yellow-500 h-2 rounded w-[70%]"></div>
            </div>
            <p className="font-bold text-yellow-400 text-right mt-2">70%</p>
          </div>
        </div>

        {/* JavaScript Skill */}
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full flex flex-col sm:flex-row items-center border-4 border-orange-500 rounded-lg bg-gray-800">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-yellow-500 font-bold mb-4 sm:mb-0 sm:mr-4">
            <IoLogoJavascript className="text-3xl" />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h2 className="text-slate-200 text-xl font-bold mb-2">JavaScript</h2>
            <div className="h-2 w-full relative bg-gray-300 rounded-xl">
              <div className="absolute bg-yellow-500 h-2 rounded w-[50%]"></div>
            </div>
            <p className="font-bold text-yellow-400 text-right mt-2">50%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Skill
