import React, { Component } from 'react'

export default class Wave extends Component {
    
    componentDidMount(){
        var ocean = document.getElementById("ocean"),
        waveWidth = 10,
        waveCount = Math.floor(window.innerWidth/waveWidth),
        docFrag = document.createDocumentFragment();

        for(var i = 0; i < waveCount; i++){
            var wave = document.createElement("div");
            wave.className += " wave";
            docFrag.appendChild(wave);
            wave.style.left = i * waveWidth + "px";
            wave.style.animationDelay = (i/100) + "s";
        } 

ocean.appendChild(docFrag);
    }

    render() {
        return (
            <div id="ocean">
                
            </div>
        )
    }
}