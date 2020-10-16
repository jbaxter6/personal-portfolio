import React, { Component } from 'react'

export default class HomeContainer extends Component {
    render() {
        return (
            <div class="home">
                <div class="container">
                    <div class="person">
                        <span class="person-overlay"></span>
                        {/* <img src="" alt=""></img> */}
                    </div>
                    <div class="home-text">
                        <h6 class="creator">Creator</h6>
                        <h1 class="name">Johnnathan</h1>
                        <p class="small-intro">Hello good people, my name is johnnathan baxter - 
                        I'm a designer, idea machine, and a family man.</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
