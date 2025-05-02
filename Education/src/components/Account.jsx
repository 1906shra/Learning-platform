import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';
import img from '../assets/im.png';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Clickable Avatar as Account Menu Trigger */}
      <IconButton
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
        color="inherit"
      >
        <img
          src={img}
          alt="User"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </IconButton>

      {/* Account Menu */}
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem disabled>
          <img
            src={img}
            alt="User"
            style={{ width: 40, height: 40, borderRadius: '50%' }}
          />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 py-2"
          >
            Login
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link
            to="/signup"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 py-2"
          >
            Signup
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
