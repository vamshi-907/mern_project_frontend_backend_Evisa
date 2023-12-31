import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Card, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import jkLogo from '../UI/logo.png';

const cardStyle = {
  margin: '1rem auto',
  maxWidth: '400px',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the logo
};

const logoStyle = {
  width: '200px',
  height: '127px',
  marginBottom: '20px',
};

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  function onHandleClick() {
    if (username !== '' && password !== '') {
      navigate('/Admin');
    } else {
      setShowAlert(false);
    }
  }

  return (
    <Card elevation={12} style={cardStyle}>
      <img src={jkLogo} alt="jk logo" style={logoStyle}></img>
      <Paper elevation={12} style={{ backgroundColor: '#E4F1FF', padding: '2rem', borderRadius: '15px' }}>
        <Stack spacing={3}>
          <Avatar
            style={{
              margin: '0 auto',
              height: '75px',
              width: '75px',
              backgroundColor: '#007BFF',
            }}
          >
            <LoginIcon />
          </Avatar>
          <TextField
            label="Username"
            required
            fullWidth
            color="primary"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Password"
            required
            fullWidth
            color="primary"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button endIcon={<LoginIcon />} type="submit" variant="contained" onClick={onHandleClick} fullWidth sx={{ backgroundColor: 'green', color: 'white' }}>
            Login
          </Button>
          <Typography variant="body2" align="center">
            Forget Password? <a href="/forgetpassword">Click Here</a>
          </Typography>

          {!showAlert && (
            <Alert severity="error" color="error" onClose={() => setShowAlert(true)}>
              Invalid username or password
            </Alert>
          )}
        </Stack>
      </Paper>
    </Card>
  );
}
