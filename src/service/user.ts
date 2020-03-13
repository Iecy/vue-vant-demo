import axios from 'axios';
import { UserLoginFormInterface } from '@/store/interfaces';

export const UserService = {
  login(user: UserLoginFormInterface) {
    return axios.get('/api/login', { params: user });
  },
  loginOut() {
    return axios.get('/api/loginOut');
  },
};

