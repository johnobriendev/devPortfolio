import React from 'react';
import { motion } from 'framer-motion';


const OpenResumeButton = () => {
  const openResume = () => {
    window.open('/JohnOBrienResume.pdf', '_blank');
  };

  return (
    <motion.button
        onClick={openResume}
        className="hover:bg-neutral-500 border text-white py-2 px-4 rounded w-24"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
    >
        Resume
    </motion.button>
);
  // return (
  //   <button 
  //     onClick={openResume} 
  //     className="text-white px-4 py-2 rounded border "
  //   >
  //      Resume
  //   </button>
  // );
};

export default OpenResumeButton;
