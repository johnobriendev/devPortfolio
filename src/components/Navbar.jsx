import { Link } from "react-router-dom"
function Navbar() {
    

    
    
    return(
        <nav className="fixed top-0 left-0 w-full shadow-md z-10 px-8 bg-gray-800 text-white" >
            <div className="w-full flex justify-between items-center gap-4 p-4 sm:gap-8  sm:text-sm">
               <Link to="/"> <h1 className="text-xl" href="/">John O'Brien</h1> </Link>    
               
               <Link to='/projects'>Projects</Link>
            </div>
        </nav>
        
    )
}

export default Navbar