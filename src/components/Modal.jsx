import React from "react"
import  ReactDom  from "react-dom"
import { FaXmark } from "react-icons/fa6";

function Modal(props) {
    const {onClose} = props;
    const projects = [
        {name: 'Kanban',
         link: 'https://johns-kanban.netlify.app/',
         desc: 'A kanban board that I built with React to use for error tracking. Has click to edit functionality and full drag and drop ability. For now there is local storage built in but I plan to build a back end for it with Node. Version 1.0 is complete, albeit with a few small fixes needing to be done. Version 2.0 is being worked on which will include the feature of homepage where the user can create new boards and navigate to all the various boards they have created.',
         github: 'https://github.com/johnobriendev/kanbanReact',
         picture: 'kanbanss.png'
        }, 
        {name: 'MemoryCard',
         link: 'https://johnsmemorycard.netlify.app/',
         desc: 'This was a project for The Odin Project. The application is set up using React and Vite. The idea was learning how to use useState in conjuction with useEffect. On load 20 images are fetched from unsplash API and displayed in a random order. Each time the user clicks an image all the images are shuffled and the scores are updated. If the use clicks an image for the second time the game is over and the scoreboard is updated accordingly.',
         github: 'https://github.com/johnobriendev/memory-card',
         picture: 'memorycardss.png'
        },
        {name: 'DiscGolf Scorecard',
         link: 'https://venerable-croissant-c44ec9.netlify.app/',
         desc: 'This application is a scorecard for disc golf! Users begin by entering the player names. When all player names have been inputted, the user submits the names and the scorecard is displayed. The user moves between holes inputting the scores of each player and the scores of each hole as well as the total score are displayed in the scorecard table below.',
         github: 'https://github.com/johnobriendev/discgolfScorecard',
         picture: 'scorecardss.png'
        }
    ]
    return ReactDom.createPortal(
        <div className="absolute top-0 left-0 w-screen h-screen shadow bg-slate-900 overflow-scroll text-white flex flex-col z-50  gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]">
            <div className="flex p-2 text-2xl justify-end items-center">
                <FaXmark onClick={onClose} />
            </div>
            <div className="flex mb-5 text-3xl justify-center items-center">
                <h2 className="">Projects</h2>
            </div>
            <div className="grid grid-cols-1  gap-1 bg-white md:p-1">
                {projects.map((project, index) => {
                    return(
                        <div key={index} className="w-full aspect-video bg-slate-900 text-white flex flex-col gap-2 p-2 items-center">
                            <h1 className="text-2xl">{project.name}</h1>
                            <img className="w-[90%] h-auto" src={project.picture}/>
                            <p className="text-xs flex-1 m-5">{project.desc}</p>
                            <div className="grid text-center grid-cols-2">
                                <a href={project.link} className="pointer-cursor text-xl">Live</a>
                                <a href={project.github} className="pointer-cursor text-xl"> GitHub</a>
                            </div>

                        </div>

                    )
                })}
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal