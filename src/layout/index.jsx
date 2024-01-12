/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Phone from '../page/Phone';

const Layout = (props) => {
  return (
    <Box>
      <Header />
      {props.children}
    </Box>
  );
};

export default Layout;
