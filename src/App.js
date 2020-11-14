import React, { useEffect } from 'react';
import getGlobalTimeline from './utils/api';
import './App.css';

function App() {

  useEffect(() => {
    getGlobalTimeline()
      .then(data => {
        console.log(data.data[0]);
      })

  });
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
