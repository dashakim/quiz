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

    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 800,
      },
      h4: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 700,
      },
      h6: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
      },
      button: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
      },
    },
    customShadows: {
      card: '0 8px 32px rgba(0,0,0,0.1)',
      button: '0 4px 6px rgba(52, 152, 219, 0.2)',
      hintBox: {
        light: 'inset 5px 5px 10px #d1d4d6, inset -5px -5px 10px #ffffff',
        dark: 'inset 5px 5px 10px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.05)',
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
      customShadows: {
        card: 'none',
        button: 'none',
        hintBox: {
          light: 'none',
          dark: 'none',
        },
        image: 'none',
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
    customShadows: {
      card: 'none',
      button: 'none',
      hintBox: {
        light: 'none',
        dark: 'none',
      },
      image: 'none',
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
    customShadows: {
      card: 'none',
      button: 'none',
      hintBox: {
        light: 'none',
        dark: 'none',
      },
      image: 'none',
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
    customShadows: {
      card: 'none',
      button: 'none',
      hintBox: {
        light: 'none',
        dark: 'none',
      },
      image: 'none',
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
  handwritten: {
    palette: {
      mode: 'light',
      primary: {
        main: '#2D3436',
        light: '#636E72',
        dark: '#1E272E',
      },
      background: {
        default: '#FDF6E3',
        paper: '#FFEAA7',
        gradient: 'linear-gradient(135deg, #FDF6E3 0%, #FFEAA7 100%)',
        card: '#FFEAA7',
      },
      text: {
        primary: '#2D3436',
        secondary: '#636E72',
      },
    },
    typography: {
      fontFamily: '"Comic Sans MS", "Patrick Hand", cursive',
      h1: {
        fontFamily: '"Permanent Marker", cursive',
        fontWeight: 400,
        letterSpacing: '0.5px',
      },
      h4: {
        fontFamily: '"Permanent Marker", cursive',
        fontWeight: 400,
      },
      h6: {
        fontFamily: '"Comic Sans MS", "Patrick Hand", cursive',
        fontWeight: 400,
      },
      button: {
        fontFamily: '"Comic Sans MS", "Patrick Hand", cursive',
        fontWeight: 400,
        letterSpacing: '0.5px',
      },
      overline: {
        fontFamily: '"Permanent Marker", cursive',
        textTransform: 'none',
      },
    },
    customShadows: {
      card: '2px 2px 0 #2D3436',
      button: '1px 1px 0 #2D3436',
      hintBox: {
        light: 'none',
        dark: 'none',
      },
      image: '3px 3px 0 #2D3436',
    },
    shape: {
      borderRadius: 3,
      borderRadiusMultipliers: {
        card: 2,
        button: 4,
        selectionButton: 3,
        listItem: 1,
        hintBox: 2,
        image: 1,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: '2px solid #2D3436',
            borderStyle: 'dashed',
            background: 'repeating-linear-gradient(#FFEAA7 0px, #FFEAA7 24px, #B2BEC3 25px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            border: '2px solid #2D3436',
            borderStyle: 'dashed',
            textTransform: 'none',
            fontFamily: 'Comic Sans MS, cursive',
            fontWeight: 400,
          },
          contained: {
            background: '#FFEAA7',
            '&:hover': {
              background: '#FAD390',
            },
          },
        },
      },
    },
  },

  vista: {
    palette: {
      mode: 'light',
      primary: {
        main: '#0063B1',
        light: '#2B88D8',
        dark: '#004E8C',
      },
      typography: {
        fontFamily: '"Segoe UI", "Tahoma", "Arial", sans-serif',
        h1: {
          fontFamily: '"Segoe UI Light", "Tahoma", "Arial", sans-serif',
          fontWeight: 300,
        },
        h4: {
          fontFamily: '"Segoe UI", "Tahoma", "Arial", sans-serif',
          fontWeight: 600,
        },
        h6: {
          fontFamily: '"Segoe UI", "Tahoma", "Arial", sans-serif',
          fontWeight: 600,
        },
        button: {
          fontFamily: '"Segoe UI", "Tahoma", "Arial", sans-serif',
          fontWeight: 400,
        },
      },
      background: {
        default: '#ECF4FB',
        paper: '#FFFFFF',
        gradient: 'linear-gradient(180deg, #FFFFFF 0%, #ECF4FB 100%)',
        card: '#FFFFFF',
      },
      text: {
        primary: '#1F1F1F',
        secondary: '#6D6D6D',
      },
    },
    customShadows: {
      card: '2px 2px 10px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
      button: 'inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
      hintBox: {
        light: 'inset 0 0 8px rgba(0, 0, 0, 0.15)',
        dark: 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      },
      image: '0 0 15px rgba(123, 167, 225, 0.3)',
    },
    shape: {
      borderRadius: 6,
      borderRadiusMultipliers: {
        card: 5,
        button: 3,
        selectionButton: 4,
        listItem: 2,
        hintBox: 3,
        image: 2,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(180deg, #FFFFFF 0%, #ECF4FB 100%)',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
            border: '1px solid #7BA7E1',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
          contained: {
            background: 'linear-gradient(180deg, #E8F0F8 0%, #ACC5E9 45%, #7BA7E1 46%, #4C85C5 100%)',
            border: '1px solid #003C74',
            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
            '&:hover': {
              background: 'linear-gradient(180deg, #ECF4FB 0%, #B9D1F0 45%, #88B4E8 46%, #5992CC 100%)',
            },
          },
        },
      },
    },
  },

  robot: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#00FF9D',
        light: '#64FFBA',
        dark: '#00CC7D',
      },
      typography: {
        fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
        h1: {
          fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
          fontWeight: 400,
          letterSpacing: '2px',
        },
        h4: {
          fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
          fontWeight: 400,
          letterSpacing: '1px',
        },
        h6: {
          fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
          letterSpacing: '1px',
        },
        button: {
          fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
          letterSpacing: '2px',
        },
        overline: {
          fontFamily: '"Share Tech Mono", "Roboto Mono", monospace',
          letterSpacing: '4px',
        },
      },
      background: {
        default: '#0A192F',
        paper: '#112240',
        gradient: 'linear-gradient(135deg, #0A192F 0%, #112240 100%)',
        card: '#112240',
      },
      text: {
        primary: '#E6F1FF',
        secondary: '#8892B0',
      },
    },
    customShadows: {
      card: '0 0 20px rgba(0, 255, 157, 0.2)',
      button: '0 0 10px rgba(0, 255, 157, 0.2)',
      hintBox: {
        light: 'inset 0 0 20px rgba(0, 255, 157, 0.1)',
        dark: 'inset 0 0 20px rgba(0, 255, 157, 0.05)',
      },
      image: '0 0 30px rgba(0, 255, 157, 0.15)',
    },
    shape: {
      borderRadius: 2,
      borderRadiusMultipliers: {
        card: 1,
        button: 1,
        selectionButton: 1,
        listItem: 1,
        hintBox: 1,
        image: 1,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid #00FF9D',
            boxShadow: '0 0 20px rgba(0, 255, 157, 0.2)',
            background: 'linear-gradient(45deg, #112240 0%, #1A3C6E 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #00FF9D, transparent)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'uppercase',
            fontFamily: 'Share Tech Mono, monospace',
            letterSpacing: '2px',
            border: '1px solid #00FF9D',
          },
          contained: {
            background: 'transparent',
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)',
            '&:hover': {
              background: 'rgba(0, 255, 157, 0.1)',
              boxShadow: '0 0 20px rgba(0, 255, 157, 0.4)',
            },
          },
        },
      },
    },
  },

  retro: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#FF00FF',
        light: '#FF33FF',
        dark: '#CC00CC',
      },

      typography: {
        fontFamily: '"Press Start 2P", "VT323", monospace',
        fontSize: 14, // Smaller base size due to the pixel font
        h1: {
          fontFamily: '"Press Start 2P", "VT323", monospace',
          fontSize: '2rem',
          lineHeight: 1.4,
        },
        h4: {
          fontFamily: '"Press Start 2P", "VT323", monospace',
          fontSize: '1.5rem',
          lineHeight: 1.4,
        },
        h6: {
          fontFamily: '"Press Start 2P", "VT323", monospace',
          fontSize: '1rem',
          lineHeight: 1.4,
        },
        button: {
          fontFamily: '"Press Start 2P", "VT323", monospace',
          fontSize: '0.875rem',
          lineHeight: 1.4,
        },
        overline: {
          fontFamily: '"Press Start 2P", "VT323", monospace',
          fontSize: '0.75rem',
          lineHeight: 1.4,
        },
      },
      background: {
        default: '#000033',
        paper: '#000066',
        gradient: 'linear-gradient(135deg, #000033 0%, #000066 100%)',
        card: '#000066',
      },
      text: {
        primary: '#00FF00',
        secondary: '#00CC00',
      },
    },
    customShadows: {
      card: '5px 5px 0 #FF00FF',
      button: '3px 3px 0 #FF00FF',
      hintBox: {
        light: 'inset 3px 3px 0 #00FF00',
        dark: 'inset 3px 3px 0 #00CC00',
      },
      image: '4px 4px 0 #FF00FF',
    },
    shape: {
      borderRadius: 0,
      borderRadiusMultipliers: {
        card: 0,
        button: 0,
        selectionButton: 0,
        listItem: 0,
        hintBox: 0,
        image: 0,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            border: '2px solid #FF00FF',
            boxShadow: '5px 5px 0 #FF00FF',
            background: '#000066',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '4px',
              left: '4px',
              right: '4px',
              bottom: '4px',
              border: '2px solid #00FF00',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'uppercase',
            fontFamily: 'Press Start 2P, cursive',
            border: '2px solid #FF00FF',
          },
          contained: {
            background: '#000066',
            boxShadow: '3px 3px 0 #FF00FF',
            '&:hover': {
              background: '#000099',
              transform: 'translate(-2px, -2px)',
              boxShadow: '5px 5px 0 #FF00FF',
            },
            '&:active': {
              transform: 'translate(0, 0)',
              boxShadow: '0 0 0 #FF00FF',
            },
          },
        },
      },
    },
  },

  minimal: {
    palette: {
      mode: 'light',
      primary: {
        main: '#000000',
        light: '#333333',
        dark: '#000000',
      },

      typography: {
        fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
        h1: {
          fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
          fontWeight: 300,
          letterSpacing: '-0.5px',
        },
        h4: {
          fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
          fontWeight: 400,
          letterSpacing: '-0.25px',
        },
        h6: {
          fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
          fontWeight: 500,
        },
        button: {
          fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
          fontWeight: 500,
          textTransform: 'none',
        },
      },
      background: {
        default: '#FFFFFF',
        paper: '#FFFFFF',
        gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
        card: '#FFFFFF',
      },
      text: {
        primary: '#000000',
        secondary: '#666666',
      },
    },
    customShadows: {
      card: 'none',
      button: 'none',
      hintBox: {
        light: 'none',
        dark: 'none',
      },
      image: 'none',
    },
    shape: {
      borderRadius: 0,
      borderRadiusMultipliers: {
        card: 0,
        button: 0,
        selectionButton: 0,
        listItem: 0,
        hintBox: 0,
        image: 0,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: '1px solid #000000',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 400,
            border: '1px solid #000000',
          },
          contained: {
            backgroundColor: '#FFFFFF',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#000000',
              color: '#FFFFFF',
            },
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
  handwritten: createTheme(getDesignTokens().handwritten),
  vista: createTheme(getDesignTokens().vista),
  robot: createTheme(getDesignTokens().robot),
  retro: createTheme(getDesignTokens().retro),
  minimal: createTheme(getDesignTokens().minimal),
};
