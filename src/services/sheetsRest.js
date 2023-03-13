//import axios from 'axios';
import { API_KEY } from '@/variables/constants';
export const getList = (path) =>
  window.gapi.client.request({
    path: path,
    method: 'GET',
    params: { key: API_KEY },
  });

export const updateList = (path) =>
  //const suffics = '/db_rand!A7:D7:append';
  //console.log('updateList: >>> ', );
  window.gapi.client.request({
    path: "https://sheets.googleapis.com/v4/spreadsheets/1b9HuDKyFU6mxDqzjmY9l0Q249br5J1DjK0b3Z9TokGw/values/db_rand!A7:D7:append",
    method: 'POST',
    headers: {
      Authorization: 'Bearer'  + window.gapi.auth.getToken().access_token,
      'Content-Type': 'application/json',
    },
    body: {
      range: 'db_rand!A7:D7',
      values: [['6', 'New value 1', 'New value 2', 'New value 3']],
    },
  });
