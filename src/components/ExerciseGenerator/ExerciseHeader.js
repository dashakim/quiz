import React from 'react';
import { Box, Button, FormControl, MenuItem, Select, Stack, Typography, useTheme, alpha } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ExerciseHeader = ({
  selectedLevel,
  exerciseType,
  handleLevelChange,
  handleExerciseTypeChange,
  currentExercise,
  generateNewExercise,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '56px',
        mb: 2,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.15)})`,
          filter: 'blur(40px)',
          top: -50,
          left: -50,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${alpha(theme.palette.secondary.main, 0.15)}, ${alpha(theme.palette.primary.main, 0.15)})`,
          filter: 'blur(40px)',
          bottom: -50,
          right: -50,
        }}
      />

      {/* Content */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={3}
        sx={{
          position: 'relative',
          width: '100%',
          p: 3,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
            }}
          >
            <PsychologyIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                background: `-webkit-linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              Practice Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Select your preferences below
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <FormControl
            sx={{
              minWidth: { xs: '100%', sm: 200 },
            }}
          >
            <Select
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
              size="small"
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha(theme.palette.divider, 0.2),
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <MenuItem value="A1">A1 (Basic)</MenuItem>
              <MenuItem value="A2">A2 (Elementary)</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              minWidth: { xs: '100%', sm: 200 },
            }}
          >
            <Select
              value={exerciseType}
              onChange={(e) => handleExerciseTypeChange(e.target.value)}
              size="small"
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha(theme.palette.divider, 0.2),
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                },
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
              endIcon={<AutoAwesomeIcon />}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
                width: { xs: '100%', sm: 'auto' },
                minWidth: { sm: '140px' },
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: 'translateY(-1px)',
                  boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Start Exercise
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExerciseHeader;
