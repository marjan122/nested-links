import * as React from 'react';
import "./App.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HelperTextAligned() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    let obj = {
      name,
      email,
      password,
    };
    console.log(obj);
    navigate(`/home/${email}`, { state: obj });
  };
  return (
  <div className='logindesign'>
    <div className='backcolor'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYJO6JuvuYEk7SfsJNn-VRWoD72fGY35rzg&usqp=CAU" className='img' alt="" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        
      }}
    >
      <TextField
        id="demo-helper-text-aligned"
        label="User Name"
        fullWidth={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
     className='inpstyle'
/>
    </Box>
  
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
      >
      <TextField
        id="demo-helper-text-aligned"
        label="Email"
        fullWidth={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
  className='inpstyle'
/>
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
      >
      <TextField
        id="demo-helper-text-aligned"
        label="password"
        fullWidth={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
     className='inpstyle'
  />
    </Box>
  
    </div>
    <div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    <Button  onClick={signup} variant="contained" fullWidth={true}>
                Sign Up
              </Button>
    </div>
    </div>
  );
}
