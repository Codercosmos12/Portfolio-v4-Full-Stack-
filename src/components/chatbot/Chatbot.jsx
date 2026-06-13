import React from 'react'

const Chatbot = () => {
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

            {/* Chat Area */}
            <div className='h-[450px] flex flex-col justify-center items-center p-8'>

                <div className='text-6xl mb-6'>
                    🤖
                </div>

                <h2 className='text-2xl font-semibold'>
                    Welcome to AI Assistant
                </h2>

                <p className='text-slate-400 mt-3 max-w-md'>
                    Ask anything about coding, web development,
                    JavaScript, React, portfolio projects,
                    or learning resources.
                </p>

                {/* Suggestion Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-2xl'>

                    <button className='bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-(--primary-color) hover:translate-y-[-4px] transition-all duration-300'>
                        🚀 Build a React Portfolio
                    </button>

                    <button className='bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-(--primary-color) hover:translate-y-[-4px] transition-all duration-300'>
                        ⚡ Learn JavaScript Faster
                    </button>

                    <button className='bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-(--primary-color) hover:translate-y-[-4px] transition-all duration-300'>
                        🎨 UI Design Ideas
                    </button>

                    <button className='bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-(--primary-color) hover:translate-y-[-4px] transition-all duration-300'>
                        📚 Study Plan
                    </button>

                </div>

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

                    <button className='bg-(--primary-color) text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300'>
                        Send
                    </button>

                </div>

            </div>

        </div>

    </div>

</div>
  )
}

export default Chatbot
