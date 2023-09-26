import axios from 'axios';

const BASE_URL = 'https://assignment.dev.buttercorp.kr/api/v1';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token;

  return config;
});

export default api;

export const memberAPI = {
  // 회원가입
  signup: (
    userId: string,
    password: string,
    userName: string,
    email: string,
    mobile: string,
  ) =>
    api.post(`/assignment/sign-up`, {
      userId: userId,
      password: password,
      userName: userName,
      email: email,
      mobile: mobile,
    }),
  // 로그인
  signin: (userId: string, password: string) =>
    api.post(`/assignment/sign-in`, {
      id: userId,
      password: password,
    }),
  // 로그아웃
  signout: () => api.post(`/assignment/sign-out`),
};
