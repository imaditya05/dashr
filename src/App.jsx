import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
