import React from 'react';
import { X, Thermometer, Zap } from 'lucide-react';
import StatusBadge from './StatusBadge';

const DeviceDetailsPanel = ({ device, onClose }) => {
  if (!device) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Device Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="text-sm font-medium text-gray-500">Device ID</label>
            <p className="text-lg font-mono text-gray-900 mt-1">{device.deviceId}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="text-sm font-medium text-gray-500">Device Name</label>
            <p className="text-lg text-gray-900 mt-1">{device.name}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="text-sm font-medium text-gray-500">Status</label>
            <div className="mt-2">
              <StatusBadge status={device.status} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Temperature
              </label>
              <p className="text-xl font-semibold text-gray-900 mt-1">
                {device.temperature !== null ? `${device.temperature}°C` : 'N/A'}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Voltage
              </label>
              <p className="text-xl font-semibold text-gray-900 mt-1">
                {device.voltage !== null ? `${device.voltage}V` : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetailsPanel;