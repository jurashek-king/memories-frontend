import React from 'react';
import Post from './Post/Post';
import Wrapper from './PostsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import { selectAllPosts, fetchAll } from '../../redux/postsSlice';
import { useEffect } from 'react';

const Posts = () => {
  const dispatch = useDispatch();
  const OvalSpinner = (
    <Oval
      type="Oval"
      height="100"
      width="100"
      color="#c1b1f0"
      secondaryColor="blue"
      strokeWidth={3}
    />
  );
  const postsStatus = useSelector((state) => state.posts.status);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchAll());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === 'loading') {
    content = OvalSpinner;
  } else if (postsStatus === 'succeeded') {
    content = posts.map((post) => <Post key={post._id} post={post} />);
  } else if (postsStatus === 'failed') {
    content = <div>Error occured</div>;
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Posts;
