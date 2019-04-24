import React, { Component } from 'react'
import TopBar from './TopBar';
import ProjectBox from './ProjectBox'
import { StyleSheet, css} from 'aphrodite'

const KKY_BLUE = "#09268a"
const KKY_GOLD = "#ffc61e"

class Main extends Component {

    render(){

        return(
            <div className={css(styles.main)}>
                <TopBar history={this.props.history} 
                        location={this.props.location}
                        match={this.props.match}
                        displayProjectForm={this.props.displayProjectForm} 
                        logout={this.props.logout} 
                        user={this.props.user}
                />
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
        backgroundColor: KKY_BLUE,
        height: 'auto',
        alignItems: 'row',
        justifyContent: 'left',
        display: 'flex',
        flexDirection: 'columns',
        flexWrap: "wrap",
    },
    main: {
        backgroundColor: KKY_BLUE,
        height: '100vh',
    },
})

export default Main