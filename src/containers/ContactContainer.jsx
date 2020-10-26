import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';

export default class ContactContainer extends Component {

    componentDidMount(){
        let t1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })
  
          t1.add({
            targets: '.column',
            width: '100%',
            backgroundColor: 'white',
            delay: anime.stagger(100)
          })
  
          t1.add({
            targets: '.column',
            width: '90%',
            backgroundColor: '#F0F8FF'
          })

          anime({
            targets: '.grid-sec',
            scaleY: '3',
            scaleX: '3',
            translateX: '50%',
            rotate: '45deg',
            duration: 5000,
            delay: anime.stagger(100, {start: 2000}),
          })
    }

    render() {
        return (
            <section class="grid-sec">
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
            </section>
        )
    }
}
