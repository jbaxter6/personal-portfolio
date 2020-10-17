import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Life from './LifeContainer'

export default class Lifepage extends Component {
    render() {
        return (
            <div class="life-wrapper">
                <NavBar />
                <Life />
            </div>
        )
    }
}
