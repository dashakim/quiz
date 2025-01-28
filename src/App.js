// App.js
import QuizApp from './Quiz';
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
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WordForm from './WordForm';
import { useState, useEffect } from 'react';
import { themes } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('quizAppTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem('quizAppTheme', newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <QuizApp onThemeChange={handleThemeChange} currentTheme={currentTheme} />
      <WordForm />
    </ThemeProvider>
  );
}

export default App;
