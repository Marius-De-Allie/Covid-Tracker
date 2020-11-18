import React from 'react';

const LastDayStats = ({ globalStats }) => (
  <div className="last-day">
    <h2>Last 24 hours</h2>
    <p>Refresh all</p>
    <div className='dash-card' style={{border: 'solid 1px dodgerblue', marginBottom: '5px'}}>
      <h2>Cases</h2>
      <h2 style={{color: 'dodgerblue'}}>{` ${(globalStats.new_confirmed / 1000000).toFixed(2)} M`}</h2>
      Icon PlaceHolder
      <p style={{cursor: 'pointer'}}>refresh</p>
    </div>
    <div className="dash-card" style={{border: 'solid 1px red', marginBottom: '5px'}}>
      <h2>Deaths</h2>
      <h2 style={{color: 'red'}}>{`${globalStats.new_deaths}`}</h2>
      Icon PlaceHolder
      <p style={{cursor: 'pointer'}}>refresh</p>
    </div>
    <div className="dash-card" style={{border: 'solid 1px green',  marginBottom: '5px'}}>
      <h2>Recovered</h2>
      <h2 style={{color: 'green'}}>{`${(globalStats.new_recovered / 1000000).toFixed(2)} M`}</h2>
      Icon PlaceHolder
      <p style={{cursor: 'pointer'}}>refresh</p>
    </div>
  </div>
);

export default LastDayStats;