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
                        <li><a href="#">Life</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Goals</a></li>
                        <li><a href="#">Photos</a></li>
                        <li class="btn"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}