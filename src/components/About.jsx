import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section class="about" id="about">
                <div class="max-width">
                    <h2 class="title-abt">About me</h2>
                    <div class="about-content">
                        <div class="column left">
                            <img src="https://images.unsplash.com/photo-1586358243754-7c366ef72a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></img>
                        </div>
                        <div class="column right">
                            <div class="text-abt">I'm Johnnathan and I'm a <span>Full Stack Developer</span></div>
                            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                            </p>
                            <a href="#">Download CV</a>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
