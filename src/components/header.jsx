// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../styles/global.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const Header = () => {
  return (
    
    <AppBar position="fixed" sx={{backgroundColor: 'black', px:5, mt:8}}>
      <Toolbar>
        <Typography variant='h3' sx={{ color: 'white' }}>
          PriWallet
        </Typography>
      </Toolbar>
    </AppBar> 
  );
};

export default Header;
