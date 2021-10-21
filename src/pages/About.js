import React from "react";
//import Teni from "../Teniola.jpg";

const skills = [ "HTML & CSS", "JAVASCRIPT", "REACTJS", "NODEJS", "MONGODB", "PYTHON", "GIT"]
const About = () => {
    return(
            <div className="h-screen w-2/3 text-center p-5 mt-12" data-aos="fade-down">
                {/* <div className="text-left p-2" id="About">
                <hr />
                    <p className="text-3xl text-center font-extrabold">ABOUT ME</p>
                <div className="mt-4 h-full flex flex-wrap lg:p-4 text-gray-100">
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
                        {
                            skills.map((skill) => {
                                return <li className="p-3 m-1 w-2/5 font-bold bg-gray-700 hover:text-blue-500 rounded-xl">{skill}</li>
                            })
                        }
                    </ul>
                </div>
                
                </div>
                </div> */}
                <h1 className="text-white text-center mt-10 text-4xl abt" data-aos="zoom-up">How about we play a game? Check back in a couple of hours to pick a card</h1>
            </div>

            
        )
}
export default About;