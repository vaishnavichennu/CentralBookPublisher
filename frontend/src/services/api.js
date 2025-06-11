// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api', //  backend URL 
// })

// // Attach token to each request 
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// export default api

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

//attaching JWT from local on every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
