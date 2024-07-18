//import React from 'react'

const data = [
  {
    id: 1,
    name: "Jeans",
    percentValues: 70,
  },
  {
    id: 2,
    name: "Shirts",
    percentValues: 40,
  },
  {
    id: 3,
    name: "Belts",
    percentValues: 30,

  },
  {
    id: 4,
    name: "Shoes",
    percentValues: 60,
  },
  {
    id: 5,
    name: "Skirts",
    percentValues: 80,
  },
  {
    id: 6,
    name: "Caps",
    percentValues: 10,
  },
  {
    id: 7,
    name: "Others",
    percentValues: 50,
  },
];
export default function AreaProgressChart() {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
      </div>
      <div className="progress-bar-list">
        {data ?.map((progressbar) => (
          <div key={progressbar.id} className="progress-bar-item">
            <div className="bar-item-info">
              <p className="bar-item-info-name">{progressbar.name}</p>
              <p className="bar-item-info-value">{progressbar.percentValues}%</p>
            </div>
            <div className="bar-item-full">
              <div className="bar-item-filled" style={{width: `${progressbar.percentValues}%`}}>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
