import { Alert, Box, Card, Stack, Typography } from '@mui/material';
import { grammarRules } from '../../exercisePatterns';
import React from 'react';

const ExerciseHelp = ({ currentExercise, exerciseType, showHelp }) => {
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
  if (!currentExercise || !showHelp) {
    return null;
  }

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

export default ExerciseHelp;
