

function Experience() {
    const experiences = [
        {
            project: 'Disc Golf E-Commerce Site',
            desciption: 'Fullstack E-Commerce website with a separate admin portal to update inventory. The backend is built with Express.js and involves a Rest API that communicates between the client display and a mongodb database. The admin view is built using pug and their routes protected with JWT authentication. The admin can create new disc categories and upload photos and descriptions of new discs for sale. The photo images are stored in an AWS S3 bucket and their urls are stored in a MongoDB database. All of this is handled by the Express API. The view for the client is built using React.js and Tailwind CSS and features the React context API to handle state management of the users cart.',
            link: "https://barrysdiscs.netlify.app",
        }
        ,{
            project: 'Blog API',
            
            desciption: 'Fullstack Content Management System with separate admin and user roles. The API is built with express and communicates with a MongoDB database which stores all blog posts and comments. There are two separate views, one for the admin which has routes protected by JWT authentication with PassportJS, and one for the normal user. The admin portal has the ability to create, edit, delete, and publish posts to be viewed by normal users. The admin can also view and delete all commments left on posts by normal users. Normal users can leave comments without having to signup for a user account.',
            link: 'https://johnblogclient.netlify.app'
        }, 
        
            
    ]
    
    return(
        <div className="grid grid-cols-1 gap-8 py-24 mx-12">
            <h2 className="text-xl">Projects</h2>
            
            {experiences.map((experience, index) => {
                return(
                    <div key={index} className="flex flex-col gap-1">
                        <h1 className="text-lg">{experience.project}</h1>
                        <p className="">{experience.desciption}</p>
                        <a href={experience.link} target="_blank" className="text-sky-500">Live Demo of Project</a>
                    </div>
                        
                )
            })}
        </div>
    )
}

export default Experience