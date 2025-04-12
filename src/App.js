import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themes } from './themes';
import './constants/fonts';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/Header';
import HeaderVideo from './components/HeaderVideo';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ContextQuiz } from './components/Quiz';
import WordForm from './components/WordForm';
import LearningHub from './components/LearningHub';
import { Box, CircularProgress } from '@mui/material';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  const [appTheme, setAppTheme] = useState('languageHub');
  const [quizTheme, setQuizTheme] = useState('default');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSavedTheme = () => {
      try {
        const savedQuizTheme = localStorage.getItem('quizAppTheme');
        if (savedQuizTheme && themes[savedQuizTheme]) {
          setQuizTheme(savedQuizTheme);
        }
      } catch (error) {
        console.error('Error loading saved theme:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSavedTheme();
  }, []);

  const handleQuizThemeChange = (newTheme) => {
    if (!themes[newTheme]) {
      console.error(`Invalid theme: ${newTheme}`);
      return;
    }
    try {
      setQuizTheme(newTheme);
      localStorage.setItem('quizAppTheme', newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const getActiveTheme = (pathname) => {
    try {
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
    } catch (error) {
      console.error('Error creating theme:', error);
      return themes.default;
    }
  };

  const AppContent = () => {
    const location = useLocation();
    const currentTheme = getActiveTheme(location.pathname);

    if (isLoading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      );
    }

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
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<HeaderVideo />} />
              <Route path="/learning-hub" element={<LearningHub />} />
              <Route
                path="/quiz"
                element={<ContextQuiz currentTheme={quizTheme} onThemeChange={handleQuizThemeChange} />}
              />
              <Route
                path="/words"
                element={
                  <ProtectedRoute>
                    <WordForm />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
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
