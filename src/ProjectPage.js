import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

class ProjectPage extends Component {

    goBack = () => {
        this.props.history.push(`/projects`)
    } 

    render(){
        const project = this.props.project

        return(
            <div className="projectPage">
                <div className="topBar">
                    <button onClick={this.goBack}>Back</button>
                    <button>Join</button>
                </div>
                <h1>{project.title}</h1>
                <h2>By: {project.author}</h2>
                <div className="desc" dangerouslySetInnerHTML={{__html: project.desc}}></div>
                <h3>Start Date: {project.date}</h3>
                <p>Number of people needed: {project.num_people}</p>
                <h3>Project Volunteers</h3>
                <ul>
                    <li>Person 1</li>
                    <li>Person 2</li>
                    <li>Person 3</li>
                </ul>
            </div>
        )
    }
}

export default ProjectPage;