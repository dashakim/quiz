import React, { useState, useCallback } from 'react';

import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        backgroundColor: 'white',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
              }}
            >
              About
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
              }}
            >
              Contact
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              order: { xs: -1, sm: 0 },
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            © {currentYear} Portuguese Practice. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
