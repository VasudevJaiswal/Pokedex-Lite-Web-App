import React from 'react';

const Card = ({ name, image, types, toggleFavorite, isFavorite }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Type: {types}</p>
      <button onClick={toggleFavorite} className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default Card;