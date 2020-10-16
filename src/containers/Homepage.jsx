import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Home from './HomeContainer'

export default class Homepage extends Component {
    render() {
        return (
            <div class="wrapper">
                <NavBar/>
                <Home />
            </div>
        )
    }
}
