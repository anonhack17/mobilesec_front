import React, { useState, useEffect } from 'react';

const Remove = (props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleRemoveExploits = () => {
        setLoading(true);
        fetch('http://127.0.0.1:8000/remove_exploits/', {
            method: 'POST',
            body: JSON.stringify({ exploits: props.scanResult })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                setSuccess(true);
                setError(null);
                return response.json();
            })
            .then(data => {
                console.log('Эксплойты удалены:', data);
            })
            .catch(error => {
                setError('Произошла ошибка при удалении эксплойтов');
                setSuccess(false);
                console.error('Ошибка при удалении эксплойтов:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <button
                onClick={handleRemoveExploits}
                disabled={loading}
                style={buttonStyle}
            >
                {loading ? 'Удаление...' : 'Удалить'}
            </button>
            {success && <p style={successMessageStyle}>Эксплойты успешно удалены!</p>}
            {error && <p style={errorMessageStyle}>{error}</p>}
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
};

const successMessageStyle = {
    color: 'green',
    marginTop: '10px',
};

const errorMessageStyle = {
    color: 'red',
    marginTop: '10px',
};

export default Remove;
