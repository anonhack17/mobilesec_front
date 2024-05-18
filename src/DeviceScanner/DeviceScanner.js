import React, { useState } from 'react';
import axios from 'axios';

const DeviceScanner = () => {
    const [scanResult, setScanResult] = useState([]);
    const [error, setError] = useState('');

    const handleScanDevice = () => {
        axios.post('http://127.0.0.1:8000/api/scan-device/')
            .then(response => {
                setScanResult(response.data.packages);
            })
            .catch(error => {
                setError('Error scanning device');
                console.error('Error scanning device:', error);
            });
    };

    return (
        <div>
            <h1>Сканирование мобильных устройств</h1>
            <button onClick={handleScanDevice}>Сканировать устройство</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {scanResult.length > 0 && (
                <div>
                    <h3>Найденные пакеты:</h3>
                    <ul>
                        {scanResult.map((pkg, index) => (
                            <li key={index}>{pkg}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DeviceScanner;
