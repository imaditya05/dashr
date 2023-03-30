import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Aside from './components/Aside/Aside';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Dashboard />
        <Aside />
      </div>
    </div>
  );
};

export default App;
