import React from "react";

const Label = ({ live, repo }) => {
    return(
        <section className="text-right font-sm text-sm">
             <a href={live} target="_blank" rel="noreferrer" className="m-1 hover:text-gray-200"> Live </a>
             <a href={repo} className="hover:text-gray-200">Repo</a>
        </section>
    )
}

const Project = ({id, title, desc, tags, live, repo}) => {
    return (
         <div className="lg:w-1/3 m-5 p-4 w-full shadow-lg
                    hover:shadow-md bg-gray-500 text-white font-bold justify-center lg:shadow-xl rounded-lg" key={id}>
             <p className="text-base lg:text-lg px-3 pb-0">{title}</p>
             <div className="flex justify-end flex-row-reverse flex-wrap p-1">
                {
                    tags.map((tag, i) => {
                        return <span className="p-1 px-2 m-1 bg-gray-400 font-sm text-sm rounded-xl">{tag}</span>
                    })
                }
             </div>
             <p className="p-2">{desc}</p>
             <Label live={live} repo={repo}/>
        </div>       
            )
}
        

export default Project;