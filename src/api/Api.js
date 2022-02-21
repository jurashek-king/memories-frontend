const url = 'http://localhost:8000/posts';

export const fetchPosts = async () => {
  const response = await (await fetch(url)).json();
  return response;
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

export const updatePost = async ({postId, updatedPost}) => {

  let response = await fetch(`${url}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  });

  response = await response.json();
  
  return {
    id: postId,
    changes: {...response}
  }
};
