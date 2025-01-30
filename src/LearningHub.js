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
  Zoom,
} from '@mui/material';
import { Mic } from '@mui/icons-material';
import PortuguesePractice from './components/PortuguesePractice';
import WordKitchenSection from './components/WordKitchenSection';
import TimeMachineSection from './components/TimeMachineSection';
import WordGardenSection from './components/WordGardenSection';
import PracticeHistory from './components/PracticeHistory';

const LearningHub = () => {
  const theme = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState('portuguese');
  const [activeTab, setActiveTab] = useState(0);
  const [practiceMode, setPracticeMode] = useState('generate');

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        py: 2,
        px: 2,
        m: 3,
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
      }}
    >
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
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 3, m: 2 }}>
        <Tab label="Practice" />
        <Tab label="Word Garden" />
        <Tab label="Time Machine" />
        <Tab label="Word Kitchen" />
      </Tabs>

      {activeTab === 0 && (
        <Stack sx={{ mb: 3 }}>
          <CardContent>
            {practiceMode === 'generate' ? (
              <PortuguesePractice />
            ) : (
              <Card
                variant="outlined"
                sx={{
                  bgcolor: 'grey.50',
                  p: 4,
                  textAlign: 'center',
                  boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography color="text.secondary">Conversation practice mode would appear here</Typography>
              </Card>
            )}
          </CardContent>
          <PracticeHistory />
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
      <Zoom in={true} timeout={500}>
        <Fab
          variant="extended"
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 32 },
            right: { xs: 16, md: 32 },
            height: 48,
            minWidth: 48,
            transition: '0.3s all',
            boxShadow: (theme) => theme.shadows[4],
            bgcolor: 'primary.green',
            color: 'common.white',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: (theme) => theme.shadows[8],
            },
            '& .MuiSvgIcon-root': {
              color: 'common.white',
              transition: '0.2s all',
            },
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1 }}>
            <Mic
              sx={{
                fontSize: 24,
                transform: 'scale(1)',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              Start Speaking Practice
            </Typography>
          </Stack>
        </Fab>
      </Zoom>
    </Box>
  );
};

export default LearningHub;
