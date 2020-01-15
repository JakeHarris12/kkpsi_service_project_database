import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class TopBar extends Component{

    // Handle when the Create Project Button is pressed
    handleClick = () => {
        window.location.href="/create-project"
    }

    // Handle when the logout button is pressed
    handleLogout = () => {
        this.props.logout(this.props.user.code)
    }

    // This is the HTML for the top of the main page
    render(){
        return(
            <div className={css(styles.topbar)}>
                <div className={css(styles.header)}>
                    <button className={css(styles.button)} onClick={this.handleClick}>Add a Project</button>
                    <button className={css(styles.button)} onClick={this.handleLogout}>Logout</button>
                </div>
                <div className={css(styles.logo)}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kappa_Kappa_Psi_Coat_of_Arms.svg/1200px-Kappa_Kappa_Psi_Coat_of_Arms.svg.png" alt="" className={css(styles.logo)}/>
                </div>
                <div className={css(styles.title)}>
                    <h1>Kappa Kappa Psi Service Project Database</h1>
                </div>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        color: KKY_BLUE,
        fontSize: '1.5rem',
        margin: '0',
        fontFamily: 'Georgia',
        textAlign: 'center',
    },
    topbar: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '1rem 1rem',
        width: 'auto',
    },
    logo: {
        height: '100px',
        wight: '100px',
        display: "block",
        margin: "auto",
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
    header: {
        display: 'flex',
        flexDirection: 'columns',
        justifyContent: 'space-between',
    }
})


export default TopBar