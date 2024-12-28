import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
