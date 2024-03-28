
function Navbar() {
    
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/john-o-brien-a33bb6275/'],
        ['Github', 'https://github.com/johnobriendev']
    ]
    
    
    return(
        <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8 p-4">
            <div>JO'B</div>    
            <div className="flex items-center gap-4">
                {links.map((link, index) => {
                    return(
                        <a href={link[1]} target="_blank">{link[0]}</a> 
                    )
                })}
            </div>
            
            
        </div>
    )
}

export default Navbar