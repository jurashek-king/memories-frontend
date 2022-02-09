import React from 'react';
import Wrapper from './HeaderStyles';
import memories from './memories.png'

const Header = () => {
  return (
    <Wrapper>
      <p>Memories</p>
      <img src={memories} alt="logo" />
    </Wrapper>
  );
};

export default Header;
