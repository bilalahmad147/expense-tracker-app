import React from 'react';
import './App.css';
import CountContext from './CountContext';
import CounterContext from './CounterContext';

function App() {

  let initValue = 0;

  return (
    <CounterContext.Provider value={initValue}>
      <div className="App">
        <CountContext />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
