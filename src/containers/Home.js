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
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "kebisglobal.netlify.app",
              "repo": "https://github.com/Omoteniola-dev/kebisglobal"
            },
            {
              "id":2,
              "desc": "Pdf downloader",
              "tags": ["Python"],
              "live": "",
              "repo": "https://github.com/Omoteniola-dev/pdf-downloader"
            },
            {
              "id": 3,
              "desc": "Employee-info-manager app",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "",
              "repo": "https://github.com/Omoteniola-dev/employee-info-manager"
            },
            {
              "id": 4,
              "desc": "Portfolio website",
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