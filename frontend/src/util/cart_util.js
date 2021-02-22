import axios from 'axios';

export const fetchUsersProducts = (userId) => {
    return axios.get(`/api/cart/user/${userId}`)
}

export const createCartItem = (data) => {
    return axios.post("/api/cart/", data)
}