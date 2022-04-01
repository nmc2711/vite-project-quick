import axios from 'axios';

import { TUsers } from '~/types/api/users'

const apiConfig = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    "Content-type": "application/json",
  },
});

const getUsers = async() => {
  const res = await apiConfig.get<TUsers[]>('users');

  return res.data;
}

const apiCall = {
  getUsers,
}

export default apiCall;