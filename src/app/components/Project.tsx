import React from 'react'
import Link from 'next/link'

const Project = () => {
  return (
    <div id="project">
    <section className="body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-300 mb-4">
            PROJECTS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-slate-400">
            These are some of my personal projects created using Next.js and Tailwind CSS. Explore to learn more about them!
          </p>
        </div>
  
        {/* Projects Grid */}
        <div className="flex flex-wrap -m-4">
          {/* Project 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover"
                src="p2.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="tracking-widest text-sm title-font font-semibold text-yellow-500 mb-1">
                  E-COMMERCE
                </h2>
                <h1 className="title-font text-lg font-bold text-slate-300 mb-3">
                  E-Commerce Project
                </h1>
                <p className="leading-relaxed text-slate-400">
                  This is my first e-commerce website built using Next.js.
                </p>
                <Link href="https://jareer-next-js-figma-website.netlify.app" target="_blank">
                  <p className="mt-4 text-yellow-500 font-bold hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Project 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover"
                src="P5.PNG"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="tracking-widest text-sm title-font font-semibold text-yellow-500 mb-1">
                  FOOD ORDERING
                </h2>
                <h1 className="title-font text-lg font-bold text-slate-300 mb-3">
                  Food Project
                </h1>
                <p className="leading-relaxed text-slate-400">
                  This is my first food ordering website built using Next.js.
                </p>
                <Link href="https://food-three-bay.vercel.app/" target="_blank">
                  <p className="mt-4 text-yellow-500 font-bold hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Project 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover"
                src="p3.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="tracking-widest text-sm title-font font-semibold text-yellow-500 mb-1">
                  GRAPHICS PROJECT
                </h2>
                <h1 className="title-font text-lg font-bold text-slate-300 mb-3">
                  Graphics Website
                </h1>
                <p className="leading-relaxed text-slate-400">
                  This is my first graphics-focused website built using Next.js and TypeScript.
                </p>
                <Link href="https://photography-website-lyart.vercel.app/" target="_blank">
                  <p className="mt-4 text-yellow-500 font-bold hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Divider */}
      <div className="w-full h-[4px] bg-blue-500 mx-auto"></div>
    </section>
  </div>
  
  )
}

export default Project
