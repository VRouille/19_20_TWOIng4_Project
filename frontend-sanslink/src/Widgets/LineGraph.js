import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';

const data = [
  {
    name: 'Bathroom', pv: 18, 
  },
  {
    name: 'Bedroom', pv: 43, 
  },
  {
    name: 'Entrance', pv: 5, 
  },
  {
    name: 'Livingroom', pv: 37, 
  },
];

export default class LineGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <React.Fragment>
        <Title>Data by Location</Title>
        <ResponsiveContainer>
          <LineChart
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
            <Line type="monotone" name="Data by Location" dataKey="pv" stroke="#2C75FF" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}