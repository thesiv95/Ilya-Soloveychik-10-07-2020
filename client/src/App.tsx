import React from 'react';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <StatusBar />
      <Table />
    </div>
  );
}

export default App;
