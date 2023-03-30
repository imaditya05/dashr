import React from 'react';
import './Sidebar.css';
import {
  Cart,
  Home,
  PeopleMultiple,
  ShippingBoxV1,
  StatisticUp,
} from 'akar-icons';

const Sidebar = () => {
  return (
    <div className="outer-container">
      <div className="sidebar">
        {/* Logo */}
        <h1 className="logo">dashr</h1>
        {/* Pages */}
        <div className="pages">
          <div className="page-items active">
            <Home strokeWidth={2} size={20} />
            <span className="page-name">DashBoard</span>
          </div>

          <div className="page-items active">
            <Cart strokeWidth={2} size={20} />
            <span className="page-name">Cart</span>
          </div>

          <div className="page-items active">
            <PeopleMultiple strokeWidth={2} size={20} />
            <span className="page-name">Customers</span>
          </div>

          <div className="page-items active">
            <ShippingBoxV1 strokeWidth={2} size={20} />
            <span className="page-name">Products</span>
          </div>

          <div className="page-items active">
            <StatisticUp strokeWidth={2} size={20} />
            <span className="page-name">Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
