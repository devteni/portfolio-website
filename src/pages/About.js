import React from "react";
//import Teni from "../Teniola.jpg";

const skills = [ "HTML & CSS", "JAVASCRIPT", "REACTJS", "NODEJS", "MONGODB", "PYTHON", "GIT"]
const About = () => {
    return(
            <div className="md:grid md:grid-cols-2 md:gap-2 h-screen p-5">
                <div className="invisible md:visible border-r-2">
                    <section className="text-sm p-5 object-center ">
                        You don't need a great work, you need a rarified approach to your work -
                        <br/> <i>Cal Newport</i>
                    </section>
                </div>

                <div className="lg:px-5 text-center text-white overscroll-auto">
                    <section id="background">
                        <p className="capitalize hover:border-b-1 text-gray-500 italic">background</p>
                        <article className="p-3">
                            I'm a computer science undergraduate with a roll-up-your-sleeves attitude
                            to gaining and employing tech skills in the real world. 
                            
                            <br /><br />    
                            A backend engineer by interest, but I dabble in frontend every now and then
                            'cos I've got a knack for UIs. 

                            I am always open to every opportunity
                            available to build real-world software solutions.
                        </article>
                    </section>
                    <section id="skills">
                        <article>
                            I'd highlight my skills
                        </article>
                    </section>
                </div>
                
                {/* <h1 className="text-white text-center mt-10 text-4xl abt" data-aos="zoom-up">How about we play a game? Check back in a couple of hours to pick a card</h1> */}
            </div>

            
        )
}
export default About;