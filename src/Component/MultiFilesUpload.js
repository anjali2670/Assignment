import React, { useState} from 'react';

function MultiFilesUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [geolocationStatus, setGeolocationStatus] = useState('Not Captured');

  
  const handleFileChange = (e) => {
    const files = e.target.files;
    const allowedTypes = ['image/png', 'application/pdf'];
    const maxFiles = 3;

    if (files.length > maxFiles) {
      alert('You can upload up to 3 files.');
      return;
    }

    const validFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    );

    setSelectedFiles(validFiles);
  };

  // Function to capture geolocation
  const captureGeolocation = () => {
    if ('geolocation' in navigator) {
      setGeolocationStatus('Capturing...');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocationStatus('Captured');
          console.log(setGeolocationStatus);
        },
        (error) => {
          console.error('Geolocation error:', error.message);
          setGeolocationStatus('Error');
        }
      );
    } else {
      setGeolocationStatus('Geolocation not supported');
    }
  };

  return (
    <div  style={{border:'2px solid red',background:"pink",padding:"20px",  margin:"20px"}}>
      <h2>Multi-File Upload</h2>
      <input
        type="file"
        multiple
        accept=".png, .pdf"
        onChange={handleFileChange}
      />
      <p>Selected Files:</p>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      <p>Geolocation Status: {geolocationStatus}</p>
      <button onClick={captureGeolocation}>Capture Geolocation</button>
    </div>
  );
}

export default MultiFilesUpload;
