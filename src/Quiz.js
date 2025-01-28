import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  Grid2,
  Tooltip,
  Stack,
  useTheme,
} from '@mui/material';
import { VolumeUp, Settings, Grade, TrendingUp, Person } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSelector from './ThemeSelector';
import { Palette, DarkMode, LightMode } from '@mui/icons-material';

const categories = ['Food', 'Travel', 'Work', 'Home', 'Leisure'];

const SettingsBar = ({ onThemeClick, onVolumeClick, isDark, onToggleDark }) => (
  <Stack
    direction="row"
    spacing={1}
    sx={{
      position: 'fixed',
      top: 16,
      right: 16,
      zIndex: 1000,
      bgcolor: 'background.paper',
      borderRadius: 'pill',
      p: 1,
      boxShadow: 3,
    }}
  >
    <Tooltip title="Change Theme">
      <IconButton onClick={onThemeClick} color="primary">
        <Palette />
      </IconButton>
    </Tooltip>
    <Tooltip title="Volume">
      <IconButton onClick={onVolumeClick} color="primary">
        <VolumeUp />
      </IconButton>
    </Tooltip>
    <Tooltip title={isDark ? 'Light Mode' : 'Dark Mode'}>
      <IconButton onClick={onToggleDark} color="primary">
        {isDark ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  </Stack>
);

const words = [
  {
    id: 1,
    word: 'café',
    image: '/images/cafe.webp',
    translation: 'coffee',
    options: ['tea', 'coffee', 'water', 'milk'],
    category: 'Food',
    level: 'A1',
    hint: 'Morning ritual',
    usage: 'Vou tomar um café',
    audio: 'cafe.mp3',
  },
  {
    id: 2,
    word: 'praia',
    image: './images/beach.webp',
    translation: 'beach',
    options: ['mountain', 'beach', 'forest', 'city'],
    category: 'places',
    hint: 'Sandy paradise',
    usage: 'Vamos à praia',
    level: 'A1',
  },
];

const SelectionButton = ({ children, onClick, active, disabled, correct, wrong }) => {
  const theme = useTheme();
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '20px 10px',
        marginTop: '5',
        fontSize: '1.1rem',
        fontWeight: 500,
        border: `15px solid ${theme.palette.background.paper}`,
        borderRadius: theme.shape.borderRadius * theme.shape.borderRadiusMultipliers.button,
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: theme.shadows[1],
        color: theme.palette.text.primary,
        background: correct
          ? theme.palette.success.light
          : wrong
            ? theme.palette.error.light
            : theme.palette.background.paper,
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </motion.button>
  );
};

const ProgressRing = ({ progress }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', width: 60, height: 60 }}>
      <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={theme.palette.grey[200]}
          strokeWidth="3"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth="3"
          strokeDasharray={`${progress}, 100`}
        />
      </svg>
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'primary.main',
          fontWeight: 700,
        }}
      >
        {Math.round(progress)}%
      </Typography>
    </Box>
  );
};

const QuizApp = ({ currentTheme, onThemeChange }) => {
  const theme = useTheme();
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setProgress((currentWord / words.length) * 100);
  }, [currentWord]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);

    if (answer === words[currentWord].translation) {
      setStreak((s) => s + 1);
      setScore((s) => s + 10 * (streak + 1));
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentWord < words.length - 1) {
        setCurrentWord((c) => c + 1);
        setShowAnswer(false);
        setSelectedAnswer(null);
      }
    }, 1200);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 3,
        transition: theme.transitions.create(['background-color']),
      }}
    >
      <Box>
        <SettingsBar
          onThemeClick={() => setDrawerOpen(true)}
          onVolumeClick={() => {}}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
        />
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            height: 'calc(70vh - 48px)',
          }}
        >
          {/* Sidebar */}
          <Card
            sx={{
              width: 280,
              borderRadius: (theme) => theme.shape.borderRadius * 2,
              p: 3,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              bgcolor: 'background.paper',
              boxShadow: (theme) => theme.shadows[theme.palette.mode === 'dark' ? 4 : 1],
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.light',
                }}
                alt="User Sharp"
                src="/images/d.jpeg"
              >
                <Person />
              </Avatar>
              <Typography variant="h6" gutterBottom color="text.primary">
                Daria Kim
              </Typography>
              <Typography color="text.secondary">Learning since 2024</Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="overline" color="text.secondary">
                Progress
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <ProgressRing progress={progress} />
              </Box>
            </Box>
            <List>
              {categories.map((cat) => (
                <ListItem
                  key={cat}
                  button
                  selected={words[currentWord].category === cat}
                  sx={{
                    borderRadius: (theme) => theme.shape.borderRadius,
                    mb: 1,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.light',
                      '&:hover': {
                        backgroundColor: 'primary.light',
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={cat}
                    sx={{
                      '.MuiListItemText-primary': {
                        color: words[currentWord].category === cat ? 'common.white' : 'text.primary',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Card>

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius * 2,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark' ? theme.customShadows.card.dark : theme.customShadows.card.light,
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  p: 3,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                }}
              >
                <Box>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
                    {words[currentWord].category} • Level {words[currentWord].level}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary' }}>
                    {words[currentWord].word}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton sx={{ color: 'primary.main' }}>
                    <VolumeUp />
                  </IconButton>
                  <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'primary.main' }}>
                    <Settings />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  flex: 1,
                  overflowY: 'auto',
                  background: (theme) => theme.palette.background.gradient,
                  transition: theme.transitions.create(['background-color']),
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={words[currentWord].image}
                      alt={words[currentWord].word}
                      sx={{
                        borderRadius: (theme) => theme.shape.borderRadius,
                        mb: 4,
                        boxShadow: (theme) => theme.shadows[theme.palette.mode === 'dark' ? 4 : 2],
                      }}
                    />

                    <Grid2 container spacing={1} size={4}>
                      {words[currentWord].options.map((option) => (
                        <Grid2 item size={6} key={option}>
                          <SelectionButton
                            onClick={() => handleAnswer(option)}
                            active={selectedAnswer === option}
                            disabled={showAnswer}
                            correct={showAnswer && option === words[currentWord].translation}
                            wrong={showAnswer && option === selectedAnswer && option !== words[currentWord].translation}
                          >
                            {option}
                          </SelectionButton>
                        </Grid2>
                      ))}
                    </Grid2>

                    <Box
                      sx={{
                        p: 2,
                        marginTop: 5,
                        borderRadius: (theme) => theme.shape.borderRadius * 2,
                        bgcolor: 'rgba(255,255,255,0.15)',
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? theme.customShadows.hintBox.dark
                            : theme.customShadows.hintBox.light,
                      }}
                    >
                      <Typography variant="h6" gutterBottom color="text.primary">
                        💡 {words[currentWord].hint}
                      </Typography>
                      <Typography sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                        "{words[currentWord].usage}"
                      </Typography>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Box>

              {/* Footer */}
              <Box
                sx={{
                  p: 3,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                }}
              >
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box>
                    <Typography color="text.secondary" variant="overline">
                      Score
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {score} <Grade sx={{ verticalAlign: 'middle', ml: 0.5, color: 'primary.main' }} />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="overline">
                      Streak
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {streak} <TrendingUp sx={{ verticalAlign: 'middle', ml: 0.5, color: 'primary.main' }} />
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: (theme) => theme.shape.borderRadius * 1.5,
                    boxShadow: (theme) => theme.shadows[2],
                  }}
                >
                  Next Word
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            width: 360,
          },
        }}
      >
        <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} onClose={() => setDrawerOpen(false)} />
      </Drawer>
    </Box>
  );
};

export default QuizApp;
