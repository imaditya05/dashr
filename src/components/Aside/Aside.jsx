import React from 'react';
import './Aside.css';
import Updates from './Updates';
import CustomerReview from './CustomerReview';
const Aside = () => {
  return (
    <div className="Aside">
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', marginTop: '1rem' }}>
          Customer Review
        </h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default Aside;
