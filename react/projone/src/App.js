import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
        projects: [
            {
                title: "Business Website",
                category: "Web Design"
            },
            {
                title: "Mobile Apps",
                category: "Mobile App Development"
            },
            {
                title: "E-commerce",
                category: "Web Development"
            }
        ]
    }
}

  render() {
    return (
      <div className="App">
      my app
      <Projects projects={ this.state.projects} />
      </div>
    );
  }
}

export default App;
