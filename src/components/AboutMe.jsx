import { useState, useEffect } from 'react';
import OpenResumeButton from "./OpenResumeButton";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const typewriter = {
        hidden: { width: '0%' },
        visible: { width: '100%' }
    };

    const slideIn = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const TechIcon = ({ Icon, label }) => (
        <div className="flex flex-col items-center mx-2">
          <Icon className="w-6 h-6 text-sky-400" />
          <span className="text-sm mt-1">{label}</span>
        </div>
      );

    return (
        <div className="flex flex-col gap-3 max-w-2xl">
            {/* <motion.h1 
                className="text-4xl overflow-hidden whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={typewriter}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                John O'Brien
            </motion.h1>
            <motion.h2 
                className="text-xl"
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ duration: 0.8, delay: 2 }}
            >
                Software Developer
            </motion.h2> */}
            <motion.div
                initial="hidden"
                animate="visible"
                // variants={fadeIn}
                variants={slideIn}
                // transition={{ duration: 1, delay: 3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h3 className="text-2xl mb-4 underline ">Work</h3>
                <Link to='https://tremendo.pro/'className='text-xl text-sky-400 hover:text-sky-500' target="_blank">tremendo.pro</Link>
                <p className='mt-2 mb-4'>Tremendo is a project management and team collaboration app. I built it using Node.js, Express.js, and MongoDB for the server side and React.js for the user interface. I also used Resend for sending registration emails to users and Google Recaptcha for adding security during registration. </p>
                <video 
                className="w-full rounded-lg shadow-lg mb-4" 
                controls
                >
                <source src="tremendo-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <div className="flex justify-start space-x-4 mb-6">
                <TechIcon Icon={Code} label="React" />
                <TechIcon Icon={Server} label="Express" />
                <TechIcon Icon={Database} label="MongoDB" />
                <TechIcon Icon={Share2} label="Node" />
                </div>
                <Link to='https://chordbuilder.netlify.app/'className='text-xl text-sky-400 hover:text-sky-500' target="_blank">Chord Builder</Link>
                <p className='mt-2 mb-4'>Chord Builder allows the user to create chord or scale diagrams for the guitar and organize them on a sheet in either a 4x4, 6x6, or 8x8 layout. The user can then preview the chord sheet and download it as a pdf.</p>
                <video 
                className="w-full rounded-lg shadow-lg mb-4" 
                controls
                >
                <source src="cb-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            
                <div className="flex justify-start mb-6">
                <TechIcon Icon={Code} label="React" />
                </div>

            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                // variants={fadeIn}
                variants={slideIn}
                // transition={{ duration: 1, delay: 3 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                {/* <p className="mb-4">John O'Brien is a software developer from Bethlehem, Pennsylvania. He holds a B.A. in Economics, Philosophy, and Jazz Studies from the University of Pittsburgh.</p> */}

                <div className="flex flex-col gap-2 mt-8">
                    <h3 className="text-2xl underline ">About Me</h3>
                    <div className="flex flex-col gap-5 mb-5">
                        <p>I have been a professional musician for over 10 years! I still teach and perform. 
                        &nbsp; <a className="text-sky-400 hover:text-sky-500 font-normal" href="http://johnobrienguitar.com" target="_blank" rel="noopener noreferrer">Link to my Music Website</a>
                        </p>
                        <p>I lived in Chile and Argentina for 2 years and was living in Buenos Aires when Argentina won the World Cup. I love learning languages and different dialects.</p>
                        <p>When I'm not working I love to play golf and drink mate.</p>
                    </div>

                    <p>Email: <a href="mailto:johnobrien.dev@gmail.com" className="underline hover:text-sky-500" target="_blank">johnobrien.dev@gmail.com</a></p>
                    <p>Github: <a href="https://github.com/johnobriendev" className="underline  hover:text-sky-500" target="_blank">johnobriendev</a></p>
                    <p className="mb-10">LinkedIn: <a href="https://www.linkedin.com/in/johnobriendev/" className="underline  hover:text-sky-500" target="_blank">johnobriendev</a></p>

                   
                    <OpenResumeButton />
                   
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;


