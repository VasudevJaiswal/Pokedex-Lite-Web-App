// src/components/AnotherCardContainer.js
import React from 'react';
import Card from './Card';

const AnotherCardContainer = ({ data }) => {
  return (
    <div className="another-card-container">
      <div className="card-row">
        {data.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AnotherCardContainer;
