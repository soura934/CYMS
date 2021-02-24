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
  debugger
  return axios.delete(`/api/comments/${commentId}`);
};

export const fetchProductComments = (product_id) => {
  
  return axios.get(`/api/comments/product/${product_id}`);
};