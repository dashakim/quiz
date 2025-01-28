import { createTheme } from '@mui/material';

const getDesignTokens = (mode) => ({
  default: {
    palette: {
      mode: 'light',
      primary: {
        main: '#3498db',
        light: '#5dade2',
        dark: '#2980b9',
      },
      background: {
        default: '#f6f8fb',
        paper: '#ffffff',
        gradient: 'linear-gradient(135deg, #f6f8fb 0%, #e9eef5 100%)',
        card: '#ffffff',
      },
      text: {
        primary: '#2c3e50',
        secondary: '#7f8c8d',
      },
    },
    shape: {
      borderRadius: 5,
      borderRadiusMultipliers: {
        card: 7.75,
        button: 33,
        selectionButton: 6.25,
        listItem: 2,
        hintBox: 3.75,
        image: 1.5,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            borderRadius: 216,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 85,
            textTransform: 'none',
            fontWeight: 600,
          },
          contained: {
            boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(52, 152, 219, 0.08)',
            },
          },
        },
      },
    },
  },

  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
        light: '#b3dafb',
        dark: '#6fa8dc',
      },
      background: {
        default: '#1a1a1a',
        paper: '#2d2d2d',
        gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        card: '#2d2d2d',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
    },
    shape: {
      borderRadius: 4,
      borderRadiusMultipliers: {
        card: 7.75,
        button: 33,
        selectionButton: 6.25,
        listItem: 2,
        hintBox: 3.75,
        image: 1.5,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            borderRadius: 16,
            backgroundColor: '#2d2d2d',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 35,
            textTransform: 'none',
            fontWeight: 600,
          },
          contained: {
            boxShadow: '0 4px 6px rgba(144, 202, 249, 0.2)',
          },
        },
      },
    },
  },

  nature: {
    palette: {
      mode: 'light',
      primary: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
      },
      background: {
        default: '#f1f8e9',
        paper: '#ffffff',
        gradient: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
        card: '#ffffff',
      },
      success: {
        main: '#81c784',
      },
    },
    shape: {
      borderRadius: 4,
      borderRadiusMultipliers: {
        card: 7.75,
        button: 33,
        selectionButton: 6.25,
        listItem: 2,
        hintBox: 3.75,
        image: 1.5,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px rgba(76, 175, 80, 0.1)',
            borderRadius: 24,
            '&:hover': {
              boxShadow: '0 12px 48px rgba(76, 175, 80, 0.2)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            textTransform: 'none',
            fontWeight: 600,
          },
          contained: {
            boxShadow: '0 4px 6px rgba(76, 175, 80, 0.2)',
          },
        },
      },
    },
  },

  sunset: {
    palette: {
      mode: 'light',
      primary: {
        main: '#ff7043',
        light: '#ff8a65',
        dark: '#f4511e',
      },
      background: {
        default: '#fff3e0',
        paper: '#ffffff',
        gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
        card: '#ffffff',
      },
      error: {
        main: '#ff5722',
      },
    },
    shape: {
      borderRadius: 5,
      borderRadiusMultipliers: {
        card: 7.75,
        button: 33,
        selectionButton: 6.25,
        listItem: 2,
        hintBox: 3.75,
        image: 1.5,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px rgba(255, 112, 67, 0.1)',
            borderRadius: 5,
            '&:hover': {
              boxShadow: '0 12px 48px rgba(255, 112, 67, 0.2)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 35,
            textTransform: 'none',
            fontWeight: 600,
          },
          contained: {
            background: 'linear-gradient(45deg, #ff7043 30%, #ff8a65 90%)',
            boxShadow: '0 4px 6px rgba(255, 112, 67, 0.2)',
          },
        },
      },
    },
  },
});

export const themes = {
  default: createTheme(getDesignTokens().default),
  dark: createTheme(getDesignTokens().dark),
  nature: createTheme(getDesignTokens().nature),
  sunset: createTheme(getDesignTokens().sunset),
};
