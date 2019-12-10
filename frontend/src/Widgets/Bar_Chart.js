import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';
import axios from 'axios';
import _ from 'lodash';

export default class Bar_Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
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
        <Title>Persons In House</Title>
        <ResponsiveContainer>
          <BarChart
            data={values}
            margin={{
              top: 16, right: 16, left: 24, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Persons In House" />
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