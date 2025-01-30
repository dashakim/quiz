import { Box, Card, CardContent, Grid2, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const WordKitchenSection = () => {
  const [recipes] = useState([
    {
      name: 'Prefix Soup',
      ingredients: ['pre-', 'un-', 'dis-'],
      baseWord: 'connect',
      combinations: ['preconnect', 'unconnect', 'disconnect'],
    },
  ]);
  return (
    <Box>
      {recipes.map((recipe, index) => (
        <Card key={index}>
          <CardContent>
            <Grid2 container spacing={3}>
              <Grid2 item xs={12} size={4}>
                <Typography variant="h6" gutterBottom>
                  Ingredients
                </Typography>
                <Stack spacing={1}>
                  {recipe.ingredients.map((ingredient, i) => (
                    <Card key={i} variant="outlined" sx={{ bgcolor: 'warning.light', p: 1 }}>
                      <Typography>{ingredient}</Typography>
                    </Card>
                  ))}
                  <Card variant="outlined" sx={{ bgcolor: 'success.light', p: 1 }}>
                    <Typography>Base: {recipe.baseWord}</Typography>
                  </Card>
                </Stack>
              </Grid2>
              <Grid2 item xs={12} size={8}>
                <Typography variant="h6" gutterBottom>
                  Combinations
                </Typography>
                <Grid2 container spacing={2}>
                  {recipe.combinations.map((combo, i) => (
                    <Grid2 item size={4} key={i}>
                      <Card variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                        <Typography>{combo}</Typography>
                      </Card>
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
export default WordKitchenSection;
