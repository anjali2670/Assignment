import React, { useState, useEffect } from 'react';

function SubmitTable() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
        fetch('http://localhost:8080/api/submissions') 
      .then((response) => response.json())
      .then((data) => setSubmissions(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    
    if (startDate && endDate) {
      const filtered = submissions.filter((submission) => {
        const submissionDate = new Date(submission.date); // Assuming a date field in your submissions
        return submissionDate >= new Date(startDate) && submissionDate <= new Date(endDate);
      });
      setFilteredSubmissions(filtered);
    } else {
      setFilteredSubmissions(submissions);
    }
  }, [startDate, endDate, submissions]);

  const handleSearch = () => {
  
  };

  return (
    <div  style={{border:'2px solid red',background:"pink",padding:"20px", margin:"20px" }}>
      <h2>Submission Table</h2>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Field 1</th>
            <th>Field 2</th>
            {/* Add headers for other fields */}
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.date}</td>
              <td>{submission.field1}</td>
              <td>{submission.field2}</td>
              {/* Add cells for other fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmitTable;
