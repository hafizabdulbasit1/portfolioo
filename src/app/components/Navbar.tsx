import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCloudDownloadAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=' z-50 sticky top-0 bg-slate-300'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image width={70} height={100} src="/potfolio.png" alt="nope" className='rounded-full ' />



      <span className=" text-3xl font-bold">Abdul Basit </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link  href={"#"} className="mr-5 hover:text-blue-500 font-bold ">Home</Link >
      <Link  href={"#about"} className="mr-5 hover:text-blue-500 font-bold">About</Link >
      <Link  href={"#skill"} className="mr-5 hover:text-blue-500 font-bold">Skills</Link >
      <Link  href={"#project"} className="mr-5 hover:text-blue-500 font-bold">Projects</Link >
      <Link  href={"#contact"} className="mr-5 hover:text-blue-500 font-bold">Contact</Link >
    </nav>
    <a href="basitcv.pdf" target='blank' >
    <button className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xl mt-4 md:mt-0">Download CV 
     
        <FaCloudDownloadAlt  className=' texl-xl ml-2 w-6 h-6' />
    </button>
      </a>
    
  </div>
</header>
    </div>
  )
}

export default Navbar
 