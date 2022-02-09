import React from 'react';
import Post from './Post/Post';
import Wrapper from './PostsStyles';
import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner';


const Posts = () => {
  
  const OvalSpinner = <Oval type="Oval" height="200" width="200" color="Blue"/>
  
  const posts = useSelector((state) => {
    return state.posts;
  });

  console.log(posts);
  return (
    <Wrapper>
      {!posts.length ? OvalSpinner : posts.map(post => (
        <Post key={post._id} post={post}/>
      ))}
    </Wrapper>
  );
};

export default Posts;
