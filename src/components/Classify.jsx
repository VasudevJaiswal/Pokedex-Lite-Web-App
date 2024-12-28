// src/components/Classify.js

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Classify = ({ data }) => {
  // Classify data into sections based on pricing
  const sections = {
    free: data.filter(item => item.visit_website_url.toLowerCase() === 'free'),
    paid: data.filter(item => item.visit_website_url.toLowerCase() !== 'free')
  };

  return (
    <div className="classify">
      <h2>Classified Data</h2>
      {Object.keys(sections).map((sectionKey) => (
        <div className="section" key={sectionKey}>
          <h3>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</h3>
          {sections[sectionKey].length > 0 ? (
            sections[sectionKey].map(item => (
              <div key={item.company_name || item.tool_name}> {/* Use a unique identifier */}
                <a href={item.detail_url} target="_blank" rel="noopener noreferrer">
                  <img src={item.logo_url} alt={item.company_name} />
                </a>
                <p>{item.company_name}</p>
                <p>{item.short_description}</p>
              </div>
            ))
          ) : (
            <p>No data available</p> {/* Handle empty data */}
          )}
        </div>
      ))}
    </div>
  );
};

// Define prop types
Classify.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company_name: PropTypes.string,
      tool_name: PropTypes.string,
      logo_url: PropTypes.string,
      short_description: PropTypes.string,
      visit_website_url: PropTypes.string, // Use visit_website_url to determine pricing
      detail_url: PropTypes.string
    })
  ).isRequired
};

export default Classify;
