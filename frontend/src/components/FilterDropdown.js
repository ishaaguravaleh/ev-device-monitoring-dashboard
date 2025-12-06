import React from 'react';

const FilterDropdown = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Status
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      >
        <option value="">All Devices</option>
        <option value="active">Active</option>
        <option value="warning">Warning</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
};

export default FilterDropdown;