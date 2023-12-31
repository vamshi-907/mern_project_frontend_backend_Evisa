import React from 'react';
import Navbar from './Navbar';
import { Stack, Paper, Grid, Typography, Card, CardContent, Divider } from '@mui/material';

const contactInfo = [
  {
    role: 'Customer Support',
    name: 'John Doe',
    number: '123-456-7890',
    email: 'john@example.com',
  },
  {
    role: 'Technical Support',
    name: 'Jane Smith',
    number: '987-654-3210',
    email: 'jane@example.com',
  },
  {
    role: 'General Inquiries',
    name: 'Alice Johnson',
    number: '555-123-4567',
    email: 'alice@example.com',
  },
];

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={2} style={{ marginLeft: 95, marginTop: 70, marginRight: 35 }}>
        <Paper elevation={6} style={{ marginRight: 15, width: '100%', backgroundColor: '#EAD7BB', padding: '20px' }}>
          <Grid container spacing={4}>
            {contactInfo.map((contact, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" color="primary">
                      {contact.role}
                    </Typography>
                    <Divider />
                    <Typography variant="h6" color="textSecondary">
                      Name: {contact.name}
                    </Typography>
                    <Divider />
                    <Typography variant="h6" color="textSecondary">
                      Contact Number: {contact.number}
                    </Typography>
                    <Divider />
                    {contact.email && (
                      <>
                        <Typography variant="h6" color="textSecondary">
                          Email: {contact.email}
                        </Typography>
                        <Divider />
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </div>
  );
}
