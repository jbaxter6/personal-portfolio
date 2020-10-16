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
                        <li><a href="#">My Life</a></li>
                        <li><a href="#">My Projects</a></li>
                        <li><a href="#">My Goals</a></li>
                        <li><a href="#">My Photos</a></li>
                        <li><a href="#">My Info</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
