import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailSend() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [vmail, setVMail] = useState('');
  const [status, setStatus] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  };

  const handleVEmailChange = (e) => {
    setVMail(e.target.value);
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fine-puce-frog-wrap.cyclic.app/api/emailotp', {
        email: mail,
      });
      setOtpSent(true); // Update state to indicate OTP is sent
    } catch (err) {
      console.log('error sending data', err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fine-puce-frog-wrap.cyclic.app/emailotp/verify-otp', {
        otp: vmail,
      });
      console.log(res.data);
      if (res.data.status === 200) {
        setStatus(true);
        setTimeout(() => {
          navigate('/');
        }, 1000); // Delay the redirection for 500ms
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resendOtp = async () => {
    try {
      await axios.post('https://fine-puce-frog-wrap.cyclic.app/api/emailotp', {
        email: mail,
      });
      setOtpSent(true);
      toast.success('Otp Resent Successfully');
    } catch (err) {
      console.log('error resending OTP', err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Stack direction="column" alignItems="center" justifyContent="center" mt={10}>
        <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 110 }}>
          <Typography variant="h4" align="center" color="primary" mb={2} style={{ marginBottom: '25px' }}>
            OTP Mail Authentication
          </Typography>
          <TextField
            label="Enter Mail Here"
            fullWidth
            onChange={handleEmailChange}
            style={{ marginBottom: '15px' }}
            variant="outlined"
          />
          {otpSent && (
            <TextField
              label="Enter OTP Here"
              fullWidth
              onChange={handleVEmailChange}
              style={{ marginBottom: '20px' }}
              variant="outlined"
            />
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={otpSent ? verifyOtp : handleOtp}
            fullWidth
            style={{ marginBottom: '25px' }}
            endIcon={<VerifiedIcon />}
          >
            {otpSent ? 'Verify OTP' : 'Send OTP'}
          </Button>
          <Button onClick={resendOtp}>Resend OTP</Button>
          {status && (
            <Alert severity="success" style={{ marginTop: '20px' }}>
              OTP Verified Successfully!
            </Alert>
          )}
        </Paper>
      </Stack>
    </div>
  );
}

export default EmailSend;
