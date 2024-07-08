import OpenResumeButton from "./OpenResumeButton";

function AboutMe() {
   

    return(
            <div className="flex flex-col gap-3 max-w-2xl">
                <h1 className="text-4xl">John O'Brien</h1>
                <h2 className="text-xl">Fullstack Developer</h2>
                <p className="">John O'Brien is a software developer from Bethlehem, Pennsylvania. He holds a B.A. in Economics, Philosophy, and Jazz Studies from the University of Pittsburgh.</p>

                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">About Me</h1>
                    <div className=" flex flex-col gap-5 ">
                        <p>I have been a professional musician for over 10 years! I still teach and perform. 
                           &nbsp; <a className="text-sky-500 underline" href="http://johnobrienguitar.com" target="_blank" > Link to my Music Website</a>
                        </p>
                        <p>I lived in South America for 2 years and was living in Buenos Aires when Argentina won the World Cup. I love learning languages and different dialects. I even worked as a translator while I was there! </p>
                    
                        <p>When I'm not programming I love to play disc golf and drink mate (vamos argentina) ! Many of my projects feature my personal interests.</p>
                    </div>

                    <p>Email: <a href="mailto:johnobrien.dev@gmail.com" className="underline">johnobrien.dev@gmail.com</a> </p>
                    <p>Github: <a href="https://github.com/johnobriendev" className="underline">johnobriendev</a> </p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/john-o-brien-a33bb6275/" className="underline">Here</a>   </p>


                    <OpenResumeButton />
                    
                
                 </div>
            </div>
            
            
        
    )
}
export default AboutMe