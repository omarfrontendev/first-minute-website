import axios from "axios";
// import Cookies from "js-cookie";
import config from "./config";

const instance = axios.create({
  baseURL: config.REACT_APP_API_URL,
  timeout: 50000,
  headers: {
    Accept: "*",
  },
});

// Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   let token;

//   if (Cookies.get("token")) {
//     token = Cookies.get("token");
//   }

//   return {
//     ...config,
//     headers: {
//       authorization: token ? `Bearer ${token}` : null,
//     },
//   };
// });

const responseBody = (response) => response.data;

const api = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),


  post: (url, body, headers) => instance.post(url, body, headers).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body, headers) =>
    instance.patch(url, body, headers).then(responseBody),

  delete: (url, body, headers) =>
    instance.delete(url, body, headers).then(responseBody),
};

export default api;
