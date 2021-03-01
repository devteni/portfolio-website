import React from "react";

const Project = ({id, image, desc}) => {
    return (
         <div className="hover:animate-bounce m-10 p-10 ma-5 mb-4 w-4/5 h-auto shadow-lg lg:hover:bg-blue-300 hover:shadow-md lg:w-2/5 h-auto mb-4 ml-8 bg-gray-100 justify-center lg:shadow-xl rounded-xl">
            <img style={{width: '200px', height: '200px'}} alt="Project" src={image}/>
            <p className="font-light text-base">{desc}</p>        
        </div>       
            )
}
        

export default Project;