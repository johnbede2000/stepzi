import React from 'react';
import {
  CssBaseline,
  Container,
  Box,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core';
import Parent from './pages/Parent';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Container maxWidth="lg">
              <Typography variant="h6">STEPZI</Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box py={4}>
            <Parent />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
