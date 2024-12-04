import Image from "next/image"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project"
import Skill from "./components/Skill"
import About from "./components/About"


export default function Home() {
  return (
    <div  className="bg-gray-900 text-green-400  "> 
      <Navbar/>
      <Hero/>
      <About/>
      


  <Skill/>
      <Project/>
    
    <Contact/>
      <Footer/>
    </div>
  
  )
}
