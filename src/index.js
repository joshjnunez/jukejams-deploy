import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { API } from 'aws-amplify';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: [],
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
    this.grabUserInfo = this.grabUserInfo.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  grabUserInfo() {
    console.log('button clicked');
    const apiName = 'jukeapi';
    const path =
      'https://y7wzv5d7yc.execute-api.us-east-1.amazonaws.com/dev/grabUsers';
    const myInit = {
      // OPTIONAL
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the  entire Axios response object instead of only response.data)
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

    // axios
    //   .get(
    //     'https://y7wzv5d7yc.execute-api.us-east-1.amazonaws.com/dev/grabUsers'
    //   )
    //   .then((res) => console.log('HERE IS YOUR DATA:', res.data))
    //   .catch((err) => console.error('there was a problem', err));
  }

  addUserInfo() {
    console.log('button clicked');
    //axios call

    const apiName = 'jukeapi';
    const path =
      'https://y7wzv5d7yc.execute-api.us-east-1.amazonaws.com/dev/addUsers';
    const myInit = {
      // OPTIONAL
      body: { name: 'Josh' },
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {
        // OPTIONAL
        name: 'param',
      },
    };

    API.post(apiName, path, myInit)
      .then((response) => {
        // Add your code here
        console.log('HERE IS THE DATA:', response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    // axios
    //   .post(
    //     'https://y7wzv5d7yc.execute-api.us-east-1.amazonaws.com/dev/addUsers',
    //     { firstName: this.state.name }
    //   )
    //   .then(() => console.log('Successful post'));
  }

  render() {
    return (
      <div>
        <h1>Welcome to Juke Jams</h1>
        <h2>HEYYYYYYYYY</h2>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.addUserInfo()}>Submit</button>

        <button onClick={() => this.grabUserInfo()}>Get Names</button>
      </div>
    );
  }
}

export default Index;
