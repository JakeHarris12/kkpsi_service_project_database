import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

class ProjectBox extends Component{

    render(){

        const project = this.props.project

        return(
            <div className={css(styles.container)}>
                <h3>{project.title} by {project.author}</h3>
                <p>{project.desc}</p>
                <p>Number of people needed: {project.num_people}</p>
                <p>Project start date: {project.date}</p>
            </div>
        )
    }

}

const styles = StyleSheet.create({
    container: {
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
        ':hover' : {
            backgroundColor: 'Gold',
        }
    },
})

export default ProjectBox