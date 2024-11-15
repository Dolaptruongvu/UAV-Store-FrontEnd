import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://uav-store-backend.onrender.com/api/v1',
  withCredentials: true, // Always send cookies with requests
});

export default axiosInstance;