import axios from 'axios';

export const fetchCart = () => {
    return axios.get('/api/carts')
}