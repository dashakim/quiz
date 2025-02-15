import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography, Box } from '@mui/material';

const ExerciseHeader = ({
  selectedLevel,
  exerciseType,
  handleLevelChange,
  handleExerciseTypeChange,
  currentExercise,
  generateNewExercise,
}) => (
  <Box
    sx={{
      width: '100%',
      minHeight: '56px',
      mb: 2,
      position: 'relative',
      zIndex: 1,
    }}
  >
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      spacing={2}
      sx={{
        width: '100%',
        minHeight: 'inherit',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          minWidth: 'max-content',
          pt: { xs: 1, sm: 0 },
        }}
      >
        Practice Generator
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          width: { xs: '100%', sm: 'auto' },
          minHeight: 'inherit',
        }}
      >
        <FormControl
          sx={{
            minWidth: 120,
            width: { xs: '100%', sm: 200 },
          }}
        >
          <InputLabel
            sx={{
              backgroundColor: 'background.paper',
              px: 0.5,
            }}
          >
            Level
          </InputLabel>
          <Select
            value={selectedLevel}
            label="Level"
            onChange={(e) => handleLevelChange(e.target.value)}
            size="small"
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              sx: { zIndex: 1300 },
            }}
          >
            <MenuItem value="A1">A1 (Basic)</MenuItem>
            <MenuItem value="A2">A2 (Elementary)</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            minWidth: 150,
            width: { xs: '100%', sm: 200 },
          }}
        >
          <InputLabel
            sx={{
              backgroundColor: 'background.paper',
              px: 0.5,
            }}
          >
            Exercise Type
          </InputLabel>
          <Select
            value={exerciseType}
            label="Exercise Type"
            onChange={(e) => handleExerciseTypeChange(e.target.value)}
            size="small"
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              sx: { zIndex: 1300 },
            }}
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
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '120px' },
            }}
          >
            Start Exercise
          </Button>
        )}
      </Stack>
    </Stack>
  </Box>
);

export default ExerciseHeader;
