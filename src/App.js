import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themes } from './themes';
import './constants/fonts';

import Header from './components/Header';
import HeaderVideo from './components/HeaderVideo';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContextQuiz from './components/Quiz';
import WordForm from './components/WordForm';
import LearningHub from './components/LearningHub';
import { Box } from '@mui/material';
import Footer from './components/Footer';

function App() {
  const [appTheme] = useState('languageHub');
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
            pt: location.pathname === '/' ? 0 : '64px',
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HeaderVideo />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route
              path="/quiz"
              element={<ContextQuiz currentTheme={quizTheme} onThemeChange={handleQuizThemeChange} />}
            />
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
