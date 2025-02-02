import { Card, FormControlLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';

export const ExerciseInput = ({ currentExercise, userAnswer, setUserAnswer }) => {
  if (!currentExercise) return null;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log('Selected value:', value);
    setUserAnswer(value);
  };

  switch (currentExercise.type) {
    case 'multipleChoice':
      return (
        <RadioGroup value={userAnswer || ''} onChange={handleChange}>
          <Stack spacing={1}>
            {currentExercise.options.map((option) => (
              <Card
                key={option}
                variant="outlined"
                sx={{
                  bgcolor: userAnswer === option ? 'grey.100' : 'background.paper',
                  '&:hover': { bgcolor: 'grey.50' },
                  transition: 'background-color 0.2s ease',
                }}
              >
                <FormControlLabel
                  value={option}
                  control={<Radio checked={userAnswer === option} />}
                  label={option}
                  sx={{
                    m: 1,
                    width: '100%',
                    '& .MuiFormControlLabel-label': {
                      width: '100%',
                    },
                  }}
                />
              </Card>
            ))}
          </Stack>
        </RadioGroup>
      );

    case 'wordCompletion':
    case 'articles':
      return (
        <TextField
          value={userAnswer || ''}
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
