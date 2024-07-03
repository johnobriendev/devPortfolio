function AboutMe() {
   

    return(
            <div className="flex flex-col gap-3 ">
                <h1 className="text-4xl">John O'Brien</h1>
                <h2 className="text-xl">Fullstack Developer</h2>
                <p className="">John O'Brien is a self-taught software developer from Bethlehem, Pennsylvania. He holds a B.A. in Economics, Philosophy, and Jazz Studies from the University of Pittsburgh.</p>

                <div className="flex flex-col gap-2">
                <h1 className="text-2xl">About Me</h1>
                <ul className="ml-4 list-disc list-outside flex flex-col ">
                    <li>I have been a professional musician for over 10 years!
                        <a className="text-sky-500" href="http://johnobrienguitar.com" target="_blank" > Link to my Music Website</a>
                    </li>
                    <li>I lived in South America for 2 years and was in Buenos Aires when Argentina won the World Cup.</li>
                    <li>I speak Spanish!</li>
                    <li>I am an avid disc golfer. I play multiple times a week.</li>
                </ul>
               
            </div>
            </div>
            
            
        
    )
}
export default AboutMe