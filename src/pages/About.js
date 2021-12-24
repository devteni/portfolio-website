const skills = ["JAVASCRIPT", "TYPESCRIPT", "REACTJS", "NODEJS/EXPRESS", "MONGODB", "PYTHON", "GIT"]
const About = () => {
    return(
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 h-3/4 p-5">
                <div className="lg:border-r-2">
                    <section className="text-sm lg:p-5 lg:m-20 m-10 object-center text-gray-600 ">
                        
“No one owes you a great career, it argues; you need to earn it—and the process won’t be easy.""
                        <br/> <i>- Cal Newport</i>
                    </section>
                </div>

                <div className="lg:px-5 text-center text-white overscroll-auto">
                    <section id="background">
                        <p className="capitalize hover:border-b-1 text-gray-500 italic">background</p>
                        <article className="lg:p-3 p-1">
                            I'm a computer science undergraduate with a roll-up-your-sleeves attitude
                            to gaining and employing tech skills in the real world. 
                            
                            <br /><br />    
                            A backend engineer by interest, but I dabble in frontend every now and then
                            'cos I've got a knack for UIs. 

                            I am always open to every opportunity
                            available to build real-world software solutions.
                        </article>
                    </section>
                    <section id="skills" className="m-12">
                        <p className="text-gray-500">Technologies I use</p>
                        <article>
                            <ul className="flex flex-wrap justify-between">
                                {
                                    skills.map((skill, i) => {
                                        return <li className="capitalize p-2 m-2 border-2" key={i}>{skill}</li>
                                    })
                                }
                            </ul>
                        </article>
                        <p className="text-left text-gray-400 mt-10">Check out my <a className="underline" href="https://github.com/devteni" rel="noreferrer">Github</a></p>
                    </section>
                </div>
            </div>            
        )
}
export default About;