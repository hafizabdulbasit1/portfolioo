"use client;"

import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

import React from 'react'




const Hero = () =>{
  return (
<div>
  <section className="body-font bg-fixed bg-cover bg-center custom-image">
    <div className="container mx-auto flex px-12 py-2 flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="title-font text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-300 mb-4 leading-tight">
          I AM A FULL STACK WEB DEVELOPER
          <br className="hidden lg:inline-block" />
        </h1>
        <div className="w-24 h-1 bg-yellow-500 my-4"></div>
        <p className="leading-relaxed font-medium text-slate-400 text-base md:text-lg lg:text-xl">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
          tote bag selvage hot chicken authentic turmeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="#skill">
            <button className="inline-flex text-black bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-500 rounded text-base md:text-lg font-semibold">
              Skills
            </button>
          </Link>
          <Link href="#contact">
            <button className="inline-flex ml-4 text-black bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-500 rounded text-base md:text-lg font-semibold">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 pt-8 md:mt-0">
        <img
          className="object-cover object-center mx-auto mr-20 rounded-full max-w-xs sm:max-w-lg"
          alt="hero"
          src="basit.jpg"
          width={400}
          height={200}
        />
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center mt-8 space-x-6">
      <a href="https://github.com/hafizabdulbasit1" target="_blank" className="hover:text-gray-500">
        <FaGithub className="w-10 h-10 sm:w-12 sm:h-12" />
      </a>
      <a href="https://wa.me/03097779809" target="_blank" className="hover:text-green-500 text-green-300 bg-black rounded-full">
        <FaWhatsapp className="w-10 h-10 sm:w-12 sm:h-12" />
      </a>
      <a href="https://facebook.com" target="_blank" className="hover:text-blue-700 text-white bg-black rounded-full">
        <FaFacebook className="w-10 h-10 sm:w-12 sm:h-12" />
      </a>
      <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 text-orange-500 bg-black rounded-full">
        <FaInstagram className="w-10 h-10 sm:w-12 sm:h-12" />
      </a>
      <a href="https://www.youtube.com/@thekingofthewold" target="_blank" className="hover:text-red-600 text-red-600 bg-black rounded-full">
        <FaYoutube className="w-10 h-10 sm:w-12 sm:h-12" />
      </a>
    </div>

    {/* Gradient Bars */}
    <div className="mt-12 space-y-4">
      {/* Right-aligned Bars */}
      <div className="flex justify-end">
        <div className="w-52 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>
      <div className="flex justify-end">
        <div className="w-44 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>
      <div className="flex justify-end">
        <div className="w-52 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>

      {/* Left-aligned Bars */}
      <div className="flex justify-start">
        <div className="w-52 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>
      <div className="flex justify-start">
        <div className="w-44 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>
      <div className="flex justify-start">
        <div className="w-52 h-2 bg-gradient-to-r from-green-500 to-yellow-500"></div>
      </div>
    </div>
  </section>
</div>

  
  )
}

export default Hero

