import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
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
      <Dashboard globalStats={globalStats} />
    </div>
  );
}

export default App;
