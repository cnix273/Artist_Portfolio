import React, { Component } from "react";
import Home from '../home'
import NavBar from "../nav"

// import "./style.css";

export default class Main extends Component {
  state = {
    name: [],
    email: [],
    message: []
  };
  
//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;

//     this.setState({
//       [name]: [value]
//     })
//   }

//   // Setting state to search value
//   handleFormSubmit = event => {
//     event.preventDefault();

//   };

  render() {
    return (
      <div className="body">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}
 