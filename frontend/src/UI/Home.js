import React, { useState } from 'react';
import Navbar from './Navbar';
import { Button, Card, Stack, Typography } from '@mui/material';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';




const centerImageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const iconContainerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
};

export default function Home() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px'}}>
      <div style={{ flex: 1 }}>
        <Navbar />
        <Stack sx={{ m: 3 }}>
          <h1 align='center' style={{ color: 'green', margin: 10 }}>
            <marquee>
              Welcome to the online eVisa processing System portal
            </marquee>
          </h1>
        </Stack>
        <Stack sx={{ m: 'auto', textAlign: 'center' }}>
          <img
            src={require('../steps.jpg')}
            alt="Description"
            style={{ width: '50%', height: 'auto', ...centerImageStyle }}
          />
        </Stack>
       
        <div style={iconContainerStyle}>
          <Link to="/bot">
            <div style={{ fontSize: '50px', color: 'blue' }}>
            <FontAwesomeIcon icon={faRobot} />
         </div>
          </Link>
        </div>
      </div>
      <footer style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc',width:'80%' }}>
        <a href="https://www.instagram.com/"><FaInstagram size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://web.whatsapp.com/"><FaWhatsapp size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://www.facebook.com/"><FaFacebook size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://twitter.com/"><FaTwitter size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <br />
        <h4 style={{ color: 'white', margin: 10 }}>
          © 2023 Online eVisa Processing System
        </h4>
      </footer>
    </div>
  );
}