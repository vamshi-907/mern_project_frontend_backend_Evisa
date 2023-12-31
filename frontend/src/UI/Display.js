import { Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar"

export default function Course() {
  const [data, setData] = useState([]);
  const uri = "https://fine-puce-frog-wrap.cyclic.app/api/client";

  useEffect(() => {
    Axios.get(uri)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={2} style={{ marginLeft: 95, marginTop: 70, marginRight: 35 }}>
        <Paper elevation={6} style={{ marginRight: 15, width: '100%', backgroundColor: '#EAD7BB', padding: '20px' }}>
          <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: 'ActiveBorder' }}>
            Client Data
          </Typography>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ backgroundColor: '#E4F1FF', height: '100%' }}>
                  <CardContent>
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      First Name: {item.FirstName}
                    </Typography>
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      Last Name: {item.LastName}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Gender: {item.Gender}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Aadhar Number: {item.AadharNumber}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Mother Name: {item.MotherName}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Mobile Number: {item.ClientNumber}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      DOB: {item.DOB}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Email: {item.Email}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Address: {item.Address}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Payment: {item.Payment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </div>
  )
}
