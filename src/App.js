import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Gird/Grid';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import GlobalStyle from './GlobalStyles';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getPosts } from './actions/posts';
import EditPostForm from './components/EditPostForm/EditPostForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />}>
          {/* <Route path='posts' element={<><Posts /><Form /></>} /> */}
          <Route path='posts' element={<Grid />} />
          <Route path='posts/:postId' element={<EditPostForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
