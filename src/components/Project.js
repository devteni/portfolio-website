import React from "react";

const Project = ({id, desc, tags, live, repo}) => {
    return (
         <div className="lg:h-1/3 lg:w-1/3 m-5 p-4 w-full shadow-lg
                    hover:shadow-md bg-gray-100 justify-center lg:shadow-xl rounded-lg" key={id}>
             <p className="font-light text-base lg:text-lg">{desc}</p>
             <div className="flex justify-end flex-row-reverse flex-wrap">
                {
                    tags.map((tag, i) => {
                        return <span className="p-1 px-2 m-1 bg-gray-300 font-sm text-sm rounded-xl">{tag}</span>
                    })
                }
             </div>
             <section className="text-right font-sm text-sm ">
             <a href={live} className="m-1 hover:text-gray-500"> Live </a>
             <a href={repo} className="hover:text-gray-700">Repo</a>
             </section>
        </div>       
            )
}
        

export default Project;