import React, { useState } from 'react';
import { Box, Button, Container, Typography, Card, CardContent, LinearProgress, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContextQuiz = ({ currentTheme, onThemeChange }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExamples, setShowExamples] = useState(false);

  const questions = [
    {
      word: 'Obrigado',
      options: ['Please', 'Thank you', 'Hello', 'Goodbye'],
      correct: 1,
      context: 'Essential Portuguese',
      level: 'Beginner',
      examples: [
        {
          portuguese: 'Obrigado pela sua ajuda',
          english: 'Thank you for your help',
          context: 'Formal',
        },
        {
          portuguese: 'Muito obrigado!',
          english: 'Thank you very much!',
          context: 'Enthusiastic',
        },
        {
          portuguese: 'Obrigado por tudo',
          english: 'Thank you for everything',
          context: 'Heartfelt',
        },
      ],
    },
    {
      word: 'Bom dia',
      options: ['Good night', 'Good afternoon', 'Good morning', 'Good evening'],
      correct: 2,
      context: 'Daily Greetings',
      level: 'Beginner',
      examples: [
        {
          portuguese: 'Bom dia! Como está?',
          english: 'Good morning! How are you?',
          context: 'Casual greeting',
        },
        {
          portuguese: 'Melhor bom dia!',
          english: 'Very good morning!',
          context: 'Enthusiastic',
        },
        {
          portuguese: 'Bom dia a todos',
          english: 'Good morning everyone',
          context: 'Group greeting',
        },
      ],
    },
  ];

  const StyledButton = styled(Button)(({ theme, isCorrect, isWrong }) => ({
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '0.925rem',
    fontWeight: 600,
    width: '100%',
    textAlign: 'left',
    backgroundColor: isCorrect
      ? 'rgba(16, 185, 129, 0.95)'
      : isWrong
        ? 'rgba(239, 68, 68, 0.95)'
        : 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    border: '1px solid',
    borderColor: isCorrect
      ? 'rgba(16, 185, 129, 0.3)'
      : isWrong
        ? 'rgba(239, 68, 68, 0.3)'
        : 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: isCorrect
        ? 'rgba(16, 185, 129, 1)'
        : isWrong
          ? 'rgba(239, 68, 68, 1)'
          : 'rgba(255, 255, 255, 0.15)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    },
    '&:disabled': {
      opacity: 1,
    },
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 14px',
      fontSize: '0.875rem',
    },
  }));

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      setTimeout(() => setShowExamples(true), 800);
    } else {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        }
      }, 1200);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExamples(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1E1E2E 0%, #2D2B55 100%)',
        py: { xs: 2, sm: 3 },
        px: { xs: 1, sm: 2 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(123, 97, 255, 0.1) 0%, rgba(123, 97, 255, 0) 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            mb: { xs: 2, sm: 3 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            Progress: {currentQuestion + 1}/{questions.length} • Score: {score}
          </Typography>
        </Box>

        <Card
          sx={{
            borderRadius: { xs: 2, sm: 3 },
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(123, 97, 255, 0.05) 0%, rgba(123, 97, 255, 0) 100%)',
              pointerEvents: 'none',
            },
          }}
        >
          <LinearProgress
            variant="determinate"
            value={((currentQuestion + 1) / questions.length) * 100}
            sx={{
              height: 3,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #7B61FF 0%, #FF61B6 100%)',
              },
            }}
          />

          <CardContent
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box mb={3}>
              <Typography
                component="span"
                sx={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.2) 0%, rgba(123, 97, 255, 0.1) 100%)',
                  color: '#fff',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  mb: 1.5,
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  border: '1px solid rgba(123, 97, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {questions[currentQuestion]?.level}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 1.5,
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {questions[currentQuestion]?.word}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Choose the correct translation
              </Typography>
            </Box>

            {!showExamples ? (
              <Stack spacing={1.5}>
                {questions[currentQuestion]?.options.map((option, index) => (
                  <StyledButton
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    isCorrect={selectedAnswer !== null && index === questions[currentQuestion].correct}
                    isWrong={selectedAnswer === index && index !== questions[currentQuestion].correct}
                  >
                    {option}
                  </StyledButton>
                ))}
              </Stack>
            ) : (
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#10B981',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                  }}
                >
                  Correct! Here are some examples:
                </Typography>

                <Stack spacing={1.5}>
                  {questions[currentQuestion]?.examples.map((example, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-1px)',
                          background: 'rgba(255, 255, 255, 0.08)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.5)',
                          fontWeight: 500,
                          display: 'block',
                          mb: 0.5,
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        }}
                      >
                        {example.context}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: '#fff',
                          mb: 0.5,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                        }}
                      >
                        {example.portuguese}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontWeight: 500,
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        }}
                      >
                        {example.english}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>

                <Box textAlign="right" mt={3}>
                  <Button
                    onClick={handleNextQuestion}
                    sx={{
                      background: 'linear-gradient(135deg, #7B61FF 0%, #FF61B6 100%)',
                      color: 'white',
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.25 },
                      borderRadius: 2,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        opacity: 0.95,
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ContextQuiz;
