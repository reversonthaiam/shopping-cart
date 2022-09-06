import axios from 'axios'

//const baseUrl = 'http://localhost:3000/api/transactions';
const ProdUrl =
  'https://my-json-server.typicode.com/reversonthaiam/shopping-cart/'

export const api = axios.create({
  baseURL: ProdUrl,
})
