import React, { useState, useCallback } from 'react';
import { Box, Typography, Card, CardContent, Button, Stack, Alert, useTheme, alpha } from '@mui/material';
import { Check, Close, LightbulbOutlined, ArrowForward, School } from '@mui/icons-material';
import { useExercise } from '../hooks/useExercise';
import ExerciseHeader from './ExerciseGenerator/ExerciseHeader';
import { ExerciseInput } from './ExerciseGenerator/ExerciseInput';
import ExerciseHelp from './ExerciseGenerator/ExerciseHelp';

const PortuguesePractice = () => {
  const theme = useTheme();
  const {
    currentExercise,
    userAnswer,
    isCorrect,
    selectedLevel,
    exerciseType,
    setUserAnswer,
    checkAnswer,
    generateNewExercise,
    handleLevelChange,
    handleExerciseTypeChange,
  } = useExercise();

  const [showHelp, setShowHelp] = useState(false);

  const handleCheckOrNext = useCallback(() => {
    if (isCorrect) {
      generateNewExercise();
    } else {
      checkAnswer();
    }
  }, [isCorrect, generateNewExercise, checkAnswer]);

  const getButtonStyles = (disabled, isCorrect) => ({
    minWidth: '150px',
    height: '48px',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    ...(isCorrect === true && {
      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
      boxShadow: `0 4px 14px ${alpha(theme.palette.success.main, 0.4)}`,
      '&:hover': {
        background: `linear-gradient(135deg, ${theme.palette.success.dark}, ${theme.palette.success.main})`,
        transform: 'translateY(-1px)',
        boxShadow: `0 6px 20px ${alpha(theme.palette.success.main, 0.6)}`,
      },
    }),
    ...(!isCorrect &&
      !disabled && {
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
        '&:hover': {
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
          transform: 'translateY(-1px)',
          boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
        },
      }),
    ...(disabled && {
      background: theme.palette.action.disabledBackground,
      boxShadow: 'none',
    }),
  });

  return (
    <Box sx={{ maxWidth: '1300px', mx: 'auto', px: 2 }}>
      <Stack>
        <Stack
          sx={{
            bgcolor: 'transparent',
            backgroundImage: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ExerciseHeader
            selectedLevel={selectedLevel}
            exerciseType={exerciseType}
            handleLevelChange={handleLevelChange}
            handleExerciseTypeChange={handleExerciseTypeChange}
            currentExercise={currentExercise}
            generateNewExercise={generateNewExercise}
          />

          {currentExercise && (
            <Card
              sx={{
                maxWidth: '900px',
                minWidth: '400px',
                mx: 'auto',
                borderRadius: 3,
                bgcolor: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(10px)',
                boxShadow: `0 4px 30px ${alpha(theme.palette.common.black, 0.1)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={4}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <School
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: 28,
                        mt: 0.5,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {currentExercise.question}
                    </Typography>
                  </Box>
                  <ExerciseInput
                    currentExercise={currentExercise}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                  />
                  <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
                    <Button
                      onClick={handleCheckOrNext}
                      variant="contained"
                      disabled={!userAnswer || userAnswer === ''}
                      endIcon={isCorrect ? <ArrowForward /> : <Check />}
                      sx={getButtonStyles(!userAnswer || userAnswer === '', isCorrect)}
                    >
                      {isCorrect ? 'Next Exercise' : 'Check Answer'}
                    </Button>
                    <Button
                      onClick={() => setShowHelp(!showHelp)}
                      startIcon={<LightbulbOutlined />}
                      variant="outlined"
                      sx={{
                        minWidth: '150px',
                        height: '48px',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 500,
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          borderColor: theme.palette.primary.dark,
                          backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                      }}
                    >
                      {showHelp ? 'Hide Help' : 'Show Help'}
                    </Button>
                  </Stack>

                  {/* Feedback Alert */}
                  {isCorrect !== null && (
                    <Alert
                      icon={isCorrect ? <Check /> : <Close />}
                      severity={isCorrect ? 'success' : 'error'}
                      sx={{
                        borderRadius: 2,
                        '& .MuiAlert-icon': {
                          fontSize: '24px',
                        },
                      }}
                    >
                      {isCorrect ? (
                        <Typography variant="body1">
                          Excellent! Click 'Next Exercise' to continue your learning journey.
                        </Typography>
                      ) : (
                        <Typography variant="body1">
                          Keep trying! The correct answer should have {currentExercise.correctAnswer.length} letters.
                        </Typography>
                      )}
                    </Alert>
                  )}
                  {showHelp && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 3,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        borderRadius: 2,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      }}
                    >
                      <ExerciseHelp currentExercise={currentExercise} exerciseType={exerciseType} showHelp={showHelp} />
                    </Box>
                  )}
                </Stack>
              </CardContent>
            </Card>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PortuguesePractice;
