import { Box, Card, CardContent, Chip, Grid2, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const TimeMachineSection = () => {
  const [timelineEvents] = useState([
    { year: 1969, event: 'Moon Landing', words: ['astronaut', 'spacecraft', 'lunar'], mastered: true },
    { year: 1876, event: 'Telephone Invented', words: ['communicate', 'invention', 'voice'], mastered: false },
  ]);
  return (
    <Box>
      <Grid2 container spacing={3}>
        {timelineEvents.map((event, index) => (
          <Grid2 item size={12} key={index}>
            <Card sx={{ bgcolor: event.mastered ? 'success.light' : 'background.paper' }}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h4">{event.year}</Typography>
                  <Typography variant="h6">{event.event}</Typography>
                  <Stack direction="row" spacing={1}>
                    {event.words.map((word, wIndex) => (
                      <Chip key={wIndex} label={word} />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default TimeMachineSection;
