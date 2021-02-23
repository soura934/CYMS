import axios from 'axios';

export const createCart = (cart) => {
  
    return axios.post(`/api/carts`, cart)
};

export const fetchUserCart = user => {
  return axios.get(`/api/carts/${user}`) 
}


export const deleteCartItem = product => {
    return axios.delete(`/api/cart/${product}`)
};