const url = 'http://localhost:8000/posts';

export const fetchPosts = async () => {
  const fetched = await (await fetch(url)).json();
  return fetched;
};
export const createPost = async (newPost) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return await response.json();
};

export const deletePost = async (postId) => {
  const response = await fetch(`${url}/${postId}`, { method: 'DELETE' });
  return (await response.json()).id;
};

export const updatePost = async (args) => {
  const {postId} = args;
  const {updatedPost} = args;
  console.log(postId, updatedPost);
  let response = await fetch(`${url}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  });
  response = await response.json();
  console.log(response);
  return {
    id: postId,
    changes: {...response}
  }
};
