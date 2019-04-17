import React, { Component } from 'react'
import TopBar from './TopBar';
import ProjectBox from './ProjectBox'

class Main extends Component {

    render(){

        return(
            <div className="Main" style={styles.main}>
                <TopBar displayProjectForm={this.props.displayProjectForm} />
                <div className="Body" style={styles.body}>
                    {
                        this.props.projects.map(prj => <ProjectBox key={prj.title} project={prj} />)
                    }
                </div>
            </div>
        )
    }
}

const styles = {
    body: {
        backgroundColor: 'blue',
        height: 'auto',
        alignItems: 'row',
        justifyContent: 'left',
        display: 'flex',
        flexDirection: 'columns',
    },
    main: {
        backgroundColor: 'blue',
        height: '100vh',
    },
}

export default Main