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
                <p className='mt-2 mb-4'>Tremendo is a personal Kanban Board featuring an ExpressJS API and ReactJS front end.</p>
                <Link to='https://barrysdiscs.netlify.app/'className='text-xl text-sky-400 hover:text-sky-500' target="_blank">Barry's Discs</Link>
                <p className='mt-2 mb-4'>Disc Golf Ecommerce store with admin portal for the seller to upload disc pictures and charateristics.</p>
                <Link to='https://thewolfgolf.netlify.app/'className='text-xl text-sky-400 hover:text-sky-500' target="_blank">The Wolf</Link>
                <p className='mt-2'>The Wolf is a popular gambling game for golfers. This app keeps track of the golfers' scores as well as their points in the Wolf game. I plan on converting this to a native app.</p>


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

                    <p>Email: <a href="mailto:johnobrien.dev@gmail.com" className="underline hover:text-sky-500">johnobrien.dev@gmail.com</a></p>
                    <p>Github: <a href="https://github.com/johnobriendev" className="underline  hover:text-sky-500">johnobriendev</a></p>
                    <p className="mb-10">LinkedIn: <a href="https://www.linkedin.com/in/john-o-brien-a33bb6275/" className="underline  hover:text-sky-500">Here</a></p>

                   
                    <OpenResumeButton />
                   
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;


