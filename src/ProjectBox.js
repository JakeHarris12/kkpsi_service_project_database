import React, { Component } from 'react'

class ProjectBox extends Component{

    render(){

        const project = this.props.project

        return(
            <div className="ProjectBox" style={styles.dtd}>
                <h3>{project.title} by {project.authors}</h3>
                <p>{project.description}</p>
                <p>Number of people needed: {project.numPeopleNeeded}</p>
                <p>Project start date: {project.date}</p>
            </div>
        )
    }

}

const styles = {
    dtd: {
        backgroundColor: "yellow",
        padding: "1rem",
        margin: "1rem",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        borderColor: 'black',
        borderWidth: '2px',
        width: 'auto',
        height: 'auto',
        fontFamily: 'Trebuchet MS',
    },
}

export default ProjectBox