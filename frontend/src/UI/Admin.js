import { Button, Card, CardContent, Grid, Paper, Stack, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Course() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [updatedClientData, setUpdatedClientData] = useState({
    ClientNumber: '',
    ClientName: '',
    DOB: '',
    Email: ''
  });
  const uri = "https://fine-puce-frog-wrap.cyclic.app/api/client";

  useEffect(() => {
    Axios.get(uri)
      .then((res) => {
        setData(res.data);
      });
  }, [uri]);

  const handleDelete = async (_id) => {
    try {
      await Axios.delete(`https://fine-puce-frog-wrap.cyclic.app/api/client/${_id}`);
      const updateData = data.filter(item => item._id !== _id);
      setData(updateData);
    } catch (error) {
      console.error({ "error deleting ": error });
    }
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setUpdatedClientData({
      ClientNumber: client.ClientNumber,
      DOB: client.DOB,
      Email: client.Email,
      Address: client.Address,
      Payment: client.Payment,
      FirstName:client.FirstName,
      LastName:client.LastName,
      Gender:client.Gender,
      AadharNumber:client.AadharNumber,
      MotherName:client.MotherName
    });
  };

  async function onHandleClick() {
  navigate('/hr')
  }


  const handleUpdate = async () => {
    try {
      await Axios.put(`https://fine-puce-frog-wrap.cyclic.app/api/client/${editingClient._id}`, updatedClientData);
      // Update the local data with the updated client data
      const updatedData = data.map(item => item._id === editingClient._id ? { ...item, ...updatedClientData } : item);
      setData(updatedData);
      setEditingClient(null);
    } catch (error) {
      console.error({ "error updating ": error });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedClientData({
      ...updatedClientData,
      [name]: value
    });
  };

  return (
    <div>
      <Stack direction="row" spacing={1} style={{ marginLeft: 95, marginTop: 20, marginRight: 35 }}>
        <Paper elevation={6} style={{ marginRight: 15, width: '95%', backgroundColor: '#EAD7BB' }}>
          <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: '' }}>
            Client Information
          </Typography>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ backgroundColor: '#E4F1FF', height: '100%' }}>
                  <CardContent>
                  <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Client FirstName: {item.FirstName}
                    </Typography>
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      Client LastName: {item.LastName}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Gender: {item.Gender}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      AadharNumber: {item.AadharNumber}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Mother Name: {item.MotherName}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Mobile Number: {item.ClientNumber}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      DOB: {item.DOB}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Email: {item.Email}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Address: {item.Address}
                    </Typography>
                    <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                      Payment: {item.Payment}
                    </Typography>
                    <Stack direction="row" spacing={1} style={{ marginTop: '10px' }}>
                      <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(item._id)} sx={{backgroundColor: 'red',color:'white'}}>
                        Delete
                      </Button>
                      <Button variant="contained" startIcon={<SendIcon />} onClick={() => handleEdit(item)} sx={{backgroundColor: 'green',color:'white'}}>
                        Edit
                      </Button>
                      <Button variant="contained" startIcon={<SendIcon />} onClick={onHandleClick} sx={{backgroundColor: 'orange',color:'white'}}>
                      suggestion
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>

      {/* Update form */}
      {editingClient && (
        <Stack spacing={3}>
        <Paper elevation={6} style={{ marginLeft: 95, marginTop: 20, marginRight: 35, padding: '20px', backgroundColor: '#E4F1FF' }}>
          <Typography variant="h5" align="center" style={{ marginBottom: '20px', color: '' }}>
            Update Client Information
          </Typography>
          <TextField
      fullWidth
      label="First Name"
      variant="outlined"
      name="FirstName"
      value={updatedClientData.FirstName}
      onChange={handleInputChange}
    />
    <TextField
      fullWidth
      label="Last Name"
      variant="outlined"
      name="LastName"
      value={updatedClientData.LastName}
      onChange={handleInputChange}
    />
    <TextField
      fullWidth
      label="Gender"
      variant="outlined"
      name="Gender"
      value={updatedClientData.Gender}
      onChange={handleInputChange}
    />
     <TextField
      fullWidth
      label="Aadhar Number"
      variant="outlined"
      name="AadharNumber"
      value={updatedClientData.AadharNumber}
      onChange={handleInputChange}
    />
    <TextField
      fullWidth
      label="Mother Name"
      variant="outlined"
      name="MotherName"
      value={updatedClientData.MotherName}
      onChange={handleInputChange}
    />
          <TextField
            fullWidth
            label="Client Number"
            variant="outlined"
            name="ClientNumber"
            value={updatedClientData.ClientNumber}
            onChange={handleInputChange}
            style={{ marginBottom: '15px' }} 
          />
          <TextField
            fullWidth
            label="DOB"
            variant="outlined"
            name="DOB"
            value={updatedClientData.DOB}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="Email"
            value={updatedClientData.Email}
            onChange={handleInputChange}
          />
         <TextField
      fullWidth
      label="Payment"
      variant="outlined"
      name="Payment"
      value={updatedClientData.Payment}
      onChange={handleInputChange}
    />
   
          <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: '10px' }}>
            Update
          </Button>
        </Paper>
        </Stack>
      )}
    </div>
  );
}