// improt axios
import axios from "axios";

//function for hit get request
export const POST_API = async (url, data) => {
  return await axios.post(url, data);
};
export const GET_API = async (url, headers) => {
  return await axios.get(url, { headers: headers });
};
