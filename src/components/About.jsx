import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';
import Resume from '../assets/Resume.pdf';

const charming = require('charming')

export default class About extends Component {
    
    componentDidMount(){
        const para = document.querySelector(".para")
        const para2 = document.querySelector(".para2")
        
        charming(para)
        charming(para2)

        anime({
            targets: '.text-abt',
            opacity: 1,
            duration: 1000,
            easing: 'easeInSine',
            delay: anime.stagger(10, {start: 1000})
        })

        anime({
            targets: '.para span',
            opacity: 1,
            duration: 1000,
            easing: 'easeInSine',
            delay: anime.stagger(10, {start: 1300})
        })

        anime({
            targets: '.para2 span',
            opacity: 1,
            easing: 'easeInSine',
            delay: anime.stagger(10, {start: 5300})
        })

        anime({
            targets: '.buttn-div',
            opacity: 1,
            duration: 5000,
            easing: 'easeInBack',
            delay: anime.stagger(50, {start: 8400})
        })

    }

    render() {
        return (
            <section class="about" id="about">
                <div class="max-width">
                    <div class="about-content">
                        <div class="left column">
                            <img src="https://images.unsplash.com/photo-1586358243754-7c366ef72a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></img>
                        </div>
                        <div class="column right">
                            <div class="text-abt">I'm Johnnathan and I'm a <span>Full Stack Developer</span></div>
                            <p class="para">I'm passionate about being a better person than I was the day before, and that's what gets me up 
                            every morning at 8am sharp.  Everyone has their own purpose, and that's what pushes them to be better
                            everyday.  Well my purpose is software engineering, and once I stepped into this field I fell in love.  
                            It has given me a self-gratifying feeling dating all the way back to my first line of code.
                            </p>
                            <p class ="para2">I'm a hard working and committed professional, who is always willing to rise up to any challenge.
                            I take great pride in my work, and I always try to better myself with every project I work on.  I have a keen eye
                            for detail and design and love bringing ideas to life on the computer screen.  But don't get me wrong, I can get down 
                            and dirty with the logic that's needed for the server-side.  I strive for versatility, and that versatility is needed
                            to build full stack web applications for a friendly user experience and a nice product to look at.
                            </p>
                            <div class="buttn-div">
                                <a href={Resume} download="Johnnathan Baxter's Resume">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
