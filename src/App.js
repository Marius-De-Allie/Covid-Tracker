import React, { useEffect, useState } from 'react';
import getGlobalTimeline from './utils/api';
import './App.css';

function App() {
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    getGlobalTimeline()
      .then(data => {
        setGlobalStats(data.data[0]);
      })
      .catch(e => {
        // TODOD - ADD PROPER ERROR HANDLING
        alert('Unable to fetch global data!');
      });
  }, []);
  return console.log(globalStats) || (
    <div className="App">
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
    </div>
  );
}

export default App;
