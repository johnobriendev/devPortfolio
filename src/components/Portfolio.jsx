import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Portfolio component with Pure White & Cream color scheme
const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const fullName = "JOHN O'BRIEN";
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Typewriter effect
  useEffect(() => {
    if (displayedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    } else {
      // Set typing complete after a short delay
      const completeTimeout = setTimeout(() => {
        setTypingComplete(true);
      }, 800);
      
      return () => clearTimeout(completeTimeout);
    }
  }, [displayedText, fullName]);

  // Resume opener function
  const openResume = () => {
    window.open('/JohnOBrienResume.pdf', '_blank');
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Pure White & Cream color scheme
  const mainColor = "#FFFFFF"; // Pure white (hero)
  const secondaryColor = "#F5EBDD"; // Cream (projects)

  return (
    <div style={{ backgroundColor: mainColor }} className="min-h-screen text-black">
      {/* Navbar - Transparent and Minimal */}
      <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm shadow-sm' : ''
      }`} style={{ backgroundColor: scrolled ? `${mainColor}80` : 'transparent' }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-end items-center">
          {/* Home link - only visible when scrolled */}
          {scrolled && (
            <button
              onClick={() => scrollToSection('hero')}
              className="mr-auto text-sm hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              HOME
            </button>
          )}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            <button 
              onClick={() => scrollToSection('tremendo')} 
              className="text-sm hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              WORK
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              CONTACT
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 space-y-1.5">
              <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-40 py-4' : 'max-h-0'
        }`} style={{ backgroundColor: `${secondaryColor}80` }}>
          <div className="px-6 flex flex-col gap-4">
            {scrolled && (
              <button 
                className="py-2 text-sm text-left bg-transparent border-none" 
                onClick={() => scrollToSection('hero')}
              >
                HOME
              </button>
            )}
            <button 
              className="py-2 text-sm text-left bg-transparent border-none" 
              onClick={() => scrollToSection('tremendo')}
            >
              WORK
            </button>
            <button 
              className="py-2 text-sm text-left bg-transparent border-none" 
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: mainColor }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-wide h-20">
            {displayedText}
            <span className={`inline-block w-0.5 h-8 md:h-12 bg-black ml-1 align-middle animate-blink ${typingComplete ? 'opacity-0' : ''}`}></span>
          </h1>
        </motion.div>
      </section>
      
      {/* Tremendo Project Section */}
      <section id="tremendo" className="min-h-screen flex items-center" style={{ backgroundColor: secondaryColor }}>
        <div className="max-w-6xl mx-auto px-6 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 font-light">TREMENDO</h2>
              <p className="text-black/80 mb-8 text-lg">
                A kanban board productivity project management app. Features project management, 
                payment processing, and portfolio showcasing.
              </p>
              <motion.a 
                href="https://tremendo.pro/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                VIEW PROJECT
              </motion.a>
            </motion.div>
            
            {/* Screenshot Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/5 aspect-video rounded-lg overflow-hidden"
            >
              {/* Replace with actual screenshot */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-black/50">Screenshot: Tremendo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Chord Builder Project Section */}
      <section id="chordbuilder" className="min-h-screen flex items-center" style={{ backgroundColor: mainColor }}>
        <div className="max-w-6xl mx-auto px-6 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Screenshot Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/5 aspect-video rounded-lg overflow-hidden"
            >
              {/* Replace with actual screenshot */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-black/50">Screenshot: Chord Builder</span>
              </div>
            </motion.div>
            
            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 font-light">CHORD BUILDER</h2>
              <p className="text-black/80 mb-8 text-lg">
                Interactive web application for musicians to create, visualize, and hear chord progressions. 
                Includes a virtual piano and music theory analysis.
              </p>
              <motion.a 
                href="https://chordbuilder.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                VIEW PROJECT
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Learn The Notes Project Section */}
      <section id="learnthenotes" className="min-h-screen flex items-center" style={{ backgroundColor: secondaryColor }}>
        <div className="max-w-6xl mx-auto px-6 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 font-light">LEARN THE NOTES</h2>
              <p className="text-black/80 mb-8 text-lg">
                Educational tool designed to help musicians learn and memorize notes on the guitar fretboard.
                Features interactive exercises, progress tracking, and customizable practice sessions.
              </p>
              <motion.a 
                href="https://learnthenotes.netlify.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                VIEW PROJECT
              </motion.a>
            </motion.div>
            
            {/* Screenshot Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/5 aspect-video rounded-lg overflow-hidden"
            >
              {/* Replace with actual screenshot */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-black/50">Screenshot: Learn The Notes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Simplified */}
      <section id="contact" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: mainColor }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-10 items-center">
            <motion.a 
              href="mailto:johnobrien.dev@gmail.com"
              className="text-xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              JOHNOBRIEN.DEV@GMAIL.COM
            </motion.a>
            
            <motion.a 
              href="https://github.com/johnobriendev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              GITHUB
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/johnobriendev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              LINKEDIN
            </motion.a>
            
            <motion.button
              onClick={openResume}
              className="text-xl tracking-wide hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              RESUME
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;