import React, { useState } from 'react';
import Wrapper from './FormStyles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {

  const dispatch = useDispatch();
   
  const [postData, setPostData] = useState({
    author: '',
    title: '',
    tags: '',
    message: '',
    selectedFiles: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData))
  };

  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.id]: event.target.value });
  };
  const handleDone = ({ base64 }) => {
    setPostData({ ...postData, selectedFiles: base64 });
  };

  return (
    <Wrapper
      id="createMemory"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <p>Memory</p>
      <input id="author" value={postData.author} onChange={handleChange} placeholder='Author'/>
      <input id="title" value={postData.title} onChange={handleChange} placeholder='Title'/>
      <input id="tags" value={postData.tags} onChange={handleChange} placeholder='Tags'/>
      <textarea
        id="message"
        form="createMemory"
        name="message"
        required
        placeholder="You memory..."
        value={postData.message}
        onChange={handleChange}
      ></textarea>
      <FileBase type="file" multiple={false} onDone={handleDone} />
      <button type="submit">Submit</button>
    </Wrapper>
  );
};

export default Form;
