import AOS from "aos";
import React from "react";
import Logo from "../logo.png"
import { Link } from "react-router-dom";

AOS.init({
    duration: 100
})

const navlinks = [
    {
        "text": "Home",
        "link": "/"
    }, 
    {
        "text": "Blog",
        "link": "https://tenifatunmbi.hashnode.dev"
    }, 
    {
        "text": "About",
        "link": ""
    }, 
    {
        "text": "Projects",
        "link": ""
    }, 
    {
        "text":"Get in touch",
        "link": ""
    }
]
console.log(navlinks.Home)
const Navbar = () => {
    const handleClick = () => {
        const element = document.querySelector("#navContent");
        element.classList.toggle("block");
        element.classList.toggle("hidden");
      };
    
      return (
        <div data-aos="fade-down">
            <nav className="fixed w-screen lg:px-10 sm:px-10 px-2 sm:flex justify-between border-gray-600 z-10 bg-gray" style={{"background": "#282c34"}} data-aos="fade-left">
                <div className="flex px-4 justify-between sm:py-0 pb-1">
                    <img
                     src={Logo}
                    alt="Logo"
                    className="h-12 m-3"
                    />
            
                    <button
                    className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
                    onClick={handleClick}
                    >
                    &#9776;
                    </button>
                </div>
        
            <ul className="hidden sm:flex cursor-pointer" id="navContent">
                {
                    navlinks.map((link, i) => {
                        return(
                        <li className="py-5 px-5 hover:text-blue-600 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-blue-700" data-aos="fade-up">
                        <Link to={link.link}>
                            <p className="text-base antialiased">{link.text}</p>
                        </Link>
                
                        </li>
                        )
                    })    
}
            </ul>
            </nav>
        </div>
      );
}
export default Navbar;