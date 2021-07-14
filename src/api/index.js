import axios from 'axios';

const URL = 'http://localhost:3001';

export const getPostsApi = async (prevState, page = 1, order = "asc", limit = "10") => {

  try {
    const response = await axios.get(`${URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

    return {
      posts: prevState.posts ? [...prevState.posts, ...response.data] : response.data,
      page: page,
      end: response.data.length === 0 ? true : false
    }
  } catch (error) {
    throw error;
  }
}

export const addNewsLetterApi = async (data) => {
  try {
    const findUser = await axios.get(`${URL}/newsletter?email=${data.email}`);

    if (!Array.isArray(findUser.data) || !findUser.data.length) {
      // add user
      console.log(data)
      const response = await axios.post(`${URL}/newsletter`, { ...data });

      return {
        newsletter: 'added',
        email: response.data
      }

    } else {
      // alreadu on the db
      return {
        newsletter: 'failed'
      }
    }

  } catch (error) {
    throw error;
  }
}

export const getPostByIdApi = async (id) => {
  try {
    const response = await axios.get(`${URL}/posts/${id}`)
    return response.data;
  } catch (error) {
    return '404'
  }
}

export const sendMessageApi = async (data) => {
  try {
    await axios.post(`${URL}/contact`, { ...data });
    return true
  } catch (error) {
    return false
  }
}