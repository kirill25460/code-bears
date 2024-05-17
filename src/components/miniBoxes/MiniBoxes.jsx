import React from 'react';
import Laptop from './Laptop';
import Boxes from './Boxes';
import { Container } from '../common/styled';

const MiniBoxes = () => {
  return (
    <>
      <Laptop />
      <Container>
        <Boxes />
      </Container>
    </>
  );
};

export default MiniBoxes;
