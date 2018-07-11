import React, { Component } from 'react';


class NewProject extends Component {

    static defaultProps = {
       categories: ['Internal', 'IT', 'Management', 'Finance', 'Administration']
    }
     
    handleSubmit(e){
        console.log('test');
        e.preventDefault();
    }


    render() {
       let projcategory = this.props.categories.map
       (
            category => 
            {
                return ( <option key={category} value="category">{category}</option> );
            }
       );


     console.log(NewProject.name)
    return (
     <div>
      <form onSubmit={this.handleSubmit}>
      <div>
          <label>Project Name </label> <br />
          <input type="text" name="projname" value="" />
      </div>    
      <div>
          <label>Project Description </label> <br />
          <input type="text" name="projdesc" value="" />
      </div> 
      <div>
          <label>Project Category </label> <br />
          <select ref="category">
          {projcategory}
          </select>
      </div> 
      <div>
          <input type="Submit" value="Submit" ></input>
          
      </div>   
     </form> 
    </div>
    );
  }
}

export default NewProject;