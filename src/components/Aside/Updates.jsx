import React from 'react';
import './Updates.css';
import { UpdatesData } from '../Data/Data';
const Updates = () => {
  return (
    <div className="updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="user profile picture" />
            <div style={{ marginBottom: '0.5rem' }}>
              <span className="update-person-name">{update.name}</span>
              <span> {update.notification}</span>
              <div>
                {' '}
                <span>{update.time}</span>{' '}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
