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
    <div class="sidebar">
      {/* Logo */}
      <div class="logo">dashr</div>
      {/* Pages */}
      <div class="pages">
        <div class="page-items active">
          <Home strokeWidth={2} size={20} />
          <span class="page-name">DashBoard</span>
        </div>

        <div class="page-items active">
          <Cart strokeWidth={2} size={20} />
          <span class="page-name">Cart</span>
        </div>

        <div class="page-items active">
          <PeopleMultiple strokeWidth={2} size={20} />
          <span class="page-name">Customers</span>
        </div>

        <div class="page-items active">
          <ShippingBoxV1 strokeWidth={2} size={20} />
          <span class="page-name">Products</span>
        </div>

        <div class="page-items active">
          <StatisticUp strokeWidth={2} size={20} />
          <span class="page-name">Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
