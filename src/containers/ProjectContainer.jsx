import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectContainer = () => {
    useEffect(() => {
        Aos.init({duration: 3000})
        anime({
            targets: '.proj-bttn',
            opacity: 1,
            duration: 5000,
            easing: 'easeInBack',
            delay: anime.stagger(50, {start: 8400})
        })
    }, [])

    return (
            <div class="proj-cont">
                <div class="project">
                    <div data-aos="fade-right" class="proj1-left">
                        <h3>Home Sweet Home</h3>
                        <p>Home Sweet Home is a real estate platform 
                        that gives home buyers and sellers the opportunity 
                        to find and sell their homes independently.
                        </p>
                        <span>Languages and Technologies:</span> <p>JavaScript/React, React Hooks, Pagination, Mapbox Geocoder, 
                        Ruby on Rails, PostgreSQL, RestClient, JWT Authentication</p>
                        <div class="proj-bttn">
                                <a href="https://github.com/jbaxter6/Home-Sweet-Home">Source Code</a>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="proj1-right"></div>
                </div>
                <div class="project">
                    <div data-aos="fade-right" class="proj2-left"></div>
                    <div data-aos="fade-left" class="proj2-right">
                        <h3>Serpiente</h3>
                            <p>Serpiente is an online game built with a React front-end 
                            and a Rails back-end, with the intent of re-creating the famous 
                            snake arcade game with a little twist. For the young gamers that 
                            aren't familiar with the game called snake. The concept of Serpiente, 
                            is for the player uses the arrow keys on the keyboard to move the "snake" around the board. 
                            As the snake finds food, it eats the food, and thereby grows larger. The game ends when the snake either moves 
                            off the screen or runs into itself. Good Luck and I bet you can't beat our high score!
                            </p>
                            <span>Languages and Technologies:</span> <p>JavaScript/React, React Hooks, Pagination, Mapbox Geocoder, 
                            Ruby on Rails, PostgreSQL, RestClient, JWT Authentication</p>
                            <div class="proj-bttn">
                                    <a href="https://github.com/jbaxter6/Serpiente">Source Code</a>
                            </div>
                    </div>
                </div>
                <div class="project">
                    <div data-aos="fade-right" class="proj3-left">
                    <h3>Bankr</h3>
                            <p>Bankr is an online banking platform that grants existing and new 
                            account holders the opportunity to initiate bank processes such as creating 
                            transfers, deposits, and withdrawals.
                            </p>
                            <span>Languages and Technologies:</span> <p>JavaScript/React, React Hooks, Pagination, Mapbox Geocoder, 
                            Ruby on Rails, PostgreSQL, RestClient, JWT Authentication</p>
                            <div class="proj-bttn">
                                    <a href="https://github.com/jbaxter6/bankr">Source Code</a>
                            </div>
                    </div>
                    <div data-aos="fade-left" class="proj3-right"></div>
                </div>
            </div>
        );
}

export default ProjectContainer;

