import React, { useState, useEffect } from 'react';
import { fetchDevices } from '../services/api';
import Header from '../components/Header';
import FilterDropdown from '../components/FilterDropdown';
import DeviceCard from '../components/DeviceCard';
import DeviceDetailsPanel from '../components/DeviceDetailsPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const DashboardPage = () => {
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [statusFilter, setStatusFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadDevices(statusFilter);
    }, [statusFilter]);

    const loadDevices = async (status) => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchDevices(status);
            setDevices(data);
        } catch (err) {
            setError('Failed to load devices. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <Header />

                <FilterDropdown
                    value={statusFilter}
                    onChange={setStatusFilter}
                />

                {loading && <LoadingSpinner />}

                {error && <ErrorMessage message={error} />}

                {!loading && !error && (
                    <>
                        {devices.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-lg shadow">
                                <p className="text-gray-500">No devices found</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {devices.map((device) => (
                                    <DeviceCard
                                        key={device.deviceId}
                                        device={device}
                                        onClick={() => setSelectedDevice(device)}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}

                <DeviceDetailsPanel
                    device={selectedDevice}
                    onClose={() => setSelectedDevice(null)}
                />
            </div>
        </div>
    );
};

export default DashboardPage;