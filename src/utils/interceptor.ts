import axios from 'axios';

export default function(vm: Vue) {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use((response: any) => {
    return response;
  }, (err) => {
    if (err.response.status === 401) {
      vm.$store.dispatch('logout');
      vm.$router.push('/login');
    }
    return Promise.reject(err);
  });
}
