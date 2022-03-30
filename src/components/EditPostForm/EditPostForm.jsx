import React from 'react';
import Wrapper from './EditPostFormStyles';
import FileBase from 'react-file-base64';
import { useParams, useNavigate } from 'react-router-dom';
import { selectById, updatePostById } from '../../redux/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => selectById(state, postId));
  const [isEnabled, setIsEnabled] = useState(true);
  const [memory, setMemory] = useState({
    author: post.author,
    title: post.title,
    tags: post.tags,
    message: post.message,
    selectedFiles: post.selectedFiles,
  });

  const handleChange = (event) => {
    setMemory({ ...memory, [event.target.id]: event.target.value });
  };
  const handleDone = ({ base64 }) => {
    setMemory({ ...memory, selectedFiles: base64 });
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    dispatch(updatePostById({postId: postId, updatedPost: memory}));
    navigate('../posts');
  }

  const handleEdit = () => setIsEnabled(prevState => !prevState);

  return (
    <Wrapper id="editMemory" noValidate autoComplete="off">
        <p>Edit memory</p>
        <img src={memory.selectedFiles} alt="" />
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Author"
          value={memory.author}
          onChange={handleChange}
          disabled={isEnabled}
        />
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={memory.title}
          onChange={handleChange}
          disabled={isEnabled}
        />
        <input
          id="tags"
          name="tags"
          type="text"
          placeholder="Tags"
          value={memory.tags}
          onChange={handleChange}
          disabled={isEnabled}
        />
        <textarea
          id="message"
          name="message"
          required
          form="editMemory"
          placeholder="Your memory..."
          value={memory.message}
          onChange={handleChange}
          disabled={isEnabled}
        ></textarea>
        <FileBase type="file" multiple={false} onDone={handleDone} />
        <div id="buttons">
          <button type="button" onClick={handleEdit}>Edit</button>
          <button type="submit" onClick={handleSubmit}>Save</button>
        </div>
    </Wrapper>
  );
};

export default EditPostForm;
