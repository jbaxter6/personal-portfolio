import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class navbar extends Component {
    
    componentDidMount(){
        // logo
        anime({
            targets: '.logo',
            opacity: 1,
            duration: 3000,
            delay: 9500
        })

        // menu
        anime({
            targets: '.menu li',
            opacity: 1,
            duration: 3000,
            delay: anime.stagger(150, {start: 10500})
        })
    }

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
