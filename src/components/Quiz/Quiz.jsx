import React from 'react';
import { Box, Button, Container, Typography, Card, CardContent, LinearProgress, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuiz } from '../../hooks/useQuiz';
import { SAMPLE_QUESTIONS } from '../../constants/quizData';
import { gradientBackground, glassCard, gradientText } from '../../styles/commonStyles';

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

const Quiz = () => {
  const {
    currentQuestion,
    selectedAnswer,
    score,
    showExamples,
    handleAnswerClick,
    handleNextQuestion,
    progress,
    isLastQuestion,
  } = useQuiz(SAMPLE_QUESTIONS);

  const currentQuestionData = SAMPLE_QUESTIONS[currentQuestion];

  return (
    <Box sx={{ minHeight: '100vh', py: { xs: 2, sm: 3 }, px: { xs: 1, sm: 2 }, ...gradientBackground }}>
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
            Progress: {currentQuestion + 1}/{SAMPLE_QUESTIONS.length} • Score: {score}
          </Typography>
        </Box>

        <Card sx={glassCard}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 3,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #7B61FF 0%, #FF61B6 100%)',
              },
            }}
          />

          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
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
                {currentQuestionData.level}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 1.5,
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  letterSpacing: '-0.02em',
                  ...gradientText,
                }}
              >
                {currentQuestionData.word}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                {currentQuestionData.context}
              </Typography>
            </Box>

            <Stack spacing={2}>
              {currentQuestionData.options.map((option, index) => (
                <StyledButton
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  isCorrect={selectedAnswer === index && index === currentQuestionData.correct}
                  isWrong={selectedAnswer === index && index !== currentQuestionData.correct}
                >
                  {option}
                </StyledButton>
              ))}
            </Stack>

            {showExamples && (
              <Box mt={4}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    ...gradientText,
                  }}
                >
                  Examples
                </Typography>
                <Stack spacing={2}>
                  {currentQuestionData.examples.map((example, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#fff',
                          fontWeight: 500,
                          mb: 1,
                        }}
                      >
                        {example.portuguese}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {example.english}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 1,
                          color: 'rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        {example.context}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                {!isLastQuestion && (
                  <Button
                    variant="contained"
                    onClick={handleNextQuestion}
                    sx={{
                      mt: 3,
                      ...gradientButton,
                    }}
                  >
                    Next Question
                  </Button>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Quiz; 