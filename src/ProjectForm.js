import React, { Component } from 'react'
import {css, StyleSheet} from "aphrodite";

class ProjectForm extends Component{

    state = {
        project: {
            title: '',
            author: '',
            desc: '',
            num_people: '',
            date: '',
        }
    }

    handleSumbit = (ev) => {
        ev.preventDefault()
        this.props.addProject(this.state.project)
        return false
    }

    handleChange = (ev) => {
        const project = {...this.state.project}
        const target = ev.target
        const value = target.value
        project[target.name] = value
        this.setState({ project })
        //console.log(this.state.project)
    }

    render(){
        return(
            <div className={css(styles.projectformz)}>
                <main>
                    <div className={css(styles.top)}>
                        <h1 className={css(styles.header)}>Project Form</h1>
                        <h2 className={css(styles.header)}>Create a Project</h2>
                    </div>
                    <form className="ProjectCreate">
                        <p>
                            <label htmlFor="title" className={css(styles.formWords)}>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.project.title}
                                onChange={this.handleChange}
                                autoFocus
                                style={styles.form}
                            />
                        </p>
                        <p>
                            <label htmlFor="author" className={css(styles.formWords)}>Who's Creating this Project?</label>
                            <input
                                type="text"
                                name="author"
                                value={this.state.project.author}
                                onChange={this.handleChange}
                                style={styles.form}
                            />
                        </p>
                        <p>
                            <label htmlFor="desc" className={css(styles.formWords)}>Description</label>
                            <input 
                                type="text"
                                name="desc"
                                value={this.state.project.desc}
                                onChange={this.handleChange}
                                style={styles.form}
                            />
                        </p>
                        <p>
                            <label htmlFor="num_people" className={css(styles.formWords)}>How Many People are Needed?</label>
                            <input 
                                type="number"
                                min="1"
                                name="num_people"
                                value={this.state.project.num_people}
                                onChange={this.handleChange}
                                style={styles.form}
                            />
                        </p>
                        <p>
                            <label htmlFor="date" className={css(styles.formWords)}>When Will the Project be Started?</label>
                            <input
                                type="date"
                                name="date"
                                value={this.state.project.date}
                                onChange={this.handleChange}
                                style={styles.form}
                            />
                        </p>
                        <button type="button" onClick={this.handleSumbit} className={css(styles.button)}>Create</button>
                    </form>
                </main>
            </div>
        )
    }

}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        borderRadius: '1rem',
        border: '2px solid grey',
        padding: '0.25rem'
    },
    formWords: {
        color: 'white',
        margin: '1',
        padding: '1rem 1rem',
        fontFamily: 'Georgia',
    },
    projectformz: {
        backgroundColor: 'blue',
        height: '100vh',
        alignItems: 'row',
        justifyContent: 'center',
    },
    header: {
        color: 'blue',
        fontSize: '1.5rem',
        margin: '0',
        fontFamily: 'Georgia',
    },
    top:{
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '1rem 1rem',
        width: 'auto',
    },
    button: {
        borderRadius: '1rem',
        backgroundColor: 'white',
        color: 'blue',
        border: '2px solid grey',
        fontFamily: 'Trebuchet MS',
        fontSize: '1.2rem',
        fontColor: 'blue',
    },
})

export default ProjectForm