import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Portfolio/>
  //  <div className='bg-neutral-700 text-sky-100 font-extralight'>
  //    <Navbar/>
  //    <Outlet />
  //  </div>
  
     
    
  )
}

export default App
