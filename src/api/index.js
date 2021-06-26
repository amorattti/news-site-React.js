import axios from 'axios';

const URL = 'http://localhost:3001';

export const getPosts = async() => {
  try {
    const response = await axios.get(`${URL}/posts`);

    return {
      posts: response.data
    }
  } catch (error) {
    return error
  }
}