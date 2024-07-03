function Skills() {
    const ski = {
        Frontend: ['React', 'Javascript', 'HTML', 'CSS', 'TailwindCSS', 'Netlify'],
        Backend: ['NodeJS', "Express", "MongoDB", "AWS S3", "Glitch"],
        Misc: ['Git', 'GitHub', 'Jest', 'Vitest', 'Postman'  ]
    }
    
    return(
        <div className="bg-neutral-500 shadow-2xl p-4 rounded flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">Technologies</h1>
                <div className="flex flex-col gap-3">
                    {Object.keys(ski).map((keyName, index) => {
                        return (
                            <div key={index}>
                                <h3 className="text-lg">{keyName}</h3>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {ski[keyName].map((skill, i) => {
                                        return (
                                            <div key={i} className="rounded border border-black px-2 py-1 text-xs">
                                            {skill}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}
export default Skills