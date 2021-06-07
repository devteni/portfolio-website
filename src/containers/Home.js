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
            projects: [
              {
              "id": 1,
              "title": "Kebisglobal",
              "desc": "An IT consulting company's website(In development)",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "kebisglobal.netlify.app",
              "repo": "https://github.com/Omoteniola-dev/kebisglobal"
            },
            {
              "id":2,
              "title": "Pdf downloader",
              "desc": "A python script to download pdf's from a url",
              "tags": ["Python"],
              "live": "",
              "repo": "https://github.com/Omoteniola-dev/pdf-downloader"
            },
            {
              "id": 3,
              "title": "Employee-info-manager app",
              "desc": "A react app that displays information about users from an API",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "",
              "repo": "https://github.com/Omoteniola-dev/employee-info-manager"
            },
            {
              "id": 4,
              "title": "Portfolio website",
              "desc": "My portfolio website - yeah, this one.",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "",
              "repo": "https://github.com/Omoteniola-dev/portfolio-website"
            }
            ]
        }
    }
    componentWillReceiveProps(){
        AOS.refresh()
      }
    render(){
        const { projects } = this.state;
        return(
        <div>
            <Site />
            <ProjectList data={projects}/>
        </div>
    )
    }
    
}

export default Home;