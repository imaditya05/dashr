import React from 'react';
import './Cards.css';
import { cardsData } from './Data/Data.js';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, index) => {
        return (
          <div className="parent-container">
            <Card
              key={uuidv4()}
              id={index}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
