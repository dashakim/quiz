import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  IconButton,
  Stack,
  Grid2,
  useTheme,
  Fab,
  Tab,
  Tabs,
  Chip,
} from '@mui/material';
import { Mic } from '@mui/icons-material';

const LearningHub = () => {
  const theme = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState('portuguese');
  const [activeTab, setActiveTab] = useState(0);
  const [practiceMode, setPracticeMode] = useState('generate');
  const [generatedSentence, setGeneratedSentence] = useState('');
  const [practiceHistory] = useState([
    {
      date: 'Today',
      sessions: [
        { type: 'Generated Practice', sentences: 15, accuracy: 85 },
        { type: 'Conversation', duration: '10min', topics: ['Daily Routine', 'Hobbies'] },
      ],
    },
  ]);
  const [plants] = useState([
    { word: 'Serendipity', growth: 60, type: '🌸', category: 'Nouns', lastWatered: '2h ago' },
    { word: 'Ephemeral', growth: 30, type: '🌿', category: 'Adjectives', lastWatered: '1d ago' },
    { word: 'Eloquent', growth: 90, type: '🌺', category: 'Adjectives', lastWatered: '5h ago' },
  ]);

  const [timelineEvents] = useState([
    { year: 1969, event: 'Moon Landing', words: ['astronaut', 'spacecraft', 'lunar'], mastered: true },
    { year: 1876, event: 'Telephone Invented', words: ['communicate', 'invention', 'voice'], mastered: false },
  ]);

  const [recipes] = useState([
    {
      name: 'Prefix Soup',
      ingredients: ['pre-', 'un-', 'dis-'],
      baseWord: 'connect',
      combinations: ['preconnect', 'unconnect', 'disconnect'],
    },
  ]);

  const sentencePatterns = {
    portuguese: [
      {
        pattern: 'Eu gosto de [activity] no/na [place]',
        variables: {
          activity: ['nadar', 'correr', 'ler', 'caminhar'],
          place: ['praia', 'parque', 'biblioteca', 'cidade'],
        },
      },
      {
        pattern: 'Todo [timeOfDay] eu [action] [object]',
        variables: {
          timeOfDay: ['dia', 'tarde', 'noite'],
          action: ['como', 'bebo', 'preparo'],
          object: ['frutas', 'água', 'café'],
        },
      },
    ],
    english: [],
  };

  const generateSentence = () => {
    const patterns = sentencePatterns[currentLanguage];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    let sentence = pattern.pattern;
    for (const [key, values] of Object.entries(pattern.variables)) {
      const value = values[Math.floor(Math.random() * values.length)];
      sentence = sentence.replace(`[${key}]`, value);
    }
    setGeneratedSentence(sentence);
  };

  const WordGardenSection = () => (
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

  const TimeMachineSection = () => (
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

  const WordKitchenSection = () => (
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

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 2, px: 2, m: 3, position: 'relative' }}>
      {/* Language Switcher */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>🏠</IconButton>
            <Stack direction="row" spacing={1}>
              <Button
                variant={currentLanguage === 'portuguese' ? 'contained' : 'outlined'}
                onClick={() => setCurrentLanguage('portuguese')}
                startIcon="🇧🇷"
                sx={{
                  borderRadius: '24px',
                  bgcolor: currentLanguage === 'portuguese' ? 'primary.green' : 'grey.100',
                  color: currentLanguage === 'portuguese' ? 'common.white' : 'text.primary',
                  border: 'none',
                  '&:hover': {
                    bgcolor: currentLanguage === 'portuguese' ? 'primary.green' : 'grey.200',
                    border: 'none',
                  },
                }}
              >
                PT
              </Button>
              <Button
                variant={currentLanguage === 'english' ? 'contained' : 'outlined'}
                onClick={() => setCurrentLanguage('english')}
                startIcon="🇬🇧"
                sx={{
                  borderRadius: '24px',
                  bgcolor: currentLanguage === 'english' ? 'primary.green' : 'grey.100',
                  color: currentLanguage === 'english' ? 'common.white' : 'text.primary',
                  border: 'none',
                  '&:hover': {
                    bgcolor: currentLanguage === 'english' ? 'primary.green' : 'grey.200',
                    border: 'none',
                  },
                }}
              >
                EN
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 3, m: 3 }}>
        <Tab label="Practice" />
        <Tab label="Word Garden" />
        <Tab label="Time Machine" />
        <Tab label="Word Kitchen" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && (
          <Stack spacing={2} sx={{ mb: 33 }}>
            <Card>
              <CardHeader
                title={
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Practice Generator 🎯</Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant={practiceMode === 'generate' ? 'contained' : 'outlined'}
                        onClick={() => setPracticeMode('generate')}
                        size="small"
                        sx={{
                          borderRadius: '24px',
                          bgcolor: practiceMode === 'conversation' ? 'primary.actionBlue' : 'grey.100',
                          color: practiceMode === 'conversation' ? 'common.white' : 'text.primary',
                        }}
                      >
                        Generate
                      </Button>
                      <Button
                        variant={practiceMode === 'conversation' ? 'contained' : 'outlined'}
                        onClick={() => setPracticeMode('conversation')}
                        size="small"
                        sx={{
                          borderRadius: '24px',
                          bgcolor: practiceMode === 'conversation' ? 'grey.100' : 'primary.actionBlue',
                          color: practiceMode === 'conversation' ? 'text.primary' : 'common.white',
                        }}
                      >
                        Conversation
                      </Button>
                    </Stack>
                  </Stack>
                }
              />

              <Stack spacing={4}>
                {practiceMode === 'generate' ? (
                  <Stack spacing={4}>
                    <Card
                      sx={{
                        bgcolor: 'grey.50',
                        boxShadow: 0,
                        p: 4,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {generatedSentence || 'Eu gosto de nadar no/na praia\n'}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Button
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 28,
                            fontSize: '0.875rem',
                            bgcolor: 'primary.lightGreen',
                            color: 'primary.green',
                            '&:hover': {
                              bgcolor: 'primary.lightGreen',
                            },
                          }}
                        >
                          Show Translation
                        </Button>
                        <Button
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 8,
                            fontSize: '0.875rem',
                            bgcolor: 'primary.lightBlue',
                            color: 'primary.actionBlue',
                            '&:hover': {
                              bgcolor: 'primary.lightBlue',
                            },
                          }}
                        >
                          Practice Speaking
                        </Button>
                      </Stack>
                    </Card>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        marginLeft: 5,
                        paddingBottom: 2,
                        paddingLeft: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={generateSentence}
                        sx={{
                          bgcolor: 'primary.actionBlue',
                          color: 'common.white',
                          '&:hover': {
                            bgcolor: 'primary.actionBlue',
                          },
                        }}
                      >
                        Generate New Sentence
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: 'primary.magenta',
                          color: 'common.white',
                          '&:hover': {
                            bgcolor: 'primary.magenta',
                          },
                        }}
                      >
                        Save to Practice List
                      </Button>
                    </Stack>
                  </Stack>
                ) : (
                  <Card
                    variant="outlined"
                    sx={{
                      bgcolor: 'grey.50',
                      p: 4,
                      textAlign: 'center',
                    }}
                  >
                    <Typography color="text.secondary">Conversation practice mode would appear here</Typography>
                  </Card>
                )}
              </Stack>
            </Card>

            <Card
              sx={{
                m: 2,
                p: 4,
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
                        mb: 2,
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
            <Grid2 container spacing={2}>
              {['Daily Routines', 'Travel', 'Food & Dining', 'Business'].map((category) => (
                <Grid2 item xs={12} size={6} key={category}>
                  <Card sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.50' } }}>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        {category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Practice common phrases and vocabulary
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Stack>
        )}

        {activeTab === 1 && <WordGardenSection />}
        {activeTab === 2 && <TimeMachineSection />}
        {activeTab === 3 && <WordKitchenSection />}
      </Box>
      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          top: 840,
          right: 16,
          height: '55px',
          borderRadius: 48,
          bgcolor: 'primary.green',
          color: 'common.white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          '& .MuiSvgIcon-root': {
            color: 'primary.dark',
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Mic sx={{ color: 'primary.dark' }} />
          <Typography color="common.white">Start Speaking Practice</Typography>
        </Stack>
      </Button>
    </Box>
  );
};

export default LearningHub;
