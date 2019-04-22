import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import Main from './Main'
import ProjectForm from './ProjectForm'
import Login from './Login'
import base from './firebaseConfig'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: [],

            loggedin: false,
            user: {
                name: "This shouldn't be here!"
            },
        }
    }

    signedIn = () => {
        return this.state.loggedin
    }

    showProjectForm = () => {
        return this.state.displayProjectForm
    }

    componentWillMount() {
        console.log("component mounted")
        if(sessionStorage.length !== 0){
            this.setState({loggedin: true})
            console.log(sessionStorage.getItem("user"))
            this.setState({ user: JSON.parse(sessionStorage.getItem("user")) })
        }
        var result = null,
            tmp = []
        window.location.search.substring(1).split("&").forEach(function (item) {
            tmp = item.split("=")
            if (tmp[0] === "code") result = decodeURIComponent(tmp[1])
        })
        if (result !== null) {
            this.handleAuth(result, this.handleCallback)
        }
        base.syncState('Projects', {
            context: this,
            state: 'projects',
            asArray: true,
        });
    } 

    handleCallback = (response, code) => {
        console.log("Handling callback")
        var result = JSON.parse(response)
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
            // var docRef = this.db.collection('Users').doc(result.user.id)
            // docRef.set(data, {merge: true})
            sessionStorage.setItem("user", JSON.stringify(data))
        } else {
            console.log(result.error)
            if (result.error === "code_already_used") {
                console.log("code is already used")
                var user = JSON.parse(sessionStorage.getItem("user"))
                if (user !== null) {
                    this.setState({ user })
                    this.setState({ loggedin: true })
                } else {
                    this.setState({ loggedin: false })
                }
            } else {
                console.log("some error occurred")
                this.setState({ loggedin: false })
            }
        }
    }
    handleAuth = (code, callback) => {
        console.log("In handleAuth")
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.response, code)
        }
        xmlHttp.open("GET", `https://slack.com/api/oauth.access?client_id=600357668291.605536749281&client_secret=9f38bf428122b05d8c401893464bba5c&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000`, true)
        xmlHttp.send(null)
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
        
        const name = this.changeTitle(project.title)

        var postData = {text: `A new service project was just created called '${project.title}!' Check it out!`}
        var http = new XMLHttpRequest();
        http.onreadystatechange = function (){}
        http.open("POST", "https://hooks.slack.com/services/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", true)
        http.send(JSON.stringify(postData))

        postData = {
            token: "xoxp-600357668291-611779261541-611913568789-9d35d79f1735d6cd4b5a7035bf1ff637",
            name,
            validate: true
        }
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            console.log(request.statusText)
        }
        request.open("POST", "https://slack.com/api/channels.create", true)
        // request.setRequestHeader("Authorization", "xoxp-600357668291-611779261541-611784809157-a79abf715b965f3363b242f9750358cf")
        request.send(JSON.stringify(postData))

    }

    changeTitle = (title) => {
        title = title.replace(/\s+/g, '-').toLowerCase()
        console.log(title)
        return title
    }

    logout = () => {
        this.setState({loggedin: false})
        sessionStorage.clear()
    }

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
