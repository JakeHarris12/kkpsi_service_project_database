import React, { Component } from 'react'

class TopBar extends Component{

    handleClick = (ev) => {
        this.props.displayProjectForm()
    }

    handleLogout = (ev) => {
        this.props.logout(this.props.user.code)
    }

    render(){
        return(
            <div className="TopBar" style={styles.topbar}>
                <div className="header" style={styles.header}>
                    <button className="AddProject" onClick={this.handleClick} style={styles.button}>Add a Project</button>
                    <h3>Hello, {this.props.user.name}!</h3>
                    <button className="Logout" onClick={this.handleLogout} style={styles.button}>Logout</button>
                </div>
                <div className="Logo" style={styles.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kappa_Kappa_Psi_Coat_of_Arms.svg/1200px-Kappa_Kappa_Psi_Coat_of_Arms.svg.png" alt="" style={styles.logo}/>
                </div>
                <div className="Title" style={styles.title}>
                    <h1>Kappa Kappa Psi Service Project Database</h1>
                </div>
            </div>
        )
    }
}

const styles = {
    title: {
        color: 'blue',
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
    },
    button: {
        display: 'block',
        borderRadius: '1rem',
        backgroundColor: 'blue',
        color: 'white',
        cursor: 'pointer',
        outline: 0,
        width: '80px',
    },
    header: {
        display: 'flex',
        flexDirection: 'columns',
        justifyContent: 'space-between',
    }
}

export default TopBar