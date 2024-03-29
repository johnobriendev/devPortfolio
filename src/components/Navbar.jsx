
function Navbar() {
    
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/john-o-brien-a33bb6275/'],
        ['Github', 'https://github.com/johnobriendev']
    ]
    
    
    return(
        <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm">
            <a className="text-sm sm:text-base" href="/">JO'B</a>    
            <div className="flex items-center gap-4">
                {links.map((link, index) => {
                    return(
                        <a key={link[1]} href={link[1]} target="_blank">{link[0]}</a> 
                    )
                })}
            </div>
            
            
        </div>
    )
}

export default Navbar