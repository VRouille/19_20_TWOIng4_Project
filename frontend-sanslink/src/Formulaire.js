import React, { useState, useRef } from 'react';
import './App.css';
import Routes from './routes';
import { makeStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Layout from './Layout';
import UserForm from './Formulaire/UserForm';
import SensorForm from './Formulaire/SensorForm';
import MeasureForm from './Formulaire/MeasureForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));

function Formulaire() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* User Form */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper>
                <UserForm />
              </Paper>
            </Grid>
            {/* Sensor Form */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper>
                <SensorForm />
              </Paper>
            </Grid>
            {/* Measure Form */}
            <Grid item xs={12} md={12} lg={4}>
              <Paper>
                <MeasureForm />
              </Paper>
            </Grid>
          </Grid>  
        </Container>
      </main>
    </div>
  );
}

export default Formulaire;
