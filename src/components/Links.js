import React from "react";
import "../styles/App.css";

const social = [
    {
      "icon": "fab fa-github",
      "link": "https://github.com/devteni",
    },
    {
      "icon": "fab fa-linkedin",
      "link": "https://linkedin.com/in/teniolafatunmbi",
    },
    {
      "icon": "fab fa-twitter",
      "link": "https://twitter.com/devteni",
    }
  ];
const Links = () => {
    return(
        <div>
            <nav className="lg:px-10 sm:px-10 px-2 sm:flex justify-center border-gray-600 z-10 center"> 
        
            <ul className="sm:flex cursor-pointer" id="Links">
                <div className="flex flex-row flex-wrap justify-center lg:mx-10 mx-5">
                    {
                        social.map((link, i) => {
                        return (
                            <li className="my-2 mx-1 p-3 transition duration-200" key={i}>
                                <a href={link.link} target="_blank" rel="noreferrer">
                                    <p className="text-2xl text-white"><i className={link.icon}></i></p>
                                </a>
                            </li>
                            )
                        })
                    }
                </div>
            </ul>
            </nav>
        </div>
    )
}

export default Links;