const apiName = 'jukeapi';
const path =
  'https://y7wzv5d7yc.execute-api.us-east-1.amazonaws.com/dev/grabUsers';
const myInit = {
  // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {
    // OPTIONAL
    name: 'param',
  },
};

API.get(apiName, path, myInit)
  .then((response) => {
    // Add your code here
    console.log('HERE IS THE DATA:', response.data);
  })
  .catch((error) => {
    console.log(error.response);
  });
