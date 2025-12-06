import React from 'react';

const StatusBadge = ({ status }) => {
  const colors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    offline: 'bg-gray-100 text-gray-800 border-gray-200'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;