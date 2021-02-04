import axios from 'axios';

export const fetchCart = (cart) => {
    return axios.post('/api/carts', cart)
}