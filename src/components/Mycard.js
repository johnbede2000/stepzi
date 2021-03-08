import React from 'react';
import { Box } from '@material-ui/core';
import Vertical from './Vertical';

const Mycard = ({ children }) => {
  return (
    <Box
      style={{
        backgroundColor: '#fff',
        border: '1px solid #dadce0',
        borderRadius: '8px',
        padding: '16px',
        wordWrap: 'break-word',
      }}
    >
      <Vertical>{children}</Vertical>
    </Box>
  );
};

export default Mycard;
