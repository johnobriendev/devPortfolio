import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

function Navbar() {
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
    
    return(
        <nav className="fixed top-0 left-0 w-full shadow-md z-10 px-8 bg-gray-800 text-white" >
            <div className="w-full flex justify-between items-center gap-4 p-4 sm:gap-8  sm:text-sm">
                <motion.h1 
                className="text-4xl overflow-hidden whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={typewriter}
                transition={{ duration: 2.5, delay: 0.0 }}
            >
                  <Link to="/"> <h1 className="text-xl md:text-3xl" href="/">John O'Brien</h1> </Link> 
            </motion.h1>
{/*                
               <Link to="/"> <h1 className="text-xl md:text-3xl" href="/">John O'Brien</h1> </Link>    
               
                <Link to='/projects'>Projects</Link>  */}
            </div>
        </nav>
        
    )
}

export default Navbar