import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';


const OpenResumeButton = () => {
  const { translations: t } = useLanguage();


  const openResume = () => {
    window.open('/JohnOBrienResume.pdf', '_blank');
  };

  return (
    <motion.button
        onClick={openResume}
        className="hover:bg-neutral-500 border text-white py-2 px-6 rounded min-w-[96px]"
        whileHover={{ scale: 1.10 }}
        whileTap={{ scale: 0.95 }}
    >
        {t.contact.resume}
    </motion.button>
);
};

export default OpenResumeButton;
