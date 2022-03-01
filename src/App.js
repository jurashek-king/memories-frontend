import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Gird/Grid';
import GlobalStyle from './GlobalStyles';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPostForm from './components/EditPostForm/EditPostForm';
import SignInForm from './components/SignInForm/SignInForm';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='posts' element={<Grid />} />
          <Route path='posts/:postId' element={<EditPostForm />} />
          <Route path='signin' element={<SignInForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
