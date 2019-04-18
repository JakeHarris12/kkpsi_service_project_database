import React, { Component } from 'react'

class Login extends Component{

    render(){
        return(
            <div className="Login">
                <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=600357668291.605536749281&redirect_uri=http%3A%2F%2Flocalhost%3A3000">
                    <img alt="Sign in with Slack" 
                        height="40" 
                        width="172" 
                        src="https://platform.slack-edge.com/img/sign_in_with_slack.png" 
                        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" 
                    />    
                </a>
            </div>
        )
    }
}

export default Login