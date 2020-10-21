import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';

export default class Wave extends Component {
    
    createOcean = () => {
        let ocean = document.getElementById("ocean"),
        waveWidth = 10,
        waveCount = Math.floor(window.innerWidth/waveWidth),
        docFrag = document.createDocumentFragment();

        for(let i = 0; i < waveCount; i++){
            let wave = document.createElement("div");
            wave.className += " wave";
            docFrag.appendChild(wave);
            wave.style.left = i * waveWidth + "px";
            wave.style.animationDelay = (i/100) + "s";
        } 

        ocean.appendChild(docFrag);
    }
    
    componentDidMount(){
        this.createOcean()
        anime({
            targets: '#ocean',
            opacity: 1,
            loop: true,
            duration: 2000,
            direction: 'alternate',
            easing: 'cubicBezier(.5, .05, .1, .3)'
        })
    }

    render() {
        return (
            <div id="ocean">
                
            </div>
        )
    }
}
