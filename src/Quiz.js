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
} from '@mui/material';
import { VolumeUp, Settings, Grade, TrendingUp, Person } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Food', 'Travel', 'Work', 'Home', 'Leisure'];

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
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '20px 20px',
        marginTop: '5',
        fontSize: '1.1rem',
        fontWeight: 500,
        border: '8px solid #ffffff',
        borderRadius: '50px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
        color: correct || wrong ? '#000000' : '#000000',
        background: correct ? '#b9cabc' : wrong ? '#e4d0d8' : 'rgba(239,239,239,0)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </motion.button>
  );
};

const ProgressRing = ({ progress }) => (
  <Box sx={{ position: 'relative', width: 60, height: 60 }}>
    <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#eee"
        strokeWidth="3"
      />
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#3498db"
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
        color: '#3498db',
        // #f6f6f6
        fontWeight: 700,
      }}
    >
      {Math.round(progress)}%
    </Typography>
  </Box>
);

const QuizApp = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);

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
        background: 'linear-gradient(135deg, #f6f8fb 0%, #e9eef5 100%)',
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            height: 'calc(100vh - 48px)',
          }}
        >
          {/* Sidebar */}
          <Card
            sx={{
              width: 280,
              borderRadius: 4,
              p: 3,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} alt="User Sharp" src="/images/d.jpeg">
                <Person />
              </Avatar>
              <Typography variant="h6" gutterBottom>
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
                  sx={{ borderRadius: 2, mb: 1 }}
                >
                  <ListItemText primary={cat} />
                </ListItem>
              ))}
            </List>
          </Card>

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#fff',
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
                }}
              >
                <Box>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
                    {words[currentWord].category} • Level {words[currentWord].level}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    {words[currentWord].word}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton>
                    <VolumeUp />
                  </IconButton>
                  <IconButton onClick={() => setDrawerOpen(true)}>
                    <Settings />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  flex: 1,
                  overflowY: 'auto',
                  background: 'linear-gradient(135deg, #f6f8fb 0%, #e9eef5 100%)',
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
                      height="400"
                      image={words[currentWord].image}
                      alt={words[currentWord].word}
                      sx={{
                        borderRadius: 4,
                        mb: 4,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
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
                        borderRadius: 5,
                        // background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
                        boxShadow: 'inset 5px 5px 10px #d1d4d6, inset -5px -5px 10px #ffffff',
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
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
                }}
              >
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box>
                    <Typography color="text.secondary" variant="overline">
                      Score
                    </Typography>
                    <Typography variant="h6">
                      {score} <Grade sx={{ verticalAlign: 'middle', ml: 0.5 }} />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="overline">
                      Streak
                    </Typography>
                    <Typography variant="h6">
                      {streak} <TrendingUp sx={{ verticalAlign: 'middle', ml: 0.5 }} />
                    </Typography>
                  </Box>
                </Box>

                <Button variant="contained" size="large">
                  Next Word
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 320, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Settings
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default QuizApp;
