import React from 'react';
import Wrapper from './PostStyles';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faTrashCan,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { deletePostById } from '../postsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

  const dispatch = useDispatch();
  const timeStamp = `${formatDistanceToNow(parseISO(post.createdAt))} ago`;
  const tags = post.tags[0].split(',').map((tag) => `#${tag.trim()}`);

  const handleDelete = () => {
    dispatch(deletePostById(post._id));
  };

  return (
    <Wrapper image={post.selectedFiles}>
      <div id="overview">
        <p id="author">{post.author}</p>
        <p id="timestamp">{timeStamp}</p>
        <Link to={`${post._id}`} >
          <FontAwesomeIcon icon={faEllipsis} size='xl'/>
        </Link>
      </div>
      <p id="tags">{tags.map((tag) => `${tag} `)}</p>
      <p id="title">{post.title.toUpperCase()}</p>
      <div id="excerpt">{post.message.substring(0, 60)} ...</div>

      <div className="post-footer">
        <button type="button">
          <FontAwesomeIcon className="icon" icon={faThumbsUp} />
          LIKE
        </button>
        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon className="icon" icon={faTrashCan} />
          DELETE
        </button>
      </div>
    </Wrapper>
  );
};

export default Post;
