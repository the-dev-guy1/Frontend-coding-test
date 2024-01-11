import React, { useState } from 'react';
import axios from 'axios';

const ExcelUpload = () => {
    const [excelFile, setExcelFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFileChange = (e) => {
        setExcelFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('excel_file', excelFile);

        axios.post('http://localhost:8000/api/upload-attendance-excel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                setUploadStatus('Excel attendance uploaded successfully');
            })
            .catch(error => {
                console.error('Error uploading Excel attendance:', error);
                setUploadStatus('Error uploading Excel attendance');
            });
    };

    return ( <
        div >
        <
        h2 > Upload Excel Attendance < /h2> <input type="file" onChange={ handleFileChange } /
        > < button onClick = { handleUpload } > Upload < /button> { uploadStatus && <p> { uploadStatus } </p >
    } < /div>
);
};

export default ExcelUpload;