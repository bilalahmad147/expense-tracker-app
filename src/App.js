import React from 'react';
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import BalanceDetail from './Components/BalanceDetail';
import Header from './Components/Header';
import History from './Components/History';

function App() {

  return (
      <div className="App">
        <Header />
        <Balance />
        <BalanceDetail />
        <History />
        <AddTransaction />
      </div>
  );
}

export default App;
