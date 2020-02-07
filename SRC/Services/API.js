import axios from 'axios';
const API = (method = {GET: String}, url = {}, data = {}, headers = {}) => {
  switch (method) {
    case 'GET': {
      return axios
        .get(url, {})
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    case 'POST': {
      return axios
        .post(url, data, headers)
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
        .delete(url, {})
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    case 'PATCH': {
      return axios
        .patch(url, data)
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
