import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import Title from './Title';
import axios from 'axios';
import _ from 'lodash';

export default class PolarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';
  state = {
    personsInHouse: []
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/User/`)
    .then(res => {
      console.log("res.dat", res.data);
      this.setState({personsInHouse: res.data});
    });
  }

  render() {
    const values = [];

    {_.map(this.state.userList, o => 
      values.push({personsInHouse : o.personsInHouse})
    )}
    console.log(values)
    return (
      <React.Fragment>
          <Title>Average Persons In House</Title>
          <ResponsiveContainer>
            <RadarChart cy={140} outerRadius={100}  data={values} align="center">
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