import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  Grid2,
  useTheme,
  Tab,
  Tabs,
  alpha,
} from '@mui/material';
import { Home, School, Park, History, Restaurant, Translate } from '@mui/icons-material';
import PortuguesePractice from './PortuguesePractice';
import WordKitchenSection from './WordKitchenSection';
import TimeMachineSection from './TimeMachineSection';
import WordGardenSection from './WordGardenSection';

const categories = [
  { name: 'Daily Routines', icon: '🌅', description: 'Master everyday conversations and common situations' },
  { name: 'Travel', icon: '✈️', description: 'Learn essential phrases for your journey' },
  { name: 'Food & Dining', icon: '🍽️', description: 'Explore culinary vocabulary and restaurant phrases' },
  { name: 'Business', icon: '💼', description: 'Professional language for work environments' },
];

const LanguageButton = ({ isActive, onClick, lang, flag }) => {
  const theme = useTheme();

  return (
    <Button
      variant={isActive ? 'contained' : 'outlined'}
      onClick={onClick}
      startIcon={<Typography component="span">{flag}</Typography>}
      sx={{
        borderRadius: '16px',
        background: isActive
          ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
          : alpha(theme.palette.background.paper, 0.6),
        color: isActive ? 'common.white' : 'text.primary',
        border: 'none',
        px: 3,
        py: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: isActive
            ? `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`
            : `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
          background: isActive
            ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
            : alpha(theme.palette.background.paper, 0.8),
        },
      }}
    >
      {lang}
    </Button>
  );
};

const LearningHub = () => {
  const theme = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState('portuguese');
  const [activeTab, setActiveTab] = useState(0);
  const [practiceMode] = useState('generate');

  const tabIcons = [
    <School sx={{ mr: 1 }} />,
    <Park sx={{ mr: 1 }} />,
    <History sx={{ mr: 1 }} />,
    <Restaurant sx={{ mr: 1 }} />,
  ];

  return (
    <Box
      sx={{
        bgcolor: alpha(theme.palette.background.paper, 0.6),
        minHeight: '100vh',
        py: 4,
        px: { xs: 2, sm: 4 },
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          zIndex: 0,
        }}
      />
      <Card
        elevation={0}
        sx={{
          mb: 4,
          background: alpha(theme.palette.background.paper, 0.8),
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: 'white',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  },
                }}
              >
                <Home />
              </IconButton>
              <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                Learning Hub
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <LanguageButton
                isActive={currentLanguage === 'portuguese'}
                onClick={() => setCurrentLanguage('portuguese')}
                lang="PT"
                flag="🇧🇷"
              />
              <LanguageButton
                isActive={currentLanguage === 'english'}
                onClick={() => setCurrentLanguage('english')}
                lang="EN"
                flag="🇬🇧"
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        sx={{
          mb: 4,
          '& .MuiTab-root': {
            minHeight: 60,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
          },
          '& .Mui-selected': {
            color: theme.palette.primary.main,
          },
          '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: '3px 3px 0 0',
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          },
        }}
      >
        {['Practice', 'Word Garden', 'Time Machine', 'Word Kitchen'].map((label, index) => (
          <Tab key={label} icon={tabIcons[index]} label={label} iconPosition="start" />
        ))}
      </Tabs>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {activeTab === 0 && (
          <Stack spacing={4}>
            {practiceMode === 'generate' ? (
              <PortuguesePractice />
            ) : (
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                }}
              >
                <Stack alignItems="center" spacing={2}>
                  <Translate sx={{ fontSize: 48, color: theme.palette.primary.main }} />
                  <Typography variant="h6">Conversation Practice Mode</Typography>
                  <Typography color="text.secondary">Interactive conversation practice coming soon</Typography>
                </Stack>
              </Card>
            )}
            <Grid2 container spacing={3}>
              {categories.map(({ name, icon, description }) => (
                <Grid2 size={{ xs: 12, sm: 6 }} key={name}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      },
                    }}
                  >
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography variant="h3" sx={{ mb: 1, fontSize: '2rem' }}>
                          {icon}
                        </Typography>
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {description}
                        </Typography>
                      </Stack>
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
    </Box>
  );
};

export default LearningHub;
