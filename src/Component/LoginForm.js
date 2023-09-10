import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email :email,
        password: password,
      });

      // if (response.status === 200) {
        
      //   console.log('Login successful');
      // } else {
      //   setError('Invalid email or password.');
      // }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <div style={{border:'2px solid red',background:"pink",padding:"20px" }}>
      <h2>Login</h2>
      Email:<input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <br/>
     Password: <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>

  );
}

export default Login;
