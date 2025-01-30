import React, { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Stack,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { exerciseTypes, grammarRules } from './exercisePatterns';

const PortuguesePractice = () => {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [exerciseType, setExerciseType] = useState('multipleChoice');

  const generateExercise = useCallback(() => {
    const exercises = exerciseTypes[exerciseType][selectedLevel];
    const exercise = exercises[Math.floor(Math.random() * exercises.length)];

    switch (exerciseType) {
      case 'multipleChoice':
        return {
          ...exercise,
          type: 'multipleChoice',
          question: exercise.sentence.replace('[verb]', '_____'),
        };
      case 'wordCompletion':
        return {
          ...exercise,
          type: 'wordCompletion',
          question: exercise.sentence,
        };
      case 'articles':
        return {
          ...exercise,
          type: 'articles',
          question: exercise.sentence,
        };
      default:
        return exercise;
    }
  }, [exerciseType, selectedLevel]);

  const checkAnswer = useCallback(() => {
    if (!currentExercise) return;
    let isAnswerCorrect = false;

    switch (currentExercise.type) {
      case 'multipleChoice':
        isAnswerCorrect = userAnswer === currentExercise.correctAnswer;
        break;
      case 'wordCompletion':
      case 'articles':
        isAnswerCorrect = userAnswer.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase();
        break;
      default:
        break;
    }

    setIsCorrect(isAnswerCorrect);
  }, [currentExercise, userAnswer]);

  const generateNewExercise = useCallback(() => {
    const exercise = generateExercise();
    setCurrentExercise(exercise);
    setUserAnswer('');
    setIsCorrect(null);
    setShowHelp(false);
  }, [generateExercise]);

  const renderExerciseInput = () => {
    if (!currentExercise) return null;

    switch (currentExercise.type) {
      case 'multipleChoice':
        return (
          <RadioGroup value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}>
            <Stack spacing={1}>
              {currentExercise.options.map((option) => (
                <Card
                  key={option}
                  variant="outlined"
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': { bgcolor: 'grey.50' },
                  }}
                >
                  <FormControlLabel value={option} control={<Radio />} label={option} sx={{ m: 1, width: '100%' }} />
                </Card>
              ))}
            </Stack>
          </RadioGroup>
        );

      case 'wordCompletion':
        return (
          <TextField
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Complete the word..."
            helperText={currentExercise.hint}
            fullWidth
            variant="outlined"
          />
        );

      case 'articles':
        return (
          <TextField
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Fill in the article..."
            fullWidth
            variant="outlined"
          />
        );

      default:
        return null;
    }
  };

  const renderHelp = () => {
    if (!currentExercise || !showHelp) return null;

    return (
      <Stack spacing={2}>
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight="bold">
              Specific Rule:
            </Typography>
            <Typography>{currentExercise.rule}</Typography>
          </Stack>
        </Alert>

        <Card sx={{ bgcolor: 'grey.50', p: 2, boxShadow: 0 }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Grammar Guide
            </Typography>

            {exerciseType === 'articles' && (
              <>
                <Typography variant="body2">
                  <strong>Basic Rules:</strong> {grammarRules.articles.basic}
                </Typography>
                <Typography variant="body2">
                  <strong>Contractions:</strong> {grammarRules.articles.contractions}
                </Typography>
                <Stack spacing={1} mt={1}>
                  <Typography variant="body2" fontWeight="bold">
                    Examples:
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Typography variant="body2">• o menino (the boy)</Typography>
                    <Typography variant="body2">• uma casa (a house)</Typography>
                    <Typography variant="body2">• no parque (in the park) = em + o</Typography>
                    <Typography variant="body2">• da escola (from the school) = de + a</Typography>
                  </Box>
                </Stack>
              </>
            )}

            {exerciseType === 'prepositions' && (
              <>
                <Typography variant="body2">
                  <strong>Basic Usage:</strong> {grammarRules.prepositions.basic}
                </Typography>
                <Typography variant="body2">
                  <strong>Common Uses:</strong> {grammarRules.prepositions.usage}
                </Typography>
                <Stack spacing={1} mt={1}>
                  <Typography variant="body2" fontWeight="bold">
                    Common Prepositions:
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Typography variant="body2">• em = in/on/at</Typography>
                    <Typography variant="body2">• de = from/of</Typography>
                    <Typography variant="body2">• para = to/for</Typography>
                    <Typography variant="body2">• com = with</Typography>
                  </Box>
                </Stack>
              </>
            )}

            {(exerciseType === 'multipleChoice' ||
              exerciseType === 'wordCompletion' ||
              exerciseType === 'verbConjugation') && (
              <>
                <Typography variant="body2">
                  <strong>Present Tense:</strong> {grammarRules.verbs.present}
                </Typography>
                <Typography variant="body2">
                  <strong>Past Tense:</strong> {grammarRules.verbs.past}
                </Typography>
                <Typography variant="body2">
                  <strong>Future:</strong> {grammarRules.verbs.future}
                </Typography>
                <Stack spacing={1} mt={1}>
                  <Typography variant="body2" fontWeight="bold">
                    Conjugation Patterns:
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Typography variant="body2">-ar verbs: falar (to speak)</Typography>
                    <Typography variant="body2">• eu falo, você/ele/ela fala, nós falamos, eles/elas falam</Typography>
                    <Typography variant="body2">-er verbs: comer (to eat)</Typography>
                    <Typography variant="body2">• eu como, você/ele/ela come, nós comemos, eles/elas comem</Typography>
                  </Box>
                </Stack>
              </>
            )}

            {exerciseType === 'timeExpressions' && (
              <Stack spacing={1}>
                <Typography variant="body2" fontWeight="bold">
                  Time References:
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="body2">• agora = now</Typography>
                  <Typography variant="body2">• hoje = today</Typography>
                  <Typography variant="body2">• ontem = yesterday</Typography>
                  <Typography variant="body2">• amanhã = tomorrow</Typography>
                  <Typography variant="body2">• há = ago/for (past)</Typography>
                  <Typography variant="body2">• daqui a = in (future)</Typography>
                </Box>
              </Stack>
            )}

            <Alert severity="success" sx={{ mt: 2 }}>
              <Typography variant="body2">💡 Tip: {getExerciseTip(exerciseType)}</Typography>
            </Alert>
          </Stack>
        </Card>
      </Stack>
    );
  };

  const getExerciseTip = (type) => {
    const tips = {
      articles: 'Pay attention to the gender and number of the noun when choosing articles.',
      prepositions: 'Think about the relationship between the words - location, direction, or purpose?',
      multipleChoice: 'Remember that verb endings change based on who is performing the action.',
      wordCompletion: 'Look at the subject of the sentence to determine the correct verb ending.',
      verbConjugation: 'Consider the tense and subject when conjugating verbs.',
      timeExpressions: 'Time expressions often affect verb tense choice.',
    };
    return tips[type] || 'Practice regularly with different examples to improve your understanding.';
  };
  return (
    <Box>
      <Stack spacing={2}>
        <Card sx={{ boxShadow: 0 }}>
          <CardContent>
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Typography variant="h6">Practice Generator 🎯</Typography>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel>Level</InputLabel>
                    <Select
                      value={selectedLevel}
                      label="Level"
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      size="small"
                    >
                      <MenuItem value="A1">A1 (Basic)</MenuItem>
                      <MenuItem value="A2">A2 (Elementary)</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Exercise Type</InputLabel>
                    <Select
                      value={exerciseType}
                      label="Exercise Type"
                      onChange={(e) => setExerciseType(e.target.value)}
                      size="small"
                    >
                      <MenuItem value="multipleChoice">Multiple Choice</MenuItem>
                      <MenuItem value="wordCompletion">Complete the Word</MenuItem>
                      <MenuItem value="articles">Articles</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    onClick={generateNewExercise}
                    sx={{
                      bgcolor: 'primary.actionBlue',
                      '&:hover': {
                        bgcolor: 'primary.actionBlue',
                      },
                    }}
                  >
                    New Exercise
                  </Button>
                </Stack>
              </Stack>

              {currentExercise && (
                <Card
                  sx={{
                    bgcolor: 'grey.50',
                    boxShadow: 0,
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  <CardContent>
                    <Stack spacing={3}>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {currentExercise.question}
                      </Typography>

                      {renderExerciseInput()}

                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button
                          onClick={checkAnswer}
                          variant="contained"
                          sx={{
                            bgcolor: 'primary.green',
                            minWidth: '150px',
                            '&:hover': {
                              bgcolor: 'primary.green',
                            },
                          }}
                        >
                          Check Answer
                        </Button>
                        <Button
                          onClick={() => setShowHelp(!showHelp)}
                          variant="outlined"
                          sx={{
                            minWidth: '150px',
                          }}
                        >
                          {showHelp ? 'Hide Help' : 'Show Help'}
                        </Button>
                      </Box>

                      {isCorrect !== null && (
                        <Alert icon={isCorrect ? <Check /> : <Close />} severity={isCorrect ? 'success' : 'error'}>
                          {isCorrect ? (
                            <>Correct! The answer is: {currentExercise.correctAnswer}</>
                          ) : (
                            <>Try again! The answer should have {currentExercise.correctAnswer.length} letters.</>
                          )}
                        </Alert>
                      )}
                      {showHelp && renderHelp()}
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
