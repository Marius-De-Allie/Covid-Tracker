import React from 'react';

const Dashboard = ({ globalStats }) => {

  return (
    <React.Fragment>
      <h1>Global Totals</h1>
      <p>Refresh all</p>
      {!globalStats 
        ? <p>Loading...</p> 
        : 
        (
          <React.Fragment>
            <div style={{border: 'solid 1px black'}}>
              <h2>Total Confirmed cases</h2>
              <h2 style={{color: 'dodgerblue'}}>{`${(globalStats.confirmed / 1000000).toFixed(2)} M`}</h2>
              Icon PlaceHolder
              <p style={{cursor: 'pointer'}}>refresh</p>
            </div>
            <p>{`Total Confirmed deaths: ${globalStats.deaths}`}</p>
            <p>{`Recovered: ${globalStats.recovered}`}</p>
            <p>{`Updated at: ${new Date(globalStats.updated_at).toLocaleString()}`}</p>
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
};

export default Dashboard;