import React, { useState } from "react";
import {
    RiTimeFill,
    RiLinkedinBoxFill,
    RiGithubFill,
    RiMailFill,
    RiInstagramFill
} from '@remixicon/react';
import { Link } from "react-router-dom";


const Contact = () => {
const [loading, setLoading] = useState(false);
 const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"
    const footerLinks = "text-gray-400 transition-all duration-400 ease hover:text-white font-medium"


    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userInput = input;

        setMessages((prev) => [
            ...prev,
            { role: "user", text: userInput }
        ]);

        setInput("");
setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userInput }),
            });

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                { role: "bot", text: data.reply }
            ]);

        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };


    return (

        <div className='flex flex-col items-center justify-center text-center w-full mt-24 px-4 animate-fadeIn'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium'>
                ChatBot <span className={gradient}>Assistant</span>
            </h1>

            <p className='text-slate-400 mt-6 text-sm md:text-base max-w-3xl'>
                A modern AI chatbot built to understand user queries, generate accurate responses,
                offer real-time assistance, and create seamless conversational interactions effortlessly.
            </p>

            <div className='flex justify-center items-center w-full mt-16'>

                <div className='w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl'>

                    {/* Header */}
                    <div className='flex justify-between items-center border-b border-white/10 p-5'>

                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>
                            <span className='text-lg font-semibold'>
                                AI Assistant
                            </span>
                        </div>

                        <span className='text-sm text-slate-400'>
                            By SHAYANPROG
                        </span>

                    </div>

                    <div className='h-[450px] flex flex-col p-4 overflow-y-auto space-y-3'>

                        {messages.length === 0 && (
                            <div className='flex flex-col justify-center items-center h-full text-center'>
                                <div className='text-6xl mb-4'>🤖</div>
                                <h2 className='text-2xl font-semibold'>Welcome to AI Assistant</h2>
                                <p className='text-slate-400 mt-3 max-w-md'>
                                    Ask anything about coding, React, JavaScript, or projects.
                                </p>
                            </div>
                        )}

                        {messages.map((msg, i) => (
                        {loading && (
  <div className="mr-auto bg-white/10 text-white p-2 rounded-lg text-sm">
    typing...
  </div>
)}
                            <div
                                key={i}
                                className={`max-w-[70%] p-3 rounded-lg text-sm ${msg.role === "user"
                                        ? "ml-auto bg-blue-500 text-white text-medium tracking-wide leading-relaxed"
                                        : "mr-auto bg-white/10 text-white"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                    </div>
                    {/* Input Area */}
                    <div className='border-t border-white/10 p-4'>

                        <div className='flex items-center gap-3 bg-black/20 rounded-xl p-2'>

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Ask anything..."
                                className="flex-1 bg-transparent outline-none px-3"
                            />

                            <button
                                onClick={sendMessage}
                                className='bg-(--primary-color) text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300'
                            >
                                Send
                            </button>

                        </div>

                    </div>

                </div>

            </div>

              <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 items-start w-full mt-32 mb-16'>
              <div className='flex flex-col w-full lg:w-1/2'>
                <div className="flex flex-col self-start text-left">
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


export default Contact
