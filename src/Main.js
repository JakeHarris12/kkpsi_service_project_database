import React, { Component } from 'react'
import TopBar from './TopBar';
import ProjectBox from './ProjectBox'

class Main extends Component {

    constructor(){
        super()

        this.state = {
            projects: [
                {
                    title: "Service Project 1",
                    author: "Jake Harris",
                    desc: "This is service project test 1",
                    num_people: "1",
                    date: "May 1st, 2019",                    
                },
                {
                    title: "Service Project 2",
                    author: "Jake Harris",
                    desc: "This is service project test 2",
                    num_people: "3",
                    date: "May 7th, 2019",                    
                },
                {
                    title: "Service Project 3",
                    author: "Jake Harris",
                    desc: "This is service project test 3",
                    num_people: "2",
                    date: "May 15th, 2019",                    
                },
            ],
        }
    }

    render(){
        return(
            <div className="Main" style={styles.main}>
                <TopBar />
                <div className="Body" style={styles.body}>
                    {/* <dl style={styles.list}>
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
                    </dl> */}
                    {
                        this.state.projects.map(prj => <ProjectBox project={prj} />)
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