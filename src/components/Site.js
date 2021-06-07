import '../containers/App.css';
import Teni from "../avatar.jpg"
import github from "../svg/github.svg"
import twitter from "../svg/twitter.svg"
import linkedin from "../svg/linkedin.svg"
import { Link } from 'react-router-dom';

const social = [
  {
    "svg": github,
    "link": "https://github.com/Omoteniola-dev",
    "alt": "Teniola's github profile"
  },
  {
    "svg": linkedin,
    "link": "https://linkedin.com/teniolafatunmbi",
    "alt": "Teniola's linkedin profile"
  },
  {
    "svg": twitter,
    "link": "https://twitter.com/Omoteniola_dev",
    "alt": "Teniola's twitter profile"
  }
]

function Site() {
  return (
    <>
    <img src={Teni} alt="Teniola Fatunmbi" className="rounded-full lg:w-0.5 w-2/5 lg:my-32 mx-10 mt-14 lg:my-4"/>
      <div id="About" className="flex flex-wrap text-gray-300 text-center text-white lg:w-3/4" data-aos="fade-up">
        <div className="flex flex-row flex-wrap justify-center mx-10">
          {
            social.map((link, i) => {
              return <a href={link.link}><img src={link.svg} width="30" height="30" alt={link.alt} className="m-4" key={i}/></a>
            })
          }
        </div>
       <>
          <p className="text-3xl font-bold lg:text-5xl lg:w-3/5">Hi! I'm Teniola.
          I <span className="text-gray-500">build stuffs that work on the web</span> and also <span className="text-gray-500">write about them</span>.</p>
        </>
        <p className="text-center text-xl border-solid bor border-blue-700 p-3 m-5">
          <Link to="/contact" >
              Contact
          </Link>
        </p>
      </div>
    </>
  );
}

export default Site;
