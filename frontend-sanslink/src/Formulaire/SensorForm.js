import React, { Component } from 'react';
import Title from '../Widgets/Title';

import {makeStyles} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    mid: {
      marginTop: '5%',
      marginLeft: '5%',
    },

    button:{
        backgroundColor: '#2C75FF',
        color: "white",
        marginTop:'5%',
        marginBottom: '5%',
        marginLeft: '40%',
    },
  });

export default function UserForm(){
    const classes = useStyles();
    const [value, setValue] = React.useState('Bathroom');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return(
        <React.Fragment>
            <Title>
                SENSOR
            </Title>
            <div className={classes.mid}>
                <FormControl component="fieldset">
                    <FormLabel>House Size</FormLabel>
                    <RadioGroup aria-label="Location" name="location1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Bathroom" control={<Radio />} label="Bathroom" />
                        <FormControlLabel value="Bedroom" control={<Radio />} label="Bedroom" />
                        <FormControlLabel value="Entrance" control={<Radio />} label="Entrance" />
                        <FormControlLabel value="Livingroom" control={<Radio />} label="Linvingroom" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Button variant="contained" className={classes.button}>
                    Send
                </Button>
            </div>
        </React.Fragment>
    );
}