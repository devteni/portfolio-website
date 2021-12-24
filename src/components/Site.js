import { Link } from 'react-router-dom';

function Site() {
  return (
    <>
      <div id="about" className="h-screen flex flex-wrap justify-center 
      text-gray-300 text-center text-white lg:w-3/4 
      lg:mt-32 mt-6 mx-8 tracking-widest leading-9">
        <div className="text-left">
          <p className="font-bold lg:text-5xl text-3xl">Hi!<br /> I'm Teniola.<br /></p>
          <p className="lg:text-4xl text-2xl" data-aos="fade-right">I <span className="text-gray-500">build stuffs that work on computers</span> and also <span className="text-gray-500">write about them</span>.
          </p>
          <p className="contact-btn">
            <Link to="/contact" >
                Say Hi <i className="fas fa-envelope env"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Site;
