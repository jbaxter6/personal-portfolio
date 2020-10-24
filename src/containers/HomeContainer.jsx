import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';

const charming = require('charming')

export default class HomeContainer extends Component {

    componentDidMount(){
        const name = document.querySelector(".name")
        const creator = document.querySelector(".creator")
        const intro = document.querySelector(".small-intro")

        // splits text in individual chars
        charming(name)
        charming(creator)
        charming(intro)
        
        // IMAGES OVERLAY EFFECT
        anime({
            targets: '.home .person-overlay',
            translateX: 1100,
            delay: 1000,
            duration: 1500,
            easing: 'easeInSine'
        })

        anime({
            targets: '.home .person img',
            opacity: 1,
            delay: 150,
            duration: 1500,
            easing: 'easeInSine'
        })

          // CREATOR
        anime({
            targets: '.creator span',
            opacity: 1,
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100, {start: 3000})
        })

          // 1422
        anime({
            targets: '.name span',
            opacity: 1,
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100, {start: 4500})
        })

          // 1422 second anima
        anime({
            targets:'.name .char2, .name .char4, .name .char6, .name .char8',
            keyframes: [
            {translateY: 100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay: 8000
        })

        anime({
            targets:'.name .char3, .name .char5, .name .char7, .name .char9',
            keyframes: [
            {translateY: -100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay: 8000
        })

          // about me
        anime({
            targets: '.small-intro span',
            opacity: 1,
            duration: 1000,
            easing: 'easeInSine',
            delay: anime.stagger(50, {start: 11000})
        })

    }

    render() {
        return (
            <div class="home">
                <div class="container">
                    <div class="person">
                        <span class="person-overlay"></span>
                        <img src="https://images.unsplash.com/photo-1586358243754-7c366ef72a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></img>
                    </div>
                    <div class="home-text">
                        <h6 class="creator">Creator</h6>
                        <h1 class="name">Johnnathan</h1>
                        <p class="small-intro">Hello good people, my name is Johnnathan Baxter. 
                        I design and develop to bring ideas to life.</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
