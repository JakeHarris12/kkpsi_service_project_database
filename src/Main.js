import React, { Component } from 'react'
import TopBar from './TopBar';

class Main extends Component {
    render(){
        return(
            <div className="Main" style={styles.main}>
                <TopBar />
                <div className="Body" style={styles.body}>
                    <dl style={styles.list}>
                        <div style={styles.dtd}>
                            <dt>Service Project 1</dt>
                            <dd>- Description 1</dd>
                        </div>
                        <div style={styles.dtd}>
                            <dt>Service Project 2</dt>
                            <dd>- Description 2</dd>
                        </div>
                        <div style={styles.dtd}>
                            <dt>Service Project 3</dt>
                            <dd>- Description 3</dd>
                        </div>
                    </dl>
                </div>
            </div>
        )
    }
}

const styles = {
    body: {
        backgroundColor: 'blue',
        height: '100vh',
    },
    dtd: {
        backgroundColor: "grey",
        padding: "2rem, 2rem",
        margin: "1rem",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        borderColor: 'black',
        borderWidth: '2px',
        width: '25rem',
        height: 'auto',
        fontFamily: 'Trebuchet MS',

        ':hover': {
            backgroundColor: "white",
        }
    },
    list: {
        alignItems: 'row',
        justifyContent: 'left',
        display: 'flex',
    },
    main: {
        backgroundColor: 'blue',
    },
}

export default Main