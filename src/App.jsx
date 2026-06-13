import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Page1 from './components/home/Page1'
import Page2 from './components/about/Page2'
import Page3 from './components/projects/Page3'
import Page4 from './components/chatbot/Page4'
import Page5 from './components/contact/Page5'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=' bg-(--bg-color) text-(--text-color)'>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Page1 />} />
       <Route path="/components/about" element={<Page2 />} />
       <Route path="/components/projects" element={<Page3 />} />
       <Route path="/components/chatbot" element={<Page4 />} />
       <Route path="/components/contact" element={<Page5 />} />
      </Routes>
    </div>
  )
}

export default App
