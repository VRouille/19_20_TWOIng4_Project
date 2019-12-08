import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import './App.css';
import Routes from './routes';
import { makeStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Layout from './Layout';
import AverageHumidity from './Widgets/AverageHumidity';
import AverageTemperature from './Widgets/AverageTemperature';
import AverageAirPollution from './Widgets/AverageAirPollution';
import Doughnut from "./Widgets/Doughnut";
import Bar_Chart from "./Widgets/Bar_Chart";
import LineGraph from "./Widgets/LineGraph";
import Test from "./Widgets/Test";
import TableOrder from "./Widgets/TableOrder";

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
  fixedHeight: {
    height: 150,
  },
  fixedHeightGraph: {
    height: 335,
  },
  fixedHeightTable: {
    height: 290,
  },
}));

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperGraph = clsx(classes.paper, classes.fixedHeightGraph);
  const fixedHeightPaperTable = clsx(classes.paper, classes.fixedHeightTable);
  return (
    <div className={classes.root}>
      <Layout/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Average Humidity */}
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <AverageHumidity />
              </Paper>
            </Grid>
            {/* Average Temperature */}
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <AverageTemperature />
              </Paper>
            </Grid>
            {/* Average Air Pollution */}
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <AverageAirPollution />
              </Paper>
            </Grid>
            {/* LineGraph */}
            <Grid item xs={12} >
              <Paper className={fixedHeightPaperGraph}>
                <LineGraph />
              </Paper>
            </Grid>
            {/* Bar_Chart */}
            <Grid item xs={12} >
              <Paper className={fixedHeightPaperGraph}>
                <Bar_Chart />
              </Paper>
            </Grid>
            {/* Table Order */}
            <Grid item xs={12} >
              <Paper className={fixedHeightPaperTable}>
                <TableOrder />
              </Paper>
            </Grid>
            {/* Doughnut */}
            <Grid item xs={6} md={6} lg={6} >
              <Paper className={fixedHeightPaperTable}>
                <Doughnut />
              </Paper>
            </Grid>
          </Grid>  
        </Container>
      </main>
    </div>
  );
}

export default App;
