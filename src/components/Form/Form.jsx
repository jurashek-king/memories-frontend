import React, { useState } from 'react';
import Wrapper from './FormStyles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../Posts/postsSlice';
import { defaultImage } from '../../defaultPicture';

const Form = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const image = defaultImage();
  const initialState = {
    author: '',
    title: '',
    tags: '',
    message: '',
    selectedFiles: image,
  }


  const [postData, setPostData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addNewPost(postData));
    setPostData(initialState);
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
      <p>Memories</p>
      <input
        id="author"
        value={postData.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        id="title"
        value={postData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        id="tags"
        value={postData.tags}
        onChange={handleChange}
        placeholder="Tags"
      />
      <textarea
        id="message"
        form="createMemory"
        name="message"
        required
        placeholder="Enter your memory here"
        value={postData.message}
        onChange={handleChange}
      ></textarea>
      <FileBase type="file" multiple={false} onDone={handleDone} />
      <button type="submit">Submit</button>
    </Wrapper>
  );
};

export default Form;
