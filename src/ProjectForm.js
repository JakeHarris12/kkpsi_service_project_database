import React, {Component} from 'react'
import {css, StyleSheet} from 'aphrodite'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class ProjectForm extends Component{

    // Set up blank data for a project
    state = {
        project: {
            title: '',
            author: JSON.parse(sessionStorage.getItem("user")).name,
            desc: '',
            num_people: '',
            date: '',
        },
        editorState: EditorState.createEmpty()
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
        const project = {...this.state.project}
        project['desc'] = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        this.setState({ project })
    }

    // When the submit button is pressed, call the addProject function
    handleSumbit = (ev) => {
        ev.preventDefault()
        this.props.addProject(this.state.project, this.props.handleChannelAdd)
        // Return back to the main page
        window.location.href="/projects"
        return false
    }

    // Returns back to the main page when the cancel button is pressed
    cancelSubmit = (ev) => {
        ev.preventDefault()
        window.location.href="/projects"
    }

    // When a field gets updated, make sure it changes the actual data
    handleChange = (ev) => {
        const project = {...this.state.project}
        const target = ev.target
        project[target.name] = target.value
        this.setState({ project })
    }

    // This is the HTML for the project form. It's gross right now
    render(){
        const { editorState } = this.state;
        return(
            <div className={css(styles.projectformz)}>
                <main>
                    <div className={css(styles.top)}>
                        <button type="button" onClick={this.cancelSubmit} className={css(styles.button)}>Cancel</button>
                        <div className={css(styles.title)}>
                            <h2 className={css(styles.header)}>Project Form</h2>
                            <h3 className={css(styles.header)}>Create a Project</h3>
                        </div>
                        <button type="button" onClick={this.handleSumbit} className={css(styles.button)}>Create</button>
                    </div>
                    <form className="ProjectCreate">
                        <p>
                            <div className={css(styles.projectTitle)}>
                                <label htmlFor="title" className={css(styles.title)}>Project Title: </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={this.state.project.title}
                                    onChange={this.handleChange}
                                    autoFocus
                                    className={css(styles.formTitle)}
                                />
                            </div>
                        </p>
                        <label className={css(styles.title)}>Project Description</label>
                        <Editor
                            editorState={editorState}
                            wrapperClassName={css(styles.editorWrapper)}
                            editorClassName={css(styles.editor)}
                            onEditorStateChange={this.onEditorStateChange}
                            hashtag={{
                                separator: ' ',
                                trigger: '#',
                            }}
                        />
                        {/* <textarea
                            disabled
                                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        /> */}
                        <div className={css(styles.bottomForm)}>
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
                        </div>
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
        padding: '0.25rem',
        textAlign: "center",
    },
    formTitle: {
        flex: 'auto',
        fontSize: '24px',
        border: '2px solid grey',
        padding: '0.25rem',
        margin: '0.25rem'
    },
    projectTitle: {
        display: 'flex',
    },
    title: {
        fontSize: '24px',
        color: 'white',
        padding: '0.5rem 0.5rem',
        fontFamily: 'Georgia',
    },
    formWords: {
        color: 'white',
        marginBottom: '1rem',
        padding: '1rem',
        fontFamily: 'Georgia',
        textAlign: "center",
    },
    projectformz: {
        backgroundColor: KKY_BLUE,
        height: '100vh',
        alignItems: 'row',
        justifyContent: 'center',
        textAlign: "center",
    },
    header: {
        color: KKY_BLUE,
        margin: '0',
        fontFamily: 'Georgia',
        textAlign: "center",
    },
    top:{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1rem',
        width: 'auto',
        textAlign: "center",
    },
    button: {
        display:'inline-block',
        backgroundColor: '#09268a',
        padding:'0.7em 1.4em',
        margin:'0 0.3em 0.3em 0',
        border: 'solid white',
        borderRadius:'0.15em',
        boxSizing: 'border-box',
        textDecoration:'none',
        fontFamily:'Roboto,sans-serif',
        textTransform: 'uppercase',
        fontWeight:'400',
        color:'#ffffff',
        boxShadow: 'inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17)',
        textAlign:'center',
        ':hover' : {
            borderColor: 'rgba(255,198,30,1)'
        },
    },
    editor: {
        height: '250px',
        overflow: 'auto',
    },
    editorWrapper: {
        marginTop: '0.5rem',
        backgroundColor: 'white',
    },
    bottomForm: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default ProjectForm