import React from "react";
//import Teni from "../Teniola.jpg";

const skills = [ "HTML & CSS", "JAVASCRIPT", "REACTJS", "NODEJS", "MONGODB", "PYTHON", "GIT"]
const About = () => {
    return(
            <div className="h-screen text-center p-5 mt-12">
                <div className="w-2/5 static-abt border-2 border-right">
                    <section className="text-sm p-5 object-center">
                        You don't need a great work, you need a rarified approach to your work -
                        <br/> <i>Cal Newport</i>
                    </section>
                </div>

                <div className="lg:px-5 lg:object-right text-white overscroll-auto">
                    <p className="">Teniola? </p>
                    <span>Skills</span>
                    <section>
                        <ul>
                            <li>Reactjs</li>
                            <li>Nodejs</li>
                        </ul>
                    </section>
                </div>
                
                {/* <h1 className="text-white text-center mt-10 text-4xl abt" data-aos="zoom-up">How about we play a game? Check back in a couple of hours to pick a card</h1> */}
            </div>

            
        )
}
export default About;