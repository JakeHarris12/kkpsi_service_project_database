import React, { Component } from 'react'

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
        console.log("Got here!")
        this.props.addProject(this.state.project)
        return false
    }

    handleChange = (ev) => {
        const project = {...this.state.project}
        const target = ev.target
        const value = target.value
        project[target.name] = value
        this.setState({ project })
        console.log(this.state.project)
    }

    render(){
        return(
            <div>
                <main>
                    <h2 className="ProjectForm">Project Form</h2>
                    <h3 className="CreateProject">Create a Project</h3>
                    <form className="ProjectCreate">
                        <p>
                            <label htmlFor="title" className="TitleBox">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.project.title}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </p>
                        <p>
                            <label htmlFor="author" className="AuthorBox">Who's Creating this Project?</label>
                            <input
                                type="text"
                                name="author"
                                value={this.state.project.author}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="desc" className="DescBox">Description</label>
                            <input 
                                type="text"
                                name="desc"
                                value={this.state.project.desc}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="num_people" className="PeopleBox">How Many People are Needed?</label>
                            <input 
                                type="number"
                                min="1"
                                name="num_people"
                                value={this.state.project.num_people}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="date" className="DateBox">When Will the Project be Started?</label>
                            <input
                                type="date"
                                name="date"
                                value={this.state.project.date}
                                onChange={this.handleChange}
                            />
                        </p>
                        <button type="button" onClick={this.handleSumbit}>Create</button>
                    </form>
                </main>
            </div>
        )
    }

}

export default ProjectForm