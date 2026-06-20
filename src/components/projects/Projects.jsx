import React from 'react'
import { RiExternalLinkFill, RiGithubFill } from '@remixicon/react';
import { Link } from "react-router-dom";


const Projects = () => {

    const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"
    const ProjectBox = "w-full bg-(--card-color) group rounded-xl overflow-hidden relative hover:translate-y-[-16px] transition-all duration-400 ease flex flex-col"
    const overlaybg = "h-40 sm:h-48 bg-blue-950 w-full flex justify-center items-center text-blue-700 rounded-t-xl shrink-0"
    const overlayContent = "absolute top-[30%] sm:top-[35%] left-0 w-full p-4 sm:p-5 flex flex-col gap-y-3 opacity-0 group-hover:animate-fadeIn2 animate-fadeOut transition-all duration-300 z-10"
    const techspans = "flex flex-wrap gap-2"
    const techSkill = "text-xs bg-blue-950 py-1.5 px-3 border border-(--primary-color) rounded-full cursor-pointer hover:translate-y-[-6px] transition-all duration-400 ease"
    const linkbtns = "flex gap-3"
    const btn = "p-2 border border-(--primary-color) rounded-xl hover:bg-(--primary-color) hover:text-black transition-all duration-400 ease hover:translate-y-[-3px] hover:scale-110"
    const textBox = "p-4 sm:p-5 lg:p-6 flex flex-col gap-y-1"
    const h2 = "text-sm sm:text-base lg:text-lg font-bold group-hover:text-(--primary-color) transition-all duration-400 ease"
    const para = "text-xs sm:text-sm text-slate-400 leading-relaxed"
    const footerLinks = "text-gray-400 transition-all duration-400 ease hover:text-white font-medium text-sm sm:text-base"

    return (
        <div className='flex flex-col justify-center items-center gap-y-6 sm:gap-y-10 mx-4 sm:mx-8 lg:mx-10 my-12 sm:my-20 animate-fadeIn'>
            <title>Projects | ShayanProg</title>

            {/* Badge */}
            <div className='flex justify-center items-center py-2 px-4 sm:py-2.5 sm:px-5 border border-(--primary-color) bg-blue-950 rounded-3xl text-xs sm:text-sm text-(--primary-color) font-semibold animate-float'>
                Projects
            </div>

            {/* Heading */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-center'>
                Featured <span className={gradient}>Endeavors</span>
            </h1>

            {/* Subtitle */}
            <p className='text-xs sm:text-sm text-slate-400 text-center px-4'>
                Digital products built to drive user growth and engagement.
            </p>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-10'>

                {/* Project 1 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS</span>
                            <span className={techSkill}>Javascript</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://xuan-dev.vercel.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/Portfolio-v1"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Portfolio-v1</h2>
                        <p className={para}>Frontend developer crafting clean, interactive, and modern web experiences with code and creativity.</p>
                    </div>
                </div>

                {/* Project 2 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS3</span>
                            <span className={techSkill}>Javascript</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://xuan-dev-v2.vercel.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/Portfolio-v2"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Portfolio-v2</h2>
                        <p className={para}>Frontend developer passionate about building clean, responsive, and visually appealing web experiences.</p>
                    </div>
                </div>

                {/* Project 3 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS3</span>
                            <span className={techSkill}>Javascript</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://xuan-dev-v3.vercel.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/Portfolio-v3"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Portfolio-v3</h2>
                        <p className={para}>Frontend Engineer dedicated to turning complex problems into intuitive, high-performance, and pixel-perfect web interfaces.</p>
                    </div>
                </div>

                {/* Project 4 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS3</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://net-cl.netlify.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/netflix-clone"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Netflix-Clone</h2>
                        <p className={para}>Netflix clone with movie sections, responsive design, smooth browsing, and a clean modern interface.</p>
                    </div>
                </div>

                {/* Project 5 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS3</span>
                            <span className={techSkill}>Javascript</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://px-generator.netlify.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/pixel-art-generator"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Pixel-Art-Generator</h2>
                        <p className={para}>Interactive pixel art generator with customizable grids, color tools, and a smooth creative drawing experience.</p>
                    </div>
                </div>

                {/* Project 6 */}
                <div className={ProjectBox}>
                    <div className={overlaybg}><RiExternalLinkFill /></div>
                    <div className={overlayContent}>
                        <div className={techspans}>
                            <span className={techSkill}>HTML5</span>
                            <span className={techSkill}>CSS3</span>
                            <span className={techSkill}>Javascript</span>
                        </div>
                        <div className={linkbtns}>
                            <a className={btn} href="https://movie-dis-app.netlify.app/"><RiExternalLinkFill /></a>
                            <a className={btn} href="https://github.com/Codercosmos12/movie-discovery-app"><RiGithubFill /></a>
                        </div>
                    </div>
                    <div className={textBox}>
                        <h2 className={h2}>Movie Discovery App</h2>
                        <p className={para}>A movie discovery application that lets users search and explore films, view posters, ratings, and details instantly using a movie database API.</p>
                    </div>
                </div>

            </div>

            {/* GitHub CTA Button */}
            <a
                className='flex border border-(--primary-color) py-4 px-6 sm:py-5 sm:px-8 lg:py-6 lg:px-10 text-base sm:text-lg lg:text-xl gap-2 justify-center items-center rounded-2xl mt-10 sm:mt-16 lg:mt-20 hover:bg-(--primary-color) hover:text-black font-extrabold transition-all duration-400 ease hover:translate-y-[-6px] hover:scale-103 w-full sm:w-auto'
                href="https://github.com/Codercosmos12/"
            >
                <RiGithubFill /> View All on Github
            </a>

            {/* Footer */}
            <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start w-full mt-20 sm:mt-28 lg:mt-32 mb-10 sm:mb-16'>

                {/* Brand */}
                <div className='flex flex-col w-full lg:w-1/2'>
                    <div>
                        <h3 className='font-black text-(--primary-color) hover:scale-105 transition-all duration-400 ease cursor-pointer mb-3 sm:mb-4 text-base sm:text-lg'>
                            SHAYANPROG
                        </h3>
                        <p className='text-slate-500 text-xs sm:text-sm'>
                            A passionate frontend developer who <br className='hidden sm:block' /> loves to create masterpieces
                        </p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className='grid grid-cols-2 gap-10 sm:gap-16 lg:gap-20 w-full lg:w-auto'>
                    <div className='flex flex-col gap-y-3 sm:gap-y-4'>
                        <h3 className='flex gap-2 mb-2 sm:mb-4 font-black text-sm sm:text-base'>Quick Access</h3>
                        <Link className={footerLinks} to="/">Home</Link>
                        <Link className={footerLinks} to="/components/about">About</Link>
                        <Link className={footerLinks} to="/components/projects">Projects</Link>
                        <Link className={footerLinks} to="/components/chatbot">Chatbot</Link>
                        <Link className={footerLinks} to="/components/contact">Contact</Link>
                    </div>
                    <div className='flex flex-col gap-y-3 sm:gap-y-4'>
                        <h3 className='flex gap-2 mb-2 sm:mb-4 font-black text-base sm:text-lg lg:text-xl'>Quick Links</h3>
                        <a className={footerLinks} href="https://github.com/Codercosmos12">Github</a>
                        <a className={footerLinks} href="https://www.linkedin.com/in/muhammad-shayan-1b272830a/">Instagram</a>
                        <a className={footerLinks} href="https://www.instagram.com/sinisteraura123/">Linkedin</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
