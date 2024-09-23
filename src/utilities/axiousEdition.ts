import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/v1',
  withCredentials: true, // Always send cookies with requests
});

export default axiosInstance;