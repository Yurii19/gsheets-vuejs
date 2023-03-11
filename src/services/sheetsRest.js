//import axios from 'axios';
import { API_KEY } from '@/variables/constants';
export const getList = (path) =>
  window.gapi.client.request({
    path: path,
    method: 'GET',
    params: { key: API_KEY },
  });
