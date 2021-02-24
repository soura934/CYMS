import axios from 'axios';

export const createCart = (cart) => {
  
    return axios.post(`/api/carts`, cart)
};

export const fetchUserCart = userId => {
  return axios.get(`/api/carts/user/${userId}`) 
}


export const deleteCartItem = productId => {
    return axios.delete(`/api/carts/${productId}`)
};