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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Quiz from './Quiz';
import WordForm from './WordForm';
import LearningHub from './LearningHub';
import { Box } from '@mui/material';
import Footer from './components/Footer';

function App() {
  const [appTheme, setAppTheme] = useState('languageHub');
  const [quizTheme, setQuizTheme] = useState('default');

  useEffect(() => {
    const savedQuizTheme = localStorage.getItem('quizAppTheme');
    if (savedQuizTheme && themes[savedQuizTheme]) {
      setQuizTheme(savedQuizTheme);
    }
  }, []);

  const handleQuizThemeChange = (newTheme) => {
    if (themes[newTheme]) {
      setQuizTheme(newTheme);
      localStorage.setItem('quizAppTheme', newTheme);
    }
  };

  const getActiveTheme = (pathname) => {
    if (pathname === '/quiz') {
      return themes[quizTheme];
    }
    if (pathname === '/learning-hub') {
      return createTheme({
        ...themes[appTheme],
        ...themes.languageHub,
        components: {
          ...themes[appTheme].components,
          ...themes.languageHub.components,
        },
      });
    }
    return themes[appTheme];
  };

  const AppContent = () => {
    const location = useLocation();
    const currentTheme = getActiveTheme(location.pathname);

    return (
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '90vh',
            pt: location.pathname === '/' ? 0 : { xs: '56px', sm: '64px' },
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HeaderVideo />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/quiz" element={<Quiz currentTheme={quizTheme} onThemeChange={handleQuizThemeChange} />} />
            <Route path="/words" element={<WordForm />} />
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
