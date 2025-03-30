import { alpha } from '@mui/material/styles';

export const gradientBackground = {
  background: 'linear-gradient(135deg, #1E1E2E 0%, #2D2B55 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(123, 97, 255, 0.1) 0%, rgba(123, 97, 255, 0) 50%)',
    pointerEvents: 'none',
  },
};

export const glassCard = {
  borderRadius: { xs: 2, sm: 3 },
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(123, 97, 255, 0.05) 0%, rgba(123, 97, 255, 0) 100%)',
    pointerEvents: 'none',
  },
};

export const gradientText = {
  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const gradientButton = (theme) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: 2,
  textTransform: 'none',
  fontWeight: 500,
  boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    transform: 'translateY(-1px)',
    boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
  },
  transition: 'all 0.2s ease-in-out',
}); 