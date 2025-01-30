import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';

const PracticeHistory = () => {
  const [practiceHistory] = useState([
    {
      date: 'Today',
      sessions: [
        { type: 'Generated Practice', sentences: 15, accuracy: 85 },
        { type: 'Conversation', duration: '10min', topics: ['Daily Routine', 'Hobbies'] },
      ],
    },
  ]);
  return (
    <Card
      sx={{
        my: 2,
        px: 1,
      }}
    >
      <CardHeader title="Practice History" />
      <CardContent>
        {practiceHistory.map((day, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontWeight: 500,
                color: 'text.secondary',
                mb: 1,
              }}
            >
              {day.date}
            </Typography>
            <Stack spacing={3}>
              {day.sessions.map((session, sIndex) => (
                <Card
                  key={sIndex}
                  variant="outlined"
                  sx={{
                    bgcolor: 'grey.50',
                    p: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>{session.type}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {session.sentences
                        ? `${session.sentences} sentences, ${session.accuracy}% accuracy`
                        : `${session.duration}, Topics: ${session.topics.join(', ')}`}
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 28,
                      fontSize: '0.875rem',
                      bgcolor: 'primary.lightBlue',
                      color: 'primary.actionBlue',
                      '&:hover': {
                        bgcolor: 'primary.lightBlue',
                      },
                    }}
                  >
                    Review
                  </Button>
                </Card>
              ))}
            </Stack>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
export default PracticeHistory;
