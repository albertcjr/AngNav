import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="Projects">
        {this.props.project.title} - {this.props.project.category}
      </div>
    );
  }
}

export default ProjectItem;