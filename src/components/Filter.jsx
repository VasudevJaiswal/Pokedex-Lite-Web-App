import React from 'react';

const Filter = ({ filterOptions, setFilter }) => {
  return (
    <div className="filter">
      <select onChange={(e) => setFilter(e.target.value)}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;