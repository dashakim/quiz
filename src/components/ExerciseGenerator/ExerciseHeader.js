import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

const ExerciseHeader = ({
  selectedLevel,
  exerciseType,
  handleLevelChange,
  handleExerciseTypeChange,
  currentExercise,
  generateNewExercise,
}) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
    <Typography variant="h6">Practice Generator</Typography>
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Level</InputLabel>
        <Select value={selectedLevel} label="Level" onChange={(e) => handleLevelChange(e.target.value)} size="small">
          <MenuItem value="A1">A1 (Basic)</MenuItem>
          <MenuItem value="A2">A2 (Elementary)</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Exercise Type</InputLabel>
        <Select
          value={exerciseType}
          label="Exercise Type"
          onChange={(e) => handleExerciseTypeChange(e.target.value)}
          size="small"
        >
          <MenuItem value="multipleChoice">Multiple Choice</MenuItem>
          <MenuItem value="wordCompletion">Complete the Word</MenuItem>
          <MenuItem value="articles">Articles</MenuItem>
        </Select>
      </FormControl>
      {!currentExercise && (
        <Button
          variant="contained"
          onClick={generateNewExercise}
          sx={{
            bgcolor: '#a78bfa',
            '&:hover': { bgcolor: 'primary.actionBlue' },
          }}
        >
          Start Exercise
        </Button>
      )}
    </Stack>
  </Stack>
);
export default ExerciseHeader;
