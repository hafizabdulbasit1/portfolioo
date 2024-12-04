import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    
<footer className="body-font bg-black text-white">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    {/* Logo and Name */}
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image src="/potfolio.png" width={70} height={100} alt="Abdul Basit Logo" />
      <span className="ml-3 text-2xl font-extrabold">Abdul Basit</span>
    </a>

    {/* Copyright */}
    <p className="font-semibold text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-white">
      © 2024 Abdul Basit
    </p>

    {/* Social Media Icons */}
    <span className="inline-flex sm:ml-auto ml-3 sm:mt-0 mt-4 justify-center sm:justify-start">
      <div className="flex space-x-6">
        {/* GitHub Icon */}
        <a href="https://github.com/hafizabdulbasit1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-10 h-10 text-gray-300 hover:text-white transition duration-300" />
        </a>

        {/* WhatsApp Icon */}
        <a href="tel:03097779809" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-10 h-10 text-green-400 hover:text-white transition duration-300" />
        </a>

        {/* Facebook Icon */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-10 h-10 text-blue-700 hover:text-white transition duration-300" />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-10 h-10 text-pink-500 hover:text-white transition duration-300" />
        </a>

        {/* YouTube Icon */}
        <a href="https://www.youtube.com/@thekingoftheworld" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-10 h-10 text-red-600 hover:text-white transition duration-300" />
        </a>
      </div>
    </span>
  </div>
</footer>



      
   
  )
}

export default Footer
