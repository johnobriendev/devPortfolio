function Skills() {
    const ski = {
        JavaScript: ['React', 'Node.js'],
        Web: ['TailwindCSS', 'Netlify', 'GIT'],
        Design: ['Canva', 'Pixlr', 'Figma']
    }
    
    return(
        <div className="shadow-xl p-4 bg-white rounded flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">Info</h1>
                <div className="flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:johnobrien.dev@gmail.com" target="_blank" className="text-cyan-500">johnobrien.dev@gmail.com</a>
                </div>
                <div className="flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
                    <h3 className="font-semibold">Github</h3>
                    <a href="https://github.com/johnobriendev" target="_blank" className="text-cyan-500">johnobriendev</a>
                </div>
                <div className="flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/john-o-brien-a33bb6275/" target="_blank" className="text-cyan-500">John O'Brien</a>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">Skills</h1>
                <div className="flex flex-col gap-3">
                    {Object.keys(ski).map((keyName, index) => {
                        return (
                            <div key={index}>
                                <h3 className="text-lg">{keyName}</h3>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {ski[keyName].map((skill, i) => {
                                        return (
                                            <div key={i} className="rounded bg-gradient-to-r from-blue-700 to-violet-700 text-white px-2 py-1 text-xs">
                                            {skill}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                {/* <div className="flex items-center gap-2 flex-wrap">

                </div> */}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">About Me</h1>
                <ul className="ml-4 list-disc list-outside flex flex-col">
                    <li>I have been a professional musician for over 10 years!
                        <a className="text-red-500" href="http://johnobrienguitar.com" target="_blank" > Link to my Music Website</a>
                    </li>
                    <li>I lived in South America for 2 years and was in Buenos Aires when Argentina won the World Cup.</li>
                    <li>I speak Spanish!</li>
                    <li>I am an avid disc golfer. I play multiple times a week.</li>
                </ul>
               
            </div>
        </div>
    )
}
export default Skills