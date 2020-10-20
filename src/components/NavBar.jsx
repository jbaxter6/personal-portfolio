import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <header>
                <div class="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/life">Life</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li class="btn"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div class="logo">
                    <p>Hey</p>{/* <img src='' alt=''></img> */}
                </div>
            </header>
        )
    }
}
