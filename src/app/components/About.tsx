import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
<div id="about">
  <section className="text-gray-900 body-font bg-black">
    <div className="container mx-auto flex flex-wrap px-5 py-12 md:flex-row flex-col items-center">
      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0  ">
        <img
          className="object-cover object-center  w-[20rem] md:w-[25rem] h-[30rem] md:h-[36rem] rounded-2xl mx-auto"
          alt="hero"
          src="basit2.jpg"
        />
      </div>

      {/* Content Section */}
      <div className="py-4 bg-yellow-200 opacity-90 h-auto md:h-[36rem] w-full md:w-[20rem] rounded-2xl lg:flex-grow md:w-1/2 lg:px-10 md:px-8 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="text-black title-font text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          About ME
          <div className="bg-yellow-500 font-bold w-20 md:w-[163px] h-[4px] mx-auto md:mx-0"></div>
        </h1>
        <p className="mb-4 leading-relaxed text-black font-medium text-sm md:text-base lg:text-lg">
          I am Hafiz Abdul Basit, a class XII student currently enrolled in GIAIC at Governor House Sindh.
          <br />
          Welcome to a place where shopping meets convenience! Founded with a vision to revolutionize the online shopping experience, we bring you a user-friendly platform offering a diverse range of products, from fashion and electronics to daily essentials.
          <br />
          Our mission is simple: to provide high-quality products at affordable prices, all from trusted sellers. We believe in making online shopping easy, secure, and enjoyable, with a focus on excellent customer service, fast delivery, and seamless transactions.
        </p>
        <div className="flex justify-center md:justify-start font-bold">
          <a href="#contact">
            <button className="inline-flex text-black bg-green-500 border-0 my-8 py-2 px-10 md:py-3 md:px-14 focus:outline-none hover:bg-yellow-500 rounded text-base md:text-lg lg:text-xl">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>



  )
}

export default About
