import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeaderVideo = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/learning-hub');
  };
  return (
    <Box
      sx={{
        position: 'relative',
        height: '90vh',
        width: '100%',
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/title3.mp4" type="video/mp4" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontFamily: 'Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '-0.1em',
            fontWeight: 'bold',
            mb: 3,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Memorify
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            fontWeight: 400,
            maxWidth: '800px',
            mb: 4,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          Enhance your learning journey with advanced memory techniques
        </Typography>
        <Button
          onClick={handleGetStarted}
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#f1f5f9',
            color: '#334155',
            textTransform: 'none',
            borderRadius: '12px',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              bgcolor: '#e2e8f0',
              boxShadow: 'none',
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeaderVideo;
