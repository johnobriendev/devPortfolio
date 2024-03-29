function Experience() {
    const experiences = [
        {
            company: 'Self-Employed',
            position: 'Web Developer and Designer',
            desciption: 'Designing and Creating Webpages and applications for artists and small businesses'
        }
        ,{
            company: 'Cobrizo Geología Ambiental',
            position: 'Internation Sales Consultant',
            desciption: 'Directed communications and management of English-speaking clients. Duties include language assistance during video conferences, simultaneous interpretation, and document review and translation to aid the interactions between the company and Non-Spanish-speaking clients and collaborators.'
        }, 
        {
            company: 'Sunburst School of Music',
            position: 'Program Director | Teacher',
            desciption: 'Taught private and group classes and helped develop and organize group band programs and summer camps. I also maintained records of our inventory and did maintenance and repair to all the musical instruments.'
        }
    ]
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => {
                return(
                    <div key={index} className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold uppercase">{experience.company}</h1>
                        <h2 className="text-sm pb-2">{experience.position}</h2>
                        <p className="text-slate-500">{experience.desciption}</p>
                    </div>
                        
                )
            })}
        </div>
    )
}

export default Experience