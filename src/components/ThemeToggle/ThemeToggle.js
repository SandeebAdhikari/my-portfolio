import React from 'react';
import { Switch } from '@mui/material';

const ThemeToggle = ({ darkMode, handleThemeChange }) => {
  return (
    <div style={{ position: 'fixed', top: 10, right: 10 }}>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </div>
  );
};

export default ThemeToggle;
