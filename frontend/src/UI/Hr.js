import React, { useState } from 'react';
import axios from 'axios';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EmailSend() {
  const [suggestion, setSuggestion] = useState('');
  const [mail, setMail] = useState('');

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  };

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSendSuggestion = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://fine-puce-frog-wrap.cyclic.app/api/hr', {
        email: mail,
        suggestion: suggestion
      });

      // Show success toast
      toast.success('Suggestion sent successfully', {
        position: toast.POSITION.TOP_CENTER
      });

      // Clear the text fields
      setMail('');
      setSuggestion('');
    } catch (err) {
      console.log('Error sending suggestion', err);
    }
  };

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" mt={10}>
      <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 9 }}>
        <Typography variant="h4" align="center" color="primary" mb={2} style={{ marginBottom: '45px' }}>
          Suggestion box
        </Typography>
        <TextField
          label="Enter Mail Here"
          fullWidth
          onChange={handleEmailChange}
          value={mail}
          style={{ marginBottom: '15px' }}
          variant="outlined"
        />
        <TextField
          label="Enter Suggestion Here"
          fullWidth
          onChange={handleSuggestionChange}
          value={suggestion}
          style={{ marginBottom: '15px' }}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendSuggestion}
          fullWidth
          style={{ marginBottom: '25px' }}
          sx={{backgroundColor: 'green',color:'white'}}
        >
          Send Suggestion
        </Button>
      </Paper>
      <ToastContainer />
    </Stack>
  );
}

export default EmailSend;
