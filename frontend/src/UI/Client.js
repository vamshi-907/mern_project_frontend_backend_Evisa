import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';

export default function Course() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

  const [clientnumber, setClientNumber] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [motherName, setMotherName] = useState('');

  const handlenumber = (e) => {
    setClientNumber(e.target.value);
  };
  const handledob = (e) => {
    setDob(e.target.value);
  };
  const handlemail = (e) => {
    setEmail(e.target.value);
  };
  const handleaddress = (e) => {
    setAddress(e.target.value);
  };
  const handlepayment = (e) => {
    setPayment(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleAadharNumber = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleMotherName = (e) => {
    setMotherName(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post('https://fine-puce-frog-wrap.cyclic.app/api/client', {
        ClientNumber: clientnumber,
        DOB: dob,
        Email: email,
        Address: address,
        Payment: payment,
        // Include the new fields in the POST request
        FirstName: firstName,
        LastName: lastName,
        Gender: gender,
        AadharNumber: aadharNumber,
        MotherName: motherName,
      });
      setStatus(true);
      toast.success('Data posted successfully');
    } catch (error) {
      console.log('error sending data', error);
      toast.error('Error sending data');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://fine-puce-frog-wrap.cyclic.app/api/client');
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976D2', // or your desired primary color
      },
      secondary: {
        main: '#F57C00', // or your desired secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <ToastContainer />

        <Stack direction="row" spacing={1} style={{ marginLeft: 450, marginTop: 10 }}>
          <Stack direction="column" alignItems="center">
            <Paper sx={{ m: 10, backgroundColor: '#E4F1FF' }}>
              <Stack direction="column" spacing={3} sx={{ m: 3, p: 3, minWidth: 300 }}>
                <Typography variant="h4">
                  Personal Information
                </Typography>
                <TextField label="First Name" onChange={handleFirstName} fullWidth sx={{width:600}}/>
                <TextField label="Last Name" onChange={handleLastName} fullWidth />
                <TextField label="Gender" onChange={handleGender} fullWidth />
                <TextField label="Aadhar Number" onChange={handleAadharNumber} fullWidth />
                <TextField label="Mother Name" onChange={handleMotherName} fullWidth />
                <TextField label="Mobile number" onChange={handlenumber} fullWidth />
                <TextField label="Date of Birth" onChange={handledob} fullWidth />
                <TextField label="Email" onChange={handlemail} fullWidth />
                <TextField label="Address" onChange={handleaddress} fullWidth />
                <TextField label="Payment" onChange={handlepayment} fullWidth />
                <Button variant="contained" onClick={handleSubmit} color="primary" sx={{ backgroundColor: 'green', color: 'white' }}>
                  Submit
                </Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Need support? <a href="/contact">Contact us</a>
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
