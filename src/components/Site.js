import '../containers/App.css';
import { Link } from 'react-router-dom';

function Site() {
  return (
    <>
      <div id="about" className="flex flex-wrap justify-center text-gray-300 text-center text-white lg:w-3/4 
      lg:mt-32 mx-8 mt-14 p-3" data-aos="fade-up">
        <div className="tracking-widest leading-9">
          <p className="text-left font-bold lg:w-3/5"><span className="text-2xl lg:text-4xl">Hi!<br /> I'm Teniola.</span><br />
          I <span className="text-gray-500">build stuffs that work on computers</span> and also <span className="text-gray-500">write about them</span>.
          </p>
          <p className="" data-aos="fade-right">
            <Link to="/contact" className="contact-btn">
                Say Hi <i className="fas fa-envelope env"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Site;
