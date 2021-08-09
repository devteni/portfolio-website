import React, {Component} from "react";
import './App.css';
import Home from "../pages/Home"
import Navbar from '../components/Navbar'

import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "../pages/Contact";


class App extends Component{
  render(){
    return (
      <Router>
        <div >
          <Navbar />
          <div className="lg:p-14 p-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>       
       </div>
       
      </Router>
    
  );
}

  }
  

export default App;
