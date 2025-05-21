import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Portfolio component with Pure White & Cream color scheme
const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
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

  // Image enlargement
  const openEnlargedImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

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
  const mainColor = "#f9f4ec"; 
  const secondaryColor = "#ecf1f9"; 

  // Project data - makes it easier to render projects
  const projects = [
    {
      id: "tremendo",
      title: "TREMENDO",
      description: "A kanban board productivity project management app. Features project management, payment processing, and portfolio showcasing.",
      url: "https://tremendo.pro/",
      image: "tremendo.png",
      bgColor: secondaryColor
    },
    {
      id: "learnthenotes",
      title: "LEARN THE NOTES",
      description: "Educational tool designed to help musicians learn and memorize notes on the guitar fretboard. Features interactive exercises, progress tracking, and customizable practice sessions.",
      url: "https://learnthenotes.netlify.app",
      image: "learnthenotes.png",
      bgColor: mainColor
    },
    {
      id: "notionesque",
      title: "NOTIONESQUE",
      description: "Notionesque is a task management tool with Kanban and List views and search and filtering abilities. Features drag-and-drop functionality and categorized task organization.",
      url: "https://notionesque.netlify.app/",
      image: "notionesque.png",
      bgColor: secondaryColor
    },
    {
      id: "chordbuilder",
      title: "CHORD BUILDER",
      description: "Interactive web application for musicians to create, visualize, and hear chord progressions. Includes a virtual piano and music theory analysis.",
      url: "https://chordbuilder.netlify.app/",
      image: "chordbuilder.png",
      bgColor: mainColor
    },
    {
      id: "album",
      title: "STEVE AND JOHN'S ALBUM",
      description: "An independent music player that switches images based on the current song. I recorded this album with my friend Steve in the fall of 2021 and have used this project as an opportunity to debut it.",
      url: "https://steveandjohnalbum.netlify.app/",
      image: "albumdemo.png",
      bgColor: secondaryColor
    }
  ];

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
          <h1 className="text-6xl md:text-8xl font-light tracking-wide h-24">
            {displayedText}
            <span className={`inline-block w-0.5 h-10 md:h-14 bg-black ml-1 align-middle animate-blink ${typingComplete ? 'opacity-0' : ''}`}></span>
          </h1>
        </motion.div>
      </section>
      
      {/* Project Sections */}
      {projects.map((project, index) => (
        <section 
          id={project.id} 
          key={project.id}
          className="min-h-screen flex items-center" 
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12 w-full">
            {/* Mobile layout - text always on top */}
            <div className="md:hidden flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl mb-8 font-light">{project.title}</h2>
                <p className="text-black/80 mb-10 text-xl leading-relaxed">
                  {project.description}
                </p>
                <motion.a 
                  href={project.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lg border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  VIEW PROJECT
                </motion.a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cursor-pointer"
                onClick={() => openEnlargedImage(project.image)}
              >
                <img src={project.image} alt={project.title} className="w-full shadow-md hover:shadow-lg transition-shadow" />
              </motion.div>
            </div>
            
            {/* Desktop layout - alternating */}
            <div className="hidden md:grid md:grid-cols-5 gap-8 items-center">
              {/* For even index, text on left (2 cols), image on right (3 cols) */}
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="col-span-2"
                  >
                    <h2 className="text-4xl md:text-5xl mb-8 font-light">{project.title}</h2>
                    <p className="text-black/80 mb-10 text-xl leading-relaxed">
                      {project.description}
                    </p>
                    <motion.a 
                      href={project.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-lg border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      VIEW PROJECT
                    </motion.a>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="cursor-pointer col-span-3"
                    onClick={() => openEnlargedImage(project.image)}
                  >
                    <img src={project.image} alt={project.title} className="w-full shadow-md hover:shadow-lg transition-shadow" />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* For odd index, image on left (3 cols), text on right (2 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="cursor-pointer col-span-3"
                    onClick={() => openEnlargedImage(project.image)}
                  >
                    <img src={project.image} alt={project.title} className="w-full shadow-md hover:shadow-lg transition-shadow" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="col-span-2"
                  >
                    <h2 className="text-4xl md:text-5xl mb-8 font-light">{project.title}</h2>
                    <p className="text-black/80 mb-10 text-xl leading-relaxed">
                      {project.description}
                    </p>
                    <motion.a 
                      href={project.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-lg border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      VIEW PROJECT
                    </motion.a>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
      
      {/* Contact Section - Simplified */}
      <section id="contact" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: mainColor }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-10 items-center">
            <motion.a 
              href="mailto:johnobrien.dev@gmail.com"
              className="text-2xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              JOHNOBRIEN.DEV@GMAIL.COM
            </motion.a>
            
            <motion.a 
              href="https://github.com/johnobriendev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              GITHUB
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/johnobriendev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl tracking-wide hover:text-neutral-600 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              LINKEDIN
            </motion.a>
            
            <motion.button
              onClick={openResume}
              className="text-2xl tracking-wide hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              RESUME
            </motion.button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {enlargedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeEnlargedImage}
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-h-[90vh]"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img 
              src={enlargedImage} 
              alt="Enlarged project view" 
              className="w-full max-h-[90vh] object-contain mx-auto"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
              onClick={closeEnlargedImage}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;