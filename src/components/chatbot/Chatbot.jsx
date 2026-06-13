import React, { useState } from "react";
import {
    RiTimeFill,
    RiLinkedinBoxFill,
    RiGithubFill,
    RiMailFill,
    RiInstagramFill
} from '@remixicon/react';


const Contact = () => {

    const gradient = "bg-gradient-to-r from-[#1db6f8] via-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent"

    const input = "bg-transparent w-full py-4 px-2 border-b border-[#1db6f8]/50 outline-none"

    const formGrp = "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-gradient-to-r after:from-[#1db6f8] after:via-[#14B8A6] after:to-[#8B5CF6] after:transition-all after:duration-400 after:ease focus-within:after:w-full"


    const [formData, setFormData] = useState({

        name: "",
        email: "",
        subject: "",
        message: ""

    })


const handleChange = (e)=>{

    console.log(e.target.name, e.target.value);

    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

}


    const sendMessage = async (e) => {

        e.preventDefault();

         console.log("Sending Data:", formData);

        try {

console.log(formData)
            const response = await fetch(

                "http://localhost:5000/send-mail",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },


                    body: JSON.stringify(formData)

                }

            )


            const data = await response.json();



            if (data.success) {


                alert("Message Sent Successfully 🚀")


                setFormData({

                    name: "",
                    email: "",
                    subject: "",
                    message: ""

                })


            }



        } catch (error) {

            console.log(error)

            alert("Something went wrong")

        }


    }





    return (

        <div className='animate-fadeIn w-full flex justify-center items-center mt-12 px-4'>

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





                <form
                    onSubmit={sendMessage}

                    className='flex flex-col gap-y-6 bg-(--card-color) p-6 md:p-8 lg:p-12 relative before:content-[""] before:absolute before:top-0 before:left-0 before:h-[4.5px] before:bg-linear-to-r before:from-transparent before:via-[#1db6f8] before:to-transparent before:w-full rounded-2xl border border-(--primary-color) w-full max-w-[650px]'
                >





                    <div className={formGrp}>

                        <input

                            className={input}

                            required

                            name="name"

                            value={formData.name}

                            onChange={handleChange}

                            placeholder="Your Name"

                            type="text"

                        />

                    </div>





                    <div className={formGrp}>

                        <input

                            className={input}

                            required

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

                            placeholder="Subject (Optional)"

                            type="text"

                        />

                    </div>





                    <div className={formGrp}>

                        <textarea

                            className={input}

                            name="message"

                            value={formData.message}

                            onChange={handleChange}

                            placeholder="Your Message"

                        />

                    </div>





                    <button

                        type="submit"

                        className='bg-(--primary-color) py-3 w-full mt-6 rounded-xl font-black cursor-pointer hover:scale-102 transition-all duration-400 ease hover:shadow-[1px_1px_15px_var(--primary-color)]'

                    >

                        Send Message

                    </button>



                </form>





            </div>

        </div>


    )

}


export default Contact