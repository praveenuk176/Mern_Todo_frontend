import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'hsl(157, 86%, 14%)' }}>
          <Typography variant="h6" component="div">
            <Link to='/front' style={{ color: 'white', textDecoration: 'none' }}>Welcome</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to='/home' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to='/todo' style={{ color: 'white', textDecoration: 'none' }}>TodoList</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
