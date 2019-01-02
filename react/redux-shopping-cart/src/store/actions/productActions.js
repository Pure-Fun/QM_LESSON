import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

const productAPI = "https://react-shopping-cart-67954.firebaseio.com/products.json";

export const fetchProducts = () => dispatch => {
  axios
  .get(productAPI)
  .then(res => {
    let { products } = ress.data;
    return dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    });
  })
  .catch(err => {
    console.log(err);
    throw new Error("try again later");
  })
}