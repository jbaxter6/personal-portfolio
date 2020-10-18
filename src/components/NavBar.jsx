import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <header>
                <div>
                    {/* <img src='' alt=''></img> */}
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/life">Life</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Goals</a></li>
                        <li><a href="#">Photos</a></li>
                        <li class="btn"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
