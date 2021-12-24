import React from "react";
import Project from "./Project";

const ProjectList = ({data}) => {
    return(
        <div className="mt-10 border-gray-900" id="projects" data-aos="fade-up">
        {/* <p className="transition-1000 text-center mb-4 pb-2 font-bold lg:font-extrabold text-3xl text-white border-b-2 border-gray-100">
            Projects
            </p>    */}
            <h1 className="project-title">
                projects
            </h1>
            <div className="flex flex-wrap flex-row lg:justify-center lg:flex-row flex-wrap">
                {
                data.map((project, i) => {
                    return(<Project key={i}
                            id={data[i].id}
                            image={data[i].image} 
                            title={data[i].title}
                            desc={data[i].desc}
                            tags={data[i].tags}
                            live={data[i].live}
                            repo={data[i].repo}  />)
                })
            }
            </div>    
        </div>
    )
}

export default ProjectList;