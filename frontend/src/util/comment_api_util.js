import axios from 'axios';

export const fetchComments = () => {
  return axios.get(`/api/comments/`);
};

export const fetchComment = (commentId) => {
  return axios.get(`/api/comments/${commentId}`, commentId);
};

export const createComment = (comment) => {
  
  return axios.post(`/api/comments/`, comment);
};

export const deleteComment = (commentId) => {
  return axios.delete(`/api/comments/${commentId}`, commentId);
};

export const fetchProductComments = (product_id) => {
  debugger
  return axios.get(`/api/comments/product/${product_id}`);
};