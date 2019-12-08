import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';

const data = [
  {
    name: 'Page A', pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', pv: 4300, amt: 2100,
  },
];

export default class LineGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <React.Fragment>
        <Title>Today</Title>
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
            <Line type="monotone" dataKey="pv" stroke="#2C75FF" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}