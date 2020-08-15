/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT

Amplify Params - DO NOT EDIT */

var express = require('express');
const path = require('path');
const DIST_DIR = path.join(__dirname, '../dist');
// const { PORT } = process.env;
app.use(express.static(DIST_DIR));
const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.post('/addUsers', async function (req, res) {
  // Assign the location value to the variable location from the body object
  // const { location } = req.body;
  // // Encode the variable so we can send the location in a URL
  // const encodedLocation = encodeURIComponent(location);
  // try {
  //   // Call AWS Secrets to get RapidAPI key
  //   const secretObj = await secret();
  //   // Call the Weather API
  //   const { data } = await axios({
  //     method: 'GET',
  //     url: `https://aerisweather1.p.rapidapi.com/observations/${encodedLocation}`,
  //     headers: {
  //       'content-type': 'application/octet-stream',
  //       'x-rapidapi-host': 'aerisweather1.p.rapidapi.com',
  //       'x-rapidapi-key': secretObj['RAPIDAPI-KEY'],
  //       useQueryString: true,
  //     },
  //   });
  // Pull the information that we need from the Weather API response
  // const weatherData = {
  //   conditions: data.response.ob.weather,
  //   tempC: data.response.ob.tempC,
  //   tempF: data.response.ob.tempF
  // }
  // Return the data object
  return res.send('HELLO WORLD WE DID IT');
});

// app.get('/grabUsers', function (req, res) {
//   // Add your code here
//   res.json('HELLO WORLD');
// });

// app.get('/data/*', function (req, res) {
//   // Add your code here
//   res.json({ success: 'get call succeed!', url: req.url });
// });

// /****************************
//  * Example post method *
//  ****************************/

// app.post('/data', function (req, res) {
//   // Add your code here
//   res.json({ success: 'post call succeed!', url: req.url, body: req.body });
// });

// app.post('/data/*', function (req, res) {
//   // Add your code here
//   res.json({ success: 'post call succeed!', url: req.url, body: req.body });
// });

// /****************************
//  * Example put method *
//  ****************************/

// app.put('/data', function (req, res) {
//   // Add your code here
//   res.json({ success: 'put call succeed!', url: req.url, body: req.body });
// });

// app.put('/data/*', function (req, res) {
//   // Add your code here
//   res.json({ success: 'put call succeed!', url: req.url, body: req.body });
// });

// /****************************
//  * Example delete method *
//  ****************************/

// app.delete('/data', function (req, res) {
//   // Add your code here
//   res.json({ success: 'delete call succeed!', url: req.url });
// });

// app.delete('/data/*', function (req, res) {
//   // Add your code here
//   res.json({ success: 'delete call succeed!', url: req.url });
// });

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
