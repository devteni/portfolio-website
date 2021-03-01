import React, {Component} from "react";
import './App.css';
import Site from './Site';
import Navbar from './Navbar'
import About from './About';
import ProjectList from "./ProjectList";
import Links from "./Links"


class App extends Component{
  constructor(){
    super();
    this.state = {
        Services: [
          {
          "id": 1,
          "image": null, 
          "desc": "IT company website - Kebisglobal"
        },
        {
          "id":2,
          "image": null, 
          "desc": "Pdf downloader"
        },
          
        {
          "id": 3,
          "image": null, 
          "desc": "Robofriends app"
        },
        {
          "id": 4,
          "image": null, 
          "desc": "Portfolio website"
        }
        ]
    }
}


  render(){
    const { Services } = this.state;
    return (
      <div>
      <Navbar />
        <div>
        <Site />
        <About />
        <ProjectList data ={Services}/>
        </div>
        <Links />
      </div>
    
  );
}

  }
  

export default App;
