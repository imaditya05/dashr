import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Cards from './Cards';
import Table from './Table';
const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <div className="dashboard">
      <div className="greeting">
        <p style={{ marginTop: '1rem' }}>{greeting}, Claire!</p>
      </div>
      <Cards />
      <Table />
    </div>
  );
};

export default Dashboard;
