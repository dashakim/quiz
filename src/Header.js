import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Popper,
  Paper,
  Fade,
  alpha,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const MemorifyLogo = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontFamily: 'Arial, sans-serif',
  color: '#494949',
  textTransform: 'uppercase',
  letterSpacing: '-0.1em',
  marginRight: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.9,
  },
}));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [menuAnchors, setMenuAnchors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Learning Hub',
      description: 'Start your learning journey here',
      icon: '🎓',
    },
    {
      title: 'Quiz',
      description: 'Test your knowledge',
      icon: '✍️',
    },
    {
      title: 'Word Management',
      description: 'Manage your vocabulary',
      icon: '📚',
    },
  ];

  const handleMenuHover = (event, key) => {
    setMenuAnchors((prev) => ({
      ...prev,
      [key]: event.currentTarget,
    }));
  };

  const handleMenuClose = (key) => {
    setMenuAnchors((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 1 : 0}
      sx={{
        background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          px: { xs: 2, sm: 4 },
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <MemorifyLogo>Memorify</MemorifyLogo>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {menuItems.map((item) => (
            <Box key={item.title}>
              <Button
                onMouseEnter={(e) => handleMenuHover(e, item.title)}
                onMouseLeave={() => handleMenuClose(item.title)}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  px: 2,
                  '&:hover': {
                    background: 'transparent',
                    color: 'primary.main',
                  },
                }}
              >
                {item.title}
              </Button>
              <Popper
                open={Boolean(menuAnchors[item.title])}
                anchorEl={menuAnchors[item.title]}
                placement="bottom-start"
                transition
                sx={{ zIndex: 1300 }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={200}>
                    <Paper
                      elevation={3}
                      sx={{
                        mt: 1,
                        p: 2,
                        width: 220,
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
            alignItems: 'center',
          }}
        >
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
              sx: {
                bgcolor: alpha('#000', 0.02),
                '&:hover': {
                  bgcolor: alpha('#000', 0.03),
                },
                '& fieldset': {
                  border: 'none',
                },
                borderRadius: 2,
                width: 200,
              },
            }}
          />
          <IconButton>
            <DarkModeIcon />
          </IconButton>
          <Button
            onClick={() => setLoginOpen(true)}
            startIcon={<LoginIcon sx={{ fontSize: 18 }} />}
            sx={{
              bgcolor: '#f1f5f9',
              color: '#334155',
              textTransform: 'none',
              borderRadius: '12px',
              px: 3,
              py: 1,
              fontSize: '0.925rem',
              fontWeight: 500,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#e2e8f0',
                boxShadow: 'none',
              },
            }}
          >
            Sign In
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={(e) => setMobileMenuOpen(e.currentTarget)} sx={{ color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuOpen}
            open={Boolean(mobileMenuOpen)}
            onClose={() => setMobileMenuOpen(null)}
            PaperProps={{
              sx: {
                width: 280,
                mt: 1.5,
                '& .MuiList-root': {
                  py: 1,
                },
              },
            }}
          >
            <Box sx={{ px: 2, pb: 2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                onClick={() => setMobileMenuOpen(null)}
                sx={{
                  py: 1.5,
                  px: 2,
                  '&:hover': {
                    bgcolor: alpha('#000', 0.02),
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span>{item.icon}</span>
                    <Typography variant="subtitle1">{item.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {item.description}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Dialog
          open={loginOpen}
          onClose={() => setLoginOpen(false)}
          PaperProps={{
            sx: {
              borderRadius: 2,
              width: '100%',
              maxWidth: 400,
            },
          }}
        >
          <DialogTitle
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pb: 1,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Welcome Back
            </Typography>
            <IconButton onClick={() => setLoginOpen(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField fullWidth label="Email" variant="outlined" size="medium" />
              <TextField fullWidth label="Password" type="password" variant="outlined" size="medium" />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: 'primary.main',
                  }}
                >
                  Forgot password?
                </Button>
              </Box>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  background: 'linear-gradient(to right, #9333ea, #3b82f6)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(to right, #7e22ce, #2563eb)',
                  },
                }}
              >
                Sign In
              </Button>
              <Box
                sx={{
                  mt: 2,
                  textAlign: 'center',
                  color: 'text.secondary',
                }}
              >
                Don't have an account?{' '}
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </AppBar>
  );
};

export default Header;
