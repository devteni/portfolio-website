import React from "react";
import Project from "./Project"
const ProjectList = ({data}) => {
    return(
        <div className="mt-10 border-gray-900" id="Projects" data-aos="fade-up">
        <p className="transition-1000 text-center mb-4 font-bold lg:font-extrabold text-3xl antialiased">PROJECTS</p>   
            <div className="flex flex-wrap flex-row justify-center lg:flex-row flex-wrap">
                {
                data.map((project, i) => {
                    return(<Project key={i}
                            id={data[i].id}
                            image={data[i].image} 
                            desc={data[i].desc}
                            tags={data[i].tags}  />)
                })
            }
            </div>    
            <p className="p-3 bg-gray-600 float-right mr-32 rounded-lg hover:bg-gray-700"><a href="https://github.com/Omoteniola-dev" rel="noreferrer" target="_blank">View more</a></p>
        </div>
    )
}

export default ProjectList;