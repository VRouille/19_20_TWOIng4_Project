import React, { PureComponent } from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import Title from './Title'

const useStyles = makeStyles({
    mid: {
      color:'#2C75FF',
      marginTop: '5%',
    },
  });

export default function AverageTemperature() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Title>
            Average Temperature
        </Title>
        <Typography className={classes.mid} component="p" variant="h4" align="center">
            25°C
        </Typography>
      </React.Fragment>
    );
  }