import { Card, FormControlLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';

export const ExerciseInput = ({ currentExercise, userAnswer, setUserAnswer }) => {
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
                sx={{ bgcolor: 'background.paper', '&:hover': { bgcolor: 'grey.50' } }}
              >
                <FormControlLabel value={option} control={<Radio />} label={option} sx={{ m: 1, width: '100%' }} />
              </Card>
            ))}
          </Stack>
        </RadioGroup>
      );

    case 'wordCompletion':
    case 'articles':
      return (
        <TextField
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder={currentExercise.type === 'wordCompletion' ? 'Complete the word...' : 'Fill in the article...'}
          helperText={currentExercise.hint}
          fullWidth
          variant="outlined"
        />
      );

    default:
      return null;
  }
};
