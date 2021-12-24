import React from "react";

const Label = ({ live, repo }) => {
    return(
        <section className="text-right font-sm text-sm label ">
             <a href={live} target="_blank" rel="noreferrer" className="m-3 hover:text-gray-200"> Live </a>
             <a href={repo} className="m-3 hover:text-gray-200">Repo</a>
        </section>
    )
}

const Project = ({id, image, title, desc, tags, live, repo}) => {
    return (
        <div id="project" className="project lg:w-4/5 w-full my-5 lg:px-10 lg:py-4 px-4 py-2 rounded-sm">
            <div className="layer-1">
                <div className="lg:w-2/3 lg:mt-20 lg:px-4 mt-10 text-center text-white">
                    <img src={image} alt="COMING SOON ..." className="lg:h-3/4 h-full rounded-md"/>
                </div>
                <div className="lg:w-1/3 py-4 lg:mt-14 w-full
                text-white font-light justify-center rounded-lg h-1/3" key={id}>
                    <p className="text-base lg:text-lg px-3 pb-0">{title}</p>
                    <div className="flex justify-end flex-row-reverse flex-wrap p-1">
                        {
                            tags.map((tag, i) => {
                                return <span className="p-1 px-2 m-1 bg-gray-400 font-sm text-sm rounded-xl" key={i}>{tag}</span>
                            })
                        }
                    </div>
                    <p className="p-2 font-light">{desc}</p>
                    
                </div>  
            </div>
            <Label live={live} repo={repo} />
        </div>
            )
}

export default Project;