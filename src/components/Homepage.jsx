import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'


function Homepage () {
  return(
    <div className='mx-12  md:gap-10 h-screen'>
     <div className='pt-24'>
      <AboutMe />
     </div>
     <div className='mt-12 pb-24 md:mt-24'>
      <Skills />
     </div>
    </div>

   
  )
}

export default Homepage