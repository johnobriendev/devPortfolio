import { Link } from "react-router-dom"
function Navbar() {
    
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/john-o-brien-a33bb6275/'],
        ['Github', 'https://github.com/johnobriendev']
    ]
    
    
    return(
        <nav className="fixed top-0 left-0 w-full shadow-md z-10 bg-gray-800 text-white" >
            <div className="w-full flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm">
               <Link to="/"> <h1 className="text-xl" href="/">John O'Brien</h1> </Link>    
                <div className="flex items-center gap-4">
                    <div>
                        <Link to='/projects'>Projects</Link>
                    </div>
                    {links.map((link, index) => {
                        return(
                            <a key={link[1]} href={link[1]} target="_blank">{link[0]}</a> 
                        )
                    })}
                </div>
            
            
            </div>
        </nav>
        
    )
}

export default Navbar