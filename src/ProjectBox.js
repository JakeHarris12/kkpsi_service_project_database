import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class ProjectBox extends Component{

    handleClick = () => {
        this.props.handleProjectClick(this.props.project)
    }

    // This component represents the boxes on the main page that represent projects
    render(){

        const project = this.props.project

        return(
            <div className={css(styles.container)} 
                onClick={this.handleClick}
            >
                <h3>{project.title} by {project.author}</h3>
                <p>Number of people needed: {project.num_people}</p>
                <p>Project start date: {project.date}</p>
            </div>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: KKY_GOLD,
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