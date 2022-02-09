import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Gird/Grid';
import GlobalStyle from './GlobalStyles';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Grid />
    </>
  );
}

export default App;
