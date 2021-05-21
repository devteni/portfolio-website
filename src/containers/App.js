import React, {Component} from "react";
import './App.css';
import Home from "./Home"
import Navbar from '../components/Navbar'
import Links from "../components/Links"

import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "../components/Contact";


class App extends Component{
  render(){
    return (
      <Router>
        <div >
          <Navbar />
          <div className="lg:p-32 p-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          <Links />
       
       </div>
       
      </Router>
    
  );
}

  }
  

export default App;
