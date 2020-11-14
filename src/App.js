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

  }, []);
  return console.log(globalStats) || (
    <div className="App">
      {!globalStats 
        ? <p>Loading...</p> 
        : 
        (
          <React.Fragment>
            <p>{`Total Confirmed cases: ${globalStats.confirmed}`}</p>
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
