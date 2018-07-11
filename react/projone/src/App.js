import React, { Component } from 'react';
import Projects from './Components/Projects';
import NewProject from './Components/NewProject';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
        projects: []
    }
  }


    componentDidMount() {
        this.setState({projects: [
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
        ]});
    
}

  render() {
    return (
      <div className="App">
      <NewProject />
      <Projects projects={ this.state.projects} />
      </div>
    );
  }
}

export default App;
