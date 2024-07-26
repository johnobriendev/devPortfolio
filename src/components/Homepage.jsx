import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'


function Homepage () {
  return(
    <div className='mx-12 mb-12 min-h-screen'>
     <div className='pt-24'>
      <AboutMe />
     </div>
     {/* <div className='pb-24 mt-12 '>
      <Skills />
     </div> */}
    </div>

   
  )
}

export default Homepage