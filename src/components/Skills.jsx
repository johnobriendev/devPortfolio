function Skills() {
    return(
        <div className="shadow-xl p-3 bg-white rounded flex flex-col gap-4">
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

            <div>
                <h1 className="text-4xl">Skills</h1>
            </div>
            <div>
                <h1 className="text-4xl">Just For Fun</h1>
            </div>
        </div>
    )
}
export default Skills