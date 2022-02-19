import React from 'react';
import Wrapper from './HeaderStyles';
import memories from './memories.png';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <p>Memories</p>
          <img src={memories} alt="logo" />
        </div>
        <nav>
          <Link to="posts">Posts</Link>
        </nav>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Header;
