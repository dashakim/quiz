import React, { useState, useCallback } from 'react';
import { Box, Typography, Card, CardContent, Button, Stack, Alert } from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { useExercise } from '../hooks/useExercise';
import ExerciseHeader from './ExerciseGenerator/ExerciseHeader';
import { ExerciseInput } from './ExerciseGenerator/ExerciseInput';
import ExerciseHelp from './ExerciseGenerator/ExerciseHelp';

const PortuguesePractice = () => {
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

  return (
    <Box>
      <Stack spacing={2}>
        <Card sx={{ boxShadow: 0 }}>
          <CardContent>
            <Stack spacing={3}>
              <ExerciseHeader
                selectedLevel={selectedLevel}
                exerciseType={exerciseType}
                handleLevelChange={handleLevelChange}
                handleExerciseTypeChange={handleExerciseTypeChange}
                currentExercise={currentExercise}
                generateNewExercise={generateNewExercise}
              />

              {currentExercise && (
                <Card sx={{ bgcolor: 'grey.50', boxShadow: 0, maxWidth: '800px', mx: 'auto' }}>
                  <CardContent>
                    <Stack spacing={3}>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {currentExercise.question}
                      </Typography>
                      <ExerciseInput
                        currentExercise={currentExercise}
                        userAnswer={userAnswer}
                        setUserAnswer={setUserAnswer}
                      />
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button
                          onClick={handleCheckOrNext}
                          variant="contained"
                          disabled={!userAnswer || userAnswer === ''}
                          sx={{
                            minWidth: '150px',
                            height: '48px',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '16px',
                            fontWeight: 500,
                            boxShadow: 'none',
                            background:
                              !userAnswer || userAnswer === ''
                                ? 'rgba(140,140,140,0.2)'
                                : isCorrect === null
                                  ? 'rgba(69,69,69,0.45)'
                                  : isCorrect
                                    ? '#4caf50'
                                    : 'rgba(140,140,140,0.2)',
                            '&:hover': {
                              background:
                                !userAnswer || userAnswer === ''
                                  ? 'rgba(140,140,140,0.2)'
                                  : isCorrect === null
                                    ? 'rgba(140,140,140,0.55)'
                                    : isCorrect
                                      ? '#4caf50'
                                      : 'rgba(140,140,140,0.3)',
                            },
                            '&.Mui-disabled': {
                              background: 'rgba(140,140,140,0.2)',
                              color: 'rgba(0, 0, 0, 0.26)',
                            },
                          }}
                        >
                          {isCorrect ? 'Next Exercise' : 'Check Answer'}
                        </Button>
                        <Button
                          onClick={() => setShowHelp(!showHelp)}
                          sx={{
                            minWidth: '150px',
                            color: '#5a5a5a',
                            borderColor: '#a78bfa',
                          }}
                          variant="outlined"
                        >
                          {showHelp ? 'Hide Help' : 'Show Help'}
                        </Button>
                      </Box>
                      {isCorrect !== null && (
                        <Alert icon={isCorrect ? <Check /> : <Close />} severity={isCorrect ? 'success' : 'error'}>
                          {isCorrect ? (
                            <>Correct! Click 'Next Exercise' to continue.</>
                          ) : (
                            <>Try again! The answer should have {currentExercise.correctAnswer.length} letters.</>
                          )}
                        </Alert>
                      )}
                      {showHelp && (
                        <ExerciseHelp
                          currentExercise={currentExercise}
                          exerciseType={exerciseType}
                          showHelp={showHelp}
                        />
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default PortuguesePractice;
