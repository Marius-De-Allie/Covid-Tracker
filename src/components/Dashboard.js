import React from 'react';

const Dashboard = ({ globalStats }) => {

  return (
    <React.Fragment>
      <div className="global-totals">
        <h2>Global Totals</h2>
        <p>Refresh all</p>
        {globalStats && <p>{`Last updated on: ${new Date(globalStats.updated_at).toLocaleString()}`}</p>}
        {!globalStats 
          ? <p>Loading...</p> 
          : 
          (
            <React.Fragment>
              <div className='dash-card' style={{border: 'solid 1px dodgerblue', marginBottom: '5px'}}>
                <h2>Total Confirmed cases</h2>
                <h2 style={{color: 'dodgerblue'}}>{`${(globalStats.confirmed / 1000000).toFixed(2)} M`}</h2>
                Icon PlaceHolder
                <p style={{cursor: 'pointer'}}>refresh</p>
              </div>
              <div className='dash-card' style={{border: 'solid 1px orange', marginBottom: '5px'}}>
                <h2>Total Active cases</h2>
                <h2 style={{color: 'orange'}}>{`${(globalStats.active / 1000000).toFixed(2)} M`}</h2>
                Icon PlaceHolder
                <p style={{cursor: 'pointer'}}>refresh</p>
              </div>
              <div className="dash-card" style={{border: 'solid 1px red', marginBottom: '5px'}}>
                <h2>Total Confirmed deaths</h2>
                <h2 style={{color: 'red'}}>{`${(globalStats.deaths / 1000000).toFixed(2)} M`}</h2>
                Icon PlaceHolder
                <p style={{cursor: 'pointer'}}>refresh</p>
              </div>
              <div className="dash-card" style={{border: 'solid 1px green',  marginBottom: '5px'}}>
                <h2>Total Recovered cases</h2>
                <h2 style={{color: 'green'}}>{`${(globalStats.recovered / 1000000).toFixed(2)} M`}</h2>
                Icon PlaceHolder
                <p style={{cursor: 'pointer'}}>refresh</p>
              </div>
            </React.Fragment>
          )
        }
      </div>

      <hr></hr>
     
    </React.Fragment>
  );
};

export default Dashboard;