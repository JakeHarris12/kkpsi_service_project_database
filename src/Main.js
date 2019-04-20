import React, { Component } from 'react'
import TopBar from './TopBar';
import ProjectBox from './ProjectBox'
import { StyleSheet, css} from 'aphrodite'

class Main extends Component {

    render(){

        return(
            <div className={css(styles.main)}>
                <TopBar displayProjectForm={this.props.displayProjectForm} logout={this.props.logout} user={this.props.user}/>
                <div className={css(styles.body)}>
                    {
                        this.props.projects.map(prj => <ProjectBox key={prj.title} project={prj} />)
                    }
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
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
})

export default Main