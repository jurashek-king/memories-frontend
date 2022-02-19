import React from 'react';
import Post from './Post/Post';
import Wrapper from './PostsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import { selectAllPosts, fetchAll } from './postsSlice';
import { useEffect } from 'react';


const Posts = () => {
  const dispatch = useDispatch();
  const OvalSpinner = <Oval type="Oval" height="200" width="200" color="Blue"/>;
  const postsStatus = useSelector(state => state.posts.status);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchAll());
    }
  }, [postsStatus, dispatch])

  let content;

  if (postsStatus === 'loading') {
    content = OvalSpinner
  } else if (postsStatus === 'succeeded') {
    content = posts.map(post => (
        <Post key={post._id} post={post} />
    ))
  } else if (postsStatus === 'failed') {
    content = <div>Error occured</div>
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
};

export default Posts;
