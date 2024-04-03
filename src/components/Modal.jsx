import React from "react"
import  ReactDom  from "react-dom"
import { FaXmark } from "react-icons/fa6";

function Modal(props) {
    const {onClose} = props;
    const projects = [
        {name: 'Kanban',
         link: 'https://johns-kanban.netlify.app/',
         desc: 'dfgsdfgsdfgsdfg',
         github: 'https://github.com/johnobriendev/kanbanReact',
         picture: 'kanbanss.png'
        }, 
        {name: 'MemoryCard',
         link: 'https://johnsmemorycard.netlify.app/',
         desc: 'dsfgsdfgsdfgsdfgsdfgsdfgdsf',
         github: 'https://github.com/johnobriendev/memory-card',
         picture: 'memorycardss.png'
        },
        {name: 'DiscGolf Scorecard',
         link: 'https://venerable-croissant-c44ec9.netlify.app/',
         desc: 'dsfgsdfgsdfgsdfgsdfgsdfgsdf',
         github: 'https://github.com/johnobriendev/discgolfScorecard',
         picture: 'scorecardss.png'
        }
    ]
    return ReactDom.createPortal(
        <div className="absolute top-0 left-0 w-screen h-screen shadow bg-slate-900 overflow-scroll text-white flex flex-col z-50  gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]">
            <div className="flex p-4 text-lg justify-between items-center">
                <h2>Projects</h2>
                <FaXmark onClick={onClose} />
            </div>
            <div className="grid grid-cols-1  gap-1 bg-white md:p-1">
                {projects.map((project, index) => {
                    return(
                        <div key={index} className="w-full aspect-video bg-slate-900 text-white flex flex-col gap-2 p-2 items-center">
                            <h1>{project.name}</h1>
                            <img className="w-[90%] h-auto" src={project.picture}/>
                            <p className="text-xs flex-1">{project.desc}</p>
                            <div className="grid text-center grid-cols-2">
                                <a href={project.link} className="pointer-cursor">Live</a>
                                <a href={project.github} className="pointer-cursor"> GitHub</a>
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