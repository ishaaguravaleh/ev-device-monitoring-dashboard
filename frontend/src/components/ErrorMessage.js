import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
      {message}
    </div>
  );
};

export default ErrorMessage;