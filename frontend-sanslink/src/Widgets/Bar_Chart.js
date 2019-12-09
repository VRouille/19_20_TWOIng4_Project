import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';

const data = [
  {
    name: '1', pv: 3, 
  },
  {
    name: '2', pv: 1, 
  },
  {
    name: '3', pv: 7, 
  },
  {
    name: '4', pv: 4, 
  },
  {
    name: '5', pv: 2, 
  },
  {
    name: '6', pv: 3, 
  },
];

export default class Bar_Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  
  render() {
    return (
      <React.Fragment>
        <Title>Persons In House</Title>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 16, right: 16, left: 24, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="Persons In House" dataKey="pv" fill="#2C75FF" />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}