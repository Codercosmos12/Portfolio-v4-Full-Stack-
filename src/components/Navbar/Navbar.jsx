import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navclasses =
        "relative p-4 lg:p-6 cursor-pointer before:content-[''] before:absolute before:h-[3px] before:left-0 before:bottom-0 before:w-0 before:bg-[var(--primary-color)] before:transition-all before:duration-400 before:ease-in-out hover:before:w-full hover:text-(--primary-color) transition-all duration-400 ease-in-out";

    return (
        <nav className='w-full text-white animate-fadeIn'>
            <div className='flex justify-between items-center'>
                <h3 className='p-4 lg:p-6 text-xl font-black tracking-wide text-(--primary-color) hover:scale-105 cursor-pointer transition-all duration-300 ease'>
                    ShayanProg
                </h3>

                <ul className='hidden md:flex font-medium p-2'>
                    <Link className={navclasses} to="/">Home</Link>
                    <Link className={navclasses} to="/components/about">About</Link>
                    <Link className={navclasses} to="/components/projects">Projects</Link>
                    <Link className={navclasses} to="/components/chatbot">Chatbot</Link>
                    <Link className={navclasses} to="/components/contact">Contact</Link>
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='md:hidden p-4 text-2xl'
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
                <div className='flex flex-col bg-(--card-color) border border-gray-700 rounded-xl mx-4 mb-4'>
                    <Link onClick={() => setMenuOpen(false)} className={navclasses} to="/">Home</Link>
                    <Link onClick={() => setMenuOpen(false)} className={navclasses} to="/components/about">About</Link>
                    <Link onClick={() => setMenuOpen(false)} className={navclasses} to="/components/projects">Projects</Link>
                    <Link onClick={() => setMenuOpen(false)} className={navclasses} to="/components/chatbot">Chatbot</Link>
                    <Link onClick={() => setMenuOpen(false)} className={navclasses} to="/components/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
