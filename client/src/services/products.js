import axios from "axios";

const baseUrl = '/api/products';

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const add = async (newProduct) => {
  try {
    const response = await axios.post(baseUrl, newProduct);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const edit = async (id, editedProduct) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, editedProduct);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const remove = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
    return true
  } catch (err) {
    console.error(err);
  }
}

export const validProduct = (product) => {
  return product.price.match(/^\d+(\.\d{2})?$/) &&
    product.quantity.match(/^\d+$/)
}

export default {
  getAll,
  add,
  edit,
  remove,
}