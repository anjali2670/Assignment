
const express = require('express');
const cors=require("cors");
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

const users = [
  { id: 1, email: 'user@example.com', password: 'password123' },
];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error:"use not found"})
  }
  if(user.password!==password){
    return res.status(401).json({ error:"invalid password"});
  
  }
  return res.json({message:"login successful"});
});
app.listen(8080,()=>{
    console.log(`server is running on port 8080`);
});