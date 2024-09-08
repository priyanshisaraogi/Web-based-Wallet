import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/header';
import HomePage from './pages/HomePage';  // Import HomePage

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomePage /> 
    </ThemeProvider>
  );
}

export default App;
