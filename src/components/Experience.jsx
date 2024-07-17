import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            project: 'Wolf - Golf Scoring Application',
            description: 'Developed a sophisticated React-based web application for managing the complex scoring system of the golf game "Wolf". This project showcases proficiency in:',
            bulletPoints: [
                'Frontend development with React.js',
                'State management in complex applications',
                'User interface design for intuitive score tracking',
                'Implementing game logic and real-time calculations',
                'Responsive design for cross-device compatibility'
            ],
            additionalInfo: 'The application features dynamic player input, hole-by-hole score recording, and automatic point calculation based on intricate game rules. A toggle functionality allows users to switch seamlessly between scorecard and game view, demonstrating attention to user experience and interface design.',
            link: 'https://thewolfgolf.netlify.app'
        },
        {
            project: 'Disc Golf E-Commerce Platform',
            description: 'Engineered a full-stack e-commerce solution for a disc golf equipment retailer, incorporating both customer-facing and administrative interfaces. This comprehensive project demonstrates expertise in:',
            bulletPoints: [
                'Full-stack development with React.js, Express.js, and MongoDB',
                'RESTful API design and implementation',
                'Authentication and authorization using JWT',
                'Cloud storage integration with AWS S3',
                'State management with React Context API',
                'Responsive UI design using Tailwind CSS',
                'Server-side rendering with Pug for admin views'
            ],
            additionalInfo: 'The platform features a secure admin portal for inventory management, including product creation and image upload capabilities. The customer interface offers a seamless shopping experience with dynamic cart management. This project showcases the ability to architect and implement complex, multi-faceted web applications.',
            link: "https://barrysdiscs.netlify.app",
        },
        {
            project: 'Blog Content Management System',
            description: 'Designed and implemented a robust Content Management System (CMS) for blog administration and user interaction. This project highlights skills in:',
            bulletPoints: [
                'Backend development with Express.js',
                'Database design and management with MongoDB',
                'API development for content creation, retrieval, and management',
                'Authentication and authorization strategies using PassportJS and JWT',
                'Separation of concerns with distinct admin and user interfaces',
                'Comment system implementation for user engagement'
            ],
            additionalInfo: 'The CMS provides a comprehensive suite of tools for content management, including creation, editing, deletion, and publishing functionalities for administrators. It also features a user-friendly interface for readers to engage with content through comments. This project demonstrates the ability to create scalable, secure, and feature-rich web applications catering to different user roles and requirements.',
            link: 'https://johnblogclient.netlify.app'
        },
        {
            project: 'Kanban/Issue Tracker with React',
            description: 'Developed a comprehensive Kanban board application using React, designed for error tracking and task management. This project demonstrates proficiency in:',
            bulletPoints: [
                'Frontend development with React.js',
                'State management and data persistence with local storage',
                'Implementing complex UI interactions (drag-and-drop, click-to-edit)',
                'User interface design for productivity tools',
                'Planning for scalability with future backend integration'
            ],
            additionalInfo: 'The application features intuitive click-to-edit functionality for task details and full drag-and-drop capabilities for task management across columns. Currently utilizing local storage for data persistence, with plans for future integration of a Node.js backend. This project showcases the ability to create sophisticated, user-friendly web applications that solve real-world productivity challenges.',
            link: 'https://johns-kanban.netlify.app/'
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
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ duration: 1, delay: 2 + index * 0.5 }}
                        >
                            <p>{experience.description}</p>
                            <ul className="list-disc list-inside mt-2 mb-2">
                                {experience.bulletPoints.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <p>{experience.additionalInfo}</p>
                        </motion.div>
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


// import { motion } from 'framer-motion';

// function Experience() {
//     // const experiences = [
//     //     {
//     //         project: 'Wolf',
//     //         description: 'Wolf is a React-based application designed to help you keep track of scores and points for the golf game "Wolf." The app allows you to input player names, record strokes per hole, and calculate points based on various Wolf game outcomes. The app features a toggle to switch between viewing the scorecard and the pointscard.',
//     //         link: 'https://thewolfgolf.netlify.app'
//     //     },
//     //     {
//     //         project: 'Disc Golf E-Commerce Site',
//     //         description: 'Fullstack E-Commerce website with a separate admin portal to update inventory. The backend is built with Express.js and involves a Rest API that communicates between the client display and a mongodb database. The admin view is built using pug and their routes protected with JWT authentication. The admin can create new disc categories and upload photos and descriptions of new discs for sale. The photo images are stored in an AWS S3 bucket and their urls are stored in a MongoDB database. All of this is handled by the Express API. The view for the client is built using React.js and Tailwind CSS and features the React context API to handle state management of the users cart.',
//     //         link: "https://barrysdiscs.netlify.app",
//     //     },
//     //     {
//     //         project: 'Blog API',
//     //         description: 'Fullstack Content Management System with separate admin and user roles. The API is built with express and communicates with a MongoDB database which stores all blog posts and comments. There are two separate views, one for the admin which has routes protected by JWT authentication with PassportJS, and one for the normal user. The admin portal has the ability to create, edit, delete, and publish posts to be viewed by normal users. The admin can also view and delete all commments left on posts by normal users. Normal users can leave comments without having to signup for a user account.',
//     //         link: 'https://johnblogclient.netlify.app'
//     //     },
//     // ];

//     const experiences = [
//         {
//             project: 'Wolf - Golf Scoring Application',
//             description: 'Developed a sophisticated React-based web application for managing the complex scoring system of the golf game "Wolf". This project showcases proficiency in frontend development with React.js, state management in complex applications, user interface design for intuitive score tracking, implementing game logic and real-time calculations, and responsive design for cross-device compatibility. The application features dynamic player input, hole-by-hole score recording, and automatic point calculation based on intricate game rules. A toggle functionality allows users to switch seamlessly between scorecard and points view, demonstrating attention to user experience and interface design.',
//             link: 'https://thewolfgolf.netlify.app'
//         },
//         {
//             project: 'Disc Golf E-Commerce Platform',
//             description: 'Engineered a full-stack e-commerce solution for a disc golf equipment retailer, incorporating both customer-facing and administrative interfaces. This comprehensive project demonstrates expertise in full-stack development with React.js, Express.js, and MongoDB, RESTful API design and implementation, authentication and authorization using JWT, cloud storage integration with AWS S3, state management with React Context API, responsive UI design using Tailwind CSS, and server-side rendering with Pug for admin views. The platform features a secure admin portal for inventory management, including product creation and image upload capabilities. The customer interface offers a seamless shopping experience with dynamic cart management. This project showcases the ability to architect and implement complex, multi-faceted web applications.',
//             link: "https://barrysdiscs.netlify.app",
//         },
//         {
//             project: 'Blog Content Management System',
//             description: 'Designed and implemented a robust Content Management System (CMS) for blog administration and user interaction. This project highlights skills in backend development with Express.js, database design and management with MongoDB, API development for content creation, retrieval, and management, authentication and authorization strategies using PassportJS and JWT, separation of concerns with distinct admin and user interfaces, and comment system implementation for user engagement. The CMS provides a comprehensive suite of tools for content management, including creation, editing, deletion, and publishing functionalities for administrators. It also features a user-friendly interface for readers to engage with content through comments. This project demonstrates the ability to create scalable, secure, and feature-rich web applications catering to different user roles and requirements.',
//             link: 'https://johnblogclient.netlify.app'
//         },
//     ];

    

//     const typewriter = {
//         hidden: { width: '0%' },
//         visible: { width: '100%' }
//     };

//     const slideIn = {
//         hidden: { x: 100, opacity: 0 },
//         visible: { x: 0, opacity: 1 }
//     };

//     const fadeIn = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 }
//     };

//     return (
//         <div className="grid grid-cols-1 gap-8 py-24 mx-12 min-h-screen md:mx-36 xl:mx-80">
//             <motion.h2
//                 className="text-xl font-light overflow-hidden whitespace-nowrap"
//                 initial="hidden"
//                 animate="visible"
//                 variants={typewriter}
//                 transition={{ duration: 1.5 }}
//             >
//                 Projects
//             </motion.h2>
            
//             {experiences.map((experience, index) => {
//                 return (
//                     <div key={index} className="flex flex-col gap-1">
//                         <motion.h1
//                             className="text-lg font-light"
//                             initial="hidden"
//                             animate="visible"
//                             variants={slideIn}
//                             transition={{ duration: 0.8, delay: 1.5 + index * 0.5 }}
//                         >
//                             {experience.project}
//                         </motion.h1>
//                         <motion.p
//                             initial="hidden"
//                             animate="visible"
//                             variants={fadeIn}
//                             transition={{ duration: 1, delay: 2 + index * 0.5 }}
//                         >
//                             {experience.description}
//                         </motion.p>
//                         <motion.a
//                             href={experience.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-sky-400 font-normal"
//                             initial="hidden"
//                             animate="visible"
//                             variants={fadeIn}
//                             transition={{ duration: 1, delay: 2.5 + index * 0.5 }}
//                         >
//                             Live Demo of Project
//                         </motion.a>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Experience;

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