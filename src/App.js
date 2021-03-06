import React from 'react';
import { CssBaseline, Container, Box } from '@material-ui/core';
import ParentSpecific from './components/ParentSpecific';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box py={2.5}>
          <ParentSpecific />
        </Box>
      </Container>
    </>
  );
}

export default App;
