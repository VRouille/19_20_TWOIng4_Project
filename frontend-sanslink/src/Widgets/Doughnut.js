import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';
import Title from './Title';

const data = [
  { name: 'Bathroom', value: 18 },
  { name: 'Bedroom', value: 43 },
  { name: 'Entrance', value: 5 },
  { name: 'Livingroom', value: 37 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Doughnut extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
        <div style={{ width: '100%', height: 230, margin : 0}}>
            <React.Fragment>
              <Title>Data By Location</Title>
              <ResponsiveContainer>
                  <PieChart>
                      <Pie
                      activeIndex={this.state.activeIndex}
                      activeShape={renderActiveShape}
                      data={data}
                      align="center"
                      innerRadius={60}
                      outerRadius={65}
                      fill="#2C75FF"
                      dataKey="value"
                      onMouseEnter={this.onPieEnter}
                      />
                  </PieChart>
              </ResponsiveContainer>
            </React.Fragment>
        </div>
    );
  }
}
