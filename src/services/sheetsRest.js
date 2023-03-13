//import axios from 'axios';
import { API_KEY } from '@/variables/constants';
export const getList = (path) =>
  window.gapi.client.request({
    path: path,
    method: 'GET',
    params: { key: API_KEY },
  });

export const updateList = (path) =>
  window.gapi.client.request({
    path: path,
    method: 'POST',
    params: {
      valueInputOption: 'USER_ENTERED',
    },
    body: {
      values: [['6', 'New value 1', 'New value 2', 'New value 3']],
    },
  });
