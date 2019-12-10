import React, { Component } from 'react';
import Title from '../Widgets/Title';

import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const currencies = [
    {
      value2: 'Hum',
      label: '%',
    },
    {
      value2: 'Tem',
      label: '°C',
    },
    {
      value2: 'Air',
      label: 'Index',
    },
  ];

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
    const [value, setValue] = React.useState('Humidity');
    const [currency, setCurrency] = React.useState('%');

    const handleChange = event => {
        setValue(event.target.value);
    };
    const handleChange2 = event => {
        setCurrency(event.target.value2);
      };
    
    return(
        <React.Fragment>
            <Title>
                MEASURE
            </Title>
            <div className={classes.mid}>
                <FormControl component="fieldset">
                    <FormLabel>Type</FormLabel>
                    <RadioGroup aria-label="Type" name="type1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Humidity" control={<Radio />} label="Humidity" />
                        <FormControlLabel value="Temperature" control={<Radio />} label="Temperature" />
                        <FormControlLabel value="Air Pollution" control={<Radio />} label="Air Pollution" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.mid} spacing={1}> 
                <TextField 
                    required
                    id="outlined-required"
                    label="Value"
                    defaultValue="37"
                    variant="outlined"
                    size="normal"
                    marginLeft = "1%"
                />
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    defaultValue="%"
                    value2={currency}
                    onChange={handleChange2}
                    variant="filled"
                    size= "small"
                    >
                    {currencies.map(option => (
                        <MenuItem key={option.value2} value={option.value2}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <Button variant="contained" className={classes.button}>
                    Send
                </Button>
            </div>
        </React.Fragment>
    );
}