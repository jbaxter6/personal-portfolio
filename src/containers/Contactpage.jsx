import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Contact from './ContactContainer'

export default class Contactpage extends Component {
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
