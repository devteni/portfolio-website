import React, {Component} from "react";
import '../styles/App.css';
import Home from "../pages/Home"
import Navbar from '../components/Navbar'
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact";
import Links from "../components/Links";


class App extends Component{
  render(){
    return (
      <Router>
        <div >
          <Navbar />
          <div className="lg:p-14 p-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
          <Contact /> 
          <Links />      
       </div> 
      </Router>
    
  );
}

  }
  

export default App;
