import React, { useState } from 'react';
import { signIn } from '../controller/api';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme'
import './login.css'

export const Login = ({ getToken, navigateToHome }) => {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      "email": email,
      "password": password
    };
    signIn('auth', user)
      .then(resp => {
        localStorage.setItem('user', JSON.stringify(resp))
        getToken(resp)
        navigateToHome()
      })
      .catch(err => console.log('ERROR', err))
  }

  return (
    <section className='loginSection'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', backgroundColor: 'white' },
        }}
        noValidate
        autoComplete="off"
      >
        <ThemeProvider theme={theme}>

          <TextField
            color="primary"
            required
            id="filled-required"
            label="Email"
            type="email"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <TextField
            color="primary"
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={(e) => setPass(e.target.value)}
            name="password"
          />
          <Stack spacing={2} direction="row" alignItems={"center"} justifyContent={"center"}>
            <Button color="primary" variant="contained" sx={{ margin: '8px' }} onClick={handleSubmit}>Conectar</Button>
          </Stack>
        </ThemeProvider>
      </Box>
    </section >
  )
}
