import React from "react"
import  ReactDom  from "react-dom"
function Modal() {
    return ReactDom.createPortal(
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] shadow bg-slate-900 text-white flex flex-col z-20">

        </div>,
        document.getElementById('portal')
    )
}

export default Modal