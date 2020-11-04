// import React from 'react';
import React, { useState, useEffect } from 'react';
import {TextField, InputBase } from '@material-ui/core';
import anime from 'animejs/lib/anime.es.js';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        }
    },
    textField: {
        backgroundColor: "white",
        borderRadius: theme.shape.borderRadius,
    }
}));

export const ContactForm = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState('');

    useEffect(() => {
        anime({
            targets: '#cont-for',
            opacity: 1,
            duration: 2000,
            easing: 'easeInBack',
            delay: anime.stagger(100, {start: 2000})
        })
    })
    
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };

    return (
        <form id="cont-for" className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="filled-basic"
                name="first" 
                label="First Name" 
                variant="filled"
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic"
                name="last" 
                label="Last Name" 
                variant="filled"
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic"
                name="email" 
                label="Email" 
                variant="filled"
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic"
                name="phone" 
                label="Phone Number" 
                variant="filled"
                className={classes.textField}
                onChange={handleChange}
            />
            <div class="buttn-div">
                <a href="" >Download CV</a>
            </div>
        </form>
    )
}


