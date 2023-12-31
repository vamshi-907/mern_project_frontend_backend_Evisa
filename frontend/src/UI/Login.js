import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Card,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import jkLogo from '../UI/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(true);

  async function onHandleClick() {
    try {
      const response = await axios.post('https://fine-puce-frog-wrap.cyclic.app/api/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        navigate('/emailverification');
        toast.success('Login successful');
      } else {
        setAlert(false);
        toast.error('Invalid credentials');
      }
    } catch (error) {
      setAlert(false);
      toast.error('Authentication Failed');
    }
  }

  return (
    <>
      <ToastContainer />
      <Stack sx={{ width: '450px', margin: '0 auto', marginTop: '50px' }}>
        <Stack spacing={4}>
          <Card elevation={4} sx={{ p: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={jkLogo} alt="jk logo" style={{ width: '200px', height: '127px', marginBottom: '20px' }} /> {/* Add the logo here */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ fontSize: 20, marginRight: '8px' }} />
                <TextField
                  label="User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: '100%' }}
                />
              </div>
              <br></br>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <VpnKeyIcon sx={{ fontSize: 20, marginRight: '8px' }} />
                <TextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: '100%' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '20px' }}>
              <FormControlLabel
                control={<Checkbox checked={false} onChange={() => setAlert(!alert)} />}
                label="Remember Me"
              />
              <p style={{ marginLeft: 'auto' }}>
                <Link to="/forgetpassword">Forgot Password</Link>
              </p>
            </div>
            <br></br>
            <Button variant="contained" onClick={onHandleClick} sx={{ width: '100%' }}>
              LOGIN
            </Button>
            <p style={{ marginTop: '20px' }}>No Account? <Link to='/Register'>Sign Up Here!</Link></p>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
