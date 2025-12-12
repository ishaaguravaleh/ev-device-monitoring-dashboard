
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://ev-device-monitoring-dashboard.onrender.com';

export const fetchDevices = async (status = '') => {
  const url = status 
    ? `${API_BASE_URL}/api/devices?status=${status}`
    : `${API_BASE_URL}/api/devices`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch devices');
  }
  return await response.json();
};

export default {
  fetchDevices
};