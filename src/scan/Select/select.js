import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileSelector = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Получаем первый выбранный файл
        const file = acceptedFiles[0];
        // Проверяем, что файл был выбран
        if (file) {
            console.log('Выбранный файл:', file);
            console.log('Путь к файлу:', file.path); // В зависимости от браузера, не все браузеры предоставляют доступ к пути файла по соображениям безопасности
        }
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Скопировать путь файла...</p> :
                    <p>Скопировать путь файла, или кликните для выбора файла</p>
            }
        </div>
    );
};

const dropzoneStyles = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
    margin: 'auto',
};
export default FileSelector;