import AboutMe from "./AboutMe"
import Experience from "./Experience"
import Skills from "./Skills"

function Main() {
    return(
        <div className="p-4 flex flex-col md:grid md:grid-cols-4">
            <AboutMe/>
            {/* <Experience/> */}
            <Skills/>
        </div>
    )
}

export default Main