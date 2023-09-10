import React, { useState } from 'react';

const MultiSelectForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    const { value } = e.target;
    if (selectedOptions.includes(value)) {
      //
           setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
     
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Selected options:', selectedOptions);

   
    const isSuccess = Math.random() < 0.5; // 

    if (isSuccess) {
      
      alert('Form submitted successfully');
    } else {
      
      alert('Form submission failed');
    }

    
    setSelectedOptions([]);
    setFormSubmitted(true);
  };

  return (
    <div  style={{border:'2px solid blue',background:"pink",padding:"20px" }}>
      <h1>Multi-Field Select Dropdown</h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="options">Select Options:</label>
          <select
            id="options"
            name="options"
            multiple
            value={selectedOptions}
            onChange={handleOptionChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <p>Form has been {selectedOptions.length > 0 ? 'submitted' : 'reset'}.</p>
      )}
    </div>
  );
};

export default MultiSelectForm;
