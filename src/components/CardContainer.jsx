import React, { useState } from 'react';
import Card from './Card';

const CardContainer = ({ data, toggleFavorite, favorites }) => {
  const [visibleCount, setVisibleCount] = useState(20);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 20);
  };

  return (
    <div className="card-container">
      {data.slice(0, visibleCount).map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types.map((t) => t.type.name).join(', ')}
          toggleFavorite={() => toggleFavorite(pokemon)}
          isFavorite={favorites.includes(pokemon.name)}
        />
      ))}
      {visibleCount < data.length && (
        <button onClick={handleShowMore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default CardContainer;