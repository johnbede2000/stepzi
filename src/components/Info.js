import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Typography } from '@material-ui/core';

const Info = ({ text }) => {
  return (
    <Box display="flex">
      <Box flexShrink="0" mr={2}>
        <InfoIcon />
      </Box>
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Info;
