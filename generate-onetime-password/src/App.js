import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Particles from 'react-particles-js';
import Generatepassword from './generatepass';
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 3
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }} />
        <Router>
          <React.Fragment>
            <Route exact path='/' component={Home}></Route>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/Generatepassword" component={Generatepassword} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
