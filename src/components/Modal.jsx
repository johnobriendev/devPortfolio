import React from "react"
import  ReactDom  from "react-dom"
import { FaXmark } from "react-icons/fa6";

function Modal(props) {
    const {onClose} = props;
    const projects = [
        {name: 'Kanban', link: '', desc: 'dfgsdfgsdfgsdfg', github: ''}, 
        {name: 'MemoryCard', link: '', desc: 'dsfgsdfgsdfgsdfgsdfgsdfgdsf', github: ''},
        {name: 'DiscGolf Scorecard', link: '', desc: 'dsfgsdfgsdfgsdfgsdfgsdfgsdf', github: ''}
    ]
    return ReactDom.createPortal(
        <div className="absolute top-0 left-0 w-screen h-screen shadow bg-slate-900 overflow-scroll text-white flex flex-col z-50  gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]">
            <div className="flex p-4 text-lg justify-between items-center">
                <h2>Projects</h2>
                <FaXmark onClick={onClose} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white md:p-1">
                {projects.map((project, index) => {
                    return(
                        <div key={index} className="w-full aspect-video md:h-[200px] bg-slate-900 text-white flex flex-col gap-2 p-2">
                            <h1>{project.name}</h1>
                            <p className="text-xs flex-1">{project.desc}</p>
                            <div className="grid text-center grid-cols-2">
                                <a className="">Live</a>
                                <a className=""> GitHub</a>
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