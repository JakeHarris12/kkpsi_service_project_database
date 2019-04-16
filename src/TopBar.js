import React, { Component } from 'react'

class TopBar extends Component{
    render(){
        return(
            <div className="TopBar" style={styles.topbar}>
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
}

export default TopBar