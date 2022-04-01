import axios from 'axios';
import { stringify } from 'query-string';

type TParams = {
  [x: string]: any;
};

function apiCall() {
  const apiConfig = axios.create({
    baseURL: "https://gorest.co.in/public/v2",
    headers: {
      Accept: 'application/json, text/plain, */*',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
      Expires: '-1',
    },
    paramsSerializer: params => {
      return stringify(params);
    },
  });

  apiConfig.interceptors.response.use(res => res, function(err) {
    return Promise.reject(err);
  });

  return {
    async get(path: string, params?: TParams) {
      const response = await apiConfig.request({
        method: 'GET',
        url: path,
        params,
        responseType: 'json',
      });
      return await Promise.resolve(response?.data);
    },

    async post(path: string, params?: TParams) {
      const response = await apiConfig.request({
        method: 'POST',
        url: path,
        data: params,
        responseType: 'json',
      });
      return await Promise.resolve(response?.data);
    }
  }
}
export default apiCall;