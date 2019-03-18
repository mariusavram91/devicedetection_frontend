import React, { Component } from 'react';

import Info from './Info.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      error: null
    };

    this.detectDevice = this.detectDevice.bind(this);
  }

  detectDevice() {
    const endpoint = `${process.env.REACT_APP_API_URL}/device_info`;

    fetch(endpoint)
      .then(results=>results.json())
      .then(info=>this.setState({info}))
      .catch(error=>this.setState({error}));
  }

  render() {
    const {info, error } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Device Detector</h1>

        <div>
          <p>Click to check what type of device and what OS you are using.</p>
          <button type="button" onClick={this.detectDevice}>
            Detect Device
          </button>
        </div>

        {error && <p className="App__error">Error: {error.message}</p>}

        {info && <Info info={info} />}
      </div>
    );
  }
}

export default App;
