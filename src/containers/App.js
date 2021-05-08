import React, {Component} from "react";
import './App.css';
import Site from '../components/Site';
import Navbar from '../components/Navbar'
import About from '../components/About';
import ProjectList from "../components/ProjectList";
import Links from "../components/Links"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, } from "react-router-dom"


class App extends Component{
  constructor(){
    super();
    AOS.init({
      duration: 1200
    })
    this.state = {
        Services: [
          {
          "id": 1,
          "image": null, 
          "desc": "IT company website - Kebisglobal",
          "tags": ["React", "Tailwind", "Javascript"]
        },
        {
          "id":2,
          "image": null, 
          "desc": "Pdf downloader",
          "tags": ["Python"]
        },
        {
          "id": 3,
          "image": null, 
          "desc": "Employee-info-manager app",
          "tags": ["React", "Tailwind", "Javascript"]
        },
        {
          "id": 4,
          "image": null, 
          "desc": "Portfolio website",
          "tags": ["React", "Tailwind", "Javascript"]
        }
        ]
    }
}

  componentWillReceiveProps(){
    AOS.refresh()
  }
  render(){
    const { Services } = this.state;
    return (
      <Router>
        <div >
          <Navbar />
          <div className="lg:p-32 p-5">
            <Site />
            <About />
            <ProjectList data ={Services}/>
          </div>
          <Links />
       </div> 
      </Router>
    
  );
}

  }
  

export default App;
