import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themes } from './themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/permanent-marker';
import '@fontsource/patrick-hand';
import '@fontsource/share-tech-mono';
import '@fontsource/press-start-2p';
import '@fontsource/vt323';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import Header from './Header';
import HeaderVideo from './HeaderVideo';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [currentView, setCurrentView] = useState('hub');
  const [globalTheme, setGlobalTheme] = useState(themes[currentTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('quizAppTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      setGlobalTheme(themes[savedTheme]);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    setGlobalTheme(themes[newTheme]);
    localStorage.setItem('quizAppTheme', newTheme);
  };

  const getActiveTheme = () => {
    if (currentView === 'hub') {
      console.log(currentTheme);
      console.log(currentView);
      return createTheme({
        ...globalTheme,
        ...themes.languageHub,
        components: {
          ...globalTheme.components,
          ...themes.languageHub.components,
        },
      });
    }
    return globalTheme;
  };

  return (
    <ThemeProvider theme={getActiveTheme()}>
      <CssBaseline />
      <Header />
      <HeaderVideo />
    </ThemeProvider>
  );
}

export default App;
