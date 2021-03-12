import React from 'react';
import { Typography } from '@material-ui/core';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';

const End = () => {
  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Conclusion</Typography>
      </Mycard>
    </Vertical>
  );
};

export default End;
