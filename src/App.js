import React from 'react';
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import BalanceDetail from './Components/BalanceDetail';
import Header from './Components/Header';
import History from './Components/History';
import { TransProvider } from './Components/TransContext';

function App() {

  return (
    <TransProvider>
      <div className="App">
        <Header />
        <Balance />
        <BalanceDetail />
        <History />
        <AddTransaction />
      </div>
    </TransProvider>
  );
}

export default App;
