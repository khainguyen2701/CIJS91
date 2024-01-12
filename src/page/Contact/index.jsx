import { Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Contact page</Typography>
      <Outlet />
    </Box>
  );
};

export default Contact;
