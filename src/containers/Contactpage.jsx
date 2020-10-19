import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Contact from './ContactContainer'

export default class Contactpage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1 class="contact-head">LET'S GET IN TOUCH!</h1>
                <Contact />
            </div>
        )
    }
}
