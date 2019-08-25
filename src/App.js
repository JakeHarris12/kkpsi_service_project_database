import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import Main from './Main'
import ProjectForm from './ProjectForm'
import Login from './Login'
import base from './firebaseConfig'
import token, {client_id, client_secret, general_hook} from './token'

class App extends Component {

    // Constructor
    constructor(props) {
        super(props)

        // Sets up array of projects, logged-in status, and user data
        this.state = {
            projects: [],

            loggedin: false,
            user: {
                name: "This shouldn't be here!"
            },
        }
    }

    // Returns logged-in status
    signedIn = () => {
        return this.state.loggedin
    }

    // Before this component loads, this code will be ran
    componentWillMount() {
        // Checks to see if user data is stored in session storage
        if(sessionStorage.length !== 0){
            // If user data was found, set logged-in status to true and get the data
            this.setState({loggedin: true})
            console.log(sessionStorage.getItem("user"))
            this.setState({ user: JSON.parse(sessionStorage.getItem("user")) })
        }
        // Create variables to store data from URL
        var result = null,
            tmp = []
        // Search through variables in URL for the code variable
        window.location.search.substring(1).split("&").forEach(function (item) {
            tmp = item.split("=")
            if (tmp[0] === "code") result = decodeURIComponent(tmp[1])
        })
        // If we received data, then authenticate the data
        if (result !== null) {
            this.handleAuth(result, this.handleCallback)
        }

        // Syncs up data with the data from Firebase
        base.syncState('Projects', {
            context: this,
            state: 'projects',
            asArray: true,
        });
    } 

    // Handle the callback from authentication
    handleCallback = (response, code) => {
        console.log("Handling callback")
        var result = JSON.parse(response)
        // If the data is good, then use it
        if (result.ok === true) {
            console.log("result is OK")
            this.setState({ user: result.user })
            this.setState({ loggedin: true })
            var data = {
                name: result.user.name,
                email: result.user.email,
                id: result.user.id,
                team: result.team.name,
                teamID: result.team.id,
                teamDomain: result.team.domain,
                scope: result.scope,
                ok: result.ok,
                accessToken: result.access_token,
                code: code,
            }
            console.log(result)
            // Store user data in session storage
            sessionStorage.setItem("user", JSON.stringify(data))
        } else {
            // Data was not good. Some error occurred
            console.log(result.error)
            if (result.error === "code_already_used") {
                // User is already logged-in
                console.log("Code is already used!")
                // Get user data from session Storage
                var user = JSON.parse(sessionStorage.getItem("user"))
                // Was there actual usable data in session storage?
                if (user !== null) {
                    this.setState({ user })
                    this.setState({ loggedin: true })
                } else {
                    // This case handles dumb errors where data gets lost
                    this.setState({ loggedin: false })
                }
            } else {
                console.log("ERROR: Bad data")
                this.setState({ loggedin: false })
            }
        }
    }

    // Handle the authentication process with Slack
    handleAuth = (code, callback) => {
        console.log("In handleAuth")
        //Create new  HTTP Request
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.response, code)
        }
        // Send GET request to Slack
        // Right now, it redirects to http://localhost:3000 upon completion. This needs to change later.
        xmlHttp.open("GET", `https://slack.com/api/oauth.access?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000`, true)
        xmlHttp.send(null)
    }

    // Adds a new project to the list of project
    addProject = (project) => {
        // Get the current list of projects
        const projects = [...this.state.projects]
        // Add on the project that was passed in
        projects.push(
            {
                title: project.title,
                author: project.author,
                desc: project.desc,
                num_people: project.num_people,
                date: project.date,
            }
        )

        // Update the list of projects
        this.setState({ projects })
        
        //Changes title to work with Slack better
        const name = this.changeTitle(project.title)

        // Sends message to general channel in Slack
        var postData = {text: `A new service project was just created called '${project.title}!' Check it out!`}
        var http = new XMLHttpRequest();
        http.onreadystatechange = function (){
            console.log(http.response)
        }
        http.open("POST", `${general_hook}`, true)
        http.send(JSON.stringify(postData))

        // Creates new channel for the project in Slack
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            console.log(request.response)
        }
        request.open("POST", `https://slack.com/api/channels.create?token=${token}&name=${name}&pretty=1`, true)
        request.send(null)
    }

    // Changes title of Project so Slack likes it better
    changeTitle = (title) => {
        title = title.replace(/\s+/g, '-').toLowerCase()
        console.log(title)
        return title
    }

    // Log out a user
    logout = () => {
        this.setState({loggedin: false})
        sessionStorage.clear()
    }

    // Render everything on the page
    render() {

        return(
            <Switch>
                <Route 
                    path="/sign-in"
                    render={navProps => (
                        this.signedIn()
                            ? <Redirect to="/projects" />
                            : <Login/>
                    )}
                />
                <Route
                    path="/create-project"
                    render={navProps => (
                        this.signedIn()
                            ? <ProjectForm {...navProps} addProject={this.addProject} />
                            : <Redirect to="/sign-in" />
                    )}
                />
                <Route
                    path="/projects"
                    render={navProps => (
                        this.signedIn()
                            ? <Main {...navProps} 
                                    projects={this.state.projects}
                                    logout={this.logout} 
                                    user={this.state.user} 
                                />
                            : <Redirect to="/sign-in" />
                    )}
                />
                <Route 
                    render={() => (
                        this.signedIn()
                            ? <Redirect to="/projects" />
                            : <Redirect to="/sign-in" />
                    )}
                />
            </Switch>
        )
    }
}

export default App;
