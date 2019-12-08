import React, { PureComponent } from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import Title from './Title'

const useStyles = makeStyles({
    mid: {
      color:'#2C75FF',
      marginTop: '5%',
    },
  });

export default function AverageAirPollution() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Title>
            Average Air Pollution 
        </Title>
        <Typography className={classes.mid} component="p" variant="h4" align="center">
            $3,024.00
        </Typography>
      </React.Fragment>
    );
  }