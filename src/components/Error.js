import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Error = ({ err }) => {
  return (
    <Box minHeight="1.5rem">
      {err && (
        <Typography color="error" variant="caption">
          Empty!
        </Typography>
      )}
    </Box>
  );
};

export default Error;
