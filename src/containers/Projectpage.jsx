import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Project from './ProjectContainer'

export default class Projectpage extends Component {
    render() {
        return (
            <div class="project-wrapper">
                <NavBar />
                <Project />
            </div>
        )
    }
}
