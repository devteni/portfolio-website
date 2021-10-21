import '../containers/App.css';
import { Link } from 'react-router-dom';

function Site() {
  return (
    <>
      <div id="about" className="flex flex-wrap justify-center text-gray-300 text-center text-white lg:w-3/4 
      lg:mt-32 mx-10 mt-14 p-8" data-aos="fade-up">
        <div className="tracking-widest">
          <p className="text-3xl font-bold lg:text-5xl lg:w-3/5">Hi! I'm Teniola.
          I <span className="text-gray-500">build stuffs that work on computers</span> and also <span className="text-gray-500">write about them</span>.
          </p>
          <p className="" data-aos="fade-right">
            <Link to="#contact" className="contact-btn">
                Contact <i className="fas fa-envelope env"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Site;
