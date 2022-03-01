import React from 'react';
import Wrapper from './HeaderStyles';
import memories from './memories.png';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Link to="posts">
            <p>Memories</p>
          </Link>
          <img src={memories} alt="logo" />
        </div>

        <Link id="signin" to="signin">
          Sign In
        </Link>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Header;
