import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiReact, SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import OpenResumeButton from './OpenResumeButton';

const Portfolio = () => {
  const slideIn = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const TechIcon = ({ Icon, label }) => (
    <div className="flex flex-col items-center mx-2">
      <Icon className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />
      <span className="text-sm mt-1">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-700 text-sky-100 font-extralight">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full shadow-md z-10 bg-gray-800">
        <div className="px-8 py-4">
          <Link to="/">
            <h1 className="text-xl md:text-3xl">John O'Brien</h1>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Work Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl mb-8 border-b border-sky-400 pb-2">Projects</h3>
            
            {/* Tremendo Project */}
            <div className="mb-12">
              <Link to="https://tremendo.pro/" className="text-xl text-sky-400 hover:text-sky-500" target="_blank">
                tremendo.pro
              </Link>
              <p className="mt-2 mb-4">
                Tremendo is a project management and team collaboration app. Users create Kanban boards to help them manage personal projects or work in a team environment. The app has a simple design with user friendly drag-and-drop implemented.
              </p>
              <video className="w-full rounded-lg shadow-lg mb-4" controls>
                <source src="tremendo-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-start space-x-4 mb-6">
                <TechIcon Icon={SiReact} label="React" />
                <TechIcon Icon={SiExpress} label="Express" />
                <TechIcon Icon={SiMongodb} label="MongoDB" />
                <TechIcon Icon={SiNodedotjs} label="Node" />
              </div>
            </div>

            {/* Chord Builder Project */}
            <div className="mb-12">
              <Link to="https://chordbuilder.netlify.app/" className="text-xl text-sky-400 hover:text-sky-500" target="_blank">
                Chord Builder
              </Link>
              <p className="mt-2 mb-4">
                Chord Builder allows the user to create chord or scale diagrams for the guitar 
                and organize them on a sheet in either a 4x4, 6x6, or 8x8 layout. The user can 
                then preview the chord sheet and download it as a pdf.
              </p>
              <video className="w-full rounded-lg shadow-lg mb-4" controls>
                <source src="cb-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-start mb-6">
                <TechIcon Icon={SiReact} label="React" />
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8, delay: 1 }}
            className="md:pl-8 md:border-l md:border-sky-400/20"
          >
            <h3 className="text-2xl mb-8 border-b border-sky-400 pb-2">About Me</h3>
            <div className="flex flex-col gap-6">
              <p>
                I have been a professional musician for over 10 years! I still teach and perform.
                <a className="text-sky-400 hover:text-sky-500 ml-2" href="#" target="_blank" rel="noopener noreferrer">
                  Music Website
                </a>
              </p>
              <p>
                I lived in Chile and Argentina for 2 years and was living in Buenos Aires when 
                Argentina won the World Cup. I love learning languages and different dialects.
              </p>
              <p>When I'm not working I love to play golf and drink mate.</p>
              
              <div className="mt-8 flex flex-col gap-3">
                <p>Email: <a href="mailto:johnobrien.dev@gmail.com" className="underline hover:text-sky-500" target="_blank">johnobrien.dev@gmail.com</a></p>
                <p>Github: <a href="https://github.com/johnobriendev" className="underline  hover:text-sky-500" target="_blank">johnobriendev</a></p>
                <p className="mb-10">LinkedIn: <a href="https://www.linkedin.com/in/johnobriendev/" className="underline  hover:text-sky-500" target="_blank">johnobriendev</a></p>

                <OpenResumeButton />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;