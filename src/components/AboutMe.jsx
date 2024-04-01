function AboutMe() {
    return(
        <div className="flex flex-col md:grid md:grid-cols-2 ">
            <div className="flex flex-col gap-3 ">
                <div className="flex items-center">
                    <h1 className="font-bold text-4xl sm:text-6xl">John O'Brien</h1>
                    <img className="mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg" src="/john-profile-pic.jpg" alt="me" />
                </div>
                
                <h2 className="font-medium text-slate-800 text-xl sm:text2xl">Front End Developer</h2>
                <p className="text-slate-500">This is an inspiring quote that I will include in my webpage. It also may end up being a made up anecdote about my productivity and drive.</p>
                <div className="my-10 flex items-center gap-4 text-sm sm:text-base">
                    <button className="rounded-full bg-gradient-to-r from-blue-700 to-violet-700 text-white px-4 py-2 hover:opacity-70">Projects</button>
                    <a href="mailto:johnobrien.dev@gmail.com" className="rounded-full text-purple-800 border border-solid border-violet-800 px-4 py-2 hover:opacity-70">Contact</a>
                </div>
            </div>
            <img className="mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg" src="/john-profile-pic.jpg" alt="me" />
        </div>
        
    )
}
export default AboutMe