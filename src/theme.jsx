import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto,  sans-serif', // Set global font to Segoe UI with fallbacks
    h1: {
      fontFamily: 'Roboto, sans-serif', // Optional: Customize h1 font
      fontWeight: 700, // Bold weight
    },
    h3: {
      fontFamily: 'Roboto, sans-serif', // Optional: Customize h3 font
      fontWeight: 600, // Semi-bold weight for h3 (headers)
    },
    body1: {
      fontFamily: 'Roboto, sans-serif', // Optional: Customize body font
    },
  },
  palette: {
    background: {
      default: '#000000', // Global background color
    },
    primary: {
      main: '#ffffff', // Primary color (e.g., for AppBar)
    },
    text: {
      primary: '#ffffff', // Global text color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variant: 'outlined',
          textTransform: 'none', // Preserves the original case (no uppercase)
          fontWeight: 600, // Semi-bold text
          borderRadius: '12px', // Make the button more rounded
          fontSize: '18px', // Increase font size
          padding: '6px 20px', // Adjust padding for bigger buttons
          border: '1px solid #ffffff', // Add a white border to all buttons
        },
      },
    },
  },
});

export default theme;
