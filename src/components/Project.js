import React from "react";

const Project = ({id, desc, tags}) => {
    return (
         <div className="lg:h-1/3 lg:w-1/3 m-5 p-4 w-full shadow-lg lg:hover:bg-gray-300 
                    hover:shadow-md bg-gray-100 justify-center lg:shadow-xl rounded-xl" key={id}>
             <p className="font-light text-base lg:text-xl">{desc}</p>
             <div className="flex justify-end flex-row-reverse flex-wrap">
                {
                    tags.map((tag, i) => {
                        return <span className="p-1 px-2 m-1 bg-gray-300 font-sm rounded-xl">{tag}</span>
                    })
                }
             </div>
             <section className="text-right">
             <a href="" className="m-1"> Live </a>
             <a href="">Repo</a>
             </section>
        </div>       
            )
}
        

export default Project;