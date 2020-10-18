import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Contact from './ContactContainer'

export default class Contactpage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Contact />
            </div>
        )
    }
}
