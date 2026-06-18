import React, { useState } from "react";
import { RiTimeFill, RiLinkedinBoxFill, RiGithubFill, RiMailFill, RiInstagramFill    } from '@remixicon/react';
import { Link } from "react-router-dom";

const Contact = () => {
    const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"
    const footerLinks = "text-gray-400 transition-all duration-400 ease hover:text-white font-medium"
    const input = "bg-transparent w-full py-4 px-2 border-b border-[#1db6f8]/50 outline-none "
    const formGrp = "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-gradient-to-r after:from-[#1db6f8] after:via-[#14B8A6] after:to-[#8B5CF6] after:transition-all after:duration-400 after:ease focus-within:after:w-full"
    const contactLink = "flex gap-3 py-2 px-4  rounded-2xl text-left items-center group hover:translate-x-4 trnasition-all duration-400 ease"
    const LinkIcon = "text-(--primary-color) bg-blue-900 py-2 px-2 rounded-xl group-hover:rotate-[-15deg] group-hover:bg-gradient-to-r group-hover:from-[#1db6f8] group-hover:via-[#14B8A6] group-hover:to-[#8B5CF6] group-hover:transition-all group-hover:duration-400 ease group-hover:text-white"
    const linkBox = "flex flex-col gap-y-0.5"
    const platform = "text-[10px] text-gray-400 "
    const link = "text-[12px]"

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mail-send-backend-production.up.railway.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };


  return (
<div className='animate-fadeIn w-full flex justify-center items-center mt-12 px-4'>
    <title>Contact | ShayanProg</title>
  <div className='flex flex-col justify-center items-center gap-y-12 text-center w-full max-w-7xl m-12'>

    <div className='py-2 px-4 rounded-2xl border border-(--primary-color) bg-blue-950 animate-float w-fit text-(--primary-color) font-medium'>
      Let's Talk
    </div>

    <h1 className='text-3xl md:text-4xl'>
      Can we unpack this <span className={gradient}>together</span>?
    </h1>

    <p className='text-slate-400'>
      Have a project in mind or just want to say hi? I'd love to hear
      <br className='hidden sm:block' />
      from you.
    </p>

    <div className='grid grid-cols-1 lg:grid-cols-2  xl:gap-16 w-full justify-center items-center md:gap-8   '>

      {/* Contact Form */}
      <form onSubmit={sendMessage} className=' flex flex-col gap-y-6 bg-(--card-color) p-6 md:p-8 lg:p-12 relative before:content-[""] before:absolute before:top-0 before:left-0 before:h-[4.5px] before:bg-linear-to-r before:from-transparent before:via-[#1db6f8] before:to-transparent before:w-full rounded-2xl border-[0.1px] border-(--primary-color) w-full max-w-[650px] h-fit mt-10 hover:scale-101 transition-all duration-400 ease-in '>

        <div className={formGrp}>
          <input
  className={input}
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
/>
        </div>

        <div className={formGrp}>
          <input
  className={input}
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  type="email"
/>
        </div>

        <div className={formGrp}>
          <input
  className={input}
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
/>
        </div>

        <div className={formGrp}>
          <textarea className={input} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"/>
        </div>
        <div>
            <button className='bg-(--primary-color) py-3 w-full mt-6 rounded-xl font-black cursor-pointer hover:scale-102 transition-all duration-400 ease hover:shadow-[1px_1px_15px_var(--primary-color)]'>
                Send Messege
            </button>
        </div>
      </form>

      {/* Contact Info Card */}
      <div className='flex flex-col gap-y-8  text-left bg-(--card-color) p-4 md:p-8 lg:p-12 rounded-2xl w-full max-w-[450px] min-h-[400px] h-fit border border-(--primary-color) relative before:content-[""] before:absolute before:top-0 before:left-0 before:h-[4.5px] before:bg-linear-to-r before:from-transparent before:via-[#1db6f8] before:to-transparent before:w-full'>
        <h2 className='text-[20px] font-bold'>Let's Connect</h2>
        <div className='w-full flex gap-2 text-[16px] bg-blue-950 py-2 px-4 rounded-xl text-gray-300'><RiTimeFill className='text-(--primary-color) text-[10px] ' /> Chat with you shortly!</div>
        <div className='flex flex-col gap-y-6'>
            <div className={contactLink}>
                <div className={LinkIcon}><RiGithubFill/></div>
                <div className={linkBox}>
                    <div className={platform}>Github</div>
                    <div className={link}>https://github.com/Codercosmos12</div>
                </div>
            </div>
            <div className={contactLink}>
                <div className={LinkIcon}><RiLinkedinBoxFill/></div>
                <div className={linkBox}>
                    <div className={platform}>LinkedIn</div>
                    <div className={link}>https://www.linkedin.com/in/muhammad-shayan-1b272830a/</div>
                </div>
            </div>
            <div className={contactLink}>
                <div className={LinkIcon}><RiInstagramFill/></div>
                <div className={linkBox}>
                    <div className={platform}>Instagram</div>
                    <div className={link}>https://www.instagram.com/sinisteraura123/</div>
                </div>
            </div>
             <div className={contactLink}>
                <div className={LinkIcon}><RiMailFill/></div>
                <div className={linkBox}>
                    <div className={platform}>Email</div>
                    <div className={link}>ayanshayan507@gmail.com</div>
                </div>
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

  
</div>
  )
}

export default Contact
