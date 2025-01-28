import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { WbSunny, DarkMode, Forest, WbTwilight } from '@mui/icons-material';

const themeOptions = [
  { name: 'Default', value: 'default', icon: WbSunny },
  { name: 'Dark Mode', value: 'dark', icon: DarkMode },
  { name: 'Nature', value: 'nature', icon: Forest },
  { name: 'Sunset', value: 'sunset', icon: WbTwilight },
];

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  return (
    <List>
      {themeOptions.map((theme) => (
        <ListItem key={theme.value} disablePadding>
          <ListItemButton selected={currentTheme === theme.value} onClick={() => onThemeChange(theme.value)}>
            <ListItemIcon>
              <theme.icon color={currentTheme === theme.value ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary={theme.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ThemeSelector;
