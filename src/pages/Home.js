import React, { Component } from "react";
import ProjectList from "../components/ProjectList";
import Hero from "../components/Hero";
import AOS from 'aos';
import kebisglobal from '../assets/images/kebisglobal.png';
import pdfdownloader from '../assets/images/pdfdownloader.png';
import search4me from '../assets/images/search4me.png';
import portfolio from '../assets/images/portfolio.png';

class Home extends Component {
    constructor(){
        super();
        AOS.init({
          duration: 1200
        })
        const repoURI = "https://github.com/devteni/";
        this.assets = {
            projects: [
              {
                "id": 1,
                "title": "Search4me",
                "image": search4me,
                "desc": "A cross platform application designed to report missing persons. The idea sprouted during Zuri training about the time when kidnapping was rampant.",
                "tags": ["Nodejs", "MongoDB"],
                "live": "https://search4moi.netlify.app",
                "repo": `${repoURI}search-for-me-be-pjt-26`
              },
              {
                "id": 6,
                "title": "Stock manager",
                "image": "",
                "desc": "A fullstack application that allows users to invest their assets and take loans (WIP)",
                "tags": ["Nodejs", "MongoDB"],
                "live": `${repoURI}stock-manager`,
                "repo": `${repoURI}stock-manager`
              },
              {
              "id": 2,
              "title": "Kebisglobal",
              "image": kebisglobal,
              "desc": "An IT consulting company's website(In development)",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "https://kebisglobal.netlify.app",
              "repo": `${repoURI}kebisglobal`
            },
            {
              "id":3,
              "title": "Pdf downloader",
              "image": pdfdownloader,
              "desc": "A python script to download pdf's from a url",
              "tags": ["Python", "BeautifulSoup"],
              "live": `${repoURI}pdf-downloader`,
              "repo": `${repoURI}pdf-downloader`
            },
            {
              "id": 5,
              "title": "Portfolio website",
              "image": portfolio,
              "desc": "My portfolio website - yeah, this one.",
              "tags": ["React", "Tailwind", "Javascript"],
              "live": "https://devteni.netlify.app",
              "repo": `${repoURI}portfolio-website`
            },
            ]
        }
    }
    componentWillReceiveProps(){
        AOS.refresh()
      }
    render(){
        const { projects } = this.assets;
        return(
        <div>
            <Hero />
            <ProjectList data={projects}/>
        </div>
    )
    }
    
}

export default Home;