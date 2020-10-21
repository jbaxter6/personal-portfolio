import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';
import NavBar from '../components/NavBar'
import Contact from './ContactContainer'

export default class Contactpage extends Component {
    
    componentDidMount(){
        anime({
            targets: '.middle',
            opacity: 1,
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100, {start: 3000})
        })

        anime({
            targets: '.contact-head',
            opacity: 1,
            top: '20%',
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100, {start: 3000})
        })
    }
    
    render() {
        return (
            <div class="contact-page">
                <NavBar />
                <h1 class="contact-head">LET'S GET IN TOUCH!</h1>
                <div class="middle">
                    <a class="btn-social" href="https://www.linkedin.com/in/johnnathan-baxter-6b7a61158/">
				        <i class="fab fa-linkedin-in"></i>
			        </a>
                    <a class="btn-social" href="https://medium.com/@jbaxter6">
				        <i class="fab fa-medium-m"></i>
			        </a>
			        <a class="btn-social" href="https://github.com/jbaxter6">
				        <i class="fab fa-github"></i>
			        </a>
			        <a class="btn-social" href="mailto:jbaxdevs@gmail.com">
				        <i class="far fa-envelope"></i>
			        </a>
		        </div>
                <Contact />
            </div>
        )
    }
}
