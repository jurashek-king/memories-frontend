import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../redux/postsSlice';
import { defaultImage } from '../../defaultPicture';
import { StyledForm } from './FormStyles';

const Form = () => {
  
  const dispatch = useDispatch();
  const image = defaultImage();
  const initialState = {
    author: '',
    title: '',
    tags: '',
    message: '',
    selectedFiles: image,
  };

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
    <StyledForm
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
    </StyledForm>
  );
};

export default Form;
