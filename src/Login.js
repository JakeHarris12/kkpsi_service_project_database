import React, { Component } from 'react'

class Login extends Component{

    render(){
        return(
            <div className="Login" style={styles.login}>
                <h1 style={styles.h}>Welcome to the Kappa Kappa Psi Gamma Pi Service Project Database</h1>
                <h3 style={styles.h}>Please Sign in Below:</h3>
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

const styles = {
    h:{
        color: 'blue',
        margin: '0',
        fontFamily: 'Georgia',
    },
    login: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '1rem 1rem',
        width: '50vh',
        top: '50%',
        left: '50%',
        margin: '-25vh 0 0 -25vh',
        borderRadius: '1rem',
        border: '2px solid grey',
    },
}

export default Login