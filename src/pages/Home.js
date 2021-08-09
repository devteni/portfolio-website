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
        const repoURI = "https://github.com/devteni/";
        this.state = {
            projects: [
              {
                "id": 1,
                "title": "Search4me",
                "desc": "A cross platform application designed to report missing persons",
                "tags": ["Nodejs"],
                "live": "https://search4moi.netlify.app",
                "repo": `${repoURI}search-for-me-be-pjt-26`
              },
              {
                "id": 6,
                "title": "Bookstore application",
                "desc": "A bookstore web application in node",
                "tags": ["Nodejs"],
                "live": "",
                "repo": `${repoURI}bookstore-app`
              },
              {
              "id": 2,
              "title": "Kebisglobal",
              "desc": "An IT consulting company's website(In development)",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "https://kebisglobal.netlify.app",
              "repo": `${repoURI}kebisglobal`
            },
            {
              "id":3,
              "title": "Pdf downloader",
              "desc": "A python script to download pdf's from a url",
              "tags": ["Python"],
              "live": "",
              "repo": `${repoURI}pdf-downloader`
            },
            {
              "id": 4,
              "title": "Employee-info-manager app",
              "desc": "A react app that displays information about users from an API",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "",
              "repo": `${repoURI}employee-info-manager`
            },
            {
              "id": 5,
              "title": "Portfolio website",
              "desc": "My portfolio website - yeah, this one.",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "",
              "repo": `${repoURI}portfolio-website`
            },
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