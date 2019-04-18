import React, { Component } from 'react';
import './App.css';

import Main from './Main'
import ProjectForm from './ProjectForm'
import Login from './Login'
import * as firebase from 'firebase'
import config from './firebaseConfig'


class App extends Component {

  constructor(props){
    super(props)

    firebase.initializeApp(config)
    this.db = firebase.firestore()

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
            author: "Jake Harris, Ian Ostermann",
            desc: "This is service project test 3",
            num_people: "2",
            date: "May 15th, 2019",
        },
      ],

      displayProjectForm: false,
      loggedin: false,
      user:{
        name:"This shouldn't be here!"
      },
    }
  }

  componentDidMount() {
      console.log("component mounted")
      var result = null,
        tmp = []
      window.location.search.substring(1).split("&").forEach(function (item) {
        tmp = item.split("=")
        if(tmp[0] === "code") result = decodeURIComponent(tmp[1])
      })
      if(result !== null){
        this.handleAuth(result, this.handleCallback)
      }
  }

  handleCallback = (response) => {
    var result = JSON.parse(response)
    this.setState({user: result.user})
    this.setState({loggedin: true})
    var data = {
      name: result.user.name,
      email: result.user.email,
      id: result.user.id,
      team: result.team.name,
      teamID: result.team.id,
      teamDomain: result.team.domain,
      scope: result.scope,
      ok: result.ok,
      accessToken: result.access_token
    }
    console.log(result)
    var docRef = this.db.collection('Users').doc(result.user.id)
    docRef.set(data, {merge: true})
  }
  handleAuth = (code, callback) => {
    console.log("In handleAuth")
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.response)
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
    this.displayProjectForm()
  }

  displayProjectForm = () => {
    this.setState({
        displayProjectForm: !this.state.displayProjectForm
    })
  }

  render() {

    const loggedin = this.state.loggedin
    if(!loggedin){
      return(
        <div className="App">
          <Login/>
        </div>
      )
    }else{
      const displayProjectForm = this.state.displayProjectForm
      let page;

      if(displayProjectForm){
        page = <ProjectForm displayProjectForm={this.displayProjectForm} addProject={this.addProject}/>
      }else{
        page = <Main projects={this.state.projects} displayProjectForm={this.displayProjectForm} user={this.state.user}/>
      }

      return (
        <div className="App">
          {page}
        </div>
      );
    }
  }
}

export default App;
