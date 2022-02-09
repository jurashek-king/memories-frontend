const url = 'http://localhost:8000/posts';

export const fetchPosts = async () => {
  const fetched = await (await fetch(url)).json();
  return fetched;
}
export const createPost = async (newPost) => {
  console.log(newPost);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  return response
}