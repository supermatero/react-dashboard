//import React from 'react'
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function AreaCard({colors, percentFillValue, cardInfo}) {

  const filledValue = (percentFillValue / 100) * 360; //360 degrees for a full circle
  const remainedValue = 360 - filledValue; 
  const data = [
    {name:"Remained", value:remainedValue },
    {name:"Achieved sales", value: filledValue }
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`
  };

  return (
    <div className='area-card'>
      <div className="area-card-info">
        <h5 className="info-tittle">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className='info-text'>{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx={50}
          cy={45}
          innerRadius={20}
          fill="#e4e8ef"
          paddingAngle={0}
          startAngle={-270}
          endAngle={150}
          stroke='none'
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} 
            fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={renderTooltipContent} />
      </PieChart>
      </div>
    </div>
  )
}
AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
}