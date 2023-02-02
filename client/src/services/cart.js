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

const add = async (productId) => {
  try {
    const response = await axios.post(`${baseUrl}/add-to-cart`, { productId });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const checkout = async () => {
  try {
    await axios.post(`${baseUrl}/checkout`);
  } catch (err) {
    console.error(err);
  }
}

export default {
  getAll,
  add,
  checkout
}