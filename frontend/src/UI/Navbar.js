import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import ContactsIcon from '@mui/icons-material/Contacts';

import EditIcon from '@mui/icons-material/Edit';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

export default function NavBarDesign() {
  return (
    <AppBar sx={{ backgroundColor: '#BFB29E' }}>
      <Toolbar sx={{ justifyContent: 'space-between' ,color:'ActiveBorder'}}>
        <Box>
          <Button color="inherit" to='/' component={Link} startIcon={<HomeIcon />}>Home</Button>
          <Button color="inherit" to='/Client' component={Link} startIcon={<EditIcon/>}>Apply</Button>
          <Button color="inherit" to='/contact' component={Link} startIcon={<ContactsIcon/>}>Contact us</Button>
          <Button color="inherit" to='/about' component={Link} startIcon={<InfoTwoToneIcon/>}>About us</Button>
          <Button color="inherit" to='/faq' component={Link} startIcon={<InfoTwoToneIcon/>}>FAQ's</Button>
        </Box>
        <Box>
          <Typography variant="h4" color="inherit">
            Online E-Visa System
          </Typography>
        </Box>
        <Box>
        <Button color="inherit" to='/login' component={Link} endIcon={<LockIcon />}>Login</Button>
          <Button color="inherit" to='/adminlogin' component={Link} endIcon={<AccountCircleIcon />}>other Logins</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
