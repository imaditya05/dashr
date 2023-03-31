import React from 'react';
import './Aside.css';
import Updates from './Updates';
import CustomerReview from './CustomerReview';
const Aside = () => {
  return (
    <div className="Aside">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default Aside;
