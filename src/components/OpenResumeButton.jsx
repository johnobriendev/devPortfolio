import React from 'react';
import { motion } from 'framer-motion';

const OpenResumeButton = () => {
  const openResume = () => {
    window.open('/JohnOBrienResume.pdf', '_blank');
  };

  return (
    <motion.button
      onClick={openResume}
      className="text-xl tracking-wide hover:text-neutral-200 transition-colors bg-transparent border-none cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      RESUME
    </motion.button>
  );
};

export default OpenResumeButton;
