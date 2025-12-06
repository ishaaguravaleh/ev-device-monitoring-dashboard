import React from 'react';
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Activity className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          EV Device Monitoring Dashboard
        </h1>
      </div>
      <p className="text-gray-600">
        Monitor your electric vehicle battery packs in real-time
      </p>
    </div>
  );
};

export default Header;