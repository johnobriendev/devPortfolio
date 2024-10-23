import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colorSchemes = {
  // Sunset Gradient - Warm, sophisticated fade from golden hour to night
  sunsetGradient: {
    primary: 'from-amber-400 via-orange-500 to-rose-500',
    accent: 'text-amber-300',
    hover: 'hover:text-rose-300',
    button: 'bg-orange-500 hover:bg-orange-600',
    card: 'bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-rose-900/40',
    link: 'text-rose-300 hover:text-amber-200',
    nav: 'bg-orange-950/90',
    projectsBg: 'bg-gradient-to-b from-rose-500 via-rose-600 to-rose-900',
    aboutBg: 'bg-gradient-to-b from-rose-900 to-rose-950'
  },

  // Ocean Depths - Smooth transition from surface to deep waters
  oceanDepths: {
    primary: 'from-sky-400 via-cyan-500 to-blue-600',
    accent: 'text-sky-300',
    hover: 'hover:text-blue-300',
    button: 'bg-cyan-600 hover:bg-cyan-700',
    card: 'bg-gradient-to-br from-sky-900/40 via-cyan-900/40 to-blue-900/40',
    link: 'text-blue-300 hover:text-sky-200',
    nav: 'bg-cyan-950/90',
    projectsBg: 'bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900',
    aboutBg: 'bg-gradient-to-b from-blue-900 to-blue-950'
  },

  // Northern Lights - Ethereal aurora-inspired gradients
  auroraGlow: {
    primary: 'from-green-400 via-emerald-500 to-teal-600',
    accent: 'text-green-300',
    hover: 'hover:text-teal-300',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    card: 'bg-gradient-to-br from-green-900/40 via-emerald-900/40 to-teal-900/40',
    link: 'text-teal-300 hover:text-green-200',
    nav: 'bg-emerald-950/90',
    projectsBg: 'bg-gradient-to-b from-teal-600 via-teal-800 to-teal-900',
    aboutBg: 'bg-gradient-to-b from-teal-900 to-teal-950'
  },

  // Twilight Purple - Rich purple gradients
  twilightPurple: {
    primary: 'from-fuchsia-400 via-purple-500 to-indigo-600',
    accent: 'text-fuchsia-300',
    hover: 'hover:text-indigo-300',
    button: 'bg-purple-600 hover:bg-purple-700',
    card: 'bg-gradient-to-br from-fuchsia-900/40 via-purple-900/40 to-indigo-900/40',
    link: 'text-indigo-300 hover:text-fuchsia-200',
    nav: 'bg-purple-950/90',
    projectsBg: 'bg-gradient-to-b from-indigo-600 via-indigo-800 to-indigo-900',
    aboutBg: 'bg-gradient-to-b from-indigo-900 to-indigo-950'
  },

  // Forest Mist - Natural greens with misty transitions
  forestMist: {
    primary: 'from-lime-400 via-green-500 to-emerald-600',
    accent: 'text-lime-300',
    hover: 'hover:text-emerald-300',
    button: 'bg-green-600 hover:bg-green-700',
    card: 'bg-gradient-to-br from-lime-900/40 via-green-900/40 to-emerald-900/40',
    link: 'text-emerald-300 hover:text-lime-200',
    nav: 'bg-green-950/90',
    projectsBg: 'bg-gradient-to-b from-emerald-600 via-emerald-800 to-emerald-900',
    aboutBg: 'bg-gradient-to-b from-emerald-900 to-emerald-950'
  },

  // Desert Night - Warm to cool transition
  desertNight: {
    primary: 'from-yellow-400 via-orange-500 to-purple-600',
    accent: 'text-yellow-300',
    hover: 'hover:text-purple-300',
    button: 'bg-orange-600 hover:bg-orange-700',
    card: 'bg-gradient-to-br from-yellow-900/40 via-orange-900/40 to-purple-900/40',
    link: 'text-purple-300 hover:text-yellow-200',
    nav: 'bg-orange-950/90',
    projectsBg: 'bg-gradient-to-b from-purple-600 via-purple-800 to-purple-900',
    aboutBg: 'bg-gradient-to-b from-purple-900 to-purple-950'
  },

  // Cosmic Dream - Space-inspired gradients
  cosmicDream: {
    primary: 'from-pink-400 via-violet-500 to-indigo-600',
    accent: 'text-pink-300',
    hover: 'hover:text-indigo-300',
    button: 'bg-violet-600 hover:bg-violet-700',
    card: 'bg-gradient-to-br from-pink-900/40 via-violet-900/40 to-indigo-900/40',
    link: 'text-indigo-300 hover:text-pink-200',
    nav: 'bg-violet-950/90',
    projectsBg: 'bg-gradient-to-b from-indigo-600 via-indigo-800 to-indigo-900',
    aboutBg: 'bg-gradient-to-b from-indigo-900 to-indigo-950'
  },
  neoTokyo: {
    primary: 'from-pink-500 via-purple-500 to-cyan-400',
    accent: 'text-pink-300',
    hover: 'hover:text-cyan-300',
    button: 'bg-pink-600 hover:bg-pink-700',
    card: 'bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-cyan-900/40',
    link: 'text-cyan-300 hover:text-pink-200',
    nav: 'bg-pink-950/90',
    projectsBg: 'bg-gradient-to-b from-pink-950 via-purple-950 to-cyan-950',
    aboutBg: 'bg-gradient-to-b from-cyan-950 via-purple-950 to-pink-950'
  },
  futureRetro: {
    primary: 'from-violet-400 via-fuchsia-500 to-orange-400',
    accent: 'text-violet-300',
    hover: 'hover:text-orange-300',
    button: 'bg-violet-600 hover:bg-violet-700',
    card: 'bg-gradient-to-br from-violet-900/40 via-fuchsia-900/40 to-orange-900/40',
    link: 'text-orange-300 hover:text-violet-200',
    nav: 'bg-violet-950/90',
    projectsBg: 'bg-gradient-to-b from-violet-950 via-fuchsia-950 to-orange-950',
    aboutBg: 'bg-gradient-to-b from-orange-950 via-fuchsia-950 to-violet-950'
  },
  electricDream: {
    primary: 'from-yellow-400 via-green-400 to-blue-500',
    accent: 'text-yellow-300',
    hover: 'hover:text-blue-300',
    button: 'bg-green-600 hover:bg-green-700',
    card: 'bg-gradient-to-br from-yellow-900/40 via-green-900/40 to-blue-900/40',
    link: 'text-blue-300 hover:text-yellow-200',
    nav: 'bg-green-950/90',
    projectsBg: 'bg-gradient-to-b from-yellow-950 via-green-950 to-blue-950',
    aboutBg: 'bg-gradient-to-b from-blue-950 via-green-950 to-yellow-950'
  },
  galaxy: {
    primary: 'from-indigo-500 via-purple-500 to-pink-500',
    accent: 'text-indigo-300',
    hover: 'hover:text-purple-300',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    card: 'bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40',
    link: 'text-purple-300 hover:text-indigo-200',
    nav: 'bg-indigo-950/90',
    projectsBg: 'bg-gradient-to-b from-indigo-950 to-purple-950',
    aboutBg: 'bg-gradient-to-b from-purple-950 to-pink-950'
  },
};

const colors = colorSchemes.galaxy; // Try changing to other themes

const App = () => {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);
  const [showName, setShowName] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowName(scrollPosition > windowHeight * 0.8);
      setIsScrollingUp(scrollPosition < lastScrollY);
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="text-slate-100" ref={topRef}>
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 w-full ${colors.nav} backdrop-blur-sm shadow-lg z-50`}
        initial={{ y: 0 }}
        animate={{ y: isScrollingUp ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-1">
              <AnimatePresence>
                {showName && (
                  <motion.button
                    onClick={() => scrollToSection(topRef)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`text-2xl font-light ${colors.accent} ${colors.hover} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    John O'Brien
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <div className="flex space-x-8">
              <motion.button 
                onClick={() => scrollToSection(projectsRef)}
                className={`text-slate-100 ${colors.hover} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection(aboutRef)}
                className={`text-slate-100 ${colors.hover} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Landing Section */}
      <section className={`h-screen flex items-center justify-center bg-gradient-to-br ${colors.primary}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Left side: Text */}
          <motion.div 
            className="flex-1 space-y-6 text-left"
          >
            <motion.h1 
              className="text-7xl font-light mb-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Hi, I'm John
            </motion.h1>
            <motion.p 
              className="text-2xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={() => scrollToSection(projectsRef)}
                className="mt-8 text-white/80 hover:text-white"
                whileHover={{ y: 5 }}
                transition={{ duration: 0.2 }}
              >
                ↓ View My Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side: Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img 
              src="john-profile-pic.jpg" 
              alt="John's profile picture" 
              className="w-3/4 h-auto rounded-full object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>



      {/* Projects Section */}
      <section ref={projectsRef} className={`min-h-screen py-20 ${colors.projectsBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-light mb-12 ${colors.accent}`}
          >
            Projects
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'tremendo.pro',
                description: 'Tremendo is a personal Kanban Board featuring an ExpressJS API and ReactJS front end.',
                image: 'tremendo.png',
                link: 'https://tremendo.pro/'
              },
              {
                title: 'Disc Store',
                description: 'Disc Golf Ecommerce store with admin portal for the seller to upload disc pictures and manage inventory.',
                image: 'barry.png',
                link: 'https://barrysdiscs.netlify.app/'
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className={`${colors.card} p-6 rounded-lg overflow-hidden backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-lg" 
                />
                <a 
                  href={project.link}
                  target="_blank"
                  className={`text-xl ${colors.link} mb-2 block`}
                >
                  {project.title}
                </a>
                <p className="text-slate-300">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`min-h-screen py-20 ${colors.aboutBg}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-light mb-12 ${colors.accent}`}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="space-y-6 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I have been a professional musician for over 10 years! I still teach and perform.
              <a 
                href="http://johnobrienguitar.com" 
                target="_blank" 
                className={`${colors.link} ml-2`}
              >
                Visit my Music Website
              </a>
            </p>
            <p>
              I lived in Chile and Argentina for 2 years and was living in Buenos Aires when Argentina won the World Cup. 
              I love learning languages and different dialects.
            </p>
            <p>When I'm not working I love to play golf and drink mate.</p>
            
            <motion.div 
              className="pt-8 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { label: 'Email', value: 'johnobrien.dev@gmail.com', href: 'mailto:johnobrien.dev@gmail.com' },
                { label: 'Github', value: 'johnobriendev', href: 'https://github.com/johnobriendev' },
                { label: 'LinkedIn', value: 'johnobriendev', href: 'https://www.linkedin.com/in/johnobriendev/' }
              ].map(({ label, value, href }) => (
                <p key={label}>
                  {label}:
                  <a 
                    href={href}
                    className={`${colors.link} ml-2`}
                    target="_blank"
                  >
                    {value}
                  </a>
                </p>
              ))}
              <motion.button
                onClick={() => window.open('/JohnOBrienResume.pdf', '_blank')}
                className={`mt-4 px-6 py-2 ${colors.button} rounded-md transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;



// import React, { useRef, useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Color schemes - can easily switch between these
// const colorSchemes = {
//   sunset: {
//     primary: 'from-orange-500 to-pink-500',
//     accent: 'text-orange-400',
//     hover: 'hover:text-pink-400',
//     button: 'bg-orange-500 hover:bg-orange-600',
//     card: 'bg-gradient-to-br from-orange-900/40 to-pink-900/40',
//     link: 'text-pink-400 hover:text-pink-300'
//   },
//   ocean: {
//     primary: 'from-blue-500 to-cyan-500',
//     accent: 'text-cyan-400',
//     hover: 'hover:text-blue-400',
//     button: 'bg-blue-500 hover:bg-blue-600',
//     card: 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40',
//     link: 'text-blue-400 hover:text-blue-300'
//   },
//   forest: {
//     primary: 'from-emerald-500 to-lime-500',
//     accent: 'text-emerald-400',
//     hover: 'hover:text-lime-400',
//     button: 'bg-emerald-500 hover:bg-emerald-600',
//     card: 'bg-gradient-to-br from-emerald-900/40 to-lime-900/40',
//     link: 'text-emerald-400 hover:text-emerald-300'
//   },
//   purple: {
//     primary: 'from-purple-500 to-indigo-500',
//     accent: 'text-purple-400',
//     hover: 'hover:text-indigo-400',
//     button: 'bg-purple-500 hover:bg-purple-600',
//     card: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40',
//     link: 'text-indigo-400 hover:text-indigo-300'
//   },
//   aurora: {
//     primary: 'from-teal-500 via-purple-500 to-pink-500',
//     accent: 'text-teal-400',
//     hover: 'hover:text-purple-400',
//     button: 'bg-teal-500 hover:bg-teal-600',
//     card: 'bg-gradient-to-br from-teal-900/40 via-purple-900/40 to-pink-900/40',
//     link: 'text-purple-400 hover:text-teal-300'
//   },
//   autumn: {
//     primary: 'from-amber-500 to-red-500',
//     accent: 'text-amber-400',
//     hover: 'hover:text-red-400',
//     button: 'bg-amber-500 hover:bg-amber-600',
//     card: 'bg-gradient-to-br from-amber-900/40 to-red-900/40',
//     link: 'text-red-400 hover:text-amber-300'
//   },
//   mint: {
//     primary: 'from-green-400 to-teal-400',
//     accent: 'text-green-400',
//     hover: 'hover:text-teal-400',
//     button: 'bg-green-500 hover:bg-green-600',
//     card: 'bg-gradient-to-br from-green-900/40 to-teal-900/40',
//     link: 'text-teal-400 hover:text-green-300'
//   },
//   cosmic: {
//     primary: 'from-violet-500 via-fuchsia-500 to-pink-500',
//     accent: 'text-violet-400',
//     hover: 'hover:text-fuchsia-400',
//     button: 'bg-violet-500 hover:bg-violet-600',
//     card: 'bg-gradient-to-br from-violet-900/40 via-fuchsia-900/40 to-pink-900/40',
//     link: 'text-fuchsia-400 hover:text-violet-300'
//   }
// };

// // Choose your color scheme here
// const colors = colorSchemes.cosmic; // Try changing to ocean or forest

// const App = () => {
//   const projectsRef = useRef(null);
//   const aboutRef = useRef(null);
//   const topRef = useRef(null);
//   const [showName, setShowName] = useState(false);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       setShowName(scrollPosition > windowHeight * 0.8);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-slate-900 text-slate-100" ref={topRef}>
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-1">
//                 <AnimatePresence>
//                   {showName && (
//                     <motion.button
//                       onClick={() => scrollToSection(topRef)}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       className={`text-2xl font-light ${colors.accent} ${colors.hover} transition-colors`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       John O'Brien
//                     </motion.button>
//                   )}
//                 </AnimatePresence>
//               </div>
        
//             <div className={`flex space-x-8`}>
//               <button 
//                 onClick={() => scrollToSection(projectsRef)}
//                 className={`text-slate-100 ${colors.hover} transition-colors`}
//               >
//                 Projects
//               </button>
//               <button 
//                 onClick={() => scrollToSection(aboutRef)}
//                 className={`text-slate-100 ${colors.hover} transition-colors`}
//               >
//                 About
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Landing Section */}
//       <section className={`h-screen flex items-center justify-center bg-gradient-to-br ${colors.primary}`}>
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-6xl font-light mb-6 text-white">
//             Hi, I'm John
//           </h1>
//           <p className="text-2xl text-white/90">
//             Software Developer
//           </p>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section ref={projectsRef} className="min-h-screen bg-slate-800 py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-3xl font-light mb-12 ${colors.accent}`}>Projects</h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div 
//               className={`${colors.card} p-6 rounded-lg overflow-hidden`}
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <img 
//                 src="/api/placeholder/600/300" 
//                 alt="Tremendo Project" 
//                 className="w-full h-48 object-cover rounded-md mb-4" 
//               />
//               <a 
//                 href="https://tremendo.pro/" 
//                 target="_blank" 
//                 className={`text-xl ${colors.link} mb-2 block`}
//               >
//                 tremendo.pro
//               </a>
//               <p className="text-slate-300">
//                 Tremendo is a personal Kanban Board featuring an ExpressJS API and ReactJS front end.
//               </p>
//             </motion.div>
//             <motion.div 
//               className={`${colors.card} p-6 rounded-lg overflow-hidden`}
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <img 
//                 src="/api/placeholder/600/300" 
//                 alt="Disc Store Project" 
//                 className="w-full h-48 object-cover rounded-md mb-4" 
//               />
//               <a 
//                 href="https://barrysdiscs.netlify.app/" 
//                 target="_blank"
//                 className={`text-xl ${colors.link} mb-2 block`}
//               >
//                 Disc Store
//               </a>
//               <p className="text-slate-300">
//                 Disc Golf Ecommerce store with admin portal for the seller to upload disc pictures and manage inventory.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="min-h-screen bg-slate-900 py-20">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-3xl font-light mb-12 ${colors.accent}`}>About Me</h2>
//           <div className="space-y-6 text-slate-300">
//             <p>
//               I have been a professional musician for over 10 years! I still teach and perform.
//               <a 
//                 href="http://johnobrienguitar.com" 
//                 target="_blank" 
//                 className={`${colors.link} ml-2`}
//               >
//                 Visit my Music Website
//               </a>
//             </p>
//             <p>
//               I lived in Chile and Argentina for 2 years and was living in Buenos Aires when Argentina won the World Cup. 
//               I love learning languages and different dialects.
//             </p>
//             <p>When I'm not working I love to play golf and drink mate.</p>
            
//             <div className="pt-8 space-y-4">
//               <p>
//                 Email: 
//                 <a 
//                   href="mailto:johnobrien.dev@gmail.com" 
//                   className={`${colors.link} ml-2`}
//                 >
//                   johnobrien.dev@gmail.com
//                 </a>
//               </p>
//               <p>
//                 Github: 
//                 <a 
//                   href="https://github.com/johnobriendev" 
//                   className={`${colors.link} ml-2`}
//                   target="_blank"
//                 >
//                   johnobriendev
//                 </a>
//               </p>
//               <p>
//                 LinkedIn: 
//                 <a 
//                   href="https://www.linkedin.com/in/johnobriendev/" 
//                   className={`${colors.link} ml-2`}
//                   target="_blank"
//                 >
//                   johnobriendev
//                 </a>
//               </p>
//               <motion.button
//                 onClick={() => window.open('/JohnOBrienResume.pdf', '_blank')}
//                 className={`mt-4 px-6 py-2 ${colors.button} rounded-md transition-colors`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Resume
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;


// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';

// const App = () => {
//   const projectsRef = useRef(null);
//   const aboutRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="bg-slate-900 text-slate-100">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <h1 className="text-2xl font-light text-teal-400">John O'Brien</h1>
//             <div className="flex space-x-8">
//               <button 
//                 onClick={() => scrollToSection(projectsRef)}
//                 className="text-slate-100 hover:text-teal-400 transition-colors"
//               >
//                 Projects
//               </button>
//               <button 
//                 onClick={() => scrollToSection(aboutRef)}
//                 className="text-slate-100 hover:text-teal-400 transition-colors"
//               >
//                 About
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Landing Section */}
//       <section className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-5xl font-light mb-4 text-teal-400">
//             Software Developer
//           </h1>
//           <p className="text-xl text-slate-300">
//             Crafting digital experiences with code
//           </p>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section ref={projectsRef} className="min-h-screen bg-slate-800 py-20">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-light mb-12 text-teal-400">Projects</h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="bg-slate-700 p-6 rounded-lg">
//               <a 
//                 href="https://tremendo.pro/" 
//                 target="_blank" 
//                 className="text-xl text-sky-400 hover:text-sky-500 mb-2 block"
//               >
//                 tremendo.pro
//               </a>
//               <p className="text-slate-300">
//                 Tremendo is a personal Kanban Board featuring an ExpressJS API and ReactJS front end.
//               </p>
//             </div>
//             <div className="bg-slate-700 p-6 rounded-lg">
//               <a 
//                 href="https://barrysdiscs.netlify.app/" 
//                 target="_blank"
//                 className="text-xl text-sky-400 hover:text-sky-500 mb-2 block"
//               >
//                 Disc Store
//               </a>
//               <p className="text-slate-300">
//                 Disc Golf Ecommerce store with admin portal for the seller to upload disc pictures and manage inventory.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="min-h-screen bg-slate-900 py-20">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-light mb-12 text-teal-400">About Me</h2>
//           <div className="space-y-6 text-slate-300">
//             <p>
//               I have been a professional musician for over 10 years! I still teach and perform.
//               <a 
//                 href="http://johnobrienguitar.com" 
//                 target="_blank" 
//                 className="text-sky-400 hover:text-sky-500 ml-2"
//               >
//                 Visit my Music Website
//               </a>
//             </p>
//             <p>
//               I lived in Chile and Argentina for 2 years and was living in Buenos Aires when Argentina won the World Cup. 
//               I love learning languages and different dialects.
//             </p>
//             <p>When I'm not working I love to play golf and drink mate.</p>
            
//             <div className="pt-8 space-y-4">
//               <p>
//                 Email: 
//                 <a 
//                   href="mailto:johnobrien.dev@gmail.com" 
//                   className="text-sky-400 hover:text-sky-500 ml-2"
//                 >
//                   johnobrien.dev@gmail.com
//                 </a>
//               </p>
//               <p>
//                 Github: 
//                 <a 
//                   href="https://github.com/johnobriendev" 
//                   className="text-sky-400 hover:text-sky-500 ml-2"
//                   target="_blank"
//                 >
//                   johnobriendev
//                 </a>
//               </p>
//               <p>
//                 LinkedIn: 
//                 <a 
//                   href="https://www.linkedin.com/in/johnobriendev/" 
//                   className="text-sky-400 hover:text-sky-500 ml-2"
//                   target="_blank"
//                 >
//                   johnobriendev
//                 </a>
//               </p>
//               <motion.button
//                 onClick={() => window.open('/JohnOBrienResume.pdf', '_blank')}
//                 className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-md transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Resume
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;





// import { useState } from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div className=''>
//      <Navbar/>
//      <Outlet />
//    </div>
  
     
    
//   )
// }

// export default App
