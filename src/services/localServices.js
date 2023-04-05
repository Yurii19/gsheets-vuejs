export const getId = (args) => {
  const ids = args.srcRow.map((row) => row[0]);
  // for
  console.log('getId: ', ids);
};

// export function getCredentials() {
//   const theToken = window.gapi.client.getToken();
//   return window.gapi.client.request({
//     path: 'https://www.googleapis.com/userinfo/v2/me',
//     headers: {
//       Authorization: 'Bearer ' + theToken.access_token,
//     },
//   });
// }
