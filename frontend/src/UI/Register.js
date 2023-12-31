import React, { useState } from 'react';
import {
  Button,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import jkLogo from '../UI/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gmail: '',
    phone_number: '',
    dob: ''
  });
  const [alert, setAlert] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const calculateAge = (dateOfBirth) => {
    const dobDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const onHandleClick = async () => {
    const { username, password, gmail, phone_number, dob } = formData;

    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      gmail.trim() !== '' &&
      phone_number.trim() !== '' &&
      dob.trim() !== '' &&
      validateEmail(gmail) &&
      password.length >= 8
    ) {
      const age = calculateAge(dob);
      if (age >= 18) {
        try {
          const response = await axios.post('https://fine-puce-frog-wrap.cyclic.app/api/register', {
            username,
            gmail,
            password,
            phone_number,
            dob,
          });

          console.log('Registration successful:', response.data);

          toast.success('Successfully registered. Redirecting to login...'); // Show success toast

          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } catch (error) {
          console.error('Error during registration:', error);
          setAlert(true);
          toast.error('Error during registration. Please try again.'); // Show error toast
        }
      } else {
        setAlert(true);
        toast.error('You must be at least 18 years old to register.'); // Show error toast
      }
    } else {
      setAlert(true);
      toast.error('Please fill in all fields correctly.'); // Show error toast
    }
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <Paper elevation={20} sx={{ width: '27%', height: '590px', margin: '0 auto' }}>
        <Stack spacing={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={jkLogo} alt="jk logo" style={{ width: '200px', height: '127px' }} />
            <TextField
              label="User name"
              value={formData.username}
              onChange={handleFormChange}
              name="username"
              sx={{ width: '90%', mb: 2 }}
            />
            <TextField
              label="Gmail"
              value={formData.gmail}
              onChange={handleFormChange}
              name="gmail"
              sx={{ width: '90%', mb: 2 }}
            />
            <TextField
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleFormChange}
              name="password"
              sx={{ width: '90%', mb: 2 }}
            />
            <TextField
              label="Phone Number"
              value={formData.phone_number}
              onChange={handleFormChange}
              name="phone_number"
              sx={{ width: '90%', mb: 2 }}
            />
            <TextField
              type="date"
              label="Date of Birth"
              value={formData.dob}
              onChange={handleFormChange}
              name="dob"
              InputLabelProps={{ shrink: true }}
              sx={{ width: '90%', mb: 2 }}
            />
            <Button variant="contained" onClick={onHandleClick} sx={{ width: '90%', mb: 2 }}>
              REGISTER
            </Button>
            <p sx={{ mb: 2 }}>
              Already a user? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </Stack>
      </Paper>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Register;
