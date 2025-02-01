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
        light: 'inset 0 0 8px rgba(0, 0, 0, 0.15)',
        dark: 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      },
      image: 'none',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            borderRadius: 2,
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
        default: '#676767',
        paper: '#494949',
        gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        card: '#515151',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
    },
    shape: {
      borderRadius: 2,
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
            borderRadius: 1,
            backgroundColor: '#2d2d2d',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 5,
            textTransform: 'none',
            fontWeight: 500,
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
  geometric: {
    palette: {
      mode: 'light',
      primary: {
        main: '#6366F1',
        light: '#818CF8',
        dark: '#4F46E5',
      },
      background: {
        default: '#F8FAFC',
        paper: '#FFFFFF',
        gradient: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        card: '#FFFFFF',
      },
      text: {
        primary: '#1E293B',
        secondary: '#64748B',
      },
    },
    shape: {
      borderRadius: 6,
      borderRadiusMultipliers: {
        card: 2,
        button: 3,
        selectionButton: 2,
        listItem: 1.5,
        hintBox: 2,
        image: 1.5,
      },
    },
    typography: {
      fontFamily: '"Space Grotesk", "Roboto", "Helvetica", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 600,
      },
      button: {
        fontWeight: 500,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            position: 'relative',
            overflow: 'visible',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -8,
              left: -8,
              right: -8,
              bottom: -8,
              background: 'linear-gradient(45deg, #6366F1 0%, #818CF8 100%)',
              borderRadius: 'inherit',
              opacity: 0.1,
              zIndex: -1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: 40,
              height: 40,
              top: -20,
              right: -20,
              background: '#6366F1',
              borderRadius: '0 50% 50% 50%',
              transform: 'rotate(45deg)',
              opacity: 0.2,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpolygon points='0,0 2,0 2,2 0,2'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.5,
            },
          }),
          contained: {
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          },
        },
      },
    },
    customShadows: {
      card: '0 20px 40px rgba(99, 102, 241, 0.1)',
      button: '0 4px 12px rgba(99, 102, 241, 0.2)',
      hintBox: {
        light: 'inset 2px 2px 5px rgba(99, 102, 241, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.8)',
        dark: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.1)',
      },
      image: '0 12px 24px rgba(99, 102, 241, 0.15)',
    },
  },
  languageHub: {
    palette: {
      mode: 'light',
      primary: {
        main: '#4588f6',
        light: '#6780ff',
        dark: '#4588f6',
        green: '#2dc866',
        lightGreen: '#ddfbe8',
        lightBlue: '#ddebff',
        actionBlue: '#4588f6',
        magenta: '#ac5df7',
      },
      secondary: {
        main: '#10B981',
        light: '#34D399',
        dark: '#059669',
      },
      success: {
        main: '#10B981',
        light: '#6EE7B7',
        dark: '#059669',
      },
      background: {
        default: '#F8FAFC',
        paper: '#FFFFFF',
        gradient: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
        card: '#FFFFFF',
        accent: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
      },
      text: {
        primary: '#1E293B',
        secondary: '#64748B',
      },
      learning: {
        beginner: '#4ADE80',
        intermediate: '#3B82F6',
        advanced: '#8B5CF6',
        card: {
          practice: '#F0FDF4',
          garden: '#F0F9FF',
          time: '#FDF4FF',
          kitchen: '#FFF7ED',
        },
        icons: {
          practice: '#22C55E',
          garden: '#0EA5E9',
          time: '#D946EF',
          kitchen: '#F97316',
        },
      },
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      h1: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h4: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h6: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontWeight: 500,
        letterSpacing: '-0.01em',
      },
      button: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontWeight: 500,
        textTransform: 'none',
      },
      overline: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
    },
    shape: {
      borderRadius: 3,
      borderRadiusMultipliers: {
        card: 1.5,
        button: 1.25,
        pill: 3,
        circle: 100,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            // boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.06)',
            // transition: 'all 0.3s ease-in-out',
            '&:hover': {
              // transform: 'translateY(-4px)',
              // boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.08)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 20px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            boxShadow: '0px 4px 12px rgba(124, 58, 237, 0.15)',
            '&:hover': {
              boxShadow: '0px 8px 16px rgba(124, 58, 237, 0.2)',
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            minWidth: 120,
            '&.Mui-selected': {
              color: '#144697',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
            '&.level-beginner': {
              backgroundColor: '#F0FDF4',
              color: '#22C55E',
            },
            '&.level-intermediate': {
              backgroundColor: '#EFF6FF',
              color: '#3B82F6',
            },
            '&.level-advanced': {
              backgroundColor: '#F5F3FF',
              color: '#8B5CF6',
            },
          },
        },
      },
    },
    customShadows: {
      card: '0px 4px 25px rgba(0, 0, 0, 0.06)',
      cardHover: '0px 12px 30px rgba(0, 0, 0, 0.08)',
      button: '0px 4px 12px rgba(124, 58, 237, 0.15)',
      buttonHover: '0px 8px 16px rgba(124, 58, 237, 0.2)',
      level: {
        beginner: '0px 4px 12px rgba(34, 197, 94, 0.15)',
        intermediate: '0px 4px 12px rgba(59, 130, 246, 0.15)',
        advanced: '0px 4px 12px rgba(139, 92, 246, 0.15)',
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
  geometric: createTheme(getDesignTokens().geometric),
  languageHub: createTheme(getDesignTokens().languageHub),
};
