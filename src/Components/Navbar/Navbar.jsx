import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <AppBar sx={{boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.1)' }} position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ textalign:"center" }}>
        <Typography variant="h6" color="magenta">
          Logo
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            sx={{ my: 1, mx: 1.5, ml: 42 }}
          >Spaceship
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/communityconnect"
            sx={{ my: 1, mx: 1.5 }}
          >
            Community Connect
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/infocards"
            sx={{ my: 1, mx: 1.5 }}
          >
            Infocards
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/quests"
            sx={{ my: 1, mx: 1.5 }}
          >
            Quests
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/experiencemaps"
            sx={{ my: 1, mx: 1.5 }}
          >
            Experience Maps
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            sx={{ my: 1, mx: 1.5 , ml: 25}}
          >
            <NotificationsActiveIcon />
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            sx={{ my: 1, mx: 0, height: 70, width: 70 }}
          >
            <AccountCircleIcon />
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            sx={{ my: 0, mx: 2, fontSize: 11}}
          >
            Name Surname
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
