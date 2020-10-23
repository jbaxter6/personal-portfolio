import React, { Component } from 'react'
import Wave from '../components/Wave'
import About from '../components/About'

export default class LifeContainer extends Component {
    render() {
        return (
            <div class='wrap'>
                <About />
                <Wave />
            </div>
        )
    }
}
