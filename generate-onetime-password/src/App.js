import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Generatepassword from './generatepass';
import Home from './Home'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <React.Fragment>
            <div className='app-body'>
              <Route exact path='/' component={Home}></Route>
            </div>
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
