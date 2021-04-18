import React, {Component} from "react";
import Teni from "../Teniola.jpg";

class About extends Component{
    //constructor(){}

    render(){
        return(
            <div data-aos="fade-down">
                <div className="text-left p-2" id="About">
                <hr />
                    <p className="text-3xl text-center font-extrabold">ABOUT ME</p>
                <div className="mt-4 h-full flex flex-wrap lg:p-4 text-gray-100">
                <img className="rounded-full w-1/5 h-1/5 lg:w-1/5 lg:h-1/5" alt="Profile" src={Teni} data-aos="fade-up" />
                <p className="px-2 w-4/5 lg:w-2/5 text-center break-normal">
                    I am a computer science undergraduate and software engineer. I use code to solve real-life problems
                    and also make money. I work with code and no-code technologies to build websites and web applications for businesses.
                    <br/>
                    When I'm not coding, I am either reading or learning something new.
                    <br/>
                    Feel free to contact if you want collaborations on your projects. Also, you can connect with me on my <a href="#Links" className="text-blue-700">socials</a>
                </p>

                <div className="w-full text-center lg:w-2/5">
                    <p className="text-2xl font-extrabold ml-8 mt-4">SKILLS</p>
                    <ul className="ml-10 flex flex-wrap lg:flex-row justify-between">
                        <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">HTML & CSS</li>
                        <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">JAVASCRIPT</li>
                        <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">REACT</li>
                        <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">PYTHON</li>
                        <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">GIT</li>
                        
                    </ul>
                </div>
                
                </div>
                    
                </div>
            </div>

            
        )
    }
}

export default About;