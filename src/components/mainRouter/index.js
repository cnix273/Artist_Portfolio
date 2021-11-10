import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import About from "../about"
import Home from "../home"
import Gallery from "../gallery"

export default class MainRouter extends Component {
    constructor(props) {
        super(props);
    
      }

    render() {
        return (
            <Router>
             <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/gallery" component={Gallery}/>
                </Switch>
            </Router>
        );
    }
}