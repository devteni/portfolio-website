import { Link } from 'react-router-dom';

function Site() {
  return (
    <>
      <div id="about" className="h-screen flex flex-wrap justify-center 
      text-gray-300 text-center text-white lg:w-3/4 
      lg:mt-32 mt-16 mx-8 tracking-widest leading-9">
        <div className="text-left">
          <p className="font-bold lg:text-5xl text-3xl">Hi!<br /> I'm Teniola.<br /></p>
          <p className="font-light lg:text-4xl text-xl mt-10" data-aos="fade-right">I <span className="text-gray-500">build stuffs that work on computers</span> and also <span className="text-gray-500">write about them</span>.
          </p>
          <section id="call-to-actions" className="flex flex-wrap">
            <p className="contact-btn">
              <Link to="/contact" >
                  Say Hi... <i className="fas fa-envelope env"></i>
              </Link>
            </p>
            <p className="contact-btn">
              <a href="https://docs.google.com/document/d/1nptmEGmFVwSt6vrW1QQsNjzxm9A2Vcu2PLoq-NPNhLY/edit?usp=sharing" rel="noreferrer" target="_blank">
                Resume <i className="fas fa-book"></i>
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Site;
