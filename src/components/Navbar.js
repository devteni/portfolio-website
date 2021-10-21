import AOS from "aos";
import React from "react";
// import Logo from "../logo.png"
import { Link } from "react-router-dom";

AOS.init({
    duration: 100
})


const Navbar = () => {
      return (
        <div data-aos="fade-down">
            <nav className="fixed w-screen lg:px-10 sm:px-10 px-2 sm:flex justify-between border-gray-600 z-10 bg-gray" style={{"background": "#282c34"}} data-aos="fade-left">
                <div className="flex px-4 justify-between sm:py-0 pb-1">
                    <img
                     src=""
                    alt="..."
                    className="h-12 m-3"
                    />
                </div>
        
            <ul className="hidden sm:flex cursor-pointer text-white" id="navContent">
                <li className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <Link to="/">Home</Link>
                </li>
                <li className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <Link to="/about">About</Link>
                </li>
                <li className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <a href="https://devteni.hashnode.dev" target="_blank" rel="noreferrer">Blog</a>
                </li>
            </ul>
            </nav>
        </div>
      );
}
export default Navbar;