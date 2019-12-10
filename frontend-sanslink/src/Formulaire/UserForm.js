import React, { Component } from 'react';
import Title from '../Widgets/Title';

import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
    }
  });

export default function UserForm(){
    const classes = useStyles();
    const [value, setValue] = React.useState('Small');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return(
        <React.Fragment>
            <Title>
                USER
            </Title>
            <div className={classes.mid}> 
                <TextField 
                    required
                    id="outlined-required"
                    label="Localisation"
                    defaultValue="France"
                    variant="outlined"
                    size="normal"
                />
            </div>
            <div className={classes.mid}>
                <TextField
                    id="outlined-number"
                    label="Persons In House"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="normal"
                />
            </div>
            <div className={classes.mid}>
                <FormControl component="fieldset">
                    <FormLabel>House Size</FormLabel>
                    <RadioGroup aria-label="HouseSize" name="size1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Small" control={<Radio />} label="Small" />
                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="Big" control={<Radio />} label="Big" />
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