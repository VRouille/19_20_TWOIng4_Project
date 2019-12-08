import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell,
    TableHead, TableRow,
} from '@material-ui/core';
import Title from './Title';

// Generate Order Data
function createData(localisation, personInHouse, houseSize ) {
  return { localisation, personInHouse, houseSize };
}

const rows = [
  createData('Ethiopia', '4', 'medium'),
  createData('Czech Republic', '6', 'small'),
  createData('Italy', '2', 'big'),
  createData('Greece', '4', 'medium'),
  createData('China', '5', 'medium'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TableOrder() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Localisation</TableCell>
            <TableCell>Person In House</TableCell>
            <TableCell>House Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell>{row.localisation}</TableCell>
              <TableCell>{row.personInHouse}</TableCell>
              <TableCell>{row.houseSize}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}