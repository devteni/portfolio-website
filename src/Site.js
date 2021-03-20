import './App.css';

var i = 0;
var txt = "Developer, Writer";
var speed = 50;
var anim = document.getElementById("demo")

function typeWriter() {
  if (i < txt.length) {
    anim.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function Site() {
  return (
    <div>
      <div id="About" className="text-gray-300 mt-52 text-center h-screen" data-aos="fade-up">
        <p className="text-3xl font-bold lg:text-5xl">Hi, I am Teniola</p>
        <p className="text-xl lg:text-2xl" id="demo" onAct={typeWriter}></p>
      </div>
      
    </div>
  );
}

export default Site;
