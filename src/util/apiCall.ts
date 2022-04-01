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
      AcessToken: '2053a5adeaa63061dae8422e980d2b7b911e7adaf22e7383ae31168039c007e2',
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