import React from 'react'
import {TextField, InputBase } from '@material-ui/core';
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
        </form>
    )
}


