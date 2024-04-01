import React from "react"
import  ReactDom  from "react-dom"
import { FaXmark } from "react-icons/fa6";

function Modal(props) {
    const {onClose} = props;
    const projects = [
        {}, {}, {}
    ]
    return ReactDom.createPortal(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80%] md:h-[80%] w-full h-full shadow bg-slate-900 text-white flex flex-col z-20 p-4 gap-2">
            <div className="flex text-lg justify-between items-center">
                <h2>Projects</h2>
                <FaXmark onClick={onClose} />
            </div>
            <div className="flex items-center gap-1 bg-white flex-wrap">

            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal