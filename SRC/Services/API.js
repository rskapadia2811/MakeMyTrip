import axios from 'axios';
const baseURL = 'http://localhost:3001';
const API = (method = {GET: String}, url = {}, data = {}, headers = {}) => {
  const newURL = baseURL + url;
  switch (method) {
    case 'GET': {
      return axios
        .get(newURL, {})
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    case 'POST': {
      return axios
        .post(newURL, data, headers)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    case 'PUT': {
    }
    case 'DELETE': {
      return axios
        .delete(newURL, {})
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    case 'PATCH': {
      return axios
        .patch(newURL, data)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
  }
};
export default API;
