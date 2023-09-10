import React from 'react';

function BasicInfo({ formData, setFormData, nextStep, prevStep }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div  style={{border:'2px solid red',background:"pink",padding:"20px" }}>
      <h2>Step 1: Basic Details</h2>
      <input
        type="text"
        name="name"
       
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
      
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
       
        value={formData.phone}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="addressLine1"
        
        value={formData.addressLine1}
        onChange={handleInputChange}
      />
      
      <input
        type="text"
        name="city"
       
        value={formData.city}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="state"
        
        value={formData.state}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="pincode"
        
        value={formData.pincode}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="country"
        
        value={formData.country}
        onChange={handleInputChange}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default BasicInfo;
