import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import { LanguageProvider } from './contexts/LanguageContext'


function App() {
  

  return (
    <LanguageProvider>
    <div className='bg-neutral-700 text-sky-100 font-extralight'>
      <Portfolio />
    </div>
  </LanguageProvider>

     
    
  )
}

export default App
