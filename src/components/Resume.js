import React from 'react'
//import components
import Aboutme from './solid/Aboutme'
import Person from './solid/Person'
import Skills from './solid/Skills'

export default class Resume extends React.Component {

    render() {
        return (
            <div className="resume">
                <section className="header">
                    <Person />
                    <Aboutme />
                </section>
                <section className="skills">
                    <Skills />
                </section>
            </div>
        )
    }

}