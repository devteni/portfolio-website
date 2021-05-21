import '../containers/App.css';
import Teni from "../avatar.jpg"

function Site() {
  return (
    <div>
      <div id="About" className="text-gray-300 text-center h-screen" data-aos="fade-up">
        <img src={Teni} alt="Teniola Fatunmbi" className="rounded-full lg:w-1/5 w-3/5 lg:mx-32 mx-10 my-2"/>
        <p className="text-3xl font-bold lg:text-5xl">Hi, I am Teniola</p>
        <p className="text-xl lg:text-2xl" id="demo" data-aos="fade-right"><code>Developer </code>and <p>writer.</p></p>
      </div>
    </div>
  );
}

export default Site;
