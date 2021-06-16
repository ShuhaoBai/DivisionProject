import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchWpPost = async () => {
  const url = 'wp-json/wp/v2/posts';
  try {
    const fetchedWpPostData = await axios.get(`${url}`);
    const { data } = fetchedWpPostData;
    return data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};
