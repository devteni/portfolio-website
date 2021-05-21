import React, { Component } from "react";
import ProjectList from "../components/ProjectList";
import Site from "../components/Site";
import AOS from 'aos';
class Home extends Component {
    constructor(){
        super();
        AOS.init({
          duration: 1200
        })
        this.state = {
            Services: [
              {
              "id": 1,
              "desc": "Kebisglobal",
              "tags": ["React", "Tailwind", "Javascript"]
            },
            {
              "id":2,
              "desc": "Pdf downloader",
              "tags": ["Python"]
            },
            {
              "id": 3,
              "desc": "Employee-info-manager app",
              "tags": ["React", "Tailwind", "Javascript"]
            },
            {
              "id": 4,
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
        return(
        <div>
            <Site />
            <ProjectList data={Services}/>
        </div>
    )
    }
    
}

export default Home;