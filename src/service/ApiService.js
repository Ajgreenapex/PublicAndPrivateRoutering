// improt axios
import axios from "axios";

//function for hit get request
export const POST_API = async (url, data) => {
  return await axios.post(url, data);
};
