import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            project: 'Wolf',
            description: 'Wolf is a React-based application designed to help you keep track of scores and points for the golf game "Wolf." The app allows you to input player names, record strokes per hole, and calculate points based on various Wolf game outcomes. The app features a toggle to switch between viewing the scorecard and the pointscard.',
            link: 'https://thewolfgolf.netlify.app'
        },
        {
            project: 'Disc Golf E-Commerce Site',
            description: 'Fullstack E-Commerce website with a separate admin portal to update inventory. The backend is built with Express.js and involves a Rest API that communicates between the client display and a mongodb database. The admin view is built using pug and their routes protected with JWT authentication. The admin can create new disc categories and upload photos and descriptions of new discs for sale. The photo images are stored in an AWS S3 bucket and their urls are stored in a MongoDB database. All of this is handled by the Express API. The view for the client is built using React.js and Tailwind CSS and features the React context API to handle state management of the users cart.',
            link: "https://barrysdiscs.netlify.app",
        },
        {
            project: 'Blog API',
            description: 'Fullstack Content Management System with separate admin and user roles. The API is built with express and communicates with a MongoDB database which stores all blog posts and comments. There are two separate views, one for the admin which has routes protected by JWT authentication with PassportJS, and one for the normal user. The admin portal has the ability to create, edit, delete, and publish posts to be viewed by normal users. The admin can also view and delete all commments left on posts by normal users. Normal users can leave comments without having to signup for a user account.',
            link: 'https://johnblogclient.netlify.app'
        },
    ];

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
        <div className="grid grid-cols-1 gap-8 py-24 mx-12 min-h-screen md:mx-36 xl:mx-80">
            <motion.h2
                className="text-xl font-light overflow-hidden whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={typewriter}
                transition={{ duration: 1.5 }}
            >
                Projects
            </motion.h2>
            
            {experiences.map((experience, index) => {
                return (
                    <div key={index} className="flex flex-col gap-1">
                        <motion.h1
                            className="text-lg font-light"
                            initial="hidden"
                            animate="visible"
                            variants={slideIn}
                            transition={{ duration: 0.8, delay: 1.5 + index * 0.5 }}
                        >
                            {experience.project}
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ duration: 1, delay: 2 + index * 0.5 }}
                        >
                            {experience.description}
                        </motion.p>
                        <motion.a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 font-normal"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ duration: 1, delay: 2.5 + index * 0.5 }}
                        >
                            Live Demo of Project
                        </motion.a>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;

// function Experience() {
//     const experiences = [
//         {
//             project: 'Wolf',
            
//             desciption: 'Wolf is a React-based application designed to help you keep track of scores and points for the golf game "Wolf." The app allows you to input player names, record strokes per hole, and calculate points based on various Wolf game outcomes. The app features a toggle to switch between viewing the scorecard and the pointscard.',
//             link: 'https://thewolfgolf.netlify.app'
//         }, 
//         {
//             project: 'Disc Golf E-Commerce Site',
//             desciption: 'Fullstack E-Commerce website with a separate admin portal to update inventory. The backend is built with Express.js and involves a Rest API that communicates between the client display and a mongodb database. The admin view is built using pug and their routes protected with JWT authentication. The admin can create new disc categories and upload photos and descriptions of new discs for sale. The photo images are stored in an AWS S3 bucket and their urls are stored in a MongoDB database. All of this is handled by the Express API. The view for the client is built using React.js and Tailwind CSS and features the React context API to handle state management of the users cart.',
//             link: "https://barrysdiscs.netlify.app",
//         },
//         {
//             project: 'Blog API',
            
//             desciption: 'Fullstack Content Management System with separate admin and user roles. The API is built with express and communicates with a MongoDB database which stores all blog posts and comments. There are two separate views, one for the admin which has routes protected by JWT authentication with PassportJS, and one for the normal user. The admin portal has the ability to create, edit, delete, and publish posts to be viewed by normal users. The admin can also view and delete all commments left on posts by normal users. Normal users can leave comments without having to signup for a user account.',
//             link: 'https://johnblogclient.netlify.app'
//         }, 
    
        
        
            
//     ]
    
//     return(
//         <div className="grid grid-cols-1 gap-8 py-24 mx-12 min-h-screen md:mx-36 xl:mx-80 " >
//             <h2 className="text-xl font-light">Projects</h2>
            
//             {experiences.map((experience, index) => {
//                 return(
//                     <div key={index} className="flex flex-col gap-1">
//                         <h1 className="text-lg font-light">{experience.project}</h1>
//                         <p className="">{experience.desciption}</p>
//                         <a href={experience.link} target="_blank" className="text-sky-400 font-normal">Live Demo of Project</a>
//                     </div>
                        
//                 )
//             })}
//         </div>
//     )
// }

// export default Experience