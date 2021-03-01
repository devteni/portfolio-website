import React from "react";

const Links = () => {
    return(
        <div className="flex justify-center">
            <nav className="w-screen lg:px-10 sm:px-10 px-2 sm:flex justify-center border-gray-600 z-10"> 
        
            <ul className="hidden sm:flex cursor-pointer" id="Links">
                <li className="my-2 p-3 hover:text-blue-300 transition duration-200 hover:bg-gray-800 lg:hover:bg-gray-900 rounded-2xl sm:hover:bg-transparent text-blue-700">
                <a href="https://github.com/Omoteniola-dev" target="_blank" rel="noreferrer">
                    <p className="text-base antialiased"><i class="fab fa-github"></i>Github</p>
                </a>
                
                </li>
                <li className="text-blue-700 my-2 p-3 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 lg:hover:bg-gray-900 rounded-2xl transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <a href="https://twitter.com/Omoteniola_dev" target="_blank" rel="noreferrer">
                    <p className="text-base antialiased">Twitter</p>
                </a>
                </li>
                <li className="text-blue-700 my-2 p-3 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 lg:hover:bg-gray-900 rounded-2xl transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <a href="https://instagram.com/Omoteniola.dev" target="_blank" rel="noreferrer">
                    <p className="text-base antialiased" >Instagram</p>
                </a>
                
                </li>
                <li className="text-blue-700 my-2 p-3 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 lg:hover:bg-gray-900 rounded-2xl transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <a href="mailto:fatunmbiteniola001@gmail.com">
                    <p className="text-base antialiased"> Mail </p>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Links;