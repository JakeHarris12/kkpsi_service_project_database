import React, { Component } from 'react';
import './App.css';

import Main from './Main'
import ProjectForm from './ProjectForm';

class App extends Component {

  constructor(){
    super()

    this.state = {
      projects: [
        {
            title: "Service Project 1",
            author: "Jake Harris",
            desc: "This is service project test 1",
            num_people: "1",
            date: "May 1st, 2019",                    
        },
        {
            title: "Service Project 2",
            author: "Jake Harris",
            desc: "This is service project test 2",
            num_people: "3",
            date: "May 7th, 2019",                    
        },
        {
            title: "Service Project 3",
            author: "Jake Harris",
            desc: "This is service project test 3",
            num_people: "2",
            date: "May 15th, 2019",                    
        },
      ],

      displayProjectForm: false
    }
  }

  addProject = (project) => {
    const projects = [...this.state.projects]
    projects.push(
        {
            title: project.title,
            author: project.author,
            desc: project.desc,
            num_people: project.num_people, 
            date: project.date,
        }
    )
    this.setState({ projects })
    this.displayProjectForm()
}

  displayProjectForm = () => {
    this.setState({
        displayProjectForm: !this.state.displayProjectForm
    })
  }

  render() {

    const displayProjectForm = this.state.displayProjectForm
    let page;

    if(displayProjectForm){
      page = <ProjectForm displayProjectForm={this.displayProjectForm} addProject={this.addProject}/>
    }else{
      page = <Main projects={this.state.projects} displayProjectForm={this.displayProjectForm}/>
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
