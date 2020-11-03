import React, { Component } from 'react';
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
            opacity: .2,
            duration: 5000,
            delay: anime.stagger(50, {start: 12000})
        })
    }

    render() {
        return (
            <div id="ocean">
                
            </div>
        )
    }
}
