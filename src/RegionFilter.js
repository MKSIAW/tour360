
import React from 'react';
import './RegionFilter.css';

const RegionFilter = ({ onChange }) => {
  const regions = ['All Regions', 'Greater Accra', 'Eastern Region', 'Ashanti Region', 'Bono Region', 'Central Region', 'Northern Region', 'Oti Region', 'Volta Region', 'Western Region', 'Upper East Region', 'Upper West Region'];

  return (
    <div className="region-filter">
      <h3>Select by Region</h3>
      <select onChange={(e) => onChange(e.target.value)}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
