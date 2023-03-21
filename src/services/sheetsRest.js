//import axios from 'axios';
import { API_KEY } from '@/variables/constants';

export const getList = (args) => {
 return  window.gapi.client.request({
    path: args.path,
    method: 'GET',
    params: { key: API_KEY },
  })};

export const updateList = (args) => {
  const convertedPath = `${args.path}!A7:D7:append`;
 return window.gapi.client.request({
    path: convertedPath,
    method: 'POST',
    params: {
      valueInputOption: 'USER_ENTERED'
    },
    body: {
      // range: 'db_rand!A7:D7',
      values: args.values,
    },
  })};
