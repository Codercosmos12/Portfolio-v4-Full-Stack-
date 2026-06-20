import React, { useEffect, useState, useRef } from 'react'
import { RiReactjsFill, RiJavascriptFill, RiTailwindCssFill, RiArrowDownSLine, RiFlashlightFill, RiMarkPenLine, RiCodeSSlashLine, RiSpaceShip2Fill, RiDatabaseFill } from '@remixicon/react';
import { Link } from "react-router-dom";

const Intro = () => {
  const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"


  const lines = [
    "const developer = { ",
    '  name: "ShayanProg",',
    '  role: "Frontend Developer",',
    '  skills: [',
    '    "React", "Tailwind CSS"',
    '    "JavaScript", "HTML", "CSS"',
    '  ],',
    'passion: "Building Cool Stuff"',
    'create(){',
    ' return "Amazing Products"',
    '}',
    '};'
  ];

  const [output, setOutput] = useState(() =>
    Array(lines.length).fill("")
  );



  useEffect(() => {
    let lineIndex = 0;

    function typeLine() {
      let charIndex = 0;
      const currentLine = lines[lineIndex];

      let interval = setInterval(() => {
        charIndex++;

        setOutput((prev) => {
          const newArr = [...prev];
          newArr[lineIndex] = currentLine.slice(0, charIndex);
          return newArr;
        });

        if (charIndex === currentLine.length) {
          clearInterval(interval);
          lineIndex++;

          setTimeout(() => {
            if (lineIndex < lines.length) typeLine();
          }, 1);
        }
      }, 40); // smooth speed
    }

    typeLine();
  }, []);

  const floatingicons = 'text-(--primary-color) border-[0.4px] border-(--primary-color) h-[30px] w-[30px] p-1 rounded-[4px] flex justify-center items-center animate-float bg-gray-800'
  const box = "w-full flex flex-col p-8 bg-(--card-color) border border-gray-700 mt-12 rounded-xl text-left gap-6 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full hover:transform-[translateY(-8px)] hover:border-2 hover:border-(--primary-color) transition-all duration-400 ease-in-out group [perspective:1000px]"
  const boxicons = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] p-2 rounded-xl w-fit transition-all duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110"
  const boxbtext = "text-xl font-black"
  const boxstext = "text-slate-500"

function magneticButton() {
  const button = document.getElementById("surf-btn");

  if (!button) return;

  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = ((x / rect.width) - 0.5) * 20;
    const moveY = ((y / rect.height) - 0.5) * 20;

    button.style.translate = `${moveX}px ${moveY}px`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.translate = "0 0";
  });
}

magneticButton();

const footerLinks = "text-gray-400 transition-all duration-400 ease hover:text-white font-medium"


  return (
    // Root Container
<div className='flex flex-col items-center justify-center text-white animate-fadeIn px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
  <title>Home | ShayanProg</title>

      <div className='flex gap-3.5 font-semibold text-(--primary-color) self-start bg-blue-950 w-fit p-2 rounded-full border boder-(--primary-color) text-[10px] animate-float mb-10'><span className='animate-pulse'>✦</span>Available For Work</div>

      <div className='flex flex-col lg:flex-row p-4 justify-between items-center gap-10 lg:gap-20 w-full'>

        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight'>Creating <span className={gradient}>Inspiring</span> <br /> and Engaging <br /> Experiences <span className={gradient}>.</span></h1>
          <p className='text-slate-500 text-sm sm:text-base mt-6 max-w-2xl mx-auto lg:mx-0'>
            Frontend Developer specializing in creating fast, responsive, and visually engaging web applications. With a strong focus on clean code, performance optimization, and exceptional user experience, I build modern digital products that combine functionality, accessibility, and elegant design across all screen sizes.
          </p>
          <div className='mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-4'>
            <Link
              to="/components/contact"
              className="
    relative inline-flex items-center justify-center
    w-25 h-8
    overflow-hidden rounded-full
    border border-(--primary-color)
    text-white text-[12px] font-bold
    transition-all duration-500
    before:absolute
    before:top-0 before:bottom-0
    before:left-[-20%] before:right-[-20%]
    before:bg-(--primary-color)
    before:content-['']
    before:-skew-x-45
    before:scale-x-0
    before:transition-transform
    before:duration-500
    before:z-0
    hover:text-black hover:border-none
    hover:before:scale-x-100
  "><span className="relative z-10">Contact Me</span></Link>

            <Link to="/components/chatbot" className='scale-100   py-1.5 px-4 rounded-8 border-none bg-(--primary-color)   text-white cursor-pointer font-medium text-[14px]   rounded-full hover:animate-jello'>Chatbot</Link>
          </div>
        </div>

        <div
          id="terminal"
          className="relative w-full lg:w-1/2 rounded-xl border border-gray-700 bg-(--card-color) font-mono overflow-visible"
        >
          {/* Left Middle JS */}
          <div className="absolute left-0 top-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
            <RiJavascriptFill className={floatingicons} />
          </div>

          {/* Top Right React */}
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10">
            <RiReactjsFill className={floatingicons} />
          </div>

          <div className="flex items-center gap-4 border-b border-gray-700 px-5 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
            </div>

            <p className="text-xs text-gray-500">
              developer.js
            </p>
          </div>

          <div className="px-5 py-4 overflow-x-auto">
            {output.map((line, i) => (
              <p
                key={i}
                className="text-xs leading-6 whitespace-pre-wrap break-words"
              >
                {line || " "}
              </p>
            ))}
          </div>

          {/* Bottom Left Tailwind */}
          <div className="absolute -left-3 bottom-1 z-10">
            <RiTailwindCssFill className={floatingicons} />
          </div>

          {/* Bottom Right JS */}
          <div className="absolute -right-5 bottom-20 z-10">
            <RiDatabaseFill className={floatingicons} />
          </div>
        </div>
      </div>
      <div className='mt-24 md:mt-36 flex flex-col justify-center items-center w-full'>
        <div className='text-(--primary-color) animate-float'><RiArrowDownSLine /></div>
        <div className='bg-blue-950  py-2 px-4 rounded-full border boder-(--primary-color) text-(--primary-color) text-[14px] mt-12 '>My Craft</div>
        <h1 className='text-3xl mt-12'>Designed with <span className={gradient}>exactitude</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-4 gap-5 w-full'>
          <div className={box} >
            <div className={boxicons}><RiFlashlightFill /></div>
            <h2 className={boxbtext}>Execution</h2>
            <p className={boxstext}>Eliminate bounce rates with instant load times. Give your users the speed they expect.</p>
          </div>
          <div className={box}>
            <div className={boxicons}><RiMarkPenLine /></div>
            <h2 className={boxbtext}>Visual Design</h2>
            <p className={boxstext}>Striking looks meet zero friction. We create interfaces that captivate eyes and simplify the user path.</p>
          </div>
          <div className={box}>
            <div className={boxicons}><RiCodeSSlashLine /></div>
            <h2 className={boxbtext}>Complex Frontend Logic</h2>
            <p className={boxstext}> From API data to polished user interfaces. Clean client-side logic and robust state management built to scale. </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center  text-center'>
        <div id='movablezone' className='flex w-full bg-(--card-color) p-6 sm:p-8 md:p-12 border border-gray-700 mt-26 rounded-xl flex-col gap-10'>
          <h1 className='text-3xl font-black'>Looking to elevate your digital <span className={gradient}>presence</span>?</h1>
          <p className='text-[#a1a1aa] text-sm '>Let's turn your ideas into reality with code that  performs <br /> and designs that impress.</p>
          <a  id='surf-btn' className='flex self-center gap-2 py-4 px-6 bg-linear-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] font-bold rounded-2xl transition-all duration-400 ease-out' href="#">Start Project <RiSpaceShip2Fill /></a>
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

export default Intro
