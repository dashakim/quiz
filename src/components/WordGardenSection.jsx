import { Box, Button, Card, CardContent, Grid2, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const WordGardenSection = () => {
  const [plants] = useState([
    { word: 'Serendipity', growth: 60, type: '🌸', category: 'Nouns', lastWatered: '2h ago' },
    { word: 'Ephemeral', growth: 30, type: '🌿', category: 'Adjectives', lastWatered: '1d ago' },
    { word: 'Eloquent', growth: 90, type: '🌺', category: 'Adjectives', lastWatered: '5h ago' },
  ]);
  return (
    <Box>
      <Grid2 container spacing={3}>
        {plants.map((plant, index) => (
          <Grid2 item xs={12} size={4} key={index}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4">{plant.type}</Typography>
                    <Typography color="text.secondary">{plant.lastWatered}</Typography>
                  </Stack>
                  <Typography variant="h6">{plant.word}</Typography>
                  <Typography color="text.secondary">{plant.category}</Typography>
                  <Box sx={{ bgcolor: 'grey.200', height: 8 }}>
                    <Box
                      sx={{
                        width: `${plant.growth}%`,
                        bgcolor: 'success.main',
                        height: '100%',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Button variant="outlined" sx={{ borderRadius: 28 }}>
                    💧 Water Plant
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default WordGardenSection;
