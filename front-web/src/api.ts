import axios from "axios";

const API_URL = 'https://leandro-alves-sds2.herokuapp.com';
//const API_URL = 'http://localhost:8080';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}
