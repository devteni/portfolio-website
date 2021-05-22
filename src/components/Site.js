import '../containers/App.css';
import Teni from "../avatar.jpg"
import github from "../svg/github.svg"
import twitter from "../svg/twitter.svg"
import linkedin from "../svg/linkedin.svg"

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
      <div id="About" className="text-gray-300 text-center" data-aos="fade-up">
        <img src={Teni} alt="Teniola Fatunmbi" className="rounded-full lg:w-1/5 w-3/5 lg:mx-32 mx-10 my-2"/>
        <p className="text-3xl font-bold lg:text-5xl">Hi, I am Teniola</p>
        <p className="text-xl lg:text-2xl" id="demo" data-aos="fade-right"><code>Developer </code>and <p>writer.</p></p>
      <div className="flex flex-row flex-wrap justify-center">
        {
          social.map((link, i) => {
            return <a href={link.link}><img src={link.svg} alt={link.alt} className="m-4" key={i}/></a>
          })
        }
      </div>
      </div>
      
    </>
  );
}

export default Site;
