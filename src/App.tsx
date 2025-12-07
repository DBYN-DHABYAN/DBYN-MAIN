import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Project33Page from './pages/Project33Page'
import Project22Page from './pages/Project22Page'
import OurModelPage from './pages/OurModelPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project-33" element={<Project33Page />} />
      <Route path="/project-22" element={<Project22Page />} />
      <Route path="/our-model" element={<OurModelPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
