import AboutMe from "./AboutMe"
import Experience from "./Experience"
import Skills from "./Skills"
import { useState } from "react"
import Modal from "./Modal"

function Main() {
    const [showModal, setShowModal] = useState(false);
    function onCloseHandler(){
        setShowModal(false);
    }
    function openModal(){
        setShowModal(true);
    }
    return(
        <div className="p-4 flex flex-col flex-1 md:grid md:grid-cols-4 gap-4">
            {showModal && <Modal onClose={onCloseHandler}/>}
           <div className="md:col-span-3 flex flex-col gap-4">
                <AboutMe openModal={openModal}/>
                <Experience/>
           </div>
            
            <Skills/>
        </div>
    )
}

export default Main