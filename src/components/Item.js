import React from 'react';
import { Box } from '@material-ui/core';

const Item = ({ text }) => {
  return (
    <Box
      p="8px"
      bgcolor="success.main"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="8px"
    >
      {text}
    </Box>
  );
};

export default Item;
