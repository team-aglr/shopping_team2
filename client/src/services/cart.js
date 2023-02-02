import axios from "axios";

const baseUrl = "/api";

const getAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}/cart`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default {
  getAll,
}