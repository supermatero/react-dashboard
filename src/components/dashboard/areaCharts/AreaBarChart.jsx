//import React from 'react'
import { useContext } from 'react';
import { BarChart, Bar,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../../context/ThemeContext';
import { FaArrowUpLong } from 'react-icons/fa6';
import { LIGHT_THEME } from '../../../constants/themeConstants';
import "./AreaCharts.css"

const data = [
  {
    month: 'January',
    lost: 4000,
    profit: 2400,
  },
  {
    month: 'February',
    lost: 3000,
    profit: 1398,
  },
  {
    month: 'March',
    lost: 2000,
    profit: 9800,

  },
  {
    month: 'April',
    lost: 2780,
    profit: 3908,
  },
  {
    month: 'May',
    lost: 1890,
    profit: 4800,
  },
  {
    month: 'June',
    lost: 2390,
    profit: 3800,
  },
  {
    month: 'July',
    lost: 3490,
    profit: 4300,
  },
];
export default function AreaBarChart() {
  const { theme } = useContext(ThemeContext);
  const formatTooltipValue = (value) =>{
    return `${value}k`;
  };
  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className='bar-chart'>
      <div className="bar-chart-info">
        <h5 className='bar-chart-title'>Total Revenue</h5>
        <div className="chart-info-data">
          <div className="info-data-value">$50.5k</div>
          <div className="info-data-text">
            <FaArrowUpLong/>
            <p>5 % then last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            
            <XAxis 
              padding={{left:10}}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize:14,
            }}
            />
            <YAxis 
              padding={{top:10}}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME? "#676767" : "#f3f3f3"}`,
                fontSize:14,
              }}
            />
            <Tooltip formatter={formatTooltipValue} cursor={{ fill:'transparent'}} />
            <Legend iconType='circle'iconSize={10} verticalAlign='top' align='right'
              formatter={formatLegendValue} />
            <Bar dataKey="profit" 
              fill="#475be8" 
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]} />

            <Bar dataKey="lost"
              fill="#e3e7fc" 
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
