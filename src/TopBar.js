import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class TopBar extends Component{

    handleClick = () => {
        window.location.href="/create-project"
    }

    handleLogout = () => {
        this.props.logout(this.props.user.code)
    }

    render(){
        return(
            <div className={css(styles.topbar)}>
                <div className={css(styles.header)}>
                    <button className={css(styles.button)} onClick={this.handleClick}>Add a Project</button>
                    <h3>Hello, {this.props.user.name}!</h3>
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
    },
    topbar: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '1rem 1rem',
        width: 'auto',
    },
    logo: {
        height: '80px',
        wight: '80px',
        display: "block",
        margin: "auto",
    },
    button: {
        display: 'block',
        borderRadius: '1rem',
        backgroundColor: KKY_BLUE,
        color: 'white',
        cursor: 'pointer',
        outline: 0,
        width: '80px',
        ':hover' : {
            backgroundColor: 'MediumBlue',
        }
    },
    header: {
        display: 'flex',
        flexDirection: 'columns',
        justifyContent: 'space-between',
    }
})


export default TopBar