import React, { useState } from 'react';
import Remove from "./remove/remove";
import FileSelector from "./Select/select";

function Scan() {
    const [directoryPath, setDirectoryPath] = useState('');
    const [scanResult, setScanResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Устанавливаем состояние загрузки

        // Отправляем GET-запрос с параметром directory_path
        fetch(`http://127.0.0.1:8000/scan_directory/?directory_path=${encodeURIComponent(directoryPath)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Обновляем состояние с результатами сканирования
                setScanResult(data);
                setError(null);
            })
            .catch(error => {
                // Обрабатываем ошибку
                setError('Произошла ошибка при сканировании директории');
                setScanResult(null);
                console.error('Ошибка при отправке запроса:', error);
            })
            .finally(() => setLoading(false)); // Отключаем состояние загрузки
    };

    const renderScanResults = () => {

        if (!scanResult || !scanResult.exploits) return null;

        return (
            <div style={resultContainerStyle}>
                <h2 style={resultHeaderStyle}>Результаты сканирования:</h2>
                <table style={resultTableStyle}>
                    <thead>
                    <tr>
                        <th style={resultTableHeaderStyle}>ХЭШ</th>
                        <th style={resultTableHeaderStyle}>Путь</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scanResult.exploits.map((file, index) => (
                        <tr key={index}>
                            <td style={resultTableCellStyle}>{file.hash}</td>
                            <td style={resultTableCellStyle}>{file.path}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Сканирование директории</h1>
            <FileSelector/>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label style={labelStyle}>
                    Введите путь к директории:
                    <input
                        type="text"
                        value={directoryPath}
                        onChange={(event) => setDirectoryPath(event.target.value)}
                        style={inputStyle}
                    />
                </label>
                <br />
                <button type="submit" style={buttonStyle}>Отправить</button>
            </form>
            {loading && <div style={loaderStyle}>Загрузка...</div>}
            {renderScanResults()}
            {error && <p style={errorMessageStyle}>{error}</p>}
            <Remove scanResult={scanResult}></Remove>
        </div>
    );
}

const containerStyle = {
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
    textAlign: 'center',
    color: '#333',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const labelStyle = {
    width: '95%',
    marginBottom: '10px',
    marginTop: '20px',
    fontWeight: 'bold',
};

const inputStyle = {
    padding: '10px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const loaderStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
};

const resultContainerStyle = {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const resultHeaderStyle = {
    marginBottom: '10px',
    color: '#333',
};

const resultTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

const resultTableHeaderStyle = {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '10px',
};

const resultTableCellStyle = {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '10px',
};

const errorMessageStyle = {
    color: 'red',
    marginTop: '10px',
};

export default Scan;
