import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import Title from './Title';

const data = [
  {
    subject: 'Small', A: 2, fullMark: 6,
  },
  {
    subject: 'Medium', A: 6, fullMark: 6,
  },
  {
    subject: 'Big', A: 4, fullMark: 6,
  },
];

export default class PolarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <React.Fragment>
          <Title>Average Person In House</Title>
          <ResponsiveContainer>
            <RadarChart cy={140} outerRadius={100}  data={data} align="center">
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar dataKey="A" stroke="#2C75FF" fill="#2C75FF" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
      </React.Fragment>
    );
  }
}