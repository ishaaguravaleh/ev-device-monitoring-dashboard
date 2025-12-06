import React from 'react';
import { Thermometer, Zap } from 'lucide-react';
import StatusBadge from './StatusBadge';

const DeviceCard = ({ device, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
        <StatusBadge status={device.status} />
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          <span>Temp: {device.temperature !== null ? `${device.temperature}°C` : 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>Voltage: {device.voltage !== null ? `${device.voltage}V` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;