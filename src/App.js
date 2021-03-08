import React from 'react';
import { CssBaseline, Container, Box } from '@material-ui/core';
import ParentSpecific from './components/ParentSpecific';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f6f6f6',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box py={3}>
            <ParentSpecific />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
