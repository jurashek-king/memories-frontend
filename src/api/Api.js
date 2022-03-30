const url = 'http://localhost:8000';

export const fetchPosts = async () => {
  const response = await (await fetch(`${url}/posts`)).json();
  return response;
};
export const createPost = async (newPost) => {
  const response = await fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return await response.json();
};

export const deletePost = async (postId) => {
  const response = await fetch(`${url}/posts/${postId}`, { method: 'DELETE' });
  return (await response.json()).id;
};

export const updatePost = async ({ postId, updatedPost }) => {
  let response = await fetch(`${url}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  });

  response = await response.json();

  return {
    id: postId,
    changes: { ...response },
  };
};

export const likePost = async (postId) => {
  let response = await fetch(`${url}/posts/${postId}/likePost`, {
    method: 'PATCH',
  });

  response = await response.json();

  return {
    id: postId,
    changes: { ...response },
  };
};

export const registerUser = async (newUser) => {
  console.log(newUser);
  let response = await fetch(`${url}/users/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  response = await response.json()
  console.log(response);
  return;
};
