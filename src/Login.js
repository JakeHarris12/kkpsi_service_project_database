import React, { Component } from 'react'
import {css, StyleSheet} from "aphrodite"
import {client_id} from './token'

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class Login extends Component{

    render(){

        const link = `https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=${client_id}&redirect_uri=https%3A%2F%2Fkky-gamma-pi-service-log.firebaseapp.com`

        return(
            <div className={css(styles.login)}>
                <h1 className={css(styles.h)}>Welcome to the Kappa Kappa Psi Gamma Pi Service Project Database</h1>
                <h3 className={css(styles.h)}>Please Sign in Below:</h3>
                <a href={link}>
                    <img alt="Sign in with Slack"
                        src="https://platform.slack-edge.com/img/sign_in_with_slack.png" 
                        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
                         className={css(styles.image)}
                    />    
                </a>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    h:{
        color: KKY_BLUE,
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
        textAlign: "center",
    },
    image: {
        height: "40px",
        width: "172px",
        display: "block",
        margin: "auto",
    }
})

export default Login