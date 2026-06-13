import React from 'react'
import Navbar from '../Navbar/Navbar'
import { RiReactjsFill, RiJavascriptFill, RiTailwindCssFill, RiArrowDownSLine, RiFlashlightFill, RiMarkPenLine, RiCodeSSlashLine, RiSpaceShip2Fill, RiDatabaseFill, RiArrowRightLongLine, RiFileDownloadFill, RiPaintBrushFill, RiServerFill, RiDatabase2Fill, RiSettings6Fill } from '@remixicon/react';
import { Link } from "react-router-dom";

const About = () => {

  const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"
  const bgGradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6]"
  const p = "text-[12px] text-slate-400 mb-8"
  const shapeRing = "absolute border-2 border-[rgba(139, 92, 246)]"
  const workboxes = "flex items-center gap-3 text-slate-400 hover:text-white font-medium px-2 sm:px-4 py-2 hover:translate-x-3 transition-all duration-300 ease"
  const skills =
"flex flex-col gap-y-6 w-full p-5 sm:p-8 bg-(--card-color) rounded-xl border border-gray-700 hover:translate-y-[-10px] hover:border-(--primary-color) transition-all duration-400 ease"
  const range = "appearence-none cursor-default w-full h-2 rounded-full bg-gray-700 appearance-none"
  const skillspans = "flex items-center justify-center text-[11px] border border-(--primary-color) py-2 px-4 bg-blue-950 rounded-full text-(--primary-color) hover:translate-y-[-7px] transtion-all duration-400 ease cursor-pointer"
  const footerLinks = "text-gray-400 transition-all duration-400 ease hover:text-white font-medium"

  return (
    <div className='flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 animate-fadeIn'>
      <title>About | ShayanProg</title>
      <div className='flex  bg-blue-950 w-fit py-1 px-2 text-sm text-(--primary-color)  border border-(--primary-color) rounded-3xl font-bold animate-float mb-6 gap-2'>
        <span className='animate-pulse'>✦</span> About
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16'>
        <div className='w-full lg:w-[60%]'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1 mb-6'>I'm Shayan — A developer who <span className={gradient}>builds with purpose</span></h1>
          <p className={p}>I am a passionate Front-End Developer currently focused on building modern, responsive, and interactive web applications. I enjoy working with HTML, CSS, JavaScript, and React to create smooth user experiences and continuously improve my development skills.</p>
          <p className={p}>In the future, I aim to achieve the CGS scholarship and grow my career in the tech industry by studying and working in an advanced learning environment. I am dedicated to improving my skills every day and moving step by step toward my long-term goals.</p>
        </div>
        <div className="perspective-[1000px] mt-8 lg:mt-0">
  <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center overflow-hidden rotate-x-12">

            {/* Ring 1 */}
            <div className="absolute w-[90%] h-[90%] rounded-full border border-[rgba(139,92,246,0.3)] border-t-(--primary-color) animate-Ring1"></div>

            {/* Ring 2 */}
            <div className="absolute w-[250px] h-[250px] rounded-full border border-[rgba(99,102,241,0.3)] border-b-(--primary-color) animate-Ring2"></div>

            {/* Ring 3 */}
            <div className="absolute w-[180px] h-[180px] rounded-full border border-[rgba(6,182,212,0.3)] border-r-(--primary-color) animate-Ring3"></div>

            {/* Center Logo */}
            <div className="w-[110px] h-[110px] rounded-full bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_100px_var(--primary-color)] text-white text-3xl font-bold">
              SP
            </div>

          </div>
        </div>
      </div>
      <div className='mt-20 lg:mt-40'>
        <h3 className='font-semibold mb-8'>How I Work</h3>
        <div className='flex flex-col gap-y-4 ml-4'>
          <div className={workboxes}><RiArrowRightLongLine className='bg-blue-600 text-white p-1  font-bold text-5xl rounded-[5px] ' /> <span>Validate your beliefs; do not guess.</span></div>
          <div className={workboxes}><RiArrowRightLongLine className='bg-blue-600 text-white p-1  font-bold text-5xl rounded-[5px] ' /> <span>Write code that humans can read</span></div>
          <div className={workboxes}><RiArrowRightLongLine className='bg-blue-600 text-white p-1  font-bold text-5xl rounded-[5px] ' /> <span>Ensure quality, embrace deployment.</span></div>
          <div className={workboxes}><RiArrowRightLongLine className='bg-blue-600 text-white p-1  font-bold text-5xl rounded-[5px] ' /> <span>Frequent, decisive, and open dialogue</span></div>
        </div>
      </div>
      <div className='mt-8'>

        <a download href="/Resume.pdf" className='bg-[#241e45] py-5 px-9 w-fit flex justify-center items-center gap-2 border border-(--primary-color) rounded-2xl m-12 transform-[translateY(-4px)]  hover:shadow-[0_2px_10px_var(--primary-color)] hover:scale-103 transition-all duration-400 ease group'><RiFileDownloadFill className='text-(--primary-color) group-hover:animate-pulse transition-all duration-400 ease-in-out' />Download Resume</a>


        
      </div>

      <div className='flex flex-col justify-center items-center my-12'>
        <div className='bg-blue-950 w-fit flex justify-center items-center border border-(--primary-color) py-2 px-4 rounded-3xl animate-float '>Skills</div>

        <h1 className='text-5xl font-medium mt-10' >Technologies I <span className={gradient}>master</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">

          <div className={skills}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <RiPaintBrushFill className='text-(--primary-color) ' /> Frontend
            </h2>

            <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-300">
              <span className={skillspans}>React</span>
              <span className={skillspans}>Tailwind CSS</span>
              <span className={skillspans}>Typescript</span>
            </div>

            <div className='w-full bg-gray-700 rounded-[999px] h-2'>
              <div className='bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] h-2 rounded-[999px] w-[90%] '></div>
            </div>
          </div>

          <div className={skills}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <RiServerFill className='text-(--primary-color) ' /> Backend
            </h2>

            <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-300">
              <span className={skillspans}>Node.js</span>
              <span className={skillspans}>Python</span>
            </div>
            <div className='w-full bg-gray-700 rounded-[999px] h-2'>
              <div className='bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] h-2 rounded-[999px] w-[70%] '></div>
            </div>
          </div>

          <div className={skills}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <RiDatabase2Fill className='text-(--primary-color) ' /> Database
            </h2>

            <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-300">
              <span className={skillspans}>MongoDB</span>
              <span className={skillspans}>Firebase</span>
            </div>

            <div className='w-full bg-gray-700 rounded-[999px] h-2'>
              <div className='bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] h-2 rounded-[999px] w-[76%] '></div>
            </div>
          </div>

          <div className={skills}>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <RiSettings6Fill className='text-(--primary-color) ' /> DevOps & Tools
            </h2>

            <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-300">
              <span className={skillspans}>Git</span>
              <span className={skillspans}>Linux</span>
              <span className={skillspans}>Vercel</span>
              <span className={skillspans}>Netlify</span>
            </div>
            <div className='w-full bg-gray-700 rounded-[999px] h-2'>
              <div className='bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] h-2 rounded-[999px] w-[70%] '></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 items-start w-full mt-32 mb-16'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <div>
            <h3 className='font-black text-(--primary-color) hover:scale-105 transition-all duration-400 ease cursor-pointer mb-4'>SHAYANPROG</h3>
            <p className='text-slate-500 text-sm'>A passionate frontend developer who <br /> loves to create masterpieces</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20'>
          <div className='flex flex-col gap-y-4 '>
            <h3 className='flex gap-2 mb-4 font-black'>Quick Access</h3>
            <Link className={footerLinks} to="/">Home</Link>
            <Link className={footerLinks} to="/components/about">About</Link>
            <Link className={footerLinks} to="/components/projects">Projects</Link>
            <Link className={footerLinks} to="/components/chatbot">Chatbot</Link>
            <Link className={footerLinks} to="/components/contact">Contact</Link>
          </div>
          <div className='flex flex-col gap-y-4  '>
            <h3 className='flex gap-2 mb-4 font-black text-xl '>Quick Links</h3>
            <a className={footerLinks} href="https://github.com/Codercosmos12">Github</a>
            <a className={footerLinks} href="https://www.linkedin.com/in/muhammad-shayan-1b272830a/">Instagram</a>
            <a className={footerLinks} href="https://www.instagram.com/sinisteraura123/">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
