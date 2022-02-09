import React from 'react';
import Wrapper from './PostStyles';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
  const timeStamp = `${formatDistanceToNow(parseISO(post.createdAt))} ago`;
  const tags = post.tags[0].split(',').map((tag) => `#${tag.trim()}`);

  return (
    <Wrapper image={post.selectedFiles}>
      <div id="overview">
        <p id="author">{post.author}</p>
        <p id="timestamp">{timeStamp}</p>
      </div>
      <p id="tags">{tags.map((tag) => `${tag} `)}</p>
      <p id="title">{post.title.toUpperCase()}</p>
      <div id="excerpt">{post.message.substring(0, 60)} ...</div>
      {/* <p id="excerpt">{post.message}</p> */}
      <div className="post-footer">
        <button>
          <FontAwesomeIcon className="icon" icon={faThumbsUp} />
          LIKE
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faTrashCan} />
          DELETE
        </button>
      </div>
    </Wrapper>
  );
};

export default Post;
