import React from 'react';
import Wrapper from './GridStyles';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Grid = () => {
  return (
    <Wrapper>
      <Posts />
      <Form />
    </Wrapper>
  );
};

export default Grid;
