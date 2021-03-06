import React, { Component } from 'react';
import axios from 'axios';

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

    axios
      .get('https://localhost:3000/grabUsers')
      .then((res) => console.log('HERE IS YOUR DATA:', res.data))
      .catch((err) => console.error('there was a problem', err));
  }

  addUserInfo() {
    console.log('button clicked');
    //axios call

    axios
      .post('https://locahost:3000/addUsers', { firstName: this.state.name })
      .then(() => console.log('Successful post'));
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
