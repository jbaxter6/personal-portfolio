import React, { Component } from 'react'

export default class ProjectContainer extends Component {
    render() {
        return (
            <div class="proj-cont">

                            <div class='col-4'>
                                <h1> Home Sweet Home </h1>
                                <p>Home Sweet Home is a real estate platform that 
                                gives home buyers and sellers the opportunity to find and 
                                sell their homes independently.
                                </p>
                                <a href="https://github.com/jbaxter6/Home-Sweet-Home">Source Code</a>
                            </div>

                            <div class="col-8">
                                <div class="glide">
                                    <div class="glide__track" data-glide-el="track">
                                        <ul class="glide__slides">
                                            <li class="glide__slide">
                                                <img src="" class="caro-img"></img>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

            </div>
        )
    }
}
