import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { CenteredLayout } from './centered.layout';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant='h5' component="h5" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Rick Multiverse
          </Typography>
          <IconButton component={Link} to={'/rick'}  color="inherit" aria-label="Home" >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {children}
      </main>
    </>
  );
};
